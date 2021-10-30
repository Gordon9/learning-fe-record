const filter = () => {
  let value = document.getElementById("searchInput").value.toUpperCase();
  let names = document.getElementById("names");
  let rows = names.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    let column = rows[i].getElementsByTagName("td")[2];
    let singer = column.textContent;

    rows[i].style.display =
      singer.toUpperCase().indexOf(value) > -1 ? "" : "none";
  }
};

document.getElementById("searchInput").addEventListener("keyup", filter);
