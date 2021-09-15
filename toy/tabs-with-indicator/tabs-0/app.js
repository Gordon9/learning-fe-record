let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

const tabsPane = tabHeader.getElementsByTagName("div");

for (let i = 0; i < tabsPane.length; i++) {
  tabsPane[i].onclick = () => {
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabsPane[i].classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByTagName("div")[i].classList.add("active");

    tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
  };
}
