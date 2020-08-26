const action = document.querySelector(".action");
const eye = document.querySelector(".eye");
let open = false;
let showPwd = false;

action.addEventListener("click", () => {
  const root = document.documentElement;
  const password = document.getElementById("password").value;
  const arrow = document.getElementById("arrow");
  const check = document.getElementById("check");
  const times = document.getElementById("times");

  arrow.classList.add("hide");
  check.classList.add("hide");
  times.classList.add("hide");

  if (open) {
    root.style.setProperty("--color", "dodgerblue");
    root.style.setProperty("--scale", "scaleX(0)");
    root.style.setProperty("--opacity", 0);
    arrow.classList.remove("hide");
  } else {
    if (password === "password") {
      action.dataset.content = "Welcome Back!";
      root.style.setProperty("--color", "lightseagreen");
      check.classList.remove("hide");
    } else {
      action.dataset.content = "Invalid Password";
      root.style.setProperty("--color", "tomato");
      times.classList.remove("hide");
    }
    root.style.setProperty("--scale", "scaleX(1)");
    root.style.setProperty("--opacity", 1);
  }
  open = !open;
});

eye.addEventListener("click", () => {
  const password = document.getElementById("password");
  const openEye = document.getElementById("openEye");
  const closeEye = document.getElementById("closeEye");

  openEye.classList.toggle("hide");
  closeEye.classList.toggle("hide");

  if (showPwd) {
    password.setAttribute("type", "password");
  } else {
    password.setAttribute("type", "text");
  }

  showPwd = !showPwd;
});
