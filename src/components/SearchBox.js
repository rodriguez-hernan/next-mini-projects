const SearchBox = (props) => {
  const { handleInput, query, handleSearch } = props;

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={ e => handleInput(e.target.value)}
        value={query}
        onKeyPress={handleSearch}
      />
    </div>
  );
};

export default SearchBox;