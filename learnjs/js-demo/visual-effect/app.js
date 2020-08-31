function scrollAppear() {
    const introText = document.querySelector('.intro-text');
    let introPosition = introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (introPosition < screenPosition) {
        introText.classList.add('intro-appear');
    }
}

window.addEventListener('scroll', scrollAppear);