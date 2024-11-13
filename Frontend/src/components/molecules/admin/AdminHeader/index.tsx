// AdminHeader.tsx
import React, { useState, useEffect } from "react";
import { logo } from "../../../../assets/images";
import { jwtDecode } from "jwt-decode";
import { FaUserShield, FaIntercom, FaBars } from "react-icons/fa6";
import { UserToken } from "../../../atoms/PageLinks/types";
import { Link } from "react-router-dom";

type AdminHeaderProps = {
  toggleSidebar: () => void;
};

export const AdminHeader: React.FC<AdminHeaderProps> = ({ toggleSidebar }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode<UserToken>(token);
        setUserName(decodedToken.name);
        setUserRole(decodedToken.role);
        setIsLoggedIn(userRole === "Admin" ? true : false);
      } catch (error) {
        console.error("Error decoding the token:", error);
      }
    }
  }, [userRole]);

  return (
    <header className="flex md:flex-row flex-col w-full py-4 px-8 border-b-[1px] bg-slate-50 max-sm:gap-4 items-center">
      <div className="flex items-center w-full md:w-auto lg:hidden my-3">
        <FaBars
          size={24}
          className="text-regal-red mr-4 cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>

      <Link
        to="/adminHome"
        className="flex items-center w-full md:w-auto max-sm:mx-auto"
      >
        <img src={logo} alt="logo" className="md:h-14 h-12 w-48" />
      </Link>

      <p className="flex gap-2 self-center text-2xl text-charcoal-gray font-semibold w-full justify-center items-center mt-4 md:mt-0">
        <FaIntercom size={40} className="text-regal-red font-semibold" />
        Admin Dashboard
      </p>
      {isLoggedIn && (
        <div className="flex gap-3 w-full md:w-2/5 items-center mt-4 md:mt-0 justify-end ">
          <FaUserShield size={34} className="text-regal-red lg:block hidden" />
          <p className="text-xl whitespace-nowrap font-semibold ">
            Welcome, {userName || "User"}
          </p>
        </div>
      )}
    </header>
  );
};
