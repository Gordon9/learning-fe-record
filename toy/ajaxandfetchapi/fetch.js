const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("users.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let output = "";
      data.forEach((user) => {
        output += `
          <hr>
          <ul>
          <li>ID: ${user.id}</li>
          <li>Name: ${user.name}</li>
          <li>Age: ${user.age}</li>
          <li>Email: ${user.email}</li>
        </ul>
        `;
      });
      document.getElementById("users").innerHTML = output;
    });
});
