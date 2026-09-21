function GenreFilter({ genres, selectedGenre, onSelect }) {
  return (
    <div className="lux-tabs">
      {genres.map((genre) => (
        <button key={genre} className={`lux-tab ${selectedGenre === genre ? "active" : ""}`} onClick={() => onSelect(genre)} >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;