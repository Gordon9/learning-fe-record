let sortDirection = false;

let personData = [
  { name: "Gordon", age: 25 },
  { name: "Fench", age: 35 },
  { name: "Shuan", age: 45 },
  { name: "Root", age: 55 },
  { name: "Aman", age: 15 },
];

const loadTableData = () => {
  const tableBody = document.querySelector("#tableData");
  let dataHtml = "";
  for (let person of personData) {
    dataHtml += `<tr><td>${person.name}</td><td>${person.age}</td></tr>`;
  }
  console.log(dataHtml);

  tableBody.innerHTML = dataHtml;
};

window.onload = () => {
  loadTableData();
};
