import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("/movies.json").then((res) => setMovies(res.data));
  }, []);

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">🎬 Movie Watchlist</h1>
      <ul className="list-group">
        {movies.map((movie) => (
          <li key={movie.id} className="list-group-item">
            <strong>{movie.title}</strong> ({movie.year}) — {movie.genre} •{" "}
            {movie.language} • ⭐ {movie.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;