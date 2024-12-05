const form = document.getElementById("contact-form");
const modal = document.getElementById("popup-modal");
const closeModal = document.getElementById("close-modal");
const messageInput = document.getElementById("message");
const popupMessage = document.getElementById("popup-message");

// Form submit event
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const message = messageInput.value.trim();
    if (message) {
        popupMessage.textContent = "Thank you for sharing! I'll be waiting for your reply. 😊";
        popupMessage.style.color = "black";
        modal.style.display = "flex"; // Show the modal
    } else {
        popupMessage.textContent = "Please write something before sending. 😊";
        modal.style.display = "flex"; // Show the modal
        popupMessage.style.color = "black";
    }
});

// Close modal event
closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close modal if clicking outside the content
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});