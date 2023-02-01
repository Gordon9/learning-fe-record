const arr = [
  {
    stuId: 1001,
    uname: "Bach",
    age: 19,
    gender: "男",
    salary: "20000",
    city: "上海",
  },
  {
    stuId: 1002,
    uname: "Mozart",
    age: 29,
    gender: "男",
    salary: "30000",
    city: "北京",
  },
  {
    stuId: 1003,
    uname: "Chopin",
    age: 39,
    gender: "男",
    salary: "2000",
    city: "北京",
  },
];

const tbody = document.querySelector("tbody");
const add = document.querySelector(".add");
const uname = document.querySelector(".uname");
const age = document.querySelector(".age");
const gender = document.querySelector(".gender");
const salary = document.querySelector(".salary");
const city = document.querySelector(".city");

render();

function render() {
  tbody.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${arr[i].stuId}</td>
      <td>${arr[i].uname}</td>
      <td>${arr[i].age}</td>
      <td>${arr[i].gender}</td>
      <td>${arr[i].salary}</td>
      <td>${arr[i].city}</td>
      <td>
        <a href="javascript:" id="${i}">删除</a>
      </td>
      
    `;

    tbody.appendChild(tr);
  }
}

add.addEventListener("click", function () {
  arr.push({
    stuId: arr[arr.length - 1].stuId + 1,
    uname: uname.value,
    age: age.value,
    gender: gender.value,
    salary: salary.value,
    city: city.value,
  });

  render();

  uname.value = "";
  age.value = "";
  gender.value = "男";
  salary.value = "";
  city.value = "北京";
});

tbody.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    arr.splice(e.target.id, 1);
    render();
  }
});
