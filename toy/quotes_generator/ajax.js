const btn = document.querySelector(".get-quotes");
const number = document.getElementById("number");
const URL = "https://type.fit/api/quotes";

const shuffle = (quotes) => {
  let CI = quotes.length;
  let tempValue;
  let randomIndex;

  while (CI > 0) {
    randomIndex = Math.floor(Math.random() * CI);
    CI--;
    tempValue = quotes[CI];
    quotes[CI] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  }

  return quotes;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (number.value === null || number.value <= 0) {
    alert("Invalid number");
    return;
  } else {
    const https = new XMLHttpRequest();
    https.open("GET", URL, true);
    https.send();
    https.onload = function () {
      if (this.status === 200) {
        const response = shuffle(JSON.parse(this.responseText));

        let output = "";

        for (let i = 0; i < response.length; i++) {
          if (i == number.value) {
            break;
          }
          output += `<li>Quote: ${response[i].text}</li>
          <li>Author: ${response[i].author}
        </li> <hr> `;
        }

        document.querySelector(".quotes").innerHTML = output;
      }
    };

    // fetch(URL)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // console.log(JSON.stringify(data));

    //     // JSON.stringify(data);
    //     data = shuffle(data);

    //     let output = "";

    //     for (let i = 0; i < data.length; i++) {
    //       if (i == number.value) {
    //         break;
    //       }
    //       output += `<li>Quote: ${data[i].text}</li>
    //       <li>Author: ${data[i].author}
    //     </li> <hr> `;
    //     }

    //     document.querySelector(".quotes").innerHTML = output;
    //   });
  }
});
