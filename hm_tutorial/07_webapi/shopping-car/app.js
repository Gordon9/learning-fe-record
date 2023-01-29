const adds = document.querySelectorAll(".add");
const reduces = document.querySelectorAll(".reduce");
const dels = document.querySelectorAll(".del");
const inputs = document.querySelectorAll(".count-c input");
const prices = document.querySelectorAll(".price");
const totals = document.querySelectorAll(".total");
const totalResult = document.querySelector(".total-price");
const totalCount = document.querySelector("#totalCount");
const carBody = document.querySelector("#carBody");

for (let i = 0; i < adds.length; i++) {
  totals[i].innerText = prices[i].innerText;
  adds[i].addEventListener("click", function () {
    inputs[i].value++;
    reduces[i].disabled = false;
    totals[i].innerText = parseInt(prices[i].innerText) * inputs[i].value + "¥";
    result();
  });

  reduces[i].addEventListener("click", function () {
    inputs[i].value--;
    if (inputs[i].value <= 1) {
      this.disabled = true;
    }
    totals[i].innerText = parseInt(prices[i].innerText) * inputs[i].value + "¥";
    result();
  });

  dels[i].addEventListener("click", function () {
    carBody.removeChild(this.parentNode.parentNode);
    result();
  });
}

function result() {
  let num = 0;
  let sum = 0;

  const totals = document.querySelectorAll(".total");

  for (let i = 0; i < totals.length; i++) {
    num += parseInt(inputs[i].value);
    sum += parseInt(totals[i].innerText);
  }

  totalCount.innerText = num;
  totalResult.innerText = sum + "¥";
}

result();
