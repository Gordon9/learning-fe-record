const form = document.getElementById("form");
const saerch = document.getElementById("search");
const result = document.getElementById("result");

const apiURL = "https://api.lyrics.ovh";

const displayData = (data) => {
  result.innerHTML = `
    <ul class='songs'>
      ${data.data
        .map(
          (song) => `
        <li>
        <div><strong>${song.artist.name}</strong> -${song.title}</div>
        <span data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</span>
        </li>
      `
        )
        .join("")}
    </ul>
  `;
};

const beginSearch = async (searchValue) => {
  const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`);
  const data = await searchResult.json();

  displayData(data);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let searchValue = search.value.trim();
  if (!searchValue) {
    alert("Nothing to search");
  } else {
    beginSearch(searchValue);
  }
});
