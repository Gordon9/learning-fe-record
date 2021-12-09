// const printMessage = (elementId, format, message) => {
//   document.querySelector(
//     `#${elementId}`
//   ).innerHTML = `<${format}>${message}</${format}>`;
// };

// printMessage("title", "h1", "good night");
// printMessage("content", "h3", "POI Never End!");
// printMessage("price", "div", "good deal");

// shinancao solution
// function addToDom(elementId) {
//   return function (content) {
//     document.querySelector(`#${elementId}`).innerHTML = content;
//   };
// }

// function h1(message) {
//   return "<h1>" + message + "</h1>";
// }

// function echo(message) {
//   return message;
// }

// let run = function (f, g, h) {
//   return function (x) {
//     return f(g(h(x)));
//   };
// };

// run(addToDom("title"), h1, echo)("good night");
// run(addToDom("content"), h1, echo)("POI Never End!");
// run(addToDom("price"), h1, echo)("Winter is Coming!");

// // run with three functions
// const run = function (f, g, h) {
//   return function (x) {
//     return f(g(h(x)));
//   };
// };

// -run- for X functions
// let x = 3;

// const run = (...functions) => {
//   (x) => functions.reverse().forEach((func) => (x = func(x)));
//   return x;
// };

const run =
  (...functions) =>
  (x) => {
    functions.reverse().forEach((func) => (x = func(x)));
    return x;
  };

// const run =
//   (...functions) =>
//   (x) => {
//     functions.reverse().forEach((func) => (x = func(x)));
//     return x;
//   };

const add1 = function (x) {
  return x + 1;
};

const mult2 = function (x) {
  return x * 2;
};

const square = function (x) {
  return x * x;
};

const negate = function (x) {
  return -x;
};

let testRun = run(negate, square, mult2);
// let testRun = run(negate, square, mult2)(2);
console.log(testRun(2)); // -16
// console.log(testRun);
