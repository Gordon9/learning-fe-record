const userLocation = document.querySelector(".location");
const btn = document.querySelector(".btn");

const showPosition = (position) => {
  console.log("hello-2");

  userLocation.innerHTML = `Latitude: ${position.coords.latitude} <br>
  Longitude: ${position.coords.longitude}`;
  console.log("hello-2");

};

btn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(showPosition);
});
