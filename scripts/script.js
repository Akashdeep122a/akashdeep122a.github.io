const form = document.getElementById("contact-form");
const modal = document.getElementById("popup-modal");
const closeModal = document.getElementById("close-modal");
const messageInput = document.getElementById("message");
const popupMessage = document.getElementById("popup-message");



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

//make heart

const canvas = document.getElementById("hearts-canvas");
const ctx = canvas.getContext("2d");
let hearts = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createHeart() {
    const x = Math.random() * canvas.width;
    const y = -50; // Start above the visible area
    const size = Math.random() * 20 + 15; // Random size
    const speed = Math.random() * 2 + 2; // Random falling speed
    const opacity = Math.random() * 0.5 + 0.5; // Random opacity
    return { x, y, size, speed, opacity };
}

function drawHeart({ x, y, size, opacity }) {
    ctx.globalAlpha = opacity;
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - size, y - size, x - size * 1.5, y + size / 3, x, y + size);
    ctx.bezierCurveTo(x + size * 1.5, y + size / 3, x + size, y - size, x, y);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1.0; // Reset opacity
}

function updateHearts() {
    hearts.forEach((heart) => {
        heart.y += heart.speed; // Move heart down
        if (heart.y > canvas.height) {
            heart.y = -50; // Reset position when it falls off screen
            heart.x = Math.random() * canvas.width;
        }
    });
}

function renderHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    hearts.forEach(drawHeart);
}

function animateHearts() {
    updateHearts();
    renderHearts();
    requestAnimationFrame(animateHearts);
}

// Resize canvas on window resize
window.addEventListener("resize", resizeCanvas);
resizeCanvas(); // Initial canvas size

// Populate hearts array and start animation
for (let i = 0; i < 20; i++) {
    hearts.push(createHeart());
}
animateHearts();

// Trigger the hearts animation when modal is shown
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const message = messageInput.value.trim();
    if (message) {
        popupMessage.textContent = "Thank you for sharing! I'll be waiting for your reply. 😊";
    } else {
        popupMessage.textContent = "Please write something before sending. 😊";
    }
    popupMessage.style.color = "black";
    modal.style.display = "flex"; // Show the modal
    hearts = []; // Reset hearts
    for (let i = 0; i < 50; i++) {
        hearts.push(createHeart());
    }
});