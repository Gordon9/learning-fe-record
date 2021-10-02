const btn = document.querySelector(".get-quotes");
const number = document.getElementById("number");
const URL = "https://type.fit/api/quotes";

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (number.value === null || number.value <= 0) {
    alert("Invalid number");
    return;
  } else {
    console.log("preaping fetch...");

    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(JSON.stringify(data));

        JSON.stringify(data);
        let output = "";

        for (let i = 0; i < data.length; i++) {
          if (i == number.value) {
            break;
          }
          output += `<li>Quote: ${data[i].text}</li>
          <li>Author: ${data[i].author}
        </li> <hr> `;
        }

        document.querySelector(".quotes").innerHTML = output;
      });
  }
});
