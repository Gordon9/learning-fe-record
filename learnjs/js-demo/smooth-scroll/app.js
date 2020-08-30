function smoothScroll(target, duration) {
    let sectionTarget = document.querySelector(target);
    let targetPosition = sectionTarget.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    requestAnimationFrame(animation);

}

let section1 = document.querySelector('.section1');
let section2 = document.querySelector('.section2');

section1.addEventListener('click', () => {
    smoothScroll('.section2', 1000);
})
section2.addEventListener('click', () => {
    smoothScroll('.section1', 1000);
})