// elements
const img_box = document.querySelector(".img_box");
const imgs = document.querySelectorAll("img");
const sel_box = document.querySelector(".sel_box");
const lis = sel_box.querySelectorAll("li");
const left_arrow = document.querySelector(".left_arrow");
const right_arrow = document.querySelector(".right_arrow");

let index = 0;
let timer = null;

// handler
const imgContainerW = img_box.offsetWidth;
img_box.style.left = 0 + "px";
lis[0].className = "cur";

const swapImg = () => {
  img_box.style.left = -index * imgContainerW + "px";
  for (let i = 0; i < lis.length; i++) {
    lis[i].className = "";
  }

  lis[index].className = "cur";
};

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseout", () => {
    timer = setInterval(swapFormat, 3000);
  });
  lis[i].addEventListener("mouseover", () => {
    clearInterval(timer);
  });
  lis[i].addEventListener("click", () => {
    index = i;
    swapImg();
  });
}

const swapFormat = () => {
  index++;
  if (index >= 4) {
    index = 4;
    img_box.style.transition = "all, linear, 1s";
    img_box.style.left = -index * imgContainerW + "px";
    for (let i = 0; i < lis.length; i++) {
      lis[i].className = "";
    }

    lis[0].className = "cur";

    setTimeout(() => {
      index = 0;
      img_box.style.transition = "";
      swapImg();
    }, 1500);
  } else {
    img_box.style.transition = "all, linear, 1.5s";
    swapImg();
  }
};

// listening
right_arrow.addEventListener("click", () => {
  swapFormat();
});

left_arrow.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = -1;

    img_box.style.transition = "all, linear, 1.5s";
    img_box.style.left = -index * imgContainerW + "px";
    for (let i = 0; i < lis.length; i++) {
      lis[i].className = "";
    }

    lis[3].className = "cur";
    setTimeout(() => {
      index = 3;
      img_box.style.transition = "";
      swapImg();
    }, 1000);
  }
  {
    swapImg();
  }
});

// tiemr
timer = setInterval(swapFormat, 3000);

img_box.addEventListener("mouseover", () => {
  clearInterval(timer);
});
right_arrow.addEventListener("mouseover", () => {
  clearInterval(timer);
});
left_arrow.addEventListener("mouseover", () => {
  clearInterval(timer);
});

img_box.addEventListener("mouseout", () => {
  timer = setInterval(swapFormat, 3000);
});
right_arrow.addEventListener("mouseout", () => {
  timer = setInterval(swapFormat, 3000);
});
left_arrow.addEventListener("mouseout", () => {
  timer = setInterval(swapFormat, 3000);
});
