import { FilterList, Movies } from "../../components";

export default function Home() {
  return (
    <>
      <div className="max-w-5xl m-auto p-10">
        <div className="flex gap-10 items-end">
          <div>
            <h1 className="text-blue-800 text-6xl font-extrabold">Películas</h1>
          </div>
          <div>
            <a href="#">
              <span className="font-bold">En catelera</span>
            </a>
          </div>
        </div>
        <hr className="mt-10 h-1 bg-gray-200" />
        <div className="flex gap-20 mt-10">
          <div className="flex flex-col gap-7">
            <h2 className="font-semibold">Filtrar por:</h2>
            <FilterList text="Categoría" list={["Movies", "Series"]} />
            <hr className="h-1 bg-gray-200" />
            <FilterList text="Año" list={["2011", "2012", "2013", "2014"]} />
          </div>
          <div>
            <Movies />
          </div>
        </div>
      </div>
    </>
  );
}
