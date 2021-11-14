const btns = document.querySelectorAll(".btn");
const text = document.querySelector(".text");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const filter = e.target.dataset.link;

    if (filter === "home") {
      text.textContent = "home told you: good night";
    } else if (filter === "about") {
      text.textContent = "about told you: good night";
    } else {
      text.textContent = "contact told you: good night";
    }
  });
});
