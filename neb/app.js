(function () {
  var titles = {
    welcome: "Welcome",
    signin: "Sign in",
    create: "Create wallet",
    fund: "Fund",
    access: "Trading-only access",
    limits: "Limits",
    dash: "Dashboard",
    plans: "Plans"
  };

  function currentId() {
    var id = (location.hash || "").replace(/^#/, "");
    return Object.prototype.hasOwnProperty.call(titles, id) ? id : "welcome";
  }

  function sync(moveFocus) {
    var id = currentId();
    document.title = "NEB · " + titles[id] + " · Preview, launching soon";
    var links = document.querySelectorAll("[data-screen-link]");
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute("href") === "#" + id) links[i].setAttribute("aria-current", "page");
      else links[i].removeAttribute("aria-current");
    }
    if (!moveFocus) return;
    var heading = document.getElementById(id + "-title");
    if (heading) heading.focus({ preventScroll: true });
  }

  function fit() {
    var bar = document.querySelector(".topbar");
    if (bar) document.documentElement.style.setProperty("--topbar", bar.offsetHeight + "px");
  }

  window.addEventListener("hashchange", function () { sync(true); });
  window.addEventListener("resize", fit);
  fit();
  sync(false);
})();
