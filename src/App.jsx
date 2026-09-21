import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./components/MovieCard";
import Watchlist from "./components/Watchlist";
import GenreFilter from "./components/GenreFilter";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const [watchlist, setWatchlist] = useState(() => {
    try {
      const saved = localStorage.getItem("watchlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    axios
      .get("/movies.json")
      .then((res) => setMovies(res.data))
      .catch(() => setError("Unable to load the collection. Please try again."))
      .finally(() => setLoading(false));
  }, []);

  // Save watchlist whenever it changes
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (movie) => {
    setWatchlist((prev) =>
      prev.some((m) => m.id === movie.id) ? prev : [...prev, movie]
    );
  };

  const removeFromWatchlist = (id) => {
    setWatchlist((prev) => prev.filter((m) => m.id !== id));
  };

  const genres = ["All", ...new Set(movies.map((m) => m.genre))];
  const filteredMovies = selectedGenre === "All" ? movies : movies.filter((m) => m.genre === selectedGenre);

  return (
    <div className="container pb-5">
      <header className="lux-header">
        <div className="lux-eyebrow">Tamil · Malayalam Cinema</div>
        <h1 className="lux-title">The Private Screening</h1>
        <div className="lux-divider"></div>
      </header>

      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border lux-spinner" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 lux-eyebrow">Preparing the collection</p>
        </div>
      ) : error ? (
        <div className="lux-message">{error}</div>
      ) : (
        <div className="row g-4">
          <div className="col-lg-8">
            <GenreFilter genres={genres} selectedGenre={selectedGenre} onSelect={setSelectedGenre}/>

            {filteredMovies.length === 0 ? (
              <div className="lux-message">No movies found</div>
            ) : (
              <div className="row g-4">
                {filteredMovies.map((movie) => (
                  <div className="col-sm-6 col-md-4" key={movie.id}>
                    <MovieCard title={movie.title} genre={movie.genre} year={movie.year} rating={movie.rating} language={movie.language} isAdded={watchlist.some((m) => m.id === movie.id)} onAdd={() => addToWatchlist(movie)}/>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="col-lg-4">
            <Watchlist watchlist={watchlist} onRemove={removeFromWatchlist} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;