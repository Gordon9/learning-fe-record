const hamburger = document.querySelector(".mobile_menu .hamburger");
// const mobileUl = document.querySelector(".mobile_menu ul");
const mobileMenu = document.querySelector(".mobile_menu");
const eleMore = document.querySelector(".container_ul");

let display = false;

hamburger.addEventListener("click", () => {
  console.log("hello");
  mobileMenu.classList.toggle("active");

  display = !display;
  eleMore.style.height = display ? "217px" : "0px";
  return false;
});
