#!/usr/bin/env python3
import argparse, subprocess, sys
from pathlib import Path

# 4K targets
MOBILE_W, MOBILE_H = 2160, 3840   # 9:16
PC_W, PC_H         = 3840, 2160   # 16:9

def sh(cmd):
  r = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
  if r.returncode != 0:
    if r.stderr:
      print(r.stderr.strip(), file=sys.stderr)
    raise SystemExit(r.returncode)

def pad3(n): return f"{n:03d}"

def build_from(src: Path, out: Path, w: int, h: int):
  out.parent.mkdir(parents=True, exist_ok=True)
  sh([
    "magick", str(src),
    "-auto-orient",
    "-gravity", "center",
    "-resize", f"{w}x{h}^",
    "-extent", f"{w}x{h}",
    str(out)
  ])

def compress_png(path: Path):
  sh(["pngquant", "--force", "--skip-if-larger", "--strip", "--speed", "1", "--quality", "80-95", str(path)])

def main():
  ap = argparse.ArgumentParser()
  ap.add_argument("n", type=int, help="drop number 1..589")
  ap.add_argument("--compress", action="store_true")
  a = ap.parse_args()

  if a.n < 1 or a.n > 589:
    raise SystemExit("range 1..589")

  d = pad3(a.n)

  base = Path("source") / f"drop_{d}"
  src_pc     = base / "master_pc.png"
  src_mobile = base / "master_mobile.png"
  src_single = base / "master.png"

  out_pc     = Path("assets") / f"drop_{d}_pc.png"
  out_mobile = Path("assets") / f"drop_{d}_mobile.png"

  # Preferred: two masters
  if src_pc.exists() and src_mobile.exists():
    build_from(src_pc, out_pc, PC_W, PC_H)
    build_from(src_mobile, out_mobile, MOBILE_W, MOBILE_H)

  # Fallback: single master
  elif src_single.exists():
    build_from(src_single, out_pc, PC_W, PC_H)
    build_from(src_single, out_mobile, MOBILE_W, MOBILE_H)

  else:
    raise SystemExit(f"missing source masters in {base} (need master_pc.png + master_mobile.png or master.png)")

  if a.compress:
    compress_png(out_pc)
    compress_png(out_mobile)

  print("built", d)

if __name__ == "__main__":
  main()
