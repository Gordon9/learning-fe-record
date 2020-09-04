function parallax(element, distance, speed) {
  const item = document.querySelector(element);
  item.style.transform = `translateY(${distance * speed}px)`;
  console.log('item.style.transform:', item.style.transform)

}

window.addEventListener("scroll", function () {
  parallax("header", window.scrollY, 1);
  parallax(".small-rose", window.scrollY, 0.4);
  parallax(".big-rose", window.scrollY, 0.2);
});
