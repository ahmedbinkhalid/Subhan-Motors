import React, { useState, useEffect } from "react";
import { logo1 } from "../../../assets/images";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useModal } from "../../organism/AllPagesLayout/ModalContext"; 
import { TbLogout2 } from "react-icons/tb";
import {jwtDecode} from "jwt-decode"; // Correct default import
import { FaUserShield } from "react-icons/fa6";

// Define the type of your JWT token payload
interface UserToken {
  id: string;
  role: string;
  name: string;
}

export const PageLinks: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { openModal } = useModal(); // Use the modal context
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [userName, setUserName] = useState<string | null>(null); // State to store the user's name

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Check if the token exists in local storage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);

      // Decode the token to extract the user's name
      try {
        // Decode the token using the custom type
        const decodedToken = jwtDecode<UserToken>(token); 
        setUserName(decodedToken.name); // Set the user's name from the token
      } catch (error) {
        console.error("Error decoding the token:", error);
      }
    }
  }, []);

  return (
    <header className="container mx-auto flex flex-col items-center bg-transparent px-4 py-2">
      {/* SignUp and SignIn Container */}
      <div className="w-full max-w-5xl flex justify-end max-lg:justify-center items-center md:px-3 gap-3">
        {isLoggedIn ? (
          <>
            {/* Display the user's name instead of 'Welcome back!' */}
            <FaUserShield size={32} className="text-regal-red" />
            <p className="text-lg mt-2">Welcome, {userName || 'User'}</p>
            <button
              className="py-1 cursor-pointer z-10 border-b border-transparent hover:mb-1 transition duration-100"
              onClick={() => {
                localStorage.removeItem("token"); // Remove token on logout
                setIsLoggedIn(false); // Update state
                setUserName(null); // Clear userName state
              }}
            >
              <TbLogout2 size={28} className="text-regal-red hover:text-white mt-2" />
            </button>
          </>
        ) : (
          // Render the sign-up and sign-in buttons if the user is not logged in
          <>
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
          </>
        )}
      </div>

      {/* Logo and Navigation Container */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center">
        {/* Hamburger Menu Icon for Mobile and Tablet */}
        <div className="lg:hidden flex items-center justify-between w-full px-1">
          <button onClick={toggleSidebar} className="text-white">
            <FaBars size={14} />
          </button>

          <Link to="/" className="lg:w-64 w-48 lg:h-11 mx-auto">
          <img
            alt="logo"
            src={logo1}
            className=" cursor-pointer"
          />
          </Link>
        </div>

        {/* Logo and Navigation for Desktop */}
        <div className="hidden lg:flex flex-row justify-between items-center w-full">
        <Link to="/">
          <img alt="logo" src={logo1} className="object-cover w-64 h-16 cursor-pointer" />
          </Link>
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
              {isLoggedIn ? 
              <li className="cursor-pointer hover:mt-1">
                <Link to="/contact"> My Adds </Link>
              </li> : "" }
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
