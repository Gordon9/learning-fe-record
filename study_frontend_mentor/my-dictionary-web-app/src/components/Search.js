import "../styles/Search.css";

const Search = () => {
  return (
    <div className="search__container">
      <input
        className="search__input"
        id="search__input"
        placeholder="try any word..."
      />
      <div className="icon-icon_search"></div>
    </div>
  );
};

export default Search;
