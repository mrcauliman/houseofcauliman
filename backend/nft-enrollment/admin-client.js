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

let csrfTokenPromise = null;

function getCsrfToken() {
  if (!csrfTokenPromise) {
    csrfTokenPromise =
      fetch("/admin/csrf", {
        credentials: "same-origin",
        cache: "no-store"
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(
              "Could not load CSRF token"
            );
          }

          return response.json();
        })
        .then(data => {
          const token =
            String(
              data.csrfToken || ""
            );

          if (!token) {
            throw new Error(
              "CSRF token missing"
            );
          }

          return token;
        })
        .catch(error => {
          csrfTokenPromise = null;
          throw error;
        });
  }

  return csrfTokenPromise;
}

function applyCsrf(form, token) {
  let input =
    form.querySelector(
      'input[name="_csrf"]'
    );

  if (!input) {
    input =
      document.createElement("input");

    input.type = "hidden";
    input.name = "_csrf";

    form.appendChild(input);
  }

  input.value = token;
}

async function installCsrf() {
  try {
    const token =
      await getCsrfToken();

    document
      .querySelectorAll(
        'form[method="post"]'
      )
      .forEach(form => {
        applyCsrf(
          form,
          token
        );
      });
  } catch (error) {
    console.error(
      "Admin CSRF initialization failed",
      error
    );
  }
}

document.addEventListener(
  "submit",
  async event => {
    const form = event.target;

    if (
      !(form instanceof HTMLFormElement) ||
      String(form.method).toLowerCase() !== "post"
    ) {
      return;
    }

    const existing =
      form.querySelector(
        'input[name="_csrf"]'
      );

    if (
      existing &&
      existing.value
    ) {
      return;
    }

    event.preventDefault();

    try {
      const token =
        await getCsrfToken();

      applyCsrf(
        form,
        token
      );

      if (form.requestSubmit) {
        form.requestSubmit(
          event.submitter || undefined
        );
      } else {
        HTMLFormElement
          .prototype
          .submit
          .call(form);
      }
    } catch {
      alert(
        "Your admin session could not be verified. Reload and sign in again."
      );
    }
  },
  true
);

document.addEventListener("DOMContentLoaded", () => {

  installCsrf();

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

/* THE 52 — Builder Access admin */

function builderEsc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function builderPostJson(url, payload) {
  const csrf = await getCsrfToken();

  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...payload,
      _csrf: csrf
    })
  });

  const data = await response.json()
    .catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.error ||
      `Request failed with HTTP ${response.status}`
    );
  }

  return data;
}

async function openBuilderReport(code) {
  const panel =
    document.getElementById("builderReportDetail");

  if (!panel) return;

  panel.style.display = "block";
  panel.innerHTML =
    `<div class="small">Loading ${builderEsc(code)}…</div>`;

  try {
    const response = await fetch(
      `/admin/builder/reports/${encodeURIComponent(code)}`,
      {
        credentials: "same-origin",
        cache: "no-store"
      }
    );

    if (!response.ok) {
      throw new Error("Could not load Builder report");
    }

    const data = await response.json();
    const r = data.report || {};

    const attachments =
      (data.attachments || [])
        .map(a => `
          <div>
            <a
              href="/admin/builder/attachments/${a.id}"
              target="_blank"
              rel="noopener"
            >
              ${builderEsc(a.original_name)}
            </a>
          </div>
        `)
        .join("");

    const history =
      (data.history || [])
        .map(h => `
          <div style="
            border-left:2px solid var(--line);
            padding-left:10px;
            margin-top:9px;
          ">
            <strong>
              ${builderEsc(
                String(h.new_status || "")
                  .replaceAll("_"," ")
              )}
            </strong>

            <div class="small">
              ${builderEsc(
                new Date(h.created_at).toLocaleString()
              )}
            </div>

            ${
              h.note
                ? `<div class="small">${builderEsc(h.note)}</div>`
                : ""
            }
          </div>
        `)
        .join("");

    panel.innerHTML = `
      <div style="
        display:flex;
        justify-content:space-between;
        gap:12px;
        align-items:flex-start;
      ">
        <div>
          <div class="brand">
            ${builderEsc(r.report_code)}
          </div>

          <h2 style="margin:0">
            ${builderEsc(r.title)}
          </h2>

          <div class="small">
            ${builderEsc(r.reporter_wallet)}
          </div>
        </div>
      </div>

      <div class="grid two" style="margin-top:18px">
        <div>
          <label>Category</label>
          <div>${builderEsc(r.category)}</div>
        </div>

        <div>
          <label>Severity</label>
          <div>${builderEsc(r.severity)}</div>
        </div>
      </div>

      ${
        r.project_area
          ? `
            <div style="margin-top:16px">
              <label>Project / Feature</label>
              <div>${builderEsc(r.project_area)}</div>
            </div>
          `
          : ""
      }

      <div style="margin-top:16px">
        <label>What Happened</label>
        <div style="white-space:pre-wrap">
          ${builderEsc(r.summary)}
        </div>
      </div>

      ${
        r.expected_behavior
          ? `
            <div style="margin-top:16px">
              <label>Expected Behavior</label>
              <div style="white-space:pre-wrap">
                ${builderEsc(r.expected_behavior)}
              </div>
            </div>
          `
          : ""
      }

      ${
        r.reproduction_steps
          ? `
            <div style="margin-top:16px">
              <label>Steps to Reproduce</label>
              <div style="white-space:pre-wrap">
                ${builderEsc(r.reproduction_steps)}
              </div>
            </div>
          `
          : ""
      }

      ${
        r.device_browser
          ? `
            <div style="margin-top:16px">
              <label>Device / Browser</label>
              <div>${builderEsc(r.device_browser)}</div>
            </div>
          `
          : ""
      }

      ${
        r.notes
          ? `
            <div style="margin-top:16px">
              <label>Reporter Notes</label>
              <div style="white-space:pre-wrap">
                ${builderEsc(r.notes)}
              </div>
            </div>
          `
          : ""
      }

      ${
        attachments
          ? `
            <div style="margin-top:16px">
              <label>Attachments</label>
              ${attachments}
            </div>
          `
          : ""
      }

      <div style="margin-top:20px">
        <label>Status</label>

        <select id="builderReportStatus">
          ${[
            "submitted",
            "reviewing",
            "in_progress",
            "fixed",
            "closed"
          ].map(status => `
            <option
              value="${status}"
              ${r.status === status ? "selected" : ""}
            >
              ${builderEsc(status.replaceAll("_"," "))}
            </option>
          `).join("")}
        </select>
      </div>

      <div style="margin-top:14px">
        <label>Admin Notes</label>

        <textarea id="builderAdminNotes">${
          builderEsc(r.admin_notes || "")
        }</textarea>
      </div>

      <div class="actions" style="margin-top:14px">
        <button
          type="button"
          class="btn primary"
          id="builderReportSave"
          data-code="${builderEsc(r.report_code)}"
        >
          SAVE REPORT
        </button>
      </div>

      ${
        history
          ? `
            <div style="margin-top:22px">
              <label>Status History</label>
              ${history}
            </div>
          `
          : ""
      }
    `;

    const save =
      document.getElementById("builderReportSave");

    save?.addEventListener("click", async () => {
      save.disabled = true;

      try {
        await builderPostJson(
          `/admin/builder/reports/${encodeURIComponent(code)}`,
          {
            status:
              document.getElementById(
                "builderReportStatus"
              ).value,

            adminNotes:
              document.getElementById(
                "builderAdminNotes"
              ).value
          }
        );

        alert("Builder report updated.");
        window.location.reload();
      } catch (error) {
        alert(error.message);
      } finally {
        save.disabled = false;
      }
    });

  } catch (error) {
    panel.innerHTML =
      `<div class="small">${builderEsc(error.message)}</div>`;
  }
}

function builderItemPayload(card) {
  const field = name =>
    card.querySelector(`[data-field="${name}"]`);

  return {
    itemType: field("itemType")?.value || "",
    title: field("title")?.value || "",
    summary: field("summary")?.value || "",
    actionLabel: field("actionLabel")?.value || "",
    actionUrl: field("actionUrl")?.value || "",
    sortOrder:
      Number(field("sortOrder")?.value || 0),
    active:
      Boolean(field("active")?.checked),
    startsAt: null,
    endsAt: null
  };
}

function initBuilderAdmin() {
  const reportRows =
    document.querySelectorAll(
      "[data-builder-report]"
    );

  if (!reportRows.length &&
      !document.getElementById("builderItemCreate")) {
    return;
  }

  reportRows.forEach(row => {
    row.addEventListener("click", () => {
      openBuilderReport(
        row.dataset.builderReport
      );
    });
  });

  const filter =
    document.getElementById("builderStatusFilter");

  filter?.addEventListener("change", () => {
    const selected = filter.value;

    reportRows.forEach(row => {
      row.style.display =
        !selected ||
        row.dataset.builderStatus === selected
          ? ""
          : "none";
    });
  });

  document
    .querySelectorAll(".builder-item-save")
    .forEach(button => {
      button.addEventListener("click", async () => {
        const card =
          button.closest("[data-builder-item]");

        if (!card) return;

        button.disabled = true;

        try {
          await builderPostJson(
            `/admin/builder/items/${card.dataset.builderItem}`,
            builderItemPayload(card)
          );

          alert("Builder Access item saved.");
          window.location.reload();
        } catch (error) {
          alert(error.message);
        } finally {
          button.disabled = false;
        }
      });
    });

  const create =
    document.getElementById("builderItemCreate");

  create?.addEventListener("click", async () => {
    const title =
      document.getElementById(
        "builderItemTitle"
      ).value.trim();

    if (!title) {
      alert("Title is required.");
      return;
    }

    create.disabled = true;

    try {
      await builderPostJson(
        "/admin/builder/items",
        {
          itemType:
            document.getElementById(
              "builderItemType"
            ).value,

          title,

          summary:
            document.getElementById(
              "builderItemSummary"
            ).value,

          actionLabel:
            document.getElementById(
              "builderItemActionLabel"
            ).value,

          actionUrl:
            document.getElementById(
              "builderItemActionUrl"
            ).value,

          sortOrder:
            Number(
              document.getElementById(
                "builderItemSortOrder"
              ).value || 0
            ),

          active:
            document.getElementById(
              "builderItemActive"
            ).checked,

          startsAt: null,
          endsAt: null
        }
      );

      alert("Builder Access item created.");
      window.location.reload();
    } catch (error) {
      alert(error.message);
    } finally {
      create.disabled = false;
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initBuilderAdmin
  );
} else {
  initBuilderAdmin();
}
