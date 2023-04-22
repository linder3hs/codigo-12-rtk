import { createSlice } from "@reduxjs/toolkit";

export const omdbSlice = createSlice({
  name: "omdb",
  initialState: {
    movies: [],
    years: [],
    isLoading: false,
  },
  reducers: {
    initLoading: (state) => {
      state.isLoading = true;
    },
    setMovies: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload.movies;
      state.years = action.payload.years;
    },
  },
});

export const { initLoading, setMovies } = omdbSlice.actions;
