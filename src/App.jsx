import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./components/MovieCard";
import Watchlist from "./components/Watchlist";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("/movies.json").then((res) => setMovies(res.data));
  }, []);

  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    setWatchlist((prev) =>
      prev.some((m) => m.id === movie.id) ? prev : [...prev, movie]
    );
  };

  const removeFromWatchlist = (id) => {
    setWatchlist((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">🎬 Movie Watchlist</h1>
      <div className="row">
        <div className="col-lg-8">
          <div className="row g-3">
          {movies.map((movie) => (
            <div className="col-sm-6 col-md-4" key={movie.id}>
              <MovieCard title={movie.title} genre={movie.genre} year={movie.year} rating={movie.rating} language={movie.language} isAdded={watchlist.some((m) => m.id === movie.id)} onAdd={() => addToWatchlist(movie)} />
            </div>
          ))}
          </div>
        </div>
        <div className="col-lg-4 mt-4 mt-lg-0">
          <Watchlist watchlist={watchlist} onRemove={removeFromWatchlist} />
        </div>
      </div>
    </div>
  );
}

export default App;