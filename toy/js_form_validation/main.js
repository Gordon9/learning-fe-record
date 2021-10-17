// Targetting all classes & id fro HTML
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username");
let password = id("password");
let email = id("email");
let form = id("form");
let errerMsg = classes("error");
let successIcon = classes("success-icon");
let failureIcon = classes("failure-icon");

// Adding the submit event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
});

// engine function which will do all the works
const engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errerMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errerMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
