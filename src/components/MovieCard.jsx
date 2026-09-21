function MovieCard({ title, genre, year, rating, language }) {
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
      </div>
    </div>
  );
}

export default MovieCard;