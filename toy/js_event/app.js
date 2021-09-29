// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// grandparent.addEventListener("click", (e) => {
//   console.log("Grandparent bubble");
// });
// parent.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("parent capture");
//   },
//   { capture: true }
// );

// parent.addEventListener("click", () => {
//   console.log("good night");
// });

// setTimeout(() => {
//   parent.removeEventListener("click", () => {
//     console.log("no more good night");
//   });
// }, 2000);

// child.addEventListener("click", (e) => console.log("child bubble"));

// child.addEventListener("click", (e) => console.log("child capture"), {
//   capture: true,
// });

const divs = document.querySelectorAll("div");

const addGlobalEventListener = (type, selector, callback) => {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
};

addGlobalEventListener("click", "div", (e) => {
  console.log("hello root!");
});

const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple";
document.body.append(newDiv);
