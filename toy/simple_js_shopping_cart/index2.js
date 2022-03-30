const testBtn = document.getElementsByClassName("test")[0];
let elem;

testBtn.addEventListener("click", function () {
  elem = this.previousSibling;
  console.log(elem);
});
