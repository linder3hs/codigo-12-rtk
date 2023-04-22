import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";
import { omdbSlice } from "./slices/omdbMovies";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    movies: omdbSlice.reducer,
  },
});
