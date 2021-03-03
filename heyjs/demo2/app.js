let [bad, ...good] = ["gordon", "root", "aman", "shuan", "fench"];

function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// let [first, second, third, fourth, fifth, sisth] = fibs();

let obj = ({ first: f, last: l } = { first: "hello", last: "world" });

let node = {
  loc: {
    start: {
      line: 1,
      column: 5,
    },
  },
};

let {
  loc,
  loc: { start },
  loc: {
    start: { line },
  },
} = node;

let map = new Map();
map.set("first", 'hello');
map.set("second", 'Root');
for (let [key, value] of map) {
  console.log(key + ' is ' + value);
}