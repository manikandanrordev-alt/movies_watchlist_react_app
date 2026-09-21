function MovieCard({ title, genre, year, rating, isAdded, onAdd }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <span className="badge bg-secondary align-self-start mb-2">{genre}</span>
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