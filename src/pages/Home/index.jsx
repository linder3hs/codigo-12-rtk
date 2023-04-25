import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovies,
  generateDataAutoComplete,
} from "../../store/slices/omdbMovies/thunks";
import { cleanAutocomplete } from "../../store/slices/omdbMovies";
import { FilterList, Movies, Search } from "../../components";

export default function Home() {
  const [search, setSearch] = useState("Batman");

  const dispatch = useDispatch();

  const { movies, years, isLoading, autocomplete } = useSelector(
    (state) => state.movies
  );

  const handleSelectOnChange = (value) => {
    setSearch(value);
    dispatch(getMovies(value));
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearch(text);

    if (text.length >= 3) dispatch(generateDataAutoComplete(text));
    if (text.length < 3) dispatch(cleanAutocomplete());
  };

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <>
      <div className="max-w-5xl m-auto p-10">
        <div className="flex gap-10 items-end">
          <div>
            <h1 className="text-blue-800 text-6xl font-extrabold">Películas</h1>
          </div>
          <div>
            <div className="flex gap-2">
              <Search
                search={search}
                handleInputChange={handleInputChange}
                handleSelectOnChange={handleSelectOnChange}
                autocomplete={autocomplete}
              />
            </div>
          </div>
        </div>
        <hr className="mt-10 h-1 bg-gray-200" />
        <div className="flex gap-24 mt-10">
          <div className="flex flex-col gap-7 w-60">
            <h2 className="font-semibold">Filtrar por:</h2>
            <FilterList text="Categoría" list={["Movies", "Series"]} />
            <hr className="h-1 bg-gray-200" />
            <FilterList
              text="Año"
              list={years}
              search={search}
              getMovies={getMovies}
              dispatch={dispatch}
            />
          </div>
          <div>
            {isLoading ? <span>Loading...</span> : <Movies movies={movies} />}
          </div>
        </div>
      </div>
    </>
  );
}
