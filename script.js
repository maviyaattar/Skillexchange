// script.js: Handles the interactivity for the SkillExchange platform

document.addEventListener("DOMContentLoaded", () => {
    // Example: Modal toggle functionality
    const modal = document.querySelector(".modal");
    const openModalButton = document.querySelector(".open-modal-button");
    const closeModalButton = document.querySelector(".close-modal-button");

    if (openModalButton && closeModalButton && modal) {
        openModalButton.addEventListener("click", () => {
            modal.classList.add("active");
        });

        closeModalButton.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    }
});