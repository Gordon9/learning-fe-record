const modal = document.getElementById("modal");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const close = document.getElementsByClassName("close")[0];
let progressBar = document.getElementById("pbar");
let counting = document.getElementById("counting");
let reverseCounter = 10;

console.log(close);

function openPopup(e) {
  e.preventDefault();
  modal.style.display = "block";
  startCountdown();
}

function closePopup() {
  modal.style.display = "none";
}

function startCountdown() {
  let reverseCounter = 10;
  counting.innerHTML = reverseCounter;
  let downloadTimer = setInterval(function () {
    progressBar.value = 10 - --reverseCounter;
    if (reverseCounter <= 0) {
      clearInterval(downloadTimer);
      closePopup();
      console.log("download start!");
    }
    counting.innerHTML = reverseCounter;
  }, 1000);
}

btn.addEventListener("click", openPopup);
close.addEventListener("click", closePopup);
