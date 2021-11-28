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

    // EMBED AUDIO
    const AUDIO1 = '<audio width="300" height="32" controls="controls" src="';
    const AUDIO2 = '" type="audio/mp3"</audio>';

    embedAudio.value = `${AUDIO1}${downloadLink.value}${AUDIO2}`;
    // COPY EMBED AUDIO CODE
    const copyAudio = document.querySelector(".copy-audio");
    copyAudio.addEventListener("click", () => {
      return copyText(embedAudio);
    });

    // EMBED VIDEO
    const getVideoLink = glink.value.replace("/view?usp=sharing", "");

    const VIDEO1 = '<iframe src="';
    const VIDEO2 = '/preview" width="560" height="315"><iframe/>';

    embedVideo.value = `${VIDEO1}${getVideoLink}${VIDEO2}`;
    // COPY EMBED VIDEO CODE
    const copyVideo = document.querySelector(".copy-video");
    copyVideo.addEventListener("click", () => {
      return copyText(embedVideo);
    });
  } else {
    alert("Please Enter a Google Drive File Link");
  }
};

const clearForm = (e) => {
  e.preventDefault();
  glink.value = "";
  downloadLink.value = "";
  embedAudio.value = "";
  embedVideo.value = "";
};

btn.addEventListener("click", generateLink);
clear.addEventListener("click", clearForm);
