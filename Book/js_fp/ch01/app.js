// const printMessage = (elementId, format, message) => {
//   document.querySelector(
//     `#${elementId}`
//   ).innerHTML = `<${format}>${message}</${format}>`;
// };

// printMessage("title", "h1", "good night");
// printMessage("content", "h3", "POI Never End!");
// printMessage("price", "div", "good deal");

// shinancao solution
function addToDom(elementId) {
  return function (content) {
    document.querySelector(`#${elementId}`).innerHTML = content;
  };
}

function h1(message) {
  return "<h1>" + message + "</h1>";
}

function echo(message) {
  return message;
}

let run = function (f, g, h) {
  return function (x) {
    return f(g(h(x)));
  };
};

run(addToDom("title"), h1, echo)("good night");
run(addToDom("content"), h1, echo)("POI Never End!");
run(addToDom("price"), h1, echo)("Winter is Coming!");
