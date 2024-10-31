import React, { useState, useEffect } from "react";
import { logo1 } from "../../../assets/images";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useModal } from "../../organism/AllPagesLayout/ModalContext";
import { TbLogout2 } from "react-icons/tb";
import { jwtDecode } from "jwt-decode";
import { FaUserShield } from "react-icons/fa6";
import { Button } from "../Button";
import { Sidebar } from "../SideBar";
import { UserToken } from "./types";


interface LinksProps {
  path : string;
  title : string;
}

export const PageLinks: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { openModal } = useModal();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  const [userRole, setUserRole] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleOnlineBooking = () => {
    navigate("/onlineBooking");
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      try {
        const decodedToken = jwtDecode<UserToken>(token);
        setUserName(decodedToken.name);
        setUserRole(decodedToken.role);
        if(userRole?.includes("Admin")) {
          navigate("/adminHome");
        }
      } catch (error) {
        console.error("Error decoding the token:", error);
      }
    }
  }, [navigate, userRole]);

  const Links : React.FC<LinksProps> = ({path, title}) => (
    <li className="group relative cursor-pointer">
                <Link to={path} className="text-white group-hover:text-regal-red transition duration-300">
                  {title}
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-regal-red transition-all duration-300 group-hover:w-full"></span>
              </li>
  ) 

  return (
    <header className="container mx-auto flex flex-col items-center bg-transparent px-4 py-2">
      {/* SignUp and SignIn Container */}
      <div className="w-full max-w-5xl flex justify-end max-lg:justify-center items-center md:px-3 gap-3">
        {isLoggedIn ? (
          <>
            <FaUserShield size={32} className="text-regal-red" />
            <p className="text-lg mt-2">Welcome, {userName || 'User'}</p>
            <button
              className="py-1 cursor-pointer z-10 border-b border-transparent hover:mb-1 transition duration-100"
              onClick={() => {
                localStorage.removeItem("token");
                setIsLoggedIn(false);
                setUserName(null);
              }}
            >
              <TbLogout2 size={28} className="text-regal-red hover:text-white mt-2" />
            </button>
          </>
        ) : (
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

      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center">
        <div className="lg:hidden flex items-center justify-between w-full px-1">
          <button onClick={toggleSidebar} className="text-white">
            <FaBars size={14} />
          </button>

          <Link to="/" className="lg:w-64 w-48 lg:h-11 mx-auto">
            <img alt="logo" src={logo1} className=" cursor-pointer" />
          </Link>
        </div>

        <div className="hidden lg:flex flex-row justify-between items-center w-full">
          <Link to="/">
            <img alt="logo" src={logo1} className="object-cover w-64 h-16 cursor-pointer" />
          </Link>
          <nav className="flex flex-row items-center justify-center">
            <ul className="flex text-white text-base font-sans my-4 gap-10">
              <Links path="/" title="Home" />
              <Links path="/about" title="About" />
              <Links path="/buyCar" title="Buy Car" />
              <Links path="/sellCar" title="Sell Car" />
              <Links path="/blogs" title="Blogs" />
              <Links path="/contact" title="Contact" />
              {isLoggedIn && (
                <li className="group relative cursor-pointer">
                  <Link to="/myAds" className="text-white group-hover:text-yellow-400 transition duration-300">
                    My Adds
                  </Link>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </li>
              )}
            </ul>
          </nav>

          <Button btnTitle="Online Booking"
          bgColor="bg-regal-red"
          hoverBgColor="bg-red-600"
          onClick={handleOnlineBooking} />
        </div>
        
        {/* Use the Sidebar component */}
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </header>
  );
};
