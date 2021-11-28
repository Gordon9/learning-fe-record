const glink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");
const embedAudio = document.getElementById("embed-audio");
const embedVideo = document.getElementById("embed-video");
const clear = document.querySelector(".clear");

const generateLink = (e) => {
  e.preventDefault();

  const gLinkValue = glink.value;
  const confirmLink = gLinkValue.includes("https://drive.google.com/file/d/");

  if (confirmLink) {
    console.log("good");
    const getDownloadLink = gLinkValue
      .replace(
        "https://drive.google.com/file/d/",
        "https://drive.google.com/uc?export=download&id="
      )
      .replace("/view?usp=sharing", "");

    downloadLink.value = getDownloadLink;

    const copyText = (target) => {
      if (target.value === "") {
        alert("Please generate a Download link");
      } else {
        target.select();
        document.execCommand("copy");
        alert("Copied!");
      }
    };

    const copy = document.querySelector(".copy");
    copy.addEventListener("click", () => {
      return copyText(downloadLink);
    });
  } else {
    alert("Please Enter a Google Drive File Link");
  }
};

btn.addEventListener("click", generateLink);
