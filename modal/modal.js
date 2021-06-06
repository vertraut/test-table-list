export const modalRefs = {
  closeModalBtn: document.querySelector("[data-close-modal]"),
  backdrop: document.querySelector("[data-backdrop]"),
  content: document.querySelector("[data-modal-content]"),
};

modalRefs.closeModalBtn.addEventListener("click", onCloseModal);

let eventId = null;

export function onOpenModal(markup) {
  document.body.classList.add("modal-open");
  modalRefs.backdrop.classList.remove("is-hidden");
  modalRefs.content.innerHTML = markup;
  eventId = modalRefs.backdrop.addEventListener("click", onBackdropClick);
}

export function onCloseModal() {
  document.body.classList.remove("modal-open");
  modalRefs.backdrop.classList.add("is-hidden");
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) onCloseModal();
}
