const btn = document.getElementById("changeColor");
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    console.log('hey');
    body.classList.toggle('alt-color');
    console.log('hello');
});