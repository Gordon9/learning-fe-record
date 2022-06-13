const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const elem = document.querySelector(".product-wrapper");
const iso = new Isotope(elem, {
  itemSelector: ".product-card",
  layoutMode: "fitRows",
});

const filtersElem = document.querySelector("#filter");
filtersElem.addEventListener("click", function (event) {
  if (!matchesSelector(event.target, "button")) {
    return;
  }
  const filterValue = event.target.getAttribute("data-filter");
  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
let buttonGroups = document.querySelector(".filter-group");

// todo(why clientHeight)
let len = buttonGroups.clientHeight;
for (let i = 0; i < len; i++) {
  let buttonGroup = buttonGroups[i];

  radioButtonGroup(buttonGroup);
}

function radioButtonGroup(buttonGroup) {
  buttonGroups.addEventListener("click", function (event) {
    if (!matchesSelector(event.target, "button")) {
      return;
    }
    buttonGroups.querySelector(".is-checked").classList.remove("is-checked");
    event.target.classList.add("is-checked");
  });
}
