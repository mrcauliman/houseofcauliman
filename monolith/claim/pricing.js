/* MONOLITH CLAIM PRICING v1 */
(function () {
  "use strict";

  var BASE_PRICE = 50;

  function absInt(v){
    var n = parseInt((v==null?"":String(v)).replace(/[^\d-]/g,""), 10);
    if (isNaN(n)) n = 0;
    return Math.abs(n);
  }

  function parseTileInput(raw){
    var s = (raw==null?"":String(raw)).trim().toUpperCase();
    if (!s) return { gx: 0, gy: 0 };

    // allow separators: space, slash, pipe
    s = s.replace(/\s+/g, " ").replace(/[|]/g, "/");

    // numeric "x,y"
    var m = s.match(/^\s*(-?\d+)\s*,\s*(-?\d+)\s*$/);
    if (m) return { gx: parseInt(m[1],10)||0, gy: parseInt(m[2],10)||0 };

    // collect axis tokens anywhere, supports E23-N11, N-11/E-23, "W 5", etc
    var gx = null, gy = null;
    var re = /([NSEW])\s*[-:]?\s*(-?\d+)/g;
    var hit;
    while ((hit = re.exec(s)) !== null){
      var dir = hit[1];
      var num = parseInt(hit[2],10);
      if (isNaN(num)) continue;
      if (dir === "E") gx = Math.abs(num);
      if (dir === "W") gx = -Math.abs(num);
      if (dir === "N") gy = Math.abs(num);
      if (dir === "S") gy = -Math.abs(num);
    }

    // allow bare single axis like "W-1"
    if (gx == null && gy == null){
      var one = s.match(/^\s*([NSEW])\s*[-:]?\s*(-?\d+)\s*$/);
      if (one){
        var d = one[1], n = parseInt(one[2],10)||0;
        if (d === "E") gx = Math.abs(n);
        if (d === "W") gx = -Math.abs(n);
        if (d === "N") gy = Math.abs(n);
        if (d === "S") gy = -Math.abs(n);
      }
    }

    return { gx: gx==null?0:gx, gy: gy==null?0:gy };
  }

  function isPremium(ax){
    // premium numbers and sets
    if (ax === 589 || ax === 143 || ax === 69 || ax === 67 || ax === 420 || ax === 777 || ax === 888) return true;
    if (ax !== 0 && ax <= 99 && (ax % 11 === 0)) return true; // repeats 11..99
    if (ax === 100 || ax === 200 || ax === 300 || ax === 400 || ax === 500) return true;
    return false;
  }

  function tierFor(gx, gy){
    var ax = absInt(gx);
    var ay = absInt(gy);

    // only forever lock
    if (ax === 666 || ay === 666) return { tier: "na", text: "NOT AVAILABLE" };

    var premium = isPremium(ax) || isPremium(ay);
    if (premium) return { tier: "premium", text: "PREMIUM " + BASE_PRICE + " XRP" };

    return { tier: "standard", text: "STANDARD " + BASE_PRICE + " XRP" };
  }

  function ensureBox(){
    var box = document.getElementById("pricingPreview");
    if (box) return box;

    box = document.createElement("div");
    box.id = "pricingPreview";
    box.style.margin = "12px 0";
    box.style.padding = "10px 12px";
    box.style.borderRadius = "10px";
    box.style.border = "1px solid rgba(255,255,255,.12)";
    box.style.background = "rgba(0,0,0,.25)";
    box.style.fontSize = "14px";
    box.style.lineHeight = "1.25";

    var title = document.createElement("div");
    title.textContent = "Pricing Preview";
    title.style.fontWeight = "800";
    title.style.marginBottom = "6px";

    var body = document.createElement("div");
    body.id = "pricingPreviewBody";
    body.style.fontWeight = "700";
    body.textContent = "STANDARD " + BASE_PRICE + " XRP";

    box.appendChild(title);
    box.appendChild(body);

    // place near top of first form or main container
    var host =
      document.querySelector("form") ||
      document.querySelector(".panel") ||
      document.querySelector(".wrap") ||
      document.body;
    host.insertBefore(box, host.firstChild);

    return box;
  }

  function findTileInput(){
    // prefer common ids
    return (
      document.getElementById("tile") ||
      document.getElementById("coord") ||
      document.getElementById("coords") ||
      document.querySelector("input[name='tile']") ||
      document.querySelector("input[name='coords']") ||
      document.querySelector("input[type='text']")
    );
  }

  function paint(){
    var box = ensureBox();
    var body = document.getElementById("pricingPreviewBody");
    if (!body) return;

    var inp = findTileInput();
    var gx = 0, gy = 0;
    if (inp){
      var p = parseTileInput(inp.value);
      gx = p.gx; gy = p.gy;
    }

    var t = tierFor(gx, gy);
    body.textContent = t.text;

    // subtle emphasis without touching global styles
    if (t.tier === "premium"){
      box.style.borderColor = "rgba(255,215,0,.45)";
    } else if (t.tier === "na"){
      box.style.borderColor = "rgba(220,20,60,.55)";
    } else {
      box.style.borderColor = "rgba(255,255,255,.12)";
    }
  }

  function boot(){
    ensureBox();
    paint();

    var inp = findTileInput();
    if (inp){
      inp.addEventListener("input", function(){ paint(); });
      inp.addEventListener("change", function(){ paint(); });
      inp.addEventListener("blur", function(){ paint(); });
    }

    // keep it fresh if claim page scripts rewrite the input programmatically
    setInterval(paint, 1200);
  }

  document.addEventListener("DOMContentLoaded", boot);
})();
