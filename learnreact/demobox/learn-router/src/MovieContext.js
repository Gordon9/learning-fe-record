import { createContext, useState } from "react";
import MovieList from "./MovieList";
import Nav from "./Nav";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Person Of Interest",
      price: "$10",
      id: 21122,
    },
    {
      name: "Game of Thrones",
      price: "$120",
      id: 421432,
    },
    {
      name: "Harry Potter",
      price: "$330",
      id: 3242311,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
