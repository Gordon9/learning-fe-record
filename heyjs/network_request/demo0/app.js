// let likeParam = 'aid=459835967&like=1&csrf=b58efd1417450c33f21f022aa9bd9052';
let likeParam = `aid=${__INITIAL_STATE__.aid}&like=1&csrf=${getCookie(
  "bili_jct"
)}`;
let likeXhr = new XMLHttpRequest();
likeXhr.open("POST", "https://api.bilibili.com/x/web-interface/archive/like");
likeXhr.withCredentials = true;
likeXhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
likeXhr.send(likeParam);
likeXhr.onreadystatechange = () => {
  if (likeXhr.readyState === 4 && likeXhr.status === 200) {
    console.log(likeXhr.response);
  }
};
