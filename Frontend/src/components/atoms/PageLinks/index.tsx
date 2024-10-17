import React, { useState } from "react";
import { logo1 } from "../../../assets/images";
import { PageLinksProps } from "./types";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';


export const PageLinks: React.FC<PageLinksProps> = ({ openModal }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="container mx-auto flex flex-col items-center bg-transparent px-4 py-1">
      {/* SignUp and SignIn Container */}
      <div className="w-full max-w-5xl flex justify-end max-lg:justify-center items-center md:px-3 gap-4">
        <button
          className="py-1 cursor-pointer z-10 border-b border-transparent hover:mb-1 transition duration-100"
          onClick={() => openModal("signup")}
        >
          SignUp
        </button>
        <button
          className="py-1 cursor-pointer z-10 border-b border-transparent hover:mb-1"
          onClick={() => openModal("login")}
        >
          SignIn
        </button>
      </div>

      {/* Logo and Navigation Container */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center">
        {/* Hamburger Menu Icon for Mobile and Tablet */}
        <div className="lg:hidden flex items-center justify-between w-full px-1">
          <button onClick={toggleSidebar} className="text-white">
            <FaBars size={14} />
          </button>
          <img
            alt="logo"
            src={logo1}
            className=" lg:w-64 w-48 lg:h-11 mx-auto"
          />
        </div>

        {/* Logo and Navigation for Desktop */}
        <div className="hidden lg:flex flex-row justify-between items-center w-full">
          <img alt="logo" src={logo1} className="object-cover w-64 h-16" />
          <nav className="flex flex-row items-center justify-center">
  <ul className="flex text-white text-base font-sans my-4 gap-10">
    <li className="cursor-pointer hover:mt-1">
      <Link to="/">Home</Link>
    </li>
    <li className="cursor-pointer hover:mt-1">
      <Link to="/about">About</Link>
    </li>
    <li className="cursor-pointer hover:mt-1">
      <Link to="/buyCar">Buy Car</Link>
    </li>
    <li className="cursor-pointer hover:mt-1">
      <Link to="/sellCar">Sell Car</Link>
    </li>
    <li className="cursor-pointer hover:mt-1">
      <Link to="/blogs">Blogs</Link>
    </li>
    <li className="cursor-pointer hover:mt-1">
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
</nav>

          <button className="rounded-md px-3 py-3 bg-regal-red cursor-pointer font-semibold hover:bg-red-700">
            Online Booking
          </button>
        </div>

        {/* Sidebar for Mobile and Tablet */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-30">
            <div className="absolute top-3 left-0 md:w-1/3 w-1/1 h-auto bg-white px-4 py-8 shadow-lg rounded-lg">
              <button
                onClick={toggleSidebar}
                className="cursor-pointer absolute top-4 right-4 text-charcoal-gray text-xl"
              >
              <IoIosCloseCircle />
              </button>
              <ul className="flex flex-col text-charcoal-gray text-lg justify-center items-center mt-16 hover:mt-12 gap-4 font-sans font-medium">
                <li className="cursor-pointer hover:px-8 hover:py-3 hover:bg-charcoal-gray hover:text-white hover:rounded-md">Home</li>
                <li className="cursor-pointer hover:px-8 hover:py-3 hover:bg-charcoal-gray hover:text-white hover:rounded-md">About</li>
                <li className="cursor-pointer hover:px-8 hover:py-3 hover:bg-charcoal-gray hover:text-white hover:rounded-md">Buy Car</li>
                <li className="cursor-pointer hover:px-8 hover:py-3 hover:bg-charcoal-gray hover:text-white hover:rounded-md">Sell Car</li>
                <li className="cursor-pointer hover:px-8 hover:py-3 hover:bg-charcoal-gray hover:text-white hover:rounded-md">Blogs</li>
                <li className="cursor-pointer hover:px-8 hover:py-3 hover:bg-charcoal-gray hover:text-white hover:rounded-md">Contact</li>
                <li className="mt-4">
                  <button className="w-full rounded-md px-6 py-3 bg-regal-red hover:bg-red-600 cursor-pointer self-end mt-20 text-white">
                    Online Booking
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
