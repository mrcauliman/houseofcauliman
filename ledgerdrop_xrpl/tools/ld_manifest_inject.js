(() => {
  const RX=/drop_(\d{3})_(mobile|pc)\.png$/;
  const on=a=>{a.classList.remove("off");a.removeAttribute("aria-disabled");a.removeAttribute("tabindex");a.style.pointerEvents="auto";a.style.opacity="";};
  const off=a=>{a.classList.add("off");a.setAttribute("aria-disabled","true");a.setAttribute("tabindex","-1");a.style.pointerEvents="none";a.style.opacity="0.55";};
  const run=async()=>{
    let j; try{const r=await fetch("./drops_manifest.json",{cache:"no-store"}); if(!r.ok) return; j=await r.json();}catch(_){return;}
    const map=new Map(); for(const d of (j.drops||[])){const k=String(d.n).padStart(3,"0"); map.set(k,{mobile:!!d.mobile?.exists, pc:!!d.pc?.exists});}
    const links=document.querySelectorAll('a[href*="drop_"][href$=".png"]');
    for(const a of links){const m=a.getAttribute("href").match(RX); if(!m) continue; const rec=map.get(m[1]); if(rec && rec[m[2]]) on(a); else off(a);}
  };
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",run); else run();
})();
