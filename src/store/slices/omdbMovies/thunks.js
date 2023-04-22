import { initLoading, setMovies } from ".";
import { api } from "../../../services";

export const getMovies = (name = "Avengers") => {
  return async (dispatch, getState) => {
    dispatch(initLoading());

    const movies = await api.get(`?apikey=f2d94c7d&s=${name}`);
    console.log(movies.data);
  };
};
