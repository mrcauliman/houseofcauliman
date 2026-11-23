"use strict";

function xrplT(key, fallback, vars) {
  if (window.XRPL_I18N && window.XRPL_I18N.t) return window.XRPL_I18N.t(key, fallback, vars);
  var text = fallback;
  if (vars) {
    Object.keys(vars).forEach(function (name) {
      text = text.split("{" + name + "}").join(String(vars[name]));
    });
  }
  return text;
}

(function () {
  function fmt(value) {
    return Number(value).toLocaleString("en-US", { maximumFractionDigits: 2 });
  }
  function num(input, min) {
    return Math.max(min, Number(input.value) || 0);
  }

  // Three roles: tabs that show one panel at a time.
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".role-tabs [role='tab']"));
  function selectRole(tab, focus) {
    tabs.forEach(function (item) {
      var on = item === tab;
      item.setAttribute("aria-selected", on ? "true" : "false");
      item.tabIndex = on ? 0 : -1;
      var panel = document.getElementById(item.getAttribute("aria-controls"));
      if (panel) panel.hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () { selectRole(tab, false); });
    tab.addEventListener("keydown", function (event) {
      var step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
      if (!step) return;
      if (document.documentElement.dir === "rtl") step = -step;
      event.preventDefault();
      selectRole(tabs[(index + step + tabs.length) % tabs.length], true);
    });
  });
  if (tabs.length) selectRole(tabs[0], false);

  // Shares calculator: subsequent deposit, shares = floor(deposit * shares / assets).
  var vaultAssets = document.getElementById("vaultAssets");
  var vaultShares = document.getElementById("vaultShares");
  var depositAmount = document.getElementById("depositAmount");
  var sharesValue = document.getElementById("sharesValue");
  var sharesCopy = document.getElementById("sharesCopy");
  function calcShares() {
    if (!vaultAssets) return;
    var assets = num(vaultAssets, 1), shares = num(vaultShares, 1), deposit = num(depositAmount, 0);
    var issued = Math.floor(deposit * shares / assets);
    var pct = issued / (shares + issued) * 100;
    sharesValue.textContent = fmt(issued);
    sharesCopy.textContent = xrplT("lending.shares.copy",
      "New shares issued, rounded down to a whole share. After this deposit they are {pct}% of all {total} shares.",
      { pct: pct.toFixed(2), total: fmt(shares + issued) });
  }
  [vaultAssets, vaultShares, depositAmount].forEach(function (input) {
    if (input) input.addEventListener("input", calcShares);
  });

  // Default cover calculator, from the xrpl.org first-loss capital example:
  // covered = min(debtTotal * coverRateMinimum * coverRateLiquidation, defaultAmount).
  var debtTotal = document.getElementById("debtTotal");
  var coverMin = document.getElementById("coverMin");
  var coverLiq = document.getElementById("coverLiq");
  var defaultAmount = document.getElementById("defaultAmount");
  var coverValue = document.getElementById("coverValue");
  var coverCopy = document.getElementById("coverCopy");
  function calcCover() {
    if (!debtTotal) return;
    var debt = num(debtTotal, 0);
    var minRate = Math.min(100, num(coverMin, 0)) / 100;
    var liqRate = Math.min(100, num(coverLiq, 0)) / 100;
    var amount = num(defaultAmount, 0);
    var covered = Math.min(debt * minRate * liqRate, amount);
    var loss = amount - covered;
    coverValue.textContent = fmt(covered);
    coverCopy.textContent = xrplT("lending.cover.copy",
      "First-loss capital covers {covered} of the {amount} in default. The vault absorbs the other {loss}.",
      { covered: fmt(covered), amount: fmt(amount), loss: fmt(loss) });
  }
  [debtTotal, coverMin, coverLiq, defaultAmount].forEach(function (input) {
    if (input) input.addEventListener("input", calcCover);
  });

  // Step-through loan simulator. Every number is an example from xrpl.org.
  var sim = document.getElementById("loanSim");
  var steps = sim ? Array.prototype.slice.call(sim.querySelectorAll(".sim-step")) : [];
  var bars = sim ? Array.prototype.slice.call(sim.querySelectorAll(".sim-track span")) : [];
  var stats = sim ? Array.prototype.slice.call(sim.querySelectorAll(".sim-stat")) : [];
  var progress = document.getElementById("simProgress");
  var back = document.getElementById("simBack");
  var next = document.getElementById("simNext");
  var reset = document.getElementById("simReset");
  var current = 0;
  function renderSim() {
    if (!steps.length) return;
    var step = steps[current];
    var previous = current > 0 ? steps[current - 1] : null;
    steps.forEach(function (item, index) { item.classList.toggle("active", index === current); });
    bars.forEach(function (bar, index) { bar.classList.toggle("on", index <= current); });
    stats.forEach(function (box) {
      var name = box.getAttribute("data-stat");
      var value = step.getAttribute("data-" + name);
      var changed = previous && previous.getAttribute("data-" + name) !== value;
      box.querySelector("b").textContent = fmt(value);
      box.classList.toggle("changed", Boolean(changed));
    });
    progress.textContent = xrplT("lending.sim.progress", "Step {n} of {total}", { n: current + 1, total: steps.length });
    back.disabled = current === 0;
    next.disabled = current === steps.length - 1;
  }
  if (sim && steps.length) {
    sim.classList.add("ready");
    back.addEventListener("click", function () { if (current > 0) { current -= 1; renderSim(); } });
    next.addEventListener("click", function () { if (current < steps.length - 1) { current += 1; renderSim(); } });
    reset.addEventListener("click", function () { current = 0; renderSim(); next.focus(); });
  }

  function renderAll() {
    calcShares();
    calcCover();
    renderSim();
  }
  document.addEventListener("xrpl:language", renderAll);
  renderAll();
})();
