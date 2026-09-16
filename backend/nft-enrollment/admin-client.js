function getChecks(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function selectAll() {
  getChecks(".bulk-check")
    .forEach(el => el.checked = true);
}

function clearAll() {
  getChecks(".bulk-check")
    .forEach(el => el.checked = false);
}

function selectEligible() {
  getChecks(".eligible-check")
    .forEach(el => el.checked = true);

  updateCount();
}

function clearEligible() {
  getChecks(".eligible-check")
    .forEach(el => el.checked = false);

  updateCount();
}

function updateCount() {
  const selected = getChecks(".eligible-check")
    .filter(el => el.checked)
    .length;

  const button = document.getElementById("freezeButton");

  if (!button) return;

  button.textContent =
    "FREEZE " +
    selected +
    " SELECTED WALLET" +
    (selected === 1 ? "" : "S");

  button.disabled = selected === 0;
}


async function copyHandles(selector) {
  const handles = getChecks(selector)
    .filter(el => el.checked)
    .map(el => el.dataset.handle)
    .filter(Boolean);

  if (!handles.length) {
    alert("No handles selected.");
    return;
  }

  const text = handles.join("\n");

  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const box = document.createElement("textarea");
    box.value = text;
    document.body.appendChild(box);
    box.select();
    document.execCommand("copy");
    box.remove();
  }

  alert(
    handles.length +
    " handle" +
    (handles.length === 1 ? "" : "s") +
    " copied."
  );
}

async function copyWallets(selector) {
  const wallets = getChecks(selector)
    .filter(el => el.checked)
    .map(el => el.dataset.wallet)
    .filter(Boolean);

  if (!wallets.length) {
    alert("No wallets selected.");
    return;
  }

  try {
    await navigator.clipboard.writeText(
      wallets.join("\n")
    );

    alert(
      wallets.length +
      " wallet" +
      (wallets.length === 1 ? "" : "s") +
      " copied."
    );
  } catch {
    const text = wallets.join("\n");

    const box = document.createElement("textarea");
    box.value = text;
    document.body.appendChild(box);
    box.select();
    document.execCommand("copy");
    box.remove();

    alert("Selected wallets copied.");
  }
}


async function copyFrozenWallets() {
  const wallets = Array.from(
    document.querySelectorAll(".frozen-recipient")
  )
    .map(el => el.dataset.wallet)
    .filter(Boolean);

  if (!wallets.length) {
    alert("No frozen wallets found.");
    return;
  }

  const text = wallets.join("\n");

  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const box = document.createElement("textarea");
    box.value = text;
    document.body.appendChild(box);
    box.select();
    document.execCommand("copy");
    box.remove();
  }

  alert(
    wallets.length +
    " frozen wallet" +
    (wallets.length === 1 ? "" : "s") +
    " copied."
  );
}

async function copyScript() {
  const box = document.getElementById("jarvisScript");

  if (!box) return;

  try {
    await navigator.clipboard.writeText(box.value);
  } catch {
    box.select();
    document.execCommand("copy");
  }

  alert("JARVIS drop script copied.");
}

document.addEventListener("DOMContentLoaded", () => {

  getChecks(".eligible-check")
    .forEach(el =>
      el.addEventListener("change", updateCount)
    );

  document.addEventListener("click", event => {
    const button = event.target.closest("[data-action]");

    if (!button) return;

    const action = button.dataset.action;

    if (action === "select-all") {
      selectAll();
    }

    if (action === "clear-all") {
      clearAll();
    }

    if (action === "copy-bulk-handles") {
      copyHandles(".bulk-check");
    }

    if (action === "select-eligible") {
      selectEligible();
    }

    if (action === "clear-eligible") {
      clearEligible();
    }

    if (action === "copy-eligible-wallets") {
      copyWallets(".eligible-check");
    }

    if (action === "copy-frozen-wallets") {
      copyFrozenWallets();
    }

    if (action === "copy-script") {
      copyScript();
    }
  });

  updateCount();
});
