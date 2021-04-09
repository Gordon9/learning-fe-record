// let TOKEN_Y = /\s*(\+|[0-9]+)\s*/y;
// let TOKEN_G = /\s*(\+|[0-9]+)\s*/g;

// const tokenize3 = (TOKEN_REGEX, str) => {
//   let result = [];
//   let match;
//   while ((match = TOKEN_REGEX.exec(str))) {
//     console.log('match:', match)
//     result.push(match[1]);
//   }
//   return result;
// };

// tokenize3(TOKEN_Y, "3 + 4");
// tokenize3(TOKEN_G, "3 + 4");

// let RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

// let matchObj = RE_DATE.exec("1995-12-22");
// let year = matchObj.groups.year;
// let month = matchObj.groups.month;
// let day = matchObj.groups.day;
// console.log("year:", year);
// console.log("month:", month);
// console.log("day:", day);

const m1 = ({ x = 0, y = 0 } = {}) => {
  return [x, y];
};

const m2 = ({ x, y } = { x: 0, y: 0 }) => {
  return [x, y];
};
