const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // console.log("e:", e);
  let isBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      console.log("checkbox:", checkbox);

      if (checkbox === this || checkbox === lastChecked) {
        isBetween = !isBetween;
        console.log("Starting to check them in between!");
      }

      if (isBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
