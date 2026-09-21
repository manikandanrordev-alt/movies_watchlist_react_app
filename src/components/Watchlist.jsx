function Watchlist({ watchlist, onRemove }) {
  return (
    <aside className="lux-panel">
      <div className="lux-panel-sub">Your Selection</div>
      <h2 className="lux-panel-title">My Watchlist ({watchlist.length})</h2>

      {watchlist.length === 0 ? (
        <div className="lux-empty">Your watchlist is empty.</div>
      ) : (
        <div className="mt-3">
          {watchlist.map((movie, index) => (
            <div key={movie.id} className="lux-item">
              <span className="lux-item-no">{index + 1}</span>
              <div className="lux-item-info">
                <div className="lux-item-title">{movie.title}</div>
                <div className="lux-item-meta">
                  {movie.genre} · {movie.year} · ★ {movie.rating}
                </div>
              </div>
              <button className="lux-remove" onClick={() => onRemove(movie.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

export default Watchlist;