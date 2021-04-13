const hamburger = document.querySelector(".mobile_menu .hamburger");
// const mobileUl = document.querySelector(".mobile_menu ul");
const mobileMenu = document.querySelector(".mobile_menu");

hamburger.addEventListener("click", () => {
  console.log("hello");
  mobileMenu.classList.toggle("active");
});
