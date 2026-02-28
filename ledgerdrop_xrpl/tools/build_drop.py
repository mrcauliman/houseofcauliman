#!/usr/bin/env python3
import argparse, subprocess, sys
from pathlib import Path
MOBILE_W,MOBILE_H=1440,3120
PC_W,PC_H=3840,2160
def sh(c):
  r=subprocess.run(c,stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True)
  if r.returncode: print(r.stderr.strip(),file=sys.stderr); raise SystemExit(r.returncode)
def pad3(n): return f"{n:03d}"
def main():
  ap=argparse.ArgumentParser()
  ap.add_argument("n",type=int)
  ap.add_argument("--compress",action="store_true")
  a=ap.parse_args()
  if a.n<1 or a.n>589: raise SystemExit("range 1..589")
  d=pad3(a.n)
  src=Path("source")/f"drop_{d}"/"master.png"
  if not src.exists(): raise SystemExit(f"missing {src}")
  out_m=Path("assets")/f"drop_{d}_mobile.png"
  out_p=Path("assets")/f"drop_{d}_pc.png"
  out_m.parent.mkdir(parents=True,exist_ok=True)
  sh(["magick",str(src),"-gravity","center","-resize",f"{MOBILE_W}x{MOBILE_H}^","-extent",f"{MOBILE_W}x{MOBILE_H}",str(out_m)])
  sh(["magick",str(src),"-gravity","center","-resize",f"{PC_W}x{PC_H}^","-extent",f"{PC_W}x{PC_H}",str(out_p)])
  if a.compress:
    sh(["pngquant","--force","--skip-if-larger","--strip","--speed","1","--quality","80-95",str(out_m)])
    sh(["pngquant","--force","--skip-if-larger","--strip","--speed","1","--quality","80-95",str(out_p)])
  print("built",d)
if __name__=="__main__": main()
