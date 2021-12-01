const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const autoScroll = false;
let slideInterval;
let intervalTime = 5000;

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

if (autoScroll) {
  console.log("start auto");

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  auto();
}

next.addEventListener("click", () => {
  nextSlide();
});

prev.addEventListener("click", () => {
  prevSlide();
});
