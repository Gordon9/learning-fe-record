let dataArr = [
  { uname: "司马懿", imgSrc: "./images/01.jpg" },
  { uname: "女娲", imgSrc: "./images/02.jpg" },
  { uname: "百里守约", imgSrc: "./images/03.jpg" },
  { uname: "亚瑟", imgSrc: "./images/04.jpg" },
  { uname: "虞姬", imgSrc: "./images/05.jpg" },
  { uname: "张良", imgSrc: "./images/06.jpg" },
  { uname: "安其拉", imgSrc: "./images/07.jpg" },
  { uname: "李白", imgSrc: "./images/08.jpg" },
  { uname: "阿珂", imgSrc: "./images/09.jpg" },
  { uname: "墨子", imgSrc: "./images/10.jpg" },
  { uname: "鲁班", imgSrc: "./images/11.jpg" },
  { uname: "嬴政", imgSrc: "./images/12.jpg" },
  { uname: "孙膑", imgSrc: "./images/13.jpg" },
  { uname: "周瑜", imgSrc: "./images/14.jpg" },
  { uname: "老夫子", imgSrc: "./images/15.jpg" },
  { uname: "狄仁杰", imgSrc: "./images/16.jpg" },
  { uname: "扁鹊", imgSrc: "./images/17.jpg" },
  { uname: "马可波罗", imgSrc: "./images/18.jpg" },
  { uname: "露娜", imgSrc: "./images/19.jpg" },
  { uname: "孙悟空", imgSrc: "./images/20.jpg" },
  { uname: "黄忠", imgSrc: "./images/21.jpg" },
  { uname: "百里玄策", imgSrc: "./images/22.jpg" },
];

const textarea = document.querySelector("textarea");
const useCount = document.querySelector(".useCount");
const send = document.querySelector("#send");
const ul = document.querySelector("#list");

textarea.addEventListener("input", function () {
  useCount.innerHTML = this.value.length;
});

send.addEventListener("click", function () {
  if (textarea.value.trim() === "") {
    textarea.value = "";
    useCount.innerHTML = 0;
    return alert("Empty text!");
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let random = getRandom(0, dataArr.length - 1);
  let li = document.createElement("li");
  li.innerHTML = `<div class="info">
  <img class="userpic" src=${dataArr[random].imgSrc}>
  <span class="username">${dataArr[random].uname}</span>
  <p class="send-time"> ${new Date().toLocaleString()} </p>
  </div>
  <div class="content">${textarea.value}</div>
  <span class="the_del">X</span>`;

  let del = li.querySelector(".the_del");
  del.addEventListener("click", function () {
    ul.removeChild(li);
  });

  ul.insertBefore(li, ul.children[0]);
  textarea.value = "";
  useCount.innerHTML = 0;
});

textarea.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    send.click();
  }
});
