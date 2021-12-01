const imgLarge = document.getElementById("large-img");
const proudctImages = document.querySelectorAll(".img__small img");

proudctImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    let src = e.target.getAttribute("src");
    imgLarge.src = src;
  });
});
