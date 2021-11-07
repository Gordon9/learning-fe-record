//  Map - https://www.worldometers.info/geography/flags-of-the-world/

const cur1 = document.querySelector(".cur-1");
const cur2 = document.querySelector(".cur-2");
const cur1Input = document.querySelector(".cur-1-input");
const cur2Input = document.querySelector(".cur-2-input");

const baseRate = document.querySelector(".base");
const switchCur = document.querySelector(".switch-cur");

const countries = [
  {
    name: "CH",
    flagURL: "https://www.worldometers.info/img/flags/ch-flag.gif",
  },
  {
    name: "AED",
    flagURL: "https://www.worldometers.info/img/flags/ae-flag.gif",
  },
  {
    name: "GBP",
    flagURL: "https://www.worldometers.info/img/flags/uk-flag.gif",
  },
  {
    name: "USD",
    flagURL: "https://www.worldometers.info/img/flags/us-flag.gif",
  },
  {
    name: "EUR",
    flagURL: "https://www.worldometers.info/img/flags/au-flag.gif",
  },
];

const apiURL = "https://v6.exchangerate-api.com/v6/";
const key = "a6b02a95c9fd349f6104bb14";

const getExchangeRate = async () => {
  const cur1Value = cur1.value;
  const cur2Value = cur2.value;

  const response = await fetch(`${apiURL}${key}/latest/${cur1Value}`);
  const data = await response.json();
  console.log(data);

  const rate = data.conversion_rates[cur2Value];

  baseRate.textContent = `1 ${cur1Value} = ${rate.toFixed(2)} ${cur2Value}`;
  cur2Input.value = (cur1Input.value * rate).toFixed(2);
};

getExchangeRate();

cur1.addEventListener("change", () => {
  getExchangeRate();
});
cur2.addEventListener("change", () => {
  getExchangeRate();
});
cur1Input.addEventListener("input", getExchangeRate);
cur2Input.addEventListener("input", getExchangeRate);
