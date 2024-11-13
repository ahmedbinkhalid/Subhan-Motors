import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearch } from "../SearchContext";

export const HeaderSearchBar: React.FC = () => {
  const { setSearchKey } = useSearch(); // Removed `searchKey` from context to avoid direct binding
  const [inputValue, setInputValue] = useState(""); // Local state for search input

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setSearchKey(inputValue); // Only set global searchKey on submit
    }
  };

  return (
    <div>
      <header className="w-full lg:max-w-xl md:max-w-lg mx-auto md:my-16 my-6">
        <form
          className="bg-white rounded-lg flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 p-2"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Car Make or Model"
            className="flex-grow text-base text-charcoal-gray placeholder:text-gray-500 rounded-lg px-4 py-2 outline-none bg-transparent"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Update local state on change
          />
          <button
            type="submit"
            className="bg-regal-red hover:bg-red-600 flex items-center justify-center md:p-4 p-2 rounded-lg w-full md:w-auto max-sm:self-center text-white text-xl hover:text-2xl"
          >
            <FaSearch />
          </button>
        </form>
      </header>
    </div>
  );
};
