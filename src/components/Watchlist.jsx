function Watchlist({ watchlist, onRemove }) {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-dark text-white">
        My Watchlist ({watchlist.length})
      </div>

      {watchlist.length === 0 ? (
        <div className="card-body text-muted">Your watchlist is empty.</div>
      ) : (
        <ul className="list-group list-group-flush">
          {watchlist.map((movie) => (
            <li key={movie.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{movie.title}</strong>
                <br />
                <small className="text-muted">
                  {movie.genre} • {movie.year} • ⭐ {movie.rating}
                </small>
              </div>
              <button className="btn btn-sm btn-outline-danger" onClick={() => onRemove(movie.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Watchlist;