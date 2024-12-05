document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const message = document.getElementById("message").value;
    if (message) {
        alert("Thanks for sharing! I'll be waiting for your reply.");
    } else {
        alert("Please write something before sending 😊.");
    }
});
