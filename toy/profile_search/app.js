import * as v from "./js/variables.js";
import { getUser } from "./js/functions.js";

v.form.addEventListener("submit", (e) => {
  e.preventDefault();

  let user = v.search.value.split(" ").join(",");

  if (user === "") {
    console.log("input cannot be blank");
  } else {
    getUser(user);
  }
});
