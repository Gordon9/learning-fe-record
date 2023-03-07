import "../styles/Search.css";

const Search = ({ onChange, value, submitUserWord }) => {
  return (
    <div className="search__container">
      <input
        className="search__input"
        id="search__input"
        placeholder="try any word..."
        value={value}
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submitUserWord(e);
          }
        }}
      />
      <div className="icon-icon_search"></div>
    </div>
  );
};

export default Search;
