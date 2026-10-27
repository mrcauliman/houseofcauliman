/* Compatibility shim for cached dashboard HTML that still requests this file.
   Language selection lives in /xrpl/i18n/i18n.js and uses data-i18n keys. */
(function () {
  "use strict";
  if (window.XRPL_I18N || document.querySelector('script[src="/xrpl/i18n/i18n.js"]')) return;
  var catalog = document.createElement("script");
  catalog.src = "/xrpl/i18n/catalogs.js";
  catalog.defer = true;
  var runtime = document.createElement("script");
  runtime.src = "/xrpl/i18n/i18n.js";
  runtime.defer = true;
  document.head.appendChild(catalog);
  document.head.appendChild(runtime);
})();
