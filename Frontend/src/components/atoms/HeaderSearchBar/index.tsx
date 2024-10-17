import React from 'react';
import { FaSearch } from 'react-icons/fa'; 
import { FaCaretDown } from "react-icons/fa";

export const HeaderSearchBar: React.FC = () => {
  return (
    <header className="w-full lg:max-w-4xl md:max-w-2xl mx-auto md:my-16 my-4">
      <form className="bg-white rounded-lg flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 p-2">
        <input
          type="text"
          placeholder="Car Make or Model"
          className="flex-grow text-base text-gray-700 placeholder:text-gray-400 rounded-lg px-4 py-2 outline-none bg-transparent"
        />

        {/* Cities Dropdown */}
        <div className="relative inline-block text-left border border-gray-300 rounded-lg w-full md:w-[70%]">
          <button
            type="button"
            className="flex items-center justify-between text-base text-gray-700 px-3 py-2 hover:bg-gray-100 focus:outline-none w-full h-full"
          >
            <span className="mr-2">All Cities</span> {/* Added margin to the right */}
            <FaCaretDown />
          </button>
        </div>

        {/* Price Range Dropdown */}
        <div className="relative inline-block text-left border border-gray-300 rounded-lg w-full md:w-[70%]">
          <button
            type="button"
            className="flex items-center justify-between text-base text-gray-700 px-3 py-2 hover:bg-gray-100 focus:outline-none w-full h-full"
          >
            <span className="mr-2">15 Lacs - 25 Lacs</span> {/* Added margin to the right */}
            <FaCaretDown />
          </button>
        </div>

        {/* Search Button */}
        <button className="bg-regal-red hover:bg-red-600 flex items-center justify-center p-4 rounded-lg w-full md:w-auto max-sm:self-center text-white text-xl hover:text-2xl">
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
