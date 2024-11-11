// src/components/HeaderSearchBar.tsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSearch } from '../SearchContext';

export const HeaderSearchBar: React.FC = () => {
  const { searchKey, setSearchKey } = useSearch();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // Trigger the search logic after clicking the button
    if (searchKey.trim()) {
      // Trigger the search functionality here, such as updating the search results in the parent component
      setSearchKey(searchKey);  // This will update the search key, triggering the search effect in SellYourCar
    }
  };

  return (
    <div>
      <header className="w-full lg:max-w-xl md:max-w-lg mx-auto md:my-16 my-4">
        <form
          className="bg-white rounded-lg flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 p-2"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Car Make or Model"
            className="flex-grow text-base text-gray-700 placeholder:text-gray-400 rounded-lg px-4 py-2 outline-none bg-transparent"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button
            type="submit"
            className="bg-regal-red hover:bg-red-600 flex items-center justify-center p-4 rounded-lg w-full md:w-auto max-sm:self-center text-white text-xl hover:text-2xl"
          >
            <FaSearch />
          </button>
        </form>
      </header>
    </div>
  );
};
