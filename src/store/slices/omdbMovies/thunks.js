import { initLoading, setMovies, setAutoComplete } from ".";
import { api } from "../../../services";

export const getMovies = (name = "Batman", year) => {
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

    let moviesResponse = movies;

    if (year) moviesResponse = movies.filter((movie) => movie.year === year);

    dispatch(
      setMovies({ movies: moviesResponse, years: [...new Set(years.sort())] })
    );
  };
};

export const generateDataAutoComplete = (text) => {
  return async (dispatch) => {
    const { data } = await api.get(`?apikey=f2d94c7d&s=${text}`);

    if (!data.Search) return;

    const titles = data.Search.map((movie) => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        image: movie.Poster,
      };
    });

    dispatch(setAutoComplete({ titles }));
  };
};
