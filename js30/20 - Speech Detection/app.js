window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const regonition = new SpeechRecognition();
regonition.interimResults = true;
regonition.lang = "en-US";

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

regonition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  const poopScript = transcript.replace(/poop|poo|shit|dump/gi, "💩");
  p.textContent = poopScript;

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
});

regonition.addEventListener("end", regonition.start);

regonition.start();
