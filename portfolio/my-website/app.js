const hamburger = document.querySelector(".header .hamburger");
const moible_menu = document.querySelector(".header .nav-ul");
const menu_item = document.querySelectorAll(".header .nav-list a");
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  moible_menu.classList.toggle("active");
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    moible_menu.classList.toggle("active");
  });
});

document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#fff";
    header.style.boxShadow = "0px 1px 2px rgba(0, 0, 0, 0.15)";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
  }
});
