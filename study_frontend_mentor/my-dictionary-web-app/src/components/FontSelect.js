import "../styles/FontSelect.css";

const FontSelect = () => {
  let fontSelection = "";
  let bodyFont = document.querySelector("body");

  const setSansFont = () => {
    bodyFont.setAttribute("data-font", "font-sans");
  };
  const setSerfiFont = () => {
    bodyFont.setAttribute("data-font", "font-serif");
  };
  const setMonoFont = () => {
    bodyFont.setAttribute("data-font", "font-mono");
  };

  const toggleSelect = (e) => {
    const selectList = document.querySelector(".select__list");

    selectList.classList.toggle("select__visible");
    document.querySelectorAll(".select__list-item").forEach((item) =>
      item.addEventListener("click", function () {
        document.querySelector(".select__button").innerText = this.innerText;
        fontSelection = this.dataset.value;
        selectList.classList.remove("select__visible");
        if (fontSelection === "sans-font") {
          setSansFont();
        } else if (fontSelection === "serif-font") {
          setSerfiFont();
        } else {
          setMonoFont();
        }
      })
    );
  };

  return (
    <div className="select">
      <div className="select__dropdown">
        <div className="select__button__container" onClick={toggleSelect}>
          <button className="select__button">Sans Serif</button>
          <div className="icon-icon-arrow"></div>
        </div>
        <ul className="select__list">
          <li className="select__list-item" data-value="sans-font">
            Sans Serif
          </li>
          <li className="select__list-item" data-value="serif-font">
            Serif
          </li>
          <li className="select__list-item" data-value="mono-font">
            Mono
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FontSelect;
