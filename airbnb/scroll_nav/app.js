const sectionsContainer = document.querySelector(".page-sections");
const sections = document.querySelectorAll(".page-section");
const nav = document.querySelector(".nav-sections");
const menu = nav.querySelector(".menu");
const links = nav.querySelectorAll(".menu-item-link");
const activeLine = nav.querySelector(".active-line");
const sectionOffset = nav.offsetHeight + 24;
const activeClass = "active";
const buttons = document.querySelectorAll(".btn");
const standard = buttons[0];
const curVersion = document.querySelector("#version");

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

const setMenuLeftPosition = (position) => {
  menu.scrollTo({
    left: position,
    behavior: "smooth",
  });
};

const checkMenuOverflow = () => {
  const activeLink = links[activeIndex].getBoundingClientRect();
  const offset = 30;

  if (Math.floor(activeLink.right) > window.innerWidth) {
    setMenuLeftPosition(
      menu.scrollLeft + activeLink.right - window.innerWidth + offset
    );
  } else if (activeLink.left < 0) {
    setMenuLeftPosition(menu.scrollLeft + activeLink.left - offset);
  }
};

const handleActiveLinkUpdate = (current) => {
  removeActiveClass();
  activeIndex = current;
  checkMenuOverflow();
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

[...buttons][0].classList.remove("on");

buttons.forEach((button) =>
  button.addEventListener("click", () => hasClass(button))
);

function hasClass(button) {
  if (button.classList.contains("standard")) {
    curVersion.classList.remove(
      "micro",
      "floating",
      "bordered",
      "shadows",
      "rounded",
      "highlight-bar"
    );
    buttons.forEach((button) => button.classList.remove("on"));
    moveActiveLine(links[0]);
  }

  if (button.classList.contains("micro")) {
    button.classList.toggle("on");
    standard.classList.remove("on");
    curVersion.classList.toggle("micro");
  }

  if (button.classList.contains("floating")) {
    button.classList.toggle("on");
    standard.classList.remove("on");
    curVersion.classList.toggle("floating");
  }
  if (button.classList.contains("bordered")) {
    button.classList.toggle("on");
    standard.classList.remove("on");
    curVersion.classList.toggle("bordered");
  }
  if (button.classList.contains("shadows")) {
    button.classList.toggle("on");
    standard.classList.remove("on");
    curVersion.classList.toggle("shadows");
  }
  if (button.classList.contains("rounded")) {
    button.classList.toggle("on");
    standard.classList.remove("on");
    curVersion.classList.toggle("rounded");
  }
  if (button.classList.contains("highlight-bar")) {
    button.classList.toggle("on");
    standard.classList.remove("on");
    curVersion.classList.toggle("highlight-bar");
    moveActiveLine(links[0]);
  }
}
