#!/usr/bin/env python3
import argparse, subprocess, sys
from pathlib import Path

def sh(cmd):
  r = subprocess.run(cmd)
  if r.returncode != 0:
    raise SystemExit(r.returncode)

def pad3(n): return f"{n:03d}"

def main():
  ap = argparse.ArgumentParser()
  ap.add_argument("start", type=int)
  ap.add_argument("end", type=int)
  ap.add_argument("--compress", action="store_true")
  ap.add_argument("--skip-missing", action="store_true", help="skip drops with no source master.png")
  args = ap.parse_args()

  if args.start < 1 or args.end > 589 or args.start > args.end:
    raise SystemExit("range must be within 1..589 and start<=end")

  built = 0
  skipped = 0

  for n in range(args.start, args.end + 1):
    d = pad3(n)
    src = Path("source") / f"drop_{d}" / "master.png"
    if not src.exists():
      if args.skip_missing:
        skipped += 1
        continue
      raise SystemExit(f"missing {src}")

    cmd = ["python3", "tools/build_drop.py", str(n)]
    if args.compress:
      cmd.append("--compress")
    sh(cmd)
    built += 1

  print(f"built {built} drops, skipped {skipped}")

if __name__ == "__main__":
  main()
