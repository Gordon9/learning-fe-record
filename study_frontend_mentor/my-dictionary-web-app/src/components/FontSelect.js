import "../styles/FontSelect.css";

const FontSelect = () => {
  return (
    <div className="select">
      <div className="select__dropdown">
        <div className="select__button__container">
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
