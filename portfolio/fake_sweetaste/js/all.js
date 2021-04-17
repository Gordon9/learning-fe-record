const hamburger = document.querySelector(".mobile_menu .hamburger");
// const mobileUl = document.querySelector(".mobile_menu ul");
const mobileMenu = document.querySelector(".mobile_menu");
const eleMore = document.querySelector(".container_ul");

// let display = false;

const slideToggleTrans = (element, display) => {
  if (typeof window.screenX === "number") {
    element.addEventListener("click", function () {
      display = !display;
      // const rel = this.getAttribute("data-rel");
      // const eleMore = document.querySelector("#" + rel);

      eleMore &&
        (eleMore.style.height = display
          ? (function () {
              let height = 0;
              Array.prototype.slice
                .call(eleMore.childNodes)
                .forEach(function (child) {
                  console.log('child: ' + child.clientHeight);
                  console.log("chiltype: " + child.nodeType);
                  if (child.nodeType === 1) {
                    let oStyle = window.getComputedStyle(child);
                    console.log("child.clientHeight:", child.clientHeight);
                    height =
                      child.clientHeight +
                      (parseInt(oStyle.borderTopWidth) || 0) +
                      (parseInt(oStyle.borderBottomWidth) || 0);
                  }
                });
                console.log('height:' + height);
              return height;
            })() + "px"
          : "0px");
    });
  } else {
    console.log("handle IE...");
  }
};

slideToggleTrans(hamburger);

// hamburger.addEventListener("click", () => {
//   console.log("hello");
//   mobileMenu.classList.toggle("active");

//   slideToggleTrans(eleMore, false);

//   // display = !display;
//   // eleMore.style.height = display ? "217px" : "0px";
//   // return false;
// });
