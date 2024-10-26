import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { SidebarProps } from "./types";


export const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  if (!isSidebarOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-30">
      <div className="absolute top-3 left-0 md:w-1/3 w-full h-auto bg-white px-4 py-8 shadow-lg rounded-lg">
        <button
          onClick={toggleSidebar}
          className="cursor-pointer absolute top-4 right-4 text-charcoal-gray text-xl"
        >
          <IoIosCloseCircle />
        </button>
        <ul className="flex flex-col text-charcoal-gray text-lg justify-center items-center mt-16 gap-4 font-sans font-medium">
          <li className="cursor-pointer hover:px-8 hover:py-3 hover:bg-charcoal-gray hover:text-white hover:rounded-md">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:px-8 hover:py-3 hover:bg-charcoal-gray hover:text-white hover:rounded-md">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:px-8 hover:py-3 hover:bg-charcoal-gray hover:text-white hover:rounded-md">
            <Link to="/buyCar">Buy Car</Link>
          </li>
          <li className="cursor-pointer hover:px-8 hover:py-3 hover:bg-charcoal-gray hover:text-white hover:rounded-md">
            <Link to="/sellCar">Sell Car</Link>
          </li>
          <li className="cursor-pointer hover:px-8 hover:py-3 hover:bg-charcoal-gray hover:text-white hover:rounded-md">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="cursor-pointer hover:px-8 hover:py-3 hover:bg-charcoal-gray hover:text-white hover:rounded-md">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mt-4">
            <button className="w-full rounded-md px-6 py-3 bg-regal-red hover:bg-red-600 cursor-pointer text-white">
              Online Booking
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
