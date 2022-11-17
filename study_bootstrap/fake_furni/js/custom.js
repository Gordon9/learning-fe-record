(function () {
  "use strict";

  let tinyslider = function () {
    let el = document.querySelectorAll(".testimonial-slider");

    if (el.length > 0) {
      let slider = tns({
        container: ".testimonial-slider",
        items: 1,
        axis: "horizontal",
        controlsContainer: "#testimonial-nav",
        swipeAngle: false,
        speed: 700,
        nav: true,
        controls: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3500,
        autoplayButtonOutput: false,
      });
    }
  };

  tinyslider();
})();
