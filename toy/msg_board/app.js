const submitBtn = document.querySelector("button");
const textArea = document.querySelector("textarea");
const ul = document.querySelector("ul");

submitBtn.addEventListener("click", () => {
  if (textArea.value === "") {
    alert("nothing!!");
    return false;
  } else {
    const li = document.createElement("li");
    li.innerHTML = textArea.value;
    ul.insertBefore(li, ul.children[0]);
    textArea.value = ''
  }
});
