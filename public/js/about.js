const elements = document.querySelectorAll(".animate, .animate-scale");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => observer.observe(el));


const parallaxImg = document.querySelector(".about-img img");

window.addEventListener("scroll", () => {
    const rect = parallaxImg.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
        let scrollPercent = rect.top / windowHeight;
        let move = scrollPercent * 50; // adjust strength

        parallaxImg.style.transform = `translateY(${move}px)`;
    }
});