import { initLoading, setMovies } from ".";
import { api } from "../../../services";

export const getMovies = (name = "Avengers") => {
  return async (dispatch) => {
    dispatch(initLoading());

    const { data } = await api.get(`?apikey=f2d94c7d&s=${name}`);

    const objMovies = {
      response: data.Response,
      movies: data.Search,
      total: data.totalResults,
    };

    dispatch(setMovies({ movies: objMovies.movies }));
  };
};
