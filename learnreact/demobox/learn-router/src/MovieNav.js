import { useContext } from "react";
import { MovieContext } from "./MovieContext";

const MovieNav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <nav>
      <h3>Gordon</h3>
      <p>List of Movies:{movies.length}</p>
    </nav>
  );
};

export default MovieNav;
