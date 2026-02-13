(function(){
  // Option A display
  // ORIGIN at (0,0)
  // N increases with +gy
  // S increases with -gy
  // E increases with +gx
  // W increases with -gx
  // Diagonal shows "N-3 / E-7"
  window.coordDisplayFromG = function(gx, gy){
    gx = +gx || 0;
    gy = +gy || 0;

    if(gx === 0 && gy === 0) return "ORIGIN";

    var ax = Math.abs(gx);
    var ay = Math.abs(gy);

    var x = gx > 0 ? ("E-" + ax) : gx < 0 ? ("W-" + ax) : "";
    var y = gy > 0 ? ("N-" + ay) : gy < 0 ? ("S-" + ay) : "";

    return (x && y) ? (y + " / " + x) : (x || y);
  };

  // Legacy tile id for backwards compatibility with old feed formats
  // NOTE: legacy used gy<=0 as N and gy>0 as S
  window.tileLegacyFromG = function(gx, gy){
    gx = +gx || 0;
    gy = +gy || 0;

    var ax = Math.abs(gx);
    var ay = Math.abs(gy);

    var sx = gx < 0 ? "W" : "E";
    var sy = gy <= 0 ? "N" : "S";

    return sx + ax + "-" + sy + ay;
  };

  // Consistent key for gx,gy
  window.keyFromG = function(gx, gy){
    gx = +gx || 0;
    gy = +gy || 0;
    return gx + "," + gy;
  };
})();
