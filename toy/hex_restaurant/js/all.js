// window.onload = function () {
//   init();
// };

const burgerIcon = document.querySelector(".burger__icon");
const topMenu = document.querySelector(".top__menu");

// const body = document.getElementsByTagName("body")[0];
// console.log(body);
// const topMenu = document.querySelector(".top__menu");

// function init() {
//   burgerIcon.addEventListener("click", (e) => {
//     e.preventDefault();
//     body.classList.toggleClass("slide-down");
//   });
// }

burgerIcon.addEventListener("click", (e) => {
  e.preventDefault();
  topMenu.classList.toggle("slide-down");
});
