const hamburger = document.querySelector(".header .hamburger");
const moible_menu = document.querySelector(".header .nav-ul");
const menu_item = document.querySelectorAll(".header .nav-list a");
const header = document.querySelector(".header.container");

// 封装监听函数
const addEvent = (ele, type, handle) => {
  if (ele.addEventListener) {
    ele.addEventListener(type, handle, false);
  } else {
    console.log("不支持IE8及以下的浏览器");
  }
};

const toggleHamburger = () => {
  hamburger.classList.toggle("active");
  moible_menu.classList.toggle("active");
};

addEvent(hamburger, "click", toggleHamburger);
menu_item.forEach((item) => {
  addEvent(item, "click", toggleHamburger);
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
