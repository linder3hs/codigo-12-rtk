import PropTypes from "prop-types";

export default function Movies(props) {
  const {
    movies = [
      {
        id: 1,
        name: "Coldplay Live At River Plate",
        image:
          "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001628?referenceScheme=HeadOffice&allowPlaceHolder=true",
      },
      {
        id: 2,
        name: "Coldplay Live At River Plate",
        image:
          "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001628?referenceScheme=HeadOffice&allowPlaceHolder=true",
      },
      {
        id: 3,
        name: "Coldplay Live At River Plate",
        image:
          "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001628?referenceScheme=HeadOffice&allowPlaceHolder=true",
      },
      {
        id: 4,
        name: "Coldplay Live At River Plate",
        image:
          "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001628?referenceScheme=HeadOffice&allowPlaceHolder=true",
      },
      {
        id: 5,
        name: "Coldplay Live At River Plate",
        image:
          "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001628?referenceScheme=HeadOffice&allowPlaceHolder=true",
      },
    ],
  } = props;

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={movie.image}
              alt=""
              className="hover:scale-105 hover:cursor-pointer duration-150"
            />
            <h2 className="my-4 font-bold text-xl">{movie.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

Movies.propTypes = {
  movies: PropTypes.array,
};
