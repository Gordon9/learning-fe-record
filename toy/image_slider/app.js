const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const autoScroll = true;
let slideInterval;
let intervalTime = 2000;

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
  current.classList.remove("current");
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
  current.classList.remove("current");
};

const auto = (autoScroll) => {
  if (autoScroll) {
    const startAuto = () => {
      slideInterval = setInterval(nextSlide, intervalTime);
    };

    startAuto();
  }
};

auto(autoScroll);

next.addEventListener("click", () => {
  nextSlide();
  if (autoScroll) {
    clearInterval(slideInterval);
    auto(autoScroll);
  }
});

prev.addEventListener("click", () => {
  prevSlide();
  if (autoScroll) {
    clearInterval(slideInterval);
    auto(autoScroll);
  }
});
