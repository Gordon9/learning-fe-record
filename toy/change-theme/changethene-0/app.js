const sunMoonContainer = document.querySelector(".sun-moon-container");
const themeToggleButton = document.querySelector(".theme-toggle-button");

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const currentRotation = parseInt(
    getComputedStyle(sunMoonContainer).getPropertyValue("--rotation")
  );
  sunMoonContainer.style.setProperty("--rotation", currentRotation + 180);
});
