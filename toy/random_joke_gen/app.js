const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url = "http://api.icndb.com/jokes/random";

const getJoke = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      joke.innerHTML = data.value.joke;
    });
};

btn.addEventListener("click", getJoke);
