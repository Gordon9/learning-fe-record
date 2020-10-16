const parent = document.querySelector(".parent");

function addEvent(el, event, callback) {
  if (!el || !event || !callback || typeof callback !== "function") {
    return;
  }
  el.addEventListener(event, callback);
}

addEvent(parent, "mouseenter", function (e) {
  myAddChild();
});

addEvent(parent, "mouseleave", function (e) {
  // myRmoveChild();
});

function myAddChild() {
  let makeDiv = document.createElement("div");
  makeDiv.innerHTML = `<div class='child'><div class='MyCoolDiv' style='color: #2b0888'>Hello Root!</div>
  <div class='MyCoolDiv' style='color: #2b0888'>Hello Gordon!</div>
  <div class='MyCoolDiv' style='color: #2b0888'>Hello Fecth!</div></div>`;

  parent.appendChild(makeDiv.firstChild);
}

function myRmoveChild() {
  const child = document.querySelector(".child");
  parent.removeChild(child);
}
