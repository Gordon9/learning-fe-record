const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

const setColor = () => {
  bgColor.classList.add("online");
};

const connectionStatus = async () => {
  try {
    const fetchResult = await fetch(
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=" +
        new Date().getTime()
    );
    image.src = "./pic/online.png";
    setColor();
    return fetchResult.status >= 200 && fetchResult.status < 300;
  } catch (err) {
    console.log(err);
    statusDisplay.textContent = "OOPS!!! Your Internet Connection is Down.";
    image.src = "./pic/offline.png";
    bgColor.classList.remove("online");
  }
};

setInterval(async () => {
  const result = await connectionStatus();
  if (result) {
    statusDisplay.textContent = "You are ONLINE! good night.";
    setColor();
  }
}, 3000);

window.addEventListener("load", async (e) => {
  if (connectionStatus()) {
    statusDisplay.textContent = "Online";
  } else {
    statusDisplay.textContent = "Offline";
  }
});
