const searchIcon = document.querySelector(".fa-search");
const closeIcon = document.querySelector(".fa-times");
const searchEl = document.querySelector(".search");
const searchInput = document.querySelector(".search input");

const showSearchEl = () => {
  searchEl.style.transform = "translateX(0)";
  setTimeout(() => {
    searchEl.style.width = "30rem";
  }, 1000);
  setTimeout(() => {
    searchInput.setAttribute("placeholder", "Search");
  }, 2000);
};

const hideSearchEl = () => {
  searchInput.setAttribute("placeholder", "");
  setTimeout(() => {
    searchEl.style.width = "4.5rem";
  }, 1000);
  setTimeout(() => {
    searchEl.style.transform = "translateX(200%)";
  }, 2000);
};

searchIcon.addEventListener("click", () => {
  searchIcon.style.transform = "translateY(200%)";
  closeIcon.style.transform = "translateY(0)";
  showSearchEl();
});

closeIcon.addEventListener("click", () => {
  searchIcon.style.transform = "translateY(0)";
  closeIcon.style.transform = "translateY(-200%)";
  hideSearchEl();
});
