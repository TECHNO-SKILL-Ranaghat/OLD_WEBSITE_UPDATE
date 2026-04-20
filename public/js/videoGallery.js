const cards = document.querySelectorAll(".video-card");
const frame = document.getElementById("videoFrame");
const modal = new bootstrap.Modal(document.getElementById("videoModal"));

cards.forEach(card => {
    card.addEventListener("click", () => {
        const videoURL = card.getAttribute("data-video");
        frame.src = videoURL + "?autoplay=1";
        modal.show();
    });
});

// STOP VIDEO WHEN CLOSED
document.getElementById("videoModal").addEventListener("hidden.bs.modal", () => {
    frame.src = "";
});