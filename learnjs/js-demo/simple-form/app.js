function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextSbiling = parent.nextElementSibling;

      //   check for validation
      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextSbiling);
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextSbiling);
      } else if (input.type === "password" && validatePsw(input)) {
        nextSlide(parent, nextSbiling);
      } else {
          parent.style.animation = "shake 0.5s ease";
      }

      parent.addEventListener("animationend", () => {
          parent.style.animation = "";
      })
    });
  });
}

function validateUser(user) {
  if (user.value !== "ADMIN") {
    console.log("We are being watched.");
    error("rgb(189, 87, 87)");
  } else {
    error("rgb(87, 189, 130)");
    return true;
  }
}

function validateEmail(email) {
  const validation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (validation.test(email.value)) {
    error("rgb(87, 189, 130)");
    return true;
  } else {
    error("rgb(189, 87, 87)");
  }
}

function validatePsw(user) {
  if (user.value !== "Root") {
    console.log("Can you hear me?");
    error("rgb(189, 87, 87)");
  } else {
    error("rgb(87, 189, 130)");
    return true;
  }
}

function nextSlide(parent, nextSibling) {
  parent.classList.add("inactive");
  parent.classList.remove(".active");
  nextSibling.classList.add("active");
}

function error(color) {
  document.body.style.background = color;
}

animatedForm();
