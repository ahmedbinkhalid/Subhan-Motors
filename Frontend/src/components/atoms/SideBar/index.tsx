import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import {
  FaHome,
  FaInfoCircle,
  FaPenFancy,
  FaPhoneAlt,
  FaCarAlt,
  FaAdversal,
} from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { SidebarProps } from "./types";
import { LoginValidator } from "../LoginValidator";
import { handleNavigation } from "../handleNavigation";
import { useModal } from "../../organism/AllPagesLayout/ModalContext";

export const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  toggleSidebar,
}) => {
  const navigate = useNavigate();
  const {openModal} = useModal();
  if (!isSidebarOpen) return null;


  return (
    <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-30">
      <div className="absolute top-3 left-0 md:w-1/3 w-[65%] h-auto bg-white px-4 py-8 shadow-lg rounded-lg">
        <button
          onClick={toggleSidebar}
          className="cursor-pointer absolute top-4 right-4 text-charcoal-gray text-2xl"
        >
          <IoIosCloseCircle />
        </button>

        {/* Sidebar Links */}
        <ul className="flex flex-col text-charcoal-gray text-lg justify-center items-center mt-16 gap-6 font-sans font-medium">
          <li>
            <Link
              to="/"
              onClick={toggleSidebar}
              className="flex items-center gap-3 px-4 hover:bg-charcoal-gray hover:text-white hover:rounded-md w-full"
            >
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={toggleSidebar}
              className="flex items-center gap-3 px-4 hover:bg-charcoal-gray hover:text-white hover:rounded-md w-full"
            >
              <FaInfoCircle />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/buyCar"
              onClick={toggleSidebar}
              className="flex items-center gap-3 px-4 hover:bg-charcoal-gray hover:text-white hover:rounded-md w-full"
            >
              <IoCarSportSharp />
              <span>Buy Car</span>
            </Link>
          </li>
          <li>
            <Link
              to="/sellCar"
              onClick={() => {
                toggleSidebar();
              }}
              className="flex items-center gap-3 px-4 hover:bg-charcoal-gray hover:text-white hover:rounded-md w-full"
            >
              <FaCarAlt />
              <span>Sell Car</span>
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              onClick={toggleSidebar}
              className="flex items-center gap-3 px-4 hover:bg-charcoal-gray hover:text-white hover:rounded-md w-full"
            >
              <FaPenFancy />
              <span>Blogs</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={toggleSidebar}
              className="flex items-center gap-3 px-4 hover:bg-charcoal-gray hover:text-white hover:rounded-md w-full"
            >
              <FaPhoneAlt />
              <span>Contact</span>
            </Link>
          </li>

          {LoginValidator() && (
            <li>
              <Link
                to="/myAds"
                onClick={toggleSidebar}
                className="flex items-center gap-3 px-4 hover:bg-charcoal-gray hover:text-white hover:rounded-md w-full"
              >
                <FaAdversal />
                <span>My Ads</span>
              </Link>
            </li>
          )}

          <li
            className="mt-4 md:pl-7 xs:ml-3 pl-5"
            onClick={() => {
              navigate("/onlineBooking");
            }}
          >
            <button className="w-full rounded-md md:px-6 px-3 bg-regal-red hover:bg-red-600 cursor-pointer text-white py-2">
              Online Booking
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
