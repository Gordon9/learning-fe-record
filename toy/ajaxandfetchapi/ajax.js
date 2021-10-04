const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();

  const http = new XMLHttpRequest();

  http.open("GET", "users.json", true);

  http.onload = function () {
    if (this.status === 200) {
      const users = JSON.parse(this.responseText);

      let output = "";

      users.forEach((user) => {
        output += `
                <hr>
                <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Age: ${user.age}</li>
                <li>Email: ${user.email}</li>
              </ul>`;
      });
      document.getElementById("users").innerHTML = output;
    }
  };

  http.send();

  // fetch("users.json")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     let output = "";
  //     data.forEach((user) => {
  //       output += `
  //         <hr>
  //         <ul>
  //         <li>ID: ${user.id}</li>
  //         <li>Name: ${user.name}</li>
  //         <li>Age: ${user.age}</li>
  //         <li>Email: ${user.email}</li>
  //       </ul>
  //       `;
  //     });
  //     document.getElementById("users").innerHTML = output;
  //   });
});
