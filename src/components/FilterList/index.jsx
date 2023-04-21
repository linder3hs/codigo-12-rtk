import PropTypes from "prop-types";

export default function FilterList(props) {
  const { text, list } = props;

  return (
    <div>
      <h2 className="font-semibold">{text}</h2>
      <ul className="mt-3 flex flex-col gap-2">
        {list.map((element) => (
          <li key={element.id}>
            <a href="#">{element}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

FilterList.propTypes = {
  text: PropTypes.string,
  list: PropTypes.array,
};
