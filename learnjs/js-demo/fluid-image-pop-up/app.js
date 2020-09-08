const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");

previews.forEach((prev) => {
  prev.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    // Dynamic change text and image
    const originalSrc = prev.getAttribute("data-original");
    const altText = prev.alt;
    original.src = `./full/${originalSrc}`;
    imgText.textContent = altText;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
  }
});
