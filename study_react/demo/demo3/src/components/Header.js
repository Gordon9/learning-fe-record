import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  const handleAdd = (e) => {
    console.log(e);
  };

  return (
    <header className="header">
      <h1 style={{ color: "lightblue", fontSize: "30px" }}>{props.title}</h1>
      <Button text="Add" onClick={handleAdd} />
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
