#!/usr/bin/env python3
import json, hashlib
from pathlib import Path
def sha256(p):
  h=hashlib.sha256()
  with p.open("rb") as f:
    for b in iter(lambda:f.read(1024*1024),b""): h.update(b)
  return h.hexdigest()
def pad3(n): return f"{n:03d}"
assets=Path("assets")
drops=[]
for n in range(1,590):
  d=pad3(n)
  m=assets/f"drop_{d}_mobile.png"
  p=assets/f"drop_{d}_pc.png"
  row={"n":n,"mobile":{"path":str(m),"exists":m.exists()},"pc":{"path":str(p),"exists":p.exists()}}
  if m.exists(): row["mobile"]["sha256"]=sha256(m)
  if p.exists(): row["pc"]["sha256"]=sha256(p)
  drops.append(row)
Path("drops_manifest.json").write_text(json.dumps({"count":589,"drops":drops},indent=2),encoding="utf-8")
print("wrote drops_manifest.json")
