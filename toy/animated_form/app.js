const login = document.querySelector(".login-link");
const register = document.querySelector(".register-link");
const fortgot = document.querySelector(".forgot-link");
const close = document.querySelector(".close");
const loginSectioin = document.querySelector(".login");
const registerSectioin = document.querySelector(".register");
const forgotSectioin = document.querySelector(".forgot");

register.addEventListener("click", () => {
  console.log("hello");
  loginSectioin.style.display = "none";
  registerSectioin.style.display = "flex";
});

login.addEventListener("click", () => {
  registerSectioin.style.display = "none";
  loginSectioin.style.display = "flex";
});

fortgot.addEventListener("click", () => {
  loginSectioin.style.display = "none";
  forgotSectioin.style.display = "flex";
});

close.addEventListener("click", () => {
  forgotSectioin.style.display = "none";
  loginSectioin.style.display = "flex";
});
