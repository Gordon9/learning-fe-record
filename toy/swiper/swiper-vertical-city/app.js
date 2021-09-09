const ROLL_SPEED = 250;
const ROLL_SPEED2 = 244;
const noticeList1 = document.querySelector("#notice-list");
const noticeLis = document.querySelectorAll("#notice-list li");
const noticeList2 = document.querySelector("#notice-list-2");
const listWrapper = document.querySelector("#list-wrapper");
let li_height = 35;
// noticeList2.innerHTML = noticeList1.innerHTML;
let index = 0;

const _subStr = (str) => {
  let index = str.indexOf("px");
  if (index > -1) {
    return parseFloat(str.substr(0, index));
  }
};

const rollStart = () => {
  if (
    Math.abs(_subStr(listWrapper.style.top)) >=
    noticeList1.clientHeight - li_height
  ) {
    clearInterval(timer);
  } else {
    let top = listWrapper.style.top;
    listWrapper.style.top = _subStr(top) - 35 + "px";
  }
};

const addCur = () => {
  if (index >= noticeLis.length) {
    clearInterval(timer2);
  } else {
    for (let i = 0; i < noticeLis.length; i++) {
      if (noticeLis[i].classList.contains("cur")) {
        noticeLis[i].classList.remove("cur");
      }
    }
    noticeLis[index].classList.add("cur");
  }

  index++;
};

let timer = setInterval(rollStart, ROLL_SPEED);
let timer2 = setInterval(addCur, ROLL_SPEED2);
