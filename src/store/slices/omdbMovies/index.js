import { createSlice } from "@reduxjs/toolkit";

export const omdbSlice = createSlice({
  name: "omdb",
  initialState: {
    movies: [],
    autocomplete: [],
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
    setAutoComplete: (state, action) => {
      state.autocomplete = action.payload.titles;
    },
    cleanAutocomplete: (state) => {
      state.autocomplete = [];
    },
  },
});

export const { initLoading, setMovies, setAutoComplete, cleanAutocomplete } =
  omdbSlice.actions;
