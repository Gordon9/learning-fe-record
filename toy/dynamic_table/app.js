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

const sortNumberColumn = (sort, columnName) => {
  personData = personData.sort((p1, p2) => {
    return sort
      ? p1[columnName] - p2[columnName]
      : p2[columnName] - p1[columnName];
  });
};

const sortColumn = (columnName) => {
  const dataType = typeof personData[0][columnName];
  sortDirection = !sortDirection;

  switch (dataType) {
    case "number":
      sortNumberColumn(sortDirection, columnName);
      break;
  }

  loadTableData();
};

window.onload = () => {
  loadTableData();
};
