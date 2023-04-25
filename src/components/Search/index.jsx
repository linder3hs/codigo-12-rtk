import { Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import PropTypes from "prop-types";

export default function Search(props) {
  const { search, handleInputChange, handleSelectOnChange, autocomplete } =
    props;

  return (
    <>
      <div className="top-16 w-72">
        <Combobox value={search} onChange={handleSelectOnChange}>
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md">
              <Combobox.Input
                className="w-full border-none py-2 px-5 text-sm leading-5 focus:ring-0 focus:outline-none"
                displayValue={search}
                onChange={handleInputChange}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                🔎
              </Combobox.Button>
            </div>
            {autocomplete.length > 0 && (
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 focus:outline-none">
                  {autocomplete.map((movie) => (
                    <Combobox.Option
                      value={movie.title}
                      className="relative py-2 cursor-default select-none pl-10 pr-4 text-gray-900"
                      key={movie.id}
                    >
                      <span>{movie.title}</span>
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </Transition>
            )}
          </div>
        </Combobox>
      </div>
    </>
  );
}

Search.propTypes = {
  search: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleSelectOnChange: PropTypes.func,
  autocomplete: PropTypes.array,
};
