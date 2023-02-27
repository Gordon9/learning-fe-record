const DarkMode = () => {
  return (
    <div className="dark_mode">
      <input
        type="checkbox"
        id="darkmode_toggle"
        value=""
        className="dark_mode_input"
      />
      <label htmlFor="darkmode_toggle" className="dark_mode_label"></label>
      <div className="icon-icon_half-moon"></div>
    </div>
  );
};

export default DarkMode;
