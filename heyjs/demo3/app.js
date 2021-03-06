// let s = "hello world!";

// s.endsWith("hello");

const tmp1 = addrs => `
  <table>
    ${addrs.map(addr => `
      <tr><td>${addr.first}</td></tr>
      <tr><td>${addr.last}</td></tr>
    `).join('')}
  </table>
`

const data = [
  { first: '<Jone>', last: 'Bond' },
  { first: "Lars", last: '<Croft>' },
];

console.log(tmp1(data));

let str = 'return ' + '`Hello ${name}!`';
let func = new Function('name', str);
func('Jack');