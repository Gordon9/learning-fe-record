const ROLL_SPEED = 15;
const noticeList1 = document.querySelector("#notice-list");
const noticeList2 = document.querySelector("#notice-list-2");
const listWrapper = document.querySelector("#list-wrapper");
noticeList2.innerHTML = noticeList1.innerHTML;

const _subStr = (str) => {
  let index = str.indexOf("px");
  if (index > -1) {
    return parseFloat(str.substr(0, index));
  }
};

const rollStart = () => {
  if (Math.abs(_subStr(listWrapper.style.top)) >= noticeList1.clientHeight) {
    listWrapper.style.top = "0px";
  } else {
    let top = listWrapper.style.top;
    listWrapper.style.top = _subStr(top) - 1 + "px";
  }
};

let timer = setInterval(rollStart, ROLL_SPEED);
