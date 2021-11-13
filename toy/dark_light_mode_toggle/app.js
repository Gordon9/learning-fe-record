const toggleDarkMode = document.querySelector(".toggle-darkmode");
const toggleText = document.querySelector(".toggle-text");

let darkmode = localStorage.getItem("darkmode");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  toggleText.textContent = "Light";
  localStorage.setItem("darkmode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  toggleText.textContent = "Dark";
  localStorage.setItem("darkmode", null);
};

if (darkmode === "enabled") {
  enableDarkMode();
}

toggleDarkMode.addEventListener("click", () => {
  let darkmode = localStorage.getItem("darkmode");

  if (darkmode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
