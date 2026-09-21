function GenreFilter({ genres, selectedGenre, onSelect }) {
  return (
    <div className="mb-4 d-flex flex-wrap gap-2">
      {genres.map((genre) => (
        <button
          key={genre}
          className={`btn ${
            selectedGenre === genre ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => onSelect(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;