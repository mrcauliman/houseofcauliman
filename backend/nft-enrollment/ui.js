function esc(v) {
  return String(v ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function fmtDate(value) {
  if (!value) return "—";

  const d = new Date(value);

  if (Number.isNaN(d.getTime())) {
    return esc(String(value).slice(0, 10));
  }

  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  });
}

function badge(text, type = "neutral") {
  return `<span class="badge ${type}">${esc(text)}</span>`;
}

function shell({
  title,
  subtitle = "",
  backHref = "",
  body = "",
  script = ""
}) {
  return `<!doctype html>
<html>
<head>
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>${esc(title)}</title>

<style>
*{box-sizing:border-box}

:root{
  --bg:#090909;
  --panel:#141414;
  --panel2:#1b1b1d;
  --line:#2a2a2d;
  --text:#f5f5f7;
  --muted:#96969e;
  --gold:#d6b34c;
  --gold2:#f0cf6a;
  --green:#30d158;
  --red:#ff453a;
  --blue:#0a84ff;
}

body{
  margin:0;
  background:var(--bg);
  color:var(--text);
  font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display",
  "SF Pro Text",Inter,Arial,sans-serif;
}

.wrap{
  max-width:1180px;
  margin:0 auto;
  padding:26px 18px 60px;
}

.header{
  margin-bottom:24px;
}

.brand{
  font-size:13px;
  font-weight:800;
  letter-spacing:.14em;
  color:var(--gold);
  margin-bottom:8px;
}

h1{
  margin:0;
  font-size:32px;
  letter-spacing:-.03em;
}

.subtitle{
  margin-top:6px;
  color:var(--muted);
  font-size:15px;
}

.card{
  background:var(--panel);
  border:1px solid var(--line);
  border-radius:20px;
  padding:20px;
  margin-bottom:16px;
  box-shadow:0 8px 30px rgba(0,0,0,.18);
}

.grid{
  display:grid;
  gap:14px;
}

.grid.two{
  grid-template-columns:repeat(2,minmax(0,1fr));
}

.grid.four{
  grid-template-columns:repeat(4,minmax(0,1fr));
}

label{
  display:block;
  font-size:13px;
  font-weight:700;
  color:#c9c9cf;
  margin-bottom:7px;
}

input[type=text],
input[type=email],
input[type=date],
input[type=search],
select,
textarea{
  width:100%;
  border:1px solid #343438;
  background:#202023;
  color:white;
  border-radius:14px;
  padding:13px 14px;
  font-size:16px;
  outline:none;
}

textarea{
  resize:vertical;
  min-height:180px;
  font-family:inherit;
}

input:focus,
select:focus,
textarea:focus{
  border-color:var(--gold);
  box-shadow:0 0 0 3px rgba(214,179,76,.12);
}

.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-height:48px;
  border:0;
  border-radius:14px;
  padding:0 18px;
  font-size:14px;
  font-weight:800;
  cursor:pointer;
  text-decoration:none;
}

.btn.primary{
  background:var(--gold);
  color:#111;
}

.btn.secondary{
  background:#252528;
  color:white;
  border:1px solid #353539;
}

.btn.danger{
  background:#3a1717;
  color:#ffb4ae;
}

.actions{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  align-items:center;
}

.badge{
  display:inline-flex;
  align-items:center;
  padding:6px 9px;
  border-radius:999px;
  font-size:12px;
  font-weight:800;
  white-space:nowrap;
}

.badge.good{
  background:rgba(48,209,88,.13);
  color:#66e986;
}

.badge.warn{
  background:rgba(214,179,76,.13);
  color:var(--gold2);
}

.badge.bad{
  background:rgba(255,69,58,.13);
  color:#ff8b84;
}

.badge.info{
  background:rgba(10,132,255,.13);
  color:#72b7ff;
}

.badge.neutral{
  background:#2a2a2d;
  color:#c7c7cc;
}

.stat{
  background:var(--panel2);
  border:1px solid var(--line);
  border-radius:18px;
  padding:16px;
}

.stat .num{
  font-size:28px;
  font-weight:850;
}

.stat .label{
  margin-top:4px;
  color:var(--muted);
  font-size:12px;
  font-weight:700;
  text-transform:uppercase;
  letter-spacing:.06em;
}

.person{
  display:grid;
  grid-template-columns:36px minmax(0,1.3fr) minmax(220px,1.8fr) auto;
  gap:16px;
  align-items:center;
  padding:16px 0;
  border-top:1px solid var(--line);
}

.person:first-child{
  border-top:0;
}

.handle{
  font-size:16px;
  font-weight:800;
}

.small{
  color:var(--muted);
  font-size:13px;
  margin-top:4px;
}

.wallet{
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:13px;
  word-break:break-all;
}

.check{
  width:20px;
  height:20px;
  accent-color:var(--gold);
}

.switch{
  position:relative;
  display:inline-block;
  width:48px;
  height:28px;
  margin:0;
}

.switch input{
  opacity:0;
  width:0;
  height:0;
}

.slider{
  position:absolute;
  inset:0;
  background:#39393d;
  border-radius:999px;
  cursor:pointer;
  transition:.2s;
}

.slider:before{
  content:"";
  position:absolute;
  width:22px;
  height:22px;
  left:3px;
  top:3px;
  background:white;
  border-radius:50%;
  transition:.2s;
}

.switch input:checked + .slider{
  background:var(--green);
}

.switch input:checked + .slider:before{
  transform:translateX(20px);
}

.toggle-row{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  padding:8px 0;
}

.toolbar{
  position:sticky;
  top:10px;
  z-index:5;
  background:rgba(20,20,20,.94);
  backdrop-filter:blur(14px);
}

pre,.scriptbox{
  white-space:pre-wrap;
  word-break:break-word;
}

a{
  color:var(--gold2);
}

@media(max-width:760px){
  .wrap{padding:18px 12px 44px}
  h1{font-size:28px}
  .grid.two,.grid.four{grid-template-columns:1fr}
  .person{
    grid-template-columns:32px 1fr;
  }
  .person .wallet-block,
  .person .control-block{
    grid-column:2;
  }
  .btn{
    width:100%;
  }
  .actions{
    display:grid;
    grid-template-columns:1fr;
  }
}
</style>
</head>

<body>
<div class="wrap">

  <div class="header">
    <div class="brand">HOUSE OF CAULIMAN</div>
    <h1>${esc(title)}</h1>
    ${subtitle ? `<div class="subtitle">${esc(subtitle)}</div>` : ""}
  </div>

  ${body}

  ${
    backHref
      ? `<div style="margin-top:24px">
           <a class="btn secondary" href="${esc(backHref)}">← Back</a>
         </div>`
      : ""
  }

</div>

<script src="/admin/admin-client.js"></script>

</body>
</html>`;
}

module.exports = {
  esc,
  fmtDate,
  badge,
  shell
};
