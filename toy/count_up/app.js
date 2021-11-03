const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = 0;

  const updateCounter = () => {
    const target = +counter.dataset.target;
    const count = +counter.innerText;
    const increment = target / 200; // Count timing

    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };

  window.addEventListener("scroll", () => {
    const scrollHeight = window.scrollY;
    const sectionTopHeight = document.querySelector(".top").clientHeight;
    console.log(scrollHeight);
    console.log(sectionTopHeight);
    if (scrollHeight >= sectionTopHeight - 450) {
      updateCounter();
    }
  });
});
