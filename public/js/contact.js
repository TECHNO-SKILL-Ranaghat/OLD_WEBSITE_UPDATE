const items = document.querySelectorAll('.contact-box, .contact-info');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

items.forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "translateY(400px)";
    el.style.transition = "1s";
    observer.observe(el);
});