import { useState } from "react";

import Header from "./components/Header";
import Meanings from "./components/Meanings";
import Search from "./components/Search";
import Word from "./components/Word";
import "./styles/App.css";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const fetchResults = async (query) => {
  try {
    const response = await fetch(`${API_URL}${query}`);
    const json = await response.json();
    return json;
  } catch (e) {
    throw new Error(e);
  }
};

function App() {
  const [query, setQuery] = useState("");
  const [emptyInput, setEmptyInput] = useState(true);
  const [searchResult, setResults] = useState(null);
  const [found, setFound] = useState(null);

  const onSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const onSearchSubmit = async (e) => {
    if (query === "") {
      setEmptyInput(false);
      const inputID = document.querySelector(".search__input");
      inputID.classList.add("woops-input");
    } else {
      setEmptyInput(true);
      const inputID = document.querySelector(".search__input");
      inputID.classList.remove("woops-input");
      e.preventDefault();
      const result = await fetchResults(query);
      if (Array.isArray(result)) {
        setResults(result);
        setFound(true);
      } else {
        setFound(false);
        setResults(result);
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <Search
        onChange={onSearchChange}
        value={query}
        submitUserWord={onSearchSubmit}
      />
      {emptyInput ? (
        <div>
          {found ? (
            <div>
              <Word
                word={searchResult.map((item) => item.word)[0]}
                phonetic={searchResult.map((item) => item.phonetic)[0]}
                audio={
                  searchResult
                    .filter((item) => item.phonetics.length)
                    .map(
                      (item) =>
                        item.phonetics
                          .map((item) => item.audio)
                          .filter((item) => item !== "")[0]
                    )[0]
                }
              />
              {searchResult.map((item) =>
                item.meanings.map((item) => (
                  <Meanings
                    partOfSpeech={item.partOfSpeech}
                    definitions={item.definitions}
                    synonyms={item.synonyms}
                  />
                ))
              )}
            </div>
          ) : (
            <div>{found === null ? <div></div> : <div>error 404</div>}</div>
          )}
        </div>
      ) : (
        <div className="woops">Whoops, can't be empty...</div>
      )}
    </div>
  );
}

export default App;
