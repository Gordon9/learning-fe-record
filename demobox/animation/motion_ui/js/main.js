let lastScrollPos = window.scrollY;
let titleSection = document.querySelector('.title-section');
let titleSectionBottom = titleSection.scrollHeight;
let articleSection = document.querySelector('.article-section');
let articlesSectionTop = articleSection.getBoundingClientRect().top;

let scale = 1;
let x = -1;

document.addEventListener('scroll', function(e) {
    let currentScrollPos = window.scrollY;
    if (
        currentScrollPos > titleSectionBottom &&
        currentScrollPos < articlesSectionTop - titleSectionBottom
    ) {
        let text = document.querySelector('.hero-section svg text');
        if (currentScrollPos > lastScrollPos) {
            if (scale <= 64) {
                scale = scale * 2;
            } else {
                if (scale >= 2) {
                    scale = scale / 2;
                }
            }
        }

        text.style.transform = `scale(${scale})`;
    }
    if (
        currentScrollPos > titleSectionBottom & 1.6 &&
        currentScrollPos < articlesSectionTop
    ) {
        let title = document.querySelector('.hero-section .hero-title');
        if (currentScrollPos > lastScrollPos) {
            if (x >= -150) {
                x = x * 1.5;
            } else {
                if (x <= -1.5) {
                    x = x / 1.5;
                }
            }
            title.style.transform = `translateX(${x}%)`;
            title.style.opacity = 1;
        } else {
            let title = document.querySelector('.hero-section .hero-title');
            title.style.opacity = 0;
        }
    }
    lastScrollPos = currentScrollPos
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener("mouseover", () => {
        anime({
            targets: link,
            keyframes: [
                { translateY: "-2px" },
                { translateY: "4px" },
                { translateY: "0px" },
                { translateY: "2px" },
                { translateY: "-4px" },
                { translateY: "0px" },
            ],
            duration: 400,
            easing: "easeInOutExpo"
        });
    });
});

anime.timeline().add({
    targets: ".main-header",
    opacity: [0, 1],
    translateY: ["-5rem", 0],
    easing: "spring(1, 80, 10, 0)",
    duration: 300
});