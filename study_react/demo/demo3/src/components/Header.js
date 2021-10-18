import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  // const handleAdd = (e) => {
  //   console.log(e);
  // };

  return (
    <header className="header">
      <h1 style={{ color: "lightblue", fontSize: "30px" }}>{title}</h1>
      <Button
        text={showAdd ? "Close" : "Add"}
        color={showAdd ? "#FF5A5F" : "#00848A"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "John Snow",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
