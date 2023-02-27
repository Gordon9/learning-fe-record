import "../styles/DarkMode.css";
import "../styles/icons-font.css";

const DarkMode = () => {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: light)");
  let bodyTheme = document.querySelector("body");

  const setDarkMode = () => {
    bodyTheme.setAttribute("data-theme", "dark-theme");
  };

  const setLightMode = () => {
    bodyTheme.setAttribute("data-theme", "light-theme");
  };

  if (darkThemeMq.matches) {
    setDarkMode();
  } else {
    setLightMode();
  }

  const toggleTheme = (e) => {
    if (!darkThemeMq.matches) {
      if (e.target.checked) {
        setDarkMode();
      } else {
        setLightMode();
      }
    } else {
      if (e.target.checked) {
        setLightMode();
      } else {
        setDarkMode();
      }
    }
  };

  return (
    <div className="dark_mode">
      <input
        type="checkbox"
        id="darkmode_toggle"
        value=""
        className="dark_mode_input"
        onChange={toggleTheme}
      />
      <label htmlFor="darkmode_toggle" className="dark_mode_label"></label>
      <div className="icon-icon_half-moon"></div>
    </div>
  );
};

export default DarkMode;
