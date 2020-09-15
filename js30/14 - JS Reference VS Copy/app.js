const players = ["Wes", "Gordon", "Admin", "Root"];

const team = players;

console.log(players, team);

const team2 = players.slice();
console.log("team2:", team2);

const team3 = [].concat(players);
console.log("team3:", team3);

const team4 = [...players];
team4[3] = "fench";
console.log("team4:", team4);

const team5 = Array.from(players);
console.log("team5:", team5);

console.log("======== same thing goes for objects ===========");

const person = {
  name: "Gordon",
  age: 80,
};

const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log("cap2:", cap2);

const cap3 = { ...person };
console.log("cap3:", cap3);

const gordon = {
  name: "Gordon",
  age: 100,
  social: {
    wecaht: "bugbuggoaway",
    facebook: "gordonxxxxx",
  },
};
console.log("gordon:", gordon);

console.log("gordon:", gordon);
const dev = Object.assign({}, gordon);

const dev2 = JSON.parse(JSON.stringify(gordon));
console.log("dev2:", dev2);
