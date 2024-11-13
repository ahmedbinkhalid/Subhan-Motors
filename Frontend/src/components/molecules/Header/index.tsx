import React from "react";
import { useLocation } from "react-router-dom";
import { HeaderSearchBar } from "../../atoms/HeaderSearchBar";
import { PageLinks } from "../../atoms/PageLinks";

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <div
      className={`w-full flex flex-col h-auto lg:justify-between items-center bg-gradient-to-r from-gray-950 via-red-950 to-gray-950 text-white max-lg:px-4 ${
        !(location.pathname === "/") ? "pb-6" : ""
      }`}
    >
      <PageLinks />
      {location.pathname === "/" && (
        <div className="flex flex-col text-center px-3">
          <div className="md:pt-16">
            <h1 className="text-xl md:text-4xl font-bold">
              Find Brand New and Used Cars in Pakistan
            </h1>
            <h2 className="text-lg md:text-2xl font-medium mt-4">
              With thousands of cars, we have just the right one for you
            </h2>
          </div>
          <HeaderSearchBar />
        </div>
      )}
    </div>
  );
};
