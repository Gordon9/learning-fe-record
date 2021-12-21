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

// -run- for X functions
// const run =
//   (...functions) =>
//   (x) => {
//     functions.reverse().forEach((func) => (x = func(x)));
//     return x;
//   };

// const compose = (...fns) =>
//   fns.reduce(
//     (f, g) =>
//       (...args) =>
//         f(g(...args))
//   );

// const compose =
//   (...fns) =>
//   (x) =>
//     fns.reduceRight((acc, fn) => fn(acc), x);

// const add1 = function (x) {
//   console.log("here is add1");
//   return x + 1;
// };

// const mult2 = function (x) {
//   console.log("here is mult2");

//   return x * 2;
// };

// const square = function (x) {
//   console.log("here is square");

//   return x * x;
// };

// const negate = function (x) {
//   console.log("here is negate");

//   return -x;
// };

// let testRun = compose(negate, square, mult2);
// console.log(testRun(2)); // -16

function h2(message) {
  return "<h2>" + message + "</h2>";
}

function p(date) {
  return "<p>" + date + "</p>";
}

function echo(message) {
  return message;
}

function addToDom(elementId) {
  return function (content) {
    const target = document.querySelector(`#${elementId}`);
    if (target.innerHTML !== "") {
      target.innerHTML = target.innerHTML + content;
    } else {
      target.innerHTML = content;
    }
  };
}

const notify = function (f, g, h) {
  return function (x) {
    return f(g(h(x)));
  };
};

notify(addToDom("title"), h2, echo)("送你一份回忆");
notify(addToDom("title"), p, echo)("Dec 21, 2021");
