const checkboxes = document.querySelectorAll("input[type = 'checkbox']");

const checkAll = (myCheckbox) => {
  if (myCheckbox.checked === true) {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  } else {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
};
