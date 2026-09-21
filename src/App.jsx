import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("/movies.json").then((res) => setMovies(res.data));
  }, []);

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">🎬 Movie Watchlist</h1>
      <div className="row g-3">
        {movies.map((movie) => (
          <div className="col-sm-6 col-md-4" key={movie.id}>
            <MovieCard title={movie.title} genre={movie.genre} year={movie.year} rating={movie.rating} language={movie.language}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;