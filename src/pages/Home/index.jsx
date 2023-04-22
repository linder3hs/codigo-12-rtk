import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/slices/omdbMovies/thunks";
import { FilterList, Movies } from "../../components";

export default function Home() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const { movies, years, isLoading } = useSelector((state) => state.movies);

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
          <div className="flex gap-2">
            <input
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent ring-1 ring-gray-300 w-full h-10 rounded peer px-5 transition-all outline-none focus:ring-gray-400 valid:ring-gray-400"
              placeholder="Buscar tu pelicula"
            />
            <button
              onClick={() => dispatch(getMovies(search))}
              className="border border-blue-800 text-blue-800 py-2 px-4 hover:bg-blue-800 hover:text-white rounded-md transition-colors"
            >
              Buscar
            </button>
          </div>
        </div>
        <hr className="mt-10 h-1 bg-gray-200" />
        <div className="flex gap-24 mt-10">
          <div className="flex flex-col gap-7 w-60">
            <h2 className="font-semibold">Filtrar por:</h2>
            <FilterList text="Categoría" list={["Movies", "Series"]} />
            <hr className="h-1 bg-gray-200" />
            <FilterList text="Año" list={years} />
          </div>
          <div>
            {isLoading ? <span>Loading...</span> : <Movies movies={movies} />}
          </div>
        </div>
      </div>
    </>
  );
}
