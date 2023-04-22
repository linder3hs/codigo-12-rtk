import { createSlice } from "@reduxjs/toolkit";

export const omdbSlice = createSlice({
  name: "omdb",
  initialState: {
    movies: [],
    isLoading: false,
  },
  reducers: {
    initLoading: (state) => {
      state.isLoading = true;
    },
    setMovies: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload.movies;
    },
  },
});

export const { initLoading, setMovies } = omdbSlice.actions;
