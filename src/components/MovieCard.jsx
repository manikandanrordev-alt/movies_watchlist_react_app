function MovieCard({ title, genre, year, rating, language, isAdded, onAdd }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <div className="mb-2">
          <span className="badge bg-secondary me-1">{genre}</span>
          <span className="badge bg-info text-dark">{language}</span>
        </div>
        <p className="card-text mb-1">📅 Year: {year}</p>
        <p className="card-text">⭐ Rating: {rating}</p>

        <button
          className={`btn mt-auto ${isAdded ? "btn-success" : "btn-primary"}`}
          onClick={onAdd}
          disabled={isAdded}
        >
          {isAdded ? "Added" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;