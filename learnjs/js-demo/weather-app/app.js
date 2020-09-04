window.addEventListener("load", () => {
  let long;
  let lat;
  let locationTimezone = document.querySelector(".location-timezone");
  let tempratureDegree = document.querySelector(".temprature-degree");
  let tempratureDescription = document.querySelector(".temprature-description");
  let tempraturesSection = document.querySelector('.degree-section');
  const tempratureSpan = document.querySelector('.degree-section span');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat}, ${long}`;

      fetch(api)  
        .then((repsponse) => {
          return repsponse.json();
        })
        .then((data) => {
          console.log("data:", data);
          // Set DOM Elements from the API
          const {temperature, summary, icon} = data.currently;
          tempratureDegree.textContent = temperature;
          tempratureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;
          // FORUMULA FOR CELSIUS
          let celsius = (temperature - 32) * (5 / 9);
          // Set Icon
          setIcons(icon, document.querySelector('.icon'));

          // Change temprature to Celsius/Farenheit
          tempraturesSection.addEventListener('click', () => {
            if (tempratureSpan.textContent === 'F') {
              tempratureSpan.textContent = "C";
              tempratureDegree.textContent = Math.floor(celsius);
            } else {
              tempratureSpan.textContent = "F";
              tempratureDegree.textContent = temperature;
            }
          });
        });
    });
  }

  function setIcons(icon, iconID) {
    const skycons = new Skycons({color: "white"});
    const cureentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[cureentIcon]);
  }
});


