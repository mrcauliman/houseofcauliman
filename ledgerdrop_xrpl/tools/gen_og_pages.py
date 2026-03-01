#!/usr/bin/env python3
from pathlib import Path
import json

SITE_ORIGIN = "https://houseofcauliman.com"
BASE_PATH = "/ledgerdrop_xrpl"
DESC = "4K wallpapers. Mobile + PC. Links unlock automatically."

def pad3(n: int) -> str:
  return f"{n:03d}"

manifest_path = Path("drops_manifest.json")
if not manifest_path.exists():
  raise SystemExit("missing drops_manifest.json")

m = json.loads(manifest_path.read_text(encoding="utf-8"))
drops = m.get("drops", [])
if len(drops) != 589:
  raise SystemExit(f"bad drops count: {len(drops)}")

tpl = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Ledger Drop XRPL Drop {dd}</title>

<meta property="og:type" content="website">
<meta property="og:title" content="Ledger Drop XRPL Drop {dd}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{og_url}">
<meta property="og:image" content="{og_image}">
<meta name="twitter:card" content="summary_large_image">

<style>
:root{{--bg:#0b0d10;--panel:#12161c;--text:#eaf0f7;--muted:#a9b3bf;--line:rgba(255,255,255,.10);}}
*{{box-sizing:border-box}}
body{{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:var(--bg);color:var(--text);}}
.wrap{{max-width:980px;margin:0 auto;padding:18px 14px 28px;}}
.top{{display:flex;gap:10px;align-items:center;justify-content:space-between;margin:0 0 12px;flex-wrap:wrap;}}
.btn{{display:inline-block;padding:10px 12px;border-radius:12px;border:1px solid var(--line);background:rgba(255,255,255,.04);color:var(--text);text-decoration:none;font-weight:900;font-size:13px;}}
.card{{border:1px solid var(--line);border-radius:16px;background:var(--panel);overflow:hidden;}}
.h{{padding:12px;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;gap:10px;align-items:center;flex-wrap:wrap;}}
.pill{{display:inline-block;padding:3px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);font-weight:900;font-size:12px;}}
.muted{{color:var(--muted);font-size:12px;font-weight:800;}}
.grid{{display:grid;grid-template-columns:1fr;gap:12px;padding:12px;}}
img{{width:100%;height:auto;border-radius:12px;border:1px solid rgba(255,255,255,.08);background:#0b0d10;}}
.off{{opacity:.55;pointer-events:none}}
</style>
</head>
<body>
<div class="wrap">
  <div class="top">
    <a class="btn" href="{BASE_PATH}/">Back to Gallery</a>
    <a class="btn" href="{BASE_PATH}/ledger_drop_589.html">589 List</a>
  </div>

  <div class="card">
    <div class="h">
      <div><span class="pill">Drop {dd}</span> <span class="muted">4K wallpapers • Mobile + PC</span></div>
      <div>
        <a class="btn {moff}" href="{mobile}">Mobile</a>
        <a class="btn {poff}" href="{pc}">PC</a>
      </div>
    </div>
    <div class="grid">
      <img src="{pc}" alt="Drop {dd} PC wallpaper">
      <img src="{mobile}" alt="Drop {dd} Mobile wallpaper">
    </div>
  </div>
</div>
</body>
</html>
"""

Path("drop").mkdir(parents=True, exist_ok=True)

for d in drops:
  n = int(d["n"])
  dd = pad3(n)

  outdir = Path("drop") / dd
  outdir.mkdir(parents=True, exist_ok=True)

  mobile_rel = f"{BASE_PATH}/assets/drop_{dd}_mobile.png"
  pc_rel = f"{BASE_PATH}/assets/drop_{dd}_pc.png"

  pc_ok = bool(d.get("pc", {}).get("exists"))
  m_ok = bool(d.get("mobile", {}).get("exists"))

  og_img_rel = pc_rel if pc_ok else (mobile_rel if m_ok else pc_rel)
  og_url = f"{SITE_ORIGIN}{BASE_PATH}/drop/{dd}/"
  og_image = f"{SITE_ORIGIN}{og_img_rel}"

  html = tpl.format(
    dd=dd,
    desc=DESC,
    og_url=og_url,
    og_image=og_image,
    mobile=mobile_rel,
    pc=pc_rel,
    moff=("off" if not m_ok else ""),
    poff=("off" if not pc_ok else ""),
    BASE_PATH=BASE_PATH
  )

  (outdir / "index.html").write_text(html, encoding="utf-8")

Path("drop/index.html").write_text(
  f'<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0; url={BASE_PATH}/">',
  encoding="utf-8"
)

print("generated", len(drops), "drop pages")
