const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
function numberWithCommas(x) {
  // Why you do this?
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArr = findMatches(this.value, cities);

  //   log(matchArr);
  const html = matchArr
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      const population = numberWithCommas(place.population);
      return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${population}</span>
        </li>
      `;
    })
    .join("");
  suggestions.innerHTML = html;
}

function log(arr) {
  console.log("arr:", arr);
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("keyup", displayMatches);
searchInput.addEventListener("change", displayMatches);
