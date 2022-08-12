const sectionsContainer = document.querySelector(".page-sections");
const sections = document.querySelectorAll(".page-section");
const nav = document.querySelector(".nav-sections");
const menu = nav.querySelector(".menu");
const links = nav.querySelectorAll(".menu-item-link");
const activeLine = nav.querySelector(".active-line");
const sectionOffset = nav.offsetHeight + 24;
const activeClass = "active";
let activeIndex = 0;
let isScrolling = true;
let userScroll = true;

const setActiveClass = () => {
  links[activeIndex].classList.add(activeClass);
};

const removeActiveClass = () => {
  links[activeIndex].classList.remove(activeClass);
};

const moveActiveLine = () => {
  const link = links[activeIndex];
  const linkX = link.getBoundingClientRect().x;
  const menuX = menu.getBoundingClientRect().x;

  activeLine.style.transform = `transLateX(${
    menu.scrollLeft - menuX + linkX
  }px)`;
  activeLine.style.width = `${link.offsetWidth}px`;
};

const handleActiveLinkUpdate = (current) => {
  removeActiveClass();
  activeIndex = current;
  setActiveClass();
  moveActiveLine();
};

const init = () => {
  moveActiveLine(links[0]);
  document.documentElement.style.setProperty("--section-offset", sectionOffset);
};

links.forEach((link, index) =>
  link.addEventListener("click", () => {
    userScroll = false;
    handleActiveLinkUpdate(index);
  })
);

window.addEventListener("scroll", () => {
  const currentIndex =
    sectionsContainer.getBoundingClientRect().top < 0
      ? sections.length -
        1 -
        [...sections]
          .reverse()
          .findIndex(
            (section) => window.scrollY >= section.offsetTop - sectionOffset * 2
          )
      : 0;

  if (userScroll && activeIndex !== currentIndex) {
    handleActiveLinkUpdate(currentIndex);
  } else {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(() => (userScroll = true), 100);
  }
});

init();
