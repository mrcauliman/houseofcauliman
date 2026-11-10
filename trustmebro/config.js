// Trust Me Bro links. These two values are the only places the URLs live.
// Channel handle: @TrustMeBroXRP. Replace TRUST_ME_BRO_YOUTUBE_CHANNEL_URL if the
// confirmed URL changes. Set TRUST_ME_BRO_EPISODE_1_VIDEO_URL when Episode 1
// is public. Leave that value empty until then.
var TRUST_ME_BRO_YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@TrustMeBroXRP";
var TRUST_ME_BRO_EPISODE_1_VIDEO_URL = "https://www.youtube.com/watch?v=Zhd2T_-LzPI";

function applyTrustMeBroLinks() {
  var channel = TRUST_ME_BRO_YOUTUBE_CHANNEL_URL;
  if (!channel) return;

  document.querySelectorAll("[data-tmb-channel]").forEach(function (el) {
    el.setAttribute("href", channel);
  });

  document.querySelectorAll("[data-tmb-channel-slot]").forEach(function (el) {
    var slot = el.getAttribute("data-tmb-channel-slot");
    if (slot === "href2") el.dataset.href2 = channel;
    if (slot === "href") el.dataset.href = channel;
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", applyTrustMeBroLinks);
} else {
  applyTrustMeBroLinks();
}
