const express = require("express");
const crypto = require("crypto");
const rateLimit = require("express-rate-limit");

function safe(a, b) {
  const x = Buffer.from(String(a));
  const y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

function esc(v) {
  return String(v ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function createAdminRouter({ pool }) {
  const router = express.Router();

  router.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 120,
    standardHeaders: true,
    legacyHeaders: false
  }));

  router.use(express.urlencoded({ extended: false }));

  router.use((req, res, next) => {
    const auth = req.headers.authorization || "";

    if (!auth.startsWith("Basic ")) {
      res.setHeader("WWW-Authenticate", 'Basic realm="House NFT Admin"');
      return res.sendStatus(401);
    }

    const [user, pass] = Buffer.from(auth.slice(6), "base64")
      .toString()
      .split(":");

    if (
      !safe(user, process.env.ADMIN_USER || "") ||
      !safe(pass, process.env.ADMIN_PASSWORD || "")
    ) {
      res.setHeader("WWW-Authenticate", 'Basic realm="House NFT Admin"');
      return res.sendStatus(401);
    }

    next();
  });

  router.get("/", async (req, res) => {
    const q = String(req.query.q || "").trim().toLowerCase();

    const result = await pool.query(
      `
      SELECT *
      FROM nft_subscriber_registrations
      WHERE
        $1 = ''
        OR LOWER(x_handle) LIKE $2
        OR LOWER(COALESCE(email,'')) LIKE $2
        OR LOWER(xrpl_address) LIKE $2
      ORDER BY registered_at DESC
      LIMIT 500
      `,
      [q, `%${q}%`]
    );

    const rows = result.rows.map(r => `
      <tr>
        <td>${r.id}</td>
        <td><b>${esc(r.x_handle)}</b><br>${esc(r.email || "")}</td>
        <td style="word-break:break-all">${esc(r.xrpl_address)}</td>
        <td>${esc(r.eligible_week)}</td>
        <td>${r.confirmation_email_sent ? "✓" : "—"}</td>
        <td>
          <form method="post" action="/admin/${r.id}">
            <label>
              <input type="checkbox" name="subscription_verified"
                ${r.subscription_verified ? "checked" : ""}>
              𝕏 verified
            </label><br>

            <label>
              <input type="checkbox" name="wallet_verified"
                ${r.wallet_verified ? "checked" : ""}>
              Wallet verified
            </label><br>

            <label>
              <input type="checkbox" name="delivered"
                ${r.delivered ? "checked" : ""}>
              Delivered
            </label><br>

            <select name="status">
              ${["pending","active","inactive","excluded"]
                .map(s => `<option ${r.status === s ? "selected" : ""}>${s}</option>`)
                .join("")}
            </select>

            <button>SAVE</button>
          </form>
        </td>
      </tr>
    `).join("");

    res.send(`
<!doctype html>
<html>
<head>
<meta name="viewport" content="width=device-width">
<title>House NFT Admin</title>
<style>
body{font-family:Arial;background:#111;color:#eee;margin:0;padding:24px}
h1{margin-bottom:4px}
form.search{margin:22px 0}
input,select,button{padding:8px}
button{background:#d6b34c;border:0;font-weight:bold}
table{width:100%;border-collapse:collapse;background:#181818}
th,td{padding:10px;border-bottom:1px solid #333;text-align:left;vertical-align:top}
th{color:#aaa}
a{color:#d6b34c}
</style>
</head>
<body>

<h1>HOUSE OF CAULIMAN</h1>
<div>Subscriber NFT Administration</div>

<form class="search">
<input name="q" value="${esc(q)}" placeholder="Handle, email or wallet">
<button>SEARCH</button>
<a href="/admin/export.csv">EXPORT CSV</a>
<a href="/admin/weekly/">WEEKLY DROPS</a>
</form>

<table>
<tr>
<th>ID</th>
<th>Subscriber</th>
<th>XRPL Wallet</th>
<th>Eligible Week</th>
<th>Email</th>
<th>Controls</th>
</tr>
${rows}
</table>

</body>
</html>
    `);
  });

  router.post("/:id", async (req, res) => {
    await pool.query(
      `
      UPDATE nft_subscriber_registrations
      SET
        subscription_verified=$1,
        wallet_verified=$2,
        delivered=$3,
        delivered_at=CASE WHEN $3 THEN COALESCE(delivered_at,NOW()) ELSE NULL END,
        status=$4,
        updated_at=NOW()
      WHERE id=$5
      `,
      [
        req.body.subscription_verified === "on",
        req.body.wallet_verified === "on",
        req.body.delivered === "on",
        req.body.status || "pending",
        Number(req.params.id)
      ]
    );

    res.redirect("/admin/");
  });

  router.get("/export.csv", async (req, res) => {
    const result = await pool.query(`
      SELECT
        x_handle,
        xrpl_address,
        email,
        eligible_week,
        status,
        subscription_verified,
        wallet_verified,
        delivered
      FROM nft_subscriber_registrations
      ORDER BY registered_at
    `);

    const cols = Object.keys(result.rows[0] || {});

    const csv = [
      cols.join(","),
      ...result.rows.map(row =>
        cols.map(c =>
          `"${String(row[c] ?? "").replaceAll('"','""')}"`
        ).join(",")
      )
    ].join("\n");

    res.type("text/csv");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="house-nft-registrations.csv"'
    );

    res.send(csv);
  });

  return router;
}

module.exports = { createAdminRouter };
