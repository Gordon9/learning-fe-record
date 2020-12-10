import MovieList from "./MovieList";
import MovieNav from "./MovieNav";
import "./App.css";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";

const App2 = () => {
  return (
    <MovieProvider>
      <div className="App2">
        <MovieNav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
};

export default App2;
