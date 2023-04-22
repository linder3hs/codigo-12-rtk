import { initLoading, setMovies } from ".";
import { api } from "../../../services";

export const getMovies = (name = "Batman") => {
  return async (dispatch) => {
    dispatch(initLoading());

    const { data } = await api.get(`?apikey=f2d94c7d&s=${name}`);

    const objMovies = {
      response: data.Response,
      movies: data.Search,
      total: data.totalResults,
    };

    const movies = objMovies.movies.map((movie) => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        type: movie.Type,
        image: movie.Poster,
      };
    });

    const years = movies.map((movie) => movie.year);

    dispatch(setMovies({ movies, years: [...new Set(years.sort())] }));
  };
};
