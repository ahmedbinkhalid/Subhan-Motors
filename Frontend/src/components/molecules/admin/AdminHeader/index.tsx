import React, { useState, useEffect } from "react";
import { logo } from "../../../../assets/images";
import { jwtDecode } from "jwt-decode";
import { FaUserShield } from "react-icons/fa6";
import { FaIntercom } from "react-icons/fa6";
import { UserToken } from "../../../atoms/PageLinks/types";
import { Link } from "react-router-dom";

export const AdminHeader: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      try {
        const decodedToken = jwtDecode<UserToken>(token);
        setUserName(decodedToken.name);
      } catch (error) {
        console.error("Error decoding the token:", error);
      }
    }
  }, []);
  return (
    <header className=" flex w-full py-4 px-8 border-b-[1px] bg-slate-5">
      <Link to="/adminHome">
      <img src={logo} alt="logo" className="h-14 w-48" />
      </Link>
      <p className="flex gap-2 self-center text-2xl text-charcoal-gray font-semibold w-full justify-center items-center ">
      
        <FaIntercom
          size={40}
          className="text-regal-red font-semibold"
        />
        Admin Dashboard
      </p>

      {isLoggedIn && (
          <div className="flex gap-3 w-2/5 items-center">
            <FaUserShield size={34} className="text-regal-red" />
            <p className="text-xl mt-2 whitespace-nowrap font-semibold">Welcome, {userName || 'User'}</p>
            <button
              className="py-1 cursor-pointer z-10 border-b border-transparent hover:mb-1 transition duration-100"
              onClick={() => {
                localStorage.removeItem("token");
                setIsLoggedIn(false);
                setUserName(null);
              }}
            >
            </button>
          </div>
         ) }
    </header>
  );
};
