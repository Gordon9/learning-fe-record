const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url = "http://api.icndb.com/jokes/random";

// const getJoke = () => {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       joke.innerHTML = data.value.joke;
//     });
// };

// async await
const getJoke = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    joke.innerHTML = data.value.joke;
  } catch (error) {
    joke.innerHTML = error.message;
  }
};

btn.addEventListener("click", getJoke);
