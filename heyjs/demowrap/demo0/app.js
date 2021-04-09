// let a = 5;
// let b = 10;

// const tag = (s, v1, v2) => {
//   console.log(s[0]);
//   console.log(s[1]);
//   console.log(s[2]);
//   console.log(v1);
//   console.log(v2);
// };

// tag`Hello ${a + b} world ${a * b}`;

// let total = 30;

// let passthru2 = (literals) => {
//   let result = "";
//   let i = 0;

//   while (i < literals.length) {
//     result += literals[i++];
//     if (i < arguments.length) {
//       console.log("arguments:", arguments);
//       result += arguments[i];
//     }
//   }

//   return result;
// };

// let msg = passthru2`The total is ${total} ${total * 1.05} with tax`;

// 防止用户输入恶意内容
// let SaferHTML = (templateDate) => {
//   let s = templateDate[0];

//   return s;
// };

// let sender = "<script>alert('hello')</script>";
// // let sender = "gordon";
// let msg = SaferHTML`<p>${sender} has send you a message</p>`;

// let message = SaferHTML3`<p>${sender} has send you a message.</p>`;

// function SaferHTML3(templateData) {
//   let s = templateData[0];
//   for (let i = 0; i < arguments.length; i++) {
//     let arg = String[arguments[i]];

//     s += arg.replace(/&/g, "&amp;")
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;");

//     s += templateData[i];
//   }
//   return s;
// }

// let sender = "<script>alert('hello')</script>";
// let msg = SaferHTML3`<p>${sender} has send you a message</p>`;

// message;

// let age = 22;

// let tag = function (arr, arg) {
//   console.log("arg:", arg);
//   console.log("arr:", arr);
// };

// tag`my age is ${age}`;

const codePointLength = (text) => {
  let result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

let s = "吉吉";
codePointLength(s);