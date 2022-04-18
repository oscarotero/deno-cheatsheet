import "./x-modal.js";

const modal = document.querySelector("x-modal");

document.querySelectorAll("[data-modal]").forEach((link) => {
  const { dataset } = link;
  const tabs = {};

  if (dataset.mdn) {
    tabs["See at MDN"] = dataset.mdn;
  }

  link.addEventListener("click", (e) => {
    e.preventDefault();
    modal.open(link.href, tabs);
  });
});
document.querySelectorAll("button[data-dialog]").forEach((btn) => {
  const next = btn.nextElementSibling;
  const dialog = next?.matches("dialog") ? next : null;
  btn.addEventListener("click", () => {
    dialog?.showModal();
  });
  dialog?.querySelector("button")?.addEventListener("click", () => {
    dialog?.close();
  });
});
