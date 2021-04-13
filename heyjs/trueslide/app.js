(function () {
  const eleBtn = document.getElementById("button");
  const eleMore = document.getElementById("more");

  let height = 0;
  let display = false;
  let timer;

  const step = () => {
    height = display ? height + 20 : height - 20;
    if (height < 0) {
      height = 0;
    } else if (height > 300) {
      height = 300;
    }
    eleMore.style.height = height + "px";
    if (height > 0 && height < 300) {
      timer = setTimeout(step, 30);
    }
  };

  eleBtn.addEventListener("click", () => {
    if (timer) clearTimeout(timer);
    display = !display;
    step();
    return false;
  });
})();
