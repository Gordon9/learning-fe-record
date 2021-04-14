const eleBtn = document.getElementById("button");

const slideToggleTrans = (element, display) => {
  if (typeof window.screenX === "number") {
    element.addEventListener("click", function () {
      display = !display;
      const rel = this.getAttribute("data-rel");
      const eleMore = document.querySelector("#" + rel);
      eleMore &&
        (eleMore.style.height = display
          ? (function () {
              let height = 0;
              Array.prototype.slice
                .call(eleMore.childNodes)
                .forEach(function (child) {
                  if (child.nodeType === 1) {
                    let oStyle = window.getComputedStyle(child);
                    height =
                      child.clientHeight +
                      (parseInt(oStyle.borderTopWidth) || 0) +
                      (parseInt(oStyle.borderBottomWidth) || 0);
                  }
                });
              return height;
            })() + "px"
          : "0px");
    });
  } else {
    console.log("handle IE...");
  }
};

slideToggleTrans(eleBtn);
