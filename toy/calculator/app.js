const keys = document.getElementsByTagName("li");
const result = document.querySelector(".result");
const clear = document.querySelector(".clear");

const calculate = () => {
  return (result.innerHTML = eval(result.innerHTML));
};

const addToCurrentValue = (i) => {
  return () => {
    if (keys[i].innerHTML === "÷") {
      result.innerHTML += "/";
    } else if (keys[i].innerHTML === "x") {
      result.innerHTML += "*";
    } else {
      result.innerHTML += keys[i].innerHTML;
    }
  };
};

for (let i = 0; i < keys.length; i++) {
  if (keys[i].innerHTML === "=") {
    keys[i].addEventListener("click", calculate);
  } else {
    keys[i].addEventListener("click", addToCurrentValue(i));
  }
}

clear.addEventListener("click", () => {
  result.innerHTML = "";
});
