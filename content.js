const modal = document.getElementsByClassName("top-level-modal-container");
if (modal.length > 0) {
    modal[0].style.display = "none";
}
if (document.body.classList.contains("overflow-hidden")) {
    document.body.classList.remove("overflow-hidden");
}
