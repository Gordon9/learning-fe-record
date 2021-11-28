import * as v from "./variables.js";

const displayData = (user) => {
  const html = `
      <img
      src="${user.avatar_url}"
      alt="${user.name}"
      class="img__thumbnail rounded__circle"
    />
    <h2>${user.name}</h2>
    <p>${user.login}</p>
    <div class="d_grid">
      <a href="https://github.com/${user.login}" class="btn btn__outline__secondary">View Profile</a>
    </div>
    <p>
      <span>${user.followers} Followers</span>
      <span>${user.following} Following</span>
    </p>
    <p>${user.public_repos}</p>
    <i class="fas fa-marker">${user.location}</i>
    `;
  v.profile.innerHTML = html;
};

export const getUser = async (username) => {
  const response = await fetch(v.apiURL + username);
  const data = await response.json();

  if (!response.ok) {
    console.log("User not found, try another");
  } else {
    console.log(data);
    displayData(data);
  }
};
