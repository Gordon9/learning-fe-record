const fab = document.getElementById("fab");
const fabBtns = document.querySelector(".fab__btns");

fab.addEventListener("click", () => {
  fabBtns.classList.toggle("show");
});
