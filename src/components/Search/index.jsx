import PropTypes from "prop-types";

export default function Search(props) {
  const { search, handleInputChange, dispatch, getMovies } = props;

  return (
    <>
      <input
        type="text"
        name="search"
        value={search}
        onChange={handleInputChange}
        className="bg-transparent ring-1 ring-gray-300 w-full h-10 rounded peer px-5 transition-all outline-none focus:ring-gray-400 valid:ring-gray-400"
        placeholder="Buscar tu pelicula"
      />
      <button
        onClick={() => dispatch(getMovies(search))}
        className="border border-blue-800 text-blue-800 py-2 px-4 hover:bg-blue-800 hover:text-white rounded-md transition-colors"
      >
        Buscar
      </button>
    </>
  );
}

Search.propTypes = {
  search: PropTypes.string,
  handleInputChange: PropTypes.func,
  dispatch: PropTypes.func,
  getMovies: PropTypes.func,
};
