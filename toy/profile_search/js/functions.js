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

const displayRepos = (repoData) => {
  let repo_data = repoData.map((repo) => {
    return `
      <span class="repo">
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <p>
          <strong>Stars: ${repo.starzers_count} |</strong>
          <strong>Watchers : ${repo.watchers_count} |</strong>
          <strong>Forks: ${repo.forks_count}</strong>
        </p>
      </span>
    `;
  });
  // v.repos.innerHTML = repo_data;
  v.repos.innerHTML = repo_data.slice(0, 8).join("");
};

// Get Users
export const getUser = async (username) => {
  const response = await fetch(v.apiURL + username);
  const data = await response.json();

  if (!response.ok) {
    console.log("User not found, try another");
  } else {
    console.log(data);
    displayData(data);
    getRepos(username);
  }
};

// Get Repos
const getRepos = async (username) => {
  const response = await fetch(v.apiURL + username + "/repos");
  const data = await response.json();

  console.log(data);
  displayRepos(data);
};
