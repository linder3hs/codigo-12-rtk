import PropTypes from "prop-types";

export default function Movies(props) {
  const { movies = [] } = props;

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id}>
              <img
                src={movie.image}
                alt=""
                className="hover:scale-105 hover:cursor-pointer duration-150"
              />
              <h2 className="my-4 font-bold text-xl">{movie.name}</h2>
            </div>
          ))
        ) : (
          <div>
            <h2 className="text-2xl text-blue-800">
              No se encontraron peliculas
            </h2>
          </div>
        )}
      </div>
    </>
  );
}

Movies.propTypes = {
  movies: PropTypes.array,
};
