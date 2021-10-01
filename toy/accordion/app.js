const acc = document.querySelectorAll(".accordion");

for (let item of acc) {
  item.addEventListener("click", function () {
    const desc = this.nextElementSibling;
    const allDesc = document.querySelectorAll(".desc");
    const activeAcc = document.getElementsByClassName("accordion active");

    if (desc.style.maxHeight) {
      desc.style.maxHeight = null;
      this.classList.remove("active");
    } else {
      for (item of activeAcc) {
        item.classList.remove("active");
      }
      for (item of allDesc) {
        item.style.maxHeight = null;
      }

      desc.style.maxHeight = desc.scrollHeight + "px";
      this.classList.add("active");
    }
  });
}
