/* MONOLITH BADGES v1 */
(function(){
  function tier(gx,gy){
    // 666 is the only forever lock
    if(Math.abs(gx)===666 || Math.abs(gy)===666) return "na";

    // PREMIUM mapping comes next
    return "";
  }

  function apply(){
    var cells = document.querySelectorAll("#world .cell");
    for(var i=0;i<cells.length;i++){
      var el = cells[i];
      var gx = +el.getAttribute("data-gx");
      var gy = +el.getAttribute("data-gy");
      if(!isFinite(gx) || !isFinite(gy)) continue;

      el.classList.remove("badge-premium","badge-na");
      var t = tier(gx,gy);
      if(t==="na") el.classList.add("badge-na");
      if(t==="premium") el.classList.add("badge-premium");
    }
  }

  apply();
  setInterval(apply, 750);
})();
