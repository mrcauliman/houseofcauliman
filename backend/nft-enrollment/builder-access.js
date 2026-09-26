const express = require("express");
const rateLimit = require("express-rate-limit");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { shell, esc, badge } = require("./ui");

const UPLOAD_DIR =
  process.env.BUILDER_UPLOAD_DIR ||
  "/opt/house-builder-uploads";

const ALLOWED_STATUSES = new Set([
  "submitted",
  "reviewing",
  "in_progress",
  "fixed",
  "closed"
]);

const ALLOWED_CATEGORIES = new Set([
  "bug",
  "ux",
  "idea",
  "testing",
  "other"
]);

const ALLOWED_SEVERITIES = new Set([
  "low",
  "medium",
  "high",
  "critical"
]);

function clean(value, max = 5000) {
  return String(value || "")
    .trim()
    .slice(0, max);
}

function safeName(value) {
  return path
    .basename(String(value || "attachment"))
    .replace(/[^a-zA-Z0-9._-]+/g, "_")
    .slice(0, 120);
}

function safeActionUrl(value) {
  const url = clean(value, 1000);

  if (!url) {
    return "";
  }

  if (url.startsWith("/")) {
    return url;
  }

  try {
    const parsed = new URL(url);

    if (
      parsed.protocol === "https:" ||
      parsed.protocol === "http:"
    ) {
      return parsed.toString();
    }
  } catch {}

  throw new Error(
    "Action URL must be HTTP, HTTPS, or a site-relative path."
  );
}

function ensureUploadDir() {
  fs.mkdirSync(UPLOAD_DIR, {
    recursive: true,
    mode: 0o700
  });
}

function createBuilderAccess({
  pool,
  getSession,
  verifyBuilderOwner,
  verifyCsrf
}) {
  const holderRouter = express.Router();
  const adminRouter = express.Router();

  const reportLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 20,
    standardHeaders: true,
    legacyHeaders: false
  });

  let initPromise = null;

  function ensureTables() {
    if (!initPromise) {
      initPromise = pool.query(`
        CREATE TABLE IF NOT EXISTS builder_reports (
          id BIGSERIAL PRIMARY KEY,
          report_code TEXT UNIQUE,
          reporter_wallet TEXT NOT NULL,
          category TEXT NOT NULL,
          title TEXT NOT NULL,
          project_area TEXT,
          severity TEXT NOT NULL DEFAULT 'medium',
          summary TEXT NOT NULL,
          expected_behavior TEXT,
          reproduction_steps TEXT,
          device_browser TEXT,
          notes TEXT,
          x_context TEXT,
          status TEXT NOT NULL DEFAULT 'submitted',
          admin_notes TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          closed_at TIMESTAMPTZ
        );

        CREATE INDEX IF NOT EXISTS
          idx_builder_reports_wallet
        ON builder_reports (
          reporter_wallet,
          created_at DESC
        );

        CREATE INDEX IF NOT EXISTS
          idx_builder_reports_status
        ON builder_reports (
          status,
          created_at DESC
        );

        CREATE TABLE IF NOT EXISTS builder_report_history (
          id BIGSERIAL PRIMARY KEY,
          report_id BIGINT NOT NULL
            REFERENCES builder_reports(id)
            ON DELETE CASCADE,
          old_status TEXT,
          new_status TEXT NOT NULL,
          note TEXT,
          changed_by TEXT NOT NULL,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS builder_report_attachments (
          id BIGSERIAL PRIMARY KEY,
          report_id BIGINT NOT NULL
            REFERENCES builder_reports(id)
            ON DELETE CASCADE,
          stored_name TEXT NOT NULL,
          original_name TEXT NOT NULL,
          mime_type TEXT NOT NULL,
          size_bytes BIGINT NOT NULL,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS builder_access_items (
          id BIGSERIAL PRIMARY KEY,
          item_type TEXT NOT NULL,
          title TEXT NOT NULL,
          summary TEXT,
          action_label TEXT,
          action_url TEXT,
          active BOOLEAN NOT NULL DEFAULT FALSE,
          sort_order INTEGER NOT NULL DEFAULT 0,
          starts_at TIMESTAMPTZ,
          ends_at TIMESTAMPTZ,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `).catch(error => {
        initPromise = null;
        throw error;
      });
    }

    return initPromise;
  }

  const storage = multer.diskStorage({
    destination(req, file, cb) {
      try {
        ensureUploadDir();
        cb(null, UPLOAD_DIR);
      } catch (error) {
        cb(error);
      }
    },

    filename(req, file, cb) {
      const ext =
        path.extname(safeName(file.originalname))
          .slice(0, 12);

      cb(
        null,
        `${Date.now()}-${crypto.randomUUID()}${ext}`
      );
    }
  });

  const upload = multer({
    storage,
    limits: {
      files: 5,
      fileSize: 8 * 1024 * 1024
    },
    fileFilter(req, file, cb) {
      const allowed = new Set([
        "image/png",
        "image/jpeg",
        "image/webp",
        "image/gif"
      ]);

      if (!allowed.has(file.mimetype)) {
        return cb(
          new Error("Only PNG, JPG, WEBP, and GIF images are allowed.")
        );
      }

      cb(null, true);
    }
  });

  async function requireBuilder(req, res) {
    const session = await getSession(req);

    if (!session) {
      res.status(401).json({
        ok: false,
        signedIn: false
      });

      return null;
    }

    const ownership =
      await verifyBuilderOwner(session.xrpl_address);

    if (!ownership.owner) {
      res.status(403).json({
        ok: false,
        signedIn: true,
        owner: false,
        error: "01 THE BUILDER ownership required."
      });

      return null;
    }

    return {
      session,
      ownership
    };
  }

  holderRouter.get("/access", async (req, res) => {
    try {
      await ensureTables();

      const auth = await requireBuilder(req, res);
      if (!auth) return;

      const reports = await pool.query(`
        SELECT
          report_code,
          category,
          title,
          project_area,
          severity,
          status,
          created_at,
          updated_at,
          closed_at
        FROM builder_reports
        WHERE reporter_wallet = $1
        ORDER BY created_at DESC
        LIMIT 100
      `, [auth.session.xrpl_address]);

      const items = await pool.query(`
        SELECT
          id,
          item_type,
          title,
          summary,
          action_label,
          action_url,
          starts_at,
          ends_at
        FROM builder_access_items
        WHERE
          active = TRUE
          AND (
            starts_at IS NULL
            OR starts_at <= NOW()
          )
          AND (
            ends_at IS NULL
            OR ends_at > NOW()
          )
        ORDER BY sort_order ASC, id ASC
      `);

      res.setHeader("Cache-Control", "no-store");

      return res.json({
        ok: true,
        owner: true,
        card: "01",
        name: "THE BUILDER",
        xrplAddress: auth.session.xrpl_address,
        reports: reports.rows,
        items: items.rows
      });
    } catch (error) {
      console.error(
        "Builder access lookup failed",
        error
      );

      return res.status(503).json({
        ok: false,
        error: "Builder Access unavailable."
      });
    }
  });

  async function builderGate(req, res, next) {
    try {
      await ensureTables();

      const auth =
        await requireBuilder(req, res);

      if (!auth) {
        return;
      }

      req.builderAuth = auth;
      next();
    } catch (error) {
      console.error(
        "Builder ownership gate failed",
        error
      );

      return res.status(503).json({
        ok: false,
        error: "Builder Access unavailable."
      });
    }
  }

  function builderCsrfGate(req, res, next) {
    if (
      !verifyCsrf(
        req,
        req.builderAuth?.session
      )
    ) {
      return res.sendStatus(403);
    }

    next();
  }

  holderRouter.post(
    "/reports",
    reportLimiter,
    builderGate,
    builderCsrfGate,
    upload.array("attachments", 5),
    async (req, res) => {
      const uploadedFiles = req.files || [];

      try {
        const auth = req.builderAuth;

        const category =
          clean(req.body.category, 30);

        const severity =
          clean(req.body.severity, 30);

        const title =
          clean(req.body.title, 160);

        const summary =
          clean(req.body.summary, 6000);

        if (!ALLOWED_CATEGORIES.has(category)) {
          throw new Error("Invalid report category.");
        }

        if (!ALLOWED_SEVERITIES.has(severity)) {
          throw new Error("Invalid severity.");
        }

        if (!title || !summary) {
          throw new Error(
            "Title and description are required."
          );
        }

        const client = await pool.connect();

        try {
          await client.query("BEGIN");

          const result = await client.query(`
            INSERT INTO builder_reports (
              reporter_wallet,
              category,
              title,
              project_area,
              severity,
              summary,
              expected_behavior,
              reproduction_steps,
              device_browser,
              notes,
              x_context
            )
            VALUES (
              $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11
            )
            RETURNING id
          `, [
            auth.session.xrpl_address,
            category,
            title,
            clean(req.body.projectArea, 160),
            severity,
            summary,
            clean(req.body.expectedBehavior, 6000),
            clean(req.body.reproductionSteps, 6000),
            clean(req.body.deviceBrowser, 500),
            clean(req.body.notes, 6000),
            clean(req.body.xContext, 160)
          ]);

          const id = result.rows[0].id;

          const reportCode =
            `BUILDER-${String(id).padStart(4, "0")}`;

          await client.query(`
            UPDATE builder_reports
            SET report_code = $1
            WHERE id = $2
          `, [reportCode, id]);

          await client.query(`
            INSERT INTO builder_report_history (
              report_id,
              old_status,
              new_status,
              changed_by,
              note
            )
            VALUES (
              $1,
              NULL,
              'submitted',
              $2,
              'Report submitted'
            )
          `, [
            id,
            auth.session.xrpl_address
          ]);

          for (const file of uploadedFiles) {
            await client.query(`
              INSERT INTO builder_report_attachments (
                report_id,
                stored_name,
                original_name,
                mime_type,
                size_bytes
              )
              VALUES ($1,$2,$3,$4,$5)
            `, [
              id,
              path.basename(file.filename),
              safeName(file.originalname),
              file.mimetype,
              file.size
            ]);
          }

          await client.query("COMMIT");

          return res.status(201).json({
            ok: true,
            reportCode
          });
        } catch (error) {
          await client.query("ROLLBACK");
          throw error;
        } finally {
          client.release();
        }
      } catch (error) {
        for (const file of uploadedFiles) {
          fs.rmSync(file.path, { force: true });
        }

        console.error(
          "Builder report submission failed",
          error
        );

        return res.status(400).json({
          ok: false,
          error:
            error.message ||
            "Report could not be submitted."
        });
      }
    }
  );

  holderRouter.get(
    "/reports/:code",
    async (req, res) => {
      try {
        await ensureTables();

        const auth = await requireBuilder(req, res);
        if (!auth) return;

        const code =
          clean(req.params.code, 40)
            .toUpperCase();

        const report = await pool.query(`
          SELECT
            id,
            report_code,
            category,
            title,
            project_area,
            severity,
            summary,
            expected_behavior,
            reproduction_steps,
            device_browser,
            notes,
            x_context,
            status,
            created_at,
            updated_at,
            closed_at
          FROM builder_reports
          WHERE
            report_code = $1
            AND reporter_wallet = $2
          LIMIT 1
        `, [
          code,
          auth.session.xrpl_address
        ]);

        if (!report.rowCount) {
          return res.sendStatus(404);
        }

        const history = await pool.query(`
          SELECT
            old_status,
            new_status,
            created_at
          FROM builder_report_history
          WHERE report_id = $1
          ORDER BY id ASC
        `, [report.rows[0].id]);

        const attachments = await pool.query(`
          SELECT
            id,
            original_name,
            mime_type,
            size_bytes
          FROM builder_report_attachments
          WHERE report_id = $1
          ORDER BY id ASC
        `, [report.rows[0].id]);

        return res.json({
          ok: true,
          report: report.rows[0],
          history: history.rows,
          attachments: attachments.rows
        });
      } catch (error) {
        console.error(
          "Builder report lookup failed",
          error
        );

        return res.status(503).json({
          ok: false
        });
      }
    }
  );

  holderRouter.get(
    "/attachments/:id",
    async (req, res) => {
      try {
        await ensureTables();

        const auth = await requireBuilder(req, res);
        if (!auth) return;

        const result = await pool.query(`
          SELECT
            a.stored_name,
            a.original_name,
            a.mime_type
          FROM builder_report_attachments a
          JOIN builder_reports r
            ON r.id = a.report_id
          WHERE
            a.id = $1
            AND r.reporter_wallet = $2
          LIMIT 1
        `, [
          Number(req.params.id),
          auth.session.xrpl_address
        ]);

        if (!result.rowCount) {
          return res.sendStatus(404);
        }

        const row = result.rows[0];

        res.type(row.mime_type);

        return res.sendFile(
          path.join(
            UPLOAD_DIR,
            row.stored_name
          )
        );
      } catch (error) {
        console.error(
          "Builder attachment lookup failed",
          error
        );

        return res.sendStatus(404);
      }
    }
  );

  adminRouter.get("/", async (req, res) => {
    try {
      await ensureTables();

      const reports = await pool.query(`
        SELECT *
        FROM builder_reports
        ORDER BY created_at DESC
        LIMIT 500
      `);

      const items = await pool.query(`
        SELECT *
        FROM builder_access_items
        ORDER BY sort_order ASC, id ASC
      `);

      const counts = {
        total: reports.rows.length,
        submitted: reports.rows.filter(r => r.status === "submitted").length,
        active: reports.rows.filter(r =>
          ["reviewing","in_progress"].includes(r.status)
        ).length,
        closed: reports.rows.filter(r =>
          ["fixed","closed"].includes(r.status)
        ).length
      };

      const reportRows = reports.rows.map(r => {
        const type =
          r.status === "fixed" || r.status === "closed"
            ? "good"
            : r.status === "reviewing" || r.status === "in_progress"
            ? "info"
            : "neutral";

        return `
          <button
            type="button"
            class="builder-report-row"
            data-builder-report="${esc(r.report_code)}"
            data-builder-status="${esc(r.status)}"
            style="
              width:100%;
              text-align:left;
              border:0;
              border-top:1px solid var(--line);
              background:transparent;
              color:inherit;
              padding:16px 0;
              cursor:pointer;
            "
          >
            <div style="
              display:flex;
              justify-content:space-between;
              gap:12px;
              align-items:center;
            ">
              <strong>${esc(r.report_code)}</strong>
              ${badge(
                String(r.status).replaceAll("_"," "),
                type
              )}
            </div>

            <div style="margin-top:7px;font-weight:800">
              ${esc(r.title)}
            </div>

            <div class="small">
              ${esc(r.category)} · ${esc(r.severity)}
              · ${esc(r.reporter_wallet)}
            </div>
          </button>
        `;
      }).join("");

      const itemRows = items.rows.map(item => `
        <div
          class="card builder-item-card"
          data-builder-item="${item.id}"
        >
          <div class="grid two">
            <div>
              <label>Type</label>
              <select data-field="itemType">
                ${[
                  "early_access",
                  "testing",
                  "drop",
                  "download",
                  "preview",
                  "giveaway",
                  "claim",
                  "other"
                ].map(v => `
                  <option
                    value="${v}"
                    ${item.item_type === v ? "selected" : ""}
                  >
                    ${esc(v.replaceAll("_"," "))}
                  </option>
                `).join("")}
              </select>
            </div>

            <div>
              <label>Title</label>
              <input
                type="text"
                data-field="title"
                value="${esc(item.title)}"
              >
            </div>
          </div>

          <div style="margin-top:12px">
            <label>Summary</label>
            <textarea data-field="summary">${esc(item.summary || "")}</textarea>
          </div>

          <div class="grid two" style="margin-top:12px">
            <div>
              <label>Action Label</label>
              <input
                type="text"
                data-field="actionLabel"
                value="${esc(item.action_label || "")}"
              >
            </div>

            <div>
              <label>Action URL</label>
              <input
                type="text"
                data-field="actionUrl"
                value="${esc(item.action_url || "")}"
              >
            </div>
          </div>

          <div class="grid two" style="margin-top:12px">
            <div>
              <label>Sort Order</label>
              <input
                type="text"
                data-field="sortOrder"
                value="${Number(item.sort_order || 0)}"
              >
            </div>

            <div>
              <label>Active</label>
              <label class="switch">
                <input
                  type="checkbox"
                  data-field="active"
                  ${item.active ? "checked" : ""}
                >
                <span class="slider"></span>
              </label>
            </div>
          </div>

          <div class="actions" style="margin-top:14px">
            <button
              type="button"
              class="btn primary builder-item-save"
            >
              SAVE ITEM
            </button>
          </div>
        </div>
      `).join("");

      const body = `
        <div class="grid four">
          <div class="stat">
            <div class="num">${counts.total}</div>
            <div class="label">Total Reports</div>
          </div>

          <div class="stat">
            <div class="num">${counts.submitted}</div>
            <div class="label">Submitted</div>
          </div>

          <div class="stat">
            <div class="num">${counts.active}</div>
            <div class="label">In Review</div>
          </div>

          <div class="stat">
            <div class="num">${counts.closed}</div>
            <div class="label">Fixed / Closed</div>
          </div>
        </div>

        <div class="grid two" style="margin-top:16px">

          <div>
            <div class="card">
              <div style="
                display:flex;
                justify-content:space-between;
                gap:12px;
                align-items:center;
              ">
                <div>
                  <h2 style="margin:0">Builder Reports</h2>
                  <div class="small">
                    Bugs, UX issues, testing feedback and ideas
                  </div>
                </div>

                <select
                  id="builderStatusFilter"
                  style="width:auto"
                >
                  <option value="">All Statuses</option>
                  <option value="submitted">Submitted</option>
                  <option value="reviewing">Reviewing</option>
                  <option value="in_progress">In Progress</option>
                  <option value="fixed">Fixed</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              <div id="builderReportRows">
                ${
                  reportRows ||
                  `<div class="small" style="margin-top:18px">
                     No Builder reports yet.
                   </div>`
                }
              </div>
            </div>

            <div
              class="card"
              id="builderReportDetail"
              style="display:none"
            ></div>
          </div>

          <div>
            <div class="card">
              <h2 style="margin-top:0">Create Builder Access Item</h2>

              <div class="grid two">
                <div>
                  <label>Type</label>
                  <select id="builderItemType">
                    <option value="early_access">Early Access</option>
                    <option value="testing">Testing Opportunity</option>
                    <option value="drop">Builder Drop</option>
                    <option value="download">Download</option>
                    <option value="preview">Early Preview</option>
                    <option value="giveaway">Giveaway</option>
                    <option value="claim">Claim</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label>Title</label>
                  <input type="text" id="builderItemTitle">
                </div>
              </div>

              <div style="margin-top:12px">
                <label>Summary</label>
                <textarea id="builderItemSummary"></textarea>
              </div>

              <div class="grid two" style="margin-top:12px">
                <div>
                  <label>Action Label</label>
                  <input type="text" id="builderItemActionLabel">
                </div>

                <div>
                  <label>Action URL</label>
                  <input type="text" id="builderItemActionUrl">
                </div>
              </div>

              <div class="grid two" style="margin-top:12px">
                <div>
                  <label>Sort Order</label>
                  <input
                    type="text"
                    id="builderItemSortOrder"
                    value="0"
                  >
                </div>

                <div>
                  <label>Active</label>
                  <label class="switch">
                    <input
                      type="checkbox"
                      id="builderItemActive"
                    >
                    <span class="slider"></span>
                  </label>
                </div>
              </div>

              <div class="actions" style="margin-top:14px">
                <button
                  type="button"
                  class="btn primary"
                  id="builderItemCreate"
                >
                  CREATE ITEM
                </button>
              </div>
            </div>

            <h2>Builder Access Items</h2>

            <div id="builderItems">
              ${
                itemRows ||
                `<div class="card">
                   <div class="small">
                     No Builder Access items created yet.
                   </div>
                 </div>`
              }
            </div>
          </div>
        </div>
      `;

      return res.send(shell({
        title: "BUILDER ACCESS",
        subtitle:
          "01 THE BUILDER · Reports, testing, drops and holder access",
        backHref: "/admin/",
        body
      }));
    } catch (error) {
      console.error(
        "Builder admin page failed",
        error
      );

      return res.status(500).send(
        "Builder admin unavailable"
      );
    }
  });

  adminRouter.get("/reports", async (req, res) => {
    await ensureTables();

    const status =
      clean(req.query.status, 30);

    const result = await pool.query(`
      SELECT *
      FROM builder_reports
      WHERE
        $1 = ''
        OR status = $1
      ORDER BY created_at DESC
      LIMIT 500
    `, [status]);

    return res.json({
      ok: true,
      reports: result.rows
    });
  });

  adminRouter.get(
    "/reports/:code",
    async (req, res) => {
      try {
        await ensureTables();

        const code =
          clean(req.params.code, 40).toUpperCase();

        const report = await pool.query(`
          SELECT *
          FROM builder_reports
          WHERE report_code = $1
          LIMIT 1
        `, [code]);

        if (!report.rowCount) {
          return res.sendStatus(404);
        }

        const history = await pool.query(`
          SELECT *
          FROM builder_report_history
          WHERE report_id = $1
          ORDER BY id ASC
        `, [report.rows[0].id]);

        const attachments = await pool.query(`
          SELECT
            id,
            original_name,
            mime_type,
            size_bytes,
            created_at
          FROM builder_report_attachments
          WHERE report_id = $1
          ORDER BY id ASC
        `, [report.rows[0].id]);

        return res.json({
          ok: true,
          report: report.rows[0],
          history: history.rows,
          attachments: attachments.rows
        });
      } catch (error) {
        console.error(
          "Builder admin report lookup failed",
          error
        );

        return res.status(500).json({
          ok: false
        });
      }
    }
  );

  adminRouter.get(
    "/attachments/:id",
    async (req, res) => {
      try {
        await ensureTables();

        const result = await pool.query(`
          SELECT
            stored_name,
            original_name,
            mime_type
          FROM builder_report_attachments
          WHERE id = $1
          LIMIT 1
        `, [Number(req.params.id)]);

        if (!result.rowCount) {
          return res.sendStatus(404);
        }

        const row = result.rows[0];

        res.type(row.mime_type);

        return res.sendFile(
          path.join(
            UPLOAD_DIR,
            row.stored_name
          )
        );
      } catch (error) {
        console.error(
          "Builder admin attachment failed",
          error
        );

        return res.sendStatus(404);
      }
    }
  );

  adminRouter.post(
    "/reports/:code",
    express.json({ limit: "100kb" }),
    async (req, res) => {
      try {
        await ensureTables();

        const code =
          clean(req.params.code, 40)
            .toUpperCase();

        const status =
          clean(req.body.status, 30);

        const adminNotes =
          clean(req.body.adminNotes, 10000);

        if (!ALLOWED_STATUSES.has(status)) {
          return res.status(400).json({
            ok: false,
            error: "Invalid status."
          });
        }

        const existing = await pool.query(`
          SELECT id, status
          FROM builder_reports
          WHERE report_code = $1
          LIMIT 1
        `, [code]);

        if (!existing.rowCount) {
          return res.sendStatus(404);
        }

        const report = existing.rows[0];

        await pool.query(`
          UPDATE builder_reports
          SET
            status = $1,
            admin_notes = $2,
            updated_at = NOW(),
            closed_at = CASE
              WHEN $1 IN ('fixed','closed')
                THEN COALESCE(closed_at, NOW())
              ELSE NULL
            END
          WHERE id = $3
        `, [
          status,
          adminNotes,
          report.id
        ]);

        if (report.status !== status) {
          await pool.query(`
            INSERT INTO builder_report_history (
              report_id,
              old_status,
              new_status,
              changed_by,
              note
            )
            VALUES ($1,$2,$3,'admin',$4)
          `, [
            report.id,
            report.status,
            status,
            adminNotes
          ]);
        }

        return res.json({
          ok: true,
          reportCode: code,
          status
        });
      } catch (error) {
        console.error(
          "Builder admin update failed",
          error
        );

        return res.status(500).json({
          ok: false
        });
      }
    }
  );

  adminRouter.get("/items", async (req, res) => {
    await ensureTables();

    const result = await pool.query(`
      SELECT *
      FROM builder_access_items
      ORDER BY sort_order ASC, id ASC
    `);

    return res.json({
      ok: true,
      items: result.rows
    });
  });

  adminRouter.post(
    "/items",
    express.json({ limit: "100kb" }),
    async (req, res) => {
      try {
        await ensureTables();

        const itemType =
          clean(req.body.itemType, 40);

        const title =
          clean(req.body.title, 160);

        if (!itemType || !title) {
          return res.status(400).json({
            ok: false,
            error:
              "Item type and title are required."
          });
        }

        const result = await pool.query(`
          INSERT INTO builder_access_items (
            item_type,
            title,
            summary,
            action_label,
            action_url,
            active,
            sort_order,
            starts_at,
            ends_at
          )
          VALUES (
            $1,$2,$3,$4,$5,$6,$7,$8,$9
          )
          RETURNING *
        `, [
          itemType,
          title,
          clean(req.body.summary, 3000),
          clean(req.body.actionLabel, 80),
          safeActionUrl(req.body.actionUrl),
          req.body.active === true,
          Number(req.body.sortOrder || 0),
          req.body.startsAt || null,
          req.body.endsAt || null
        ]);

        return res.status(201).json({
          ok: true,
          item: result.rows[0]
        });
      } catch (error) {
        console.error(
          "Builder item creation failed",
          error
        );

        return res.status(500).json({
          ok: false
        });
      }
    }
  );

  adminRouter.post(
    "/items/:id",
    express.json({ limit: "100kb" }),
    async (req, res) => {
      try {
        await ensureTables();

        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id < 1) {
          return res.status(400).json({
            ok: false,
            error: "Invalid item ID."
          });
        }

        const result = await pool.query(`
          UPDATE builder_access_items
          SET
            item_type = COALESCE($1, item_type),
            title = COALESCE($2, title),
            summary = COALESCE($3, summary),
            action_label = COALESCE($4, action_label),
            action_url = COALESCE($5, action_url),
            active = COALESCE($6, active),
            sort_order = COALESCE($7, sort_order),
            starts_at = $8,
            ends_at = $9,
            updated_at = NOW()
          WHERE id = $10
          RETURNING *
        `, [
          req.body.itemType == null
            ? null
            : clean(req.body.itemType, 40),
          req.body.title == null
            ? null
            : clean(req.body.title, 160),
          req.body.summary == null
            ? null
            : clean(req.body.summary, 3000),
          req.body.actionLabel == null
            ? null
            : clean(req.body.actionLabel, 80),
          req.body.actionUrl == null
            ? null
            : safeActionUrl(req.body.actionUrl),
          typeof req.body.active === "boolean"
            ? req.body.active
            : null,
          Number.isFinite(Number(req.body.sortOrder))
            ? Number(req.body.sortOrder)
            : null,
          req.body.startsAt || null,
          req.body.endsAt || null,
          id
        ]);

        if (!result.rowCount) {
          return res.sendStatus(404);
        }

        return res.json({
          ok: true,
          item: result.rows[0]
        });
      } catch (error) {
        console.error(
          "Builder item update failed",
          error
        );

        return res.status(500).json({
          ok: false
        });
      }
    }
  );

  return {
    holderRouter,
    adminRouter,
    ensureTables
  };
}

module.exports = {
  createBuilderAccess
};
