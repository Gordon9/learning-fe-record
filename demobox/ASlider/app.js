"use strict";
const sliderAll = document.getElementById("sliderAll");
const sliderTL = document.getElementById("sliderTL");
const sliderTR = document.getElementById("sliderTR");
const sliderBR = document.getElementById("sliderBR");
const sliderBL = document.getElementById("sliderBL");
const root = document.documentElement;
let radius = "";
let tl = 0,
  tr = 0,
  br = 0,
  bl = 0;

sliderAll.addEventListener("input", (e) => {
  tl = e.target.value;
  tr = e.target.value;
  br = e.target.value;
  bl = e.target.value;
  sliderTL.value = 0;
  sliderTR.value = 0;
  sliderBR.value = 0;
  sliderBL.value = 0;
  setRadius();
});

sliderTL.addEventListener("input", (e) => {
  resetZero();
  tl = e.target.value;
  setRadius();
});
sliderTR.addEventListener("input", (e) => {
  resetZero();
  tr = e.target.value;
  setRadius();
});
sliderBR.addEventListener("input", (e) => {
  resetZero();
  br = e.target.value;
  setRadius();
});
sliderBL.addEventListener("input", (e) => {
  resetZero();
  bl = e.target.value;
  setRadius();
});

function setRadius() {
  radius = `${tl}% ${tr}% ${br}% ${bl}%`;
  root.style.setProperty("--radius", radius);
}

function resetZero() {
  if (sliderAll.value > 0) {
    sliderAll.value = 0;
    tl = 0;
    tr = 0;
    br = 0;
    bl = 0;
  }
}
