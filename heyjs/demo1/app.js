// Scenes1
var data = new Date();

function f() {
  console.log(data);
  if (false) {
    var data = "2021";
  }
}

f();

// Scenes2
var s = "hello";

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5

// Scenes3
(function () {
  console.log("hello IIFE");
})();

{
  console.log("hello {do something...}");
}

// Scenes4
let persons = {
  name: "Gordon",
  age: 22,
  cars: {
    apple: 99,
    ipad: 122,
  },
};

let constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach((key, i) => {
    if (typeof obj[key] === "object") {
      constantize(obj[key]);
    }
  });
};

constantize(persons);

// Scenes5
typeof window !== "undefined"
  ? window
  : typeof process === "object" &&
    typeof require === "function" &&
    typeof global === "object"
  ? glboal
  : this;

// Scenes6
let getGlobal = function () {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};
