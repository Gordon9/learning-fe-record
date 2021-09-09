window.onload = () => {
  const eventDes = document.querySelector(".event");

  const addZero = (time) => {
    return time < 10 ? "0" + time : time + "";
  };

  const countDown = () => {
    let nowTime = new Date().getTime();
    let endTime = new Date("2021/09/10,00:00:00").getTime();
    let lfetTime = parseInt((endTime - nowTime) / 1000);
    let d = parseInt(lfetTime / (24 * 60 * 60));
    let h = parseInt((lfetTime / (60 * 60)) % 24);
    let m = parseInt((lfetTime / 60) % 60);
    let s = parseInt(lfetTime % 60);
    d = addZero(d);
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);
    eventDes.innerHTML = `活动倒计时: ${d}天 ${h}时 ${m}分 ${s}秒`;
    if (lfetTime <= 0) {
      eventDes.innerHTML = `活动结束了`;
      clearInterval(timer);
    }

    let timer = setInterval(countDown, 1000);
  };

  countDown();
};
