import PropTypes from "prop-types";

export default function FilterList(props) {
  const { text, list, search, getMovies, dispatch } = props;

  return (
    <div>
      <h2 className="font-semibold">{text}</h2>
      <ul className="mt-3 flex flex-col gap-2">
        {list.map((element) => (
          <li key={element}>
            <button onClick={() => dispatch(getMovies(search, element))}>
              {element}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

FilterList.propTypes = {
  text: PropTypes.string,
  list: PropTypes.array,
  search: PropTypes.string,
  getMovies: PropTypes.func,
  dispatch: PropTypes.func,
};
