const posterGradients = {
  "Crime Thriller": "linear-gradient(145deg, #4a1119, #120609)",
  Investigation: "linear-gradient(145deg, #12384d, #060e13)",
  "Courtroom Drama": "linear-gradient(145deg, #4a3c14, #110d05)",
  "Rom-Com": "linear-gradient(145deg, #4a1a3e, #12060f)",
  Comedy: "linear-gradient(145deg, #4d3510, #120c04)",
  Action: "linear-gradient(145deg, #4d230f, #120704)",
};

function MovieCard({ title, genre, year, rating, language, isAdded, onAdd }) {
  const background =
    posterGradients[genre] || "linear-gradient(145deg, #2a2a30, #0e0e10)";

  return (
    <div className="lux-card">
      <div className="lux-poster" style={{ background }}>
        <span className="lux-poster-letter">{title.charAt(0)}</span>
        <span className="lux-rating">★ {rating}</span>
        <span className="lux-lang">{language}</span>
      </div>

      <div className="lux-body">
        <h5 className="lux-movie-title">{title}</h5>
        <div className="lux-meta">
          <span>{genre}</span>
          <span>{year}</span>
        </div>

        <button className="lux-btn" onClick={onAdd} disabled={isAdded}>
          {isAdded ? "Added" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;