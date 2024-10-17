import React from "react";
import { HeaderSearchBar } from "../../atoms/HeaderSearchBar";
import { PageLinks } from "../../atoms/PageLinks";
import { HeaderProps } from "./types";

export const Header: React.FC<HeaderProps> = ({ openModal }) => {
  return (
    <div className="w-full flex flex-col h-auto lg:justify-between items-center bg-gradient-to-r from-gray-950 via-red-950 to-gray-950 ... text-white max-lg:px-4">
      {/* PageLinks centered at the top */}

      <PageLinks openModal={openModal} />

      {/* Main content: Heading and Search Bar centered vertically */}
      <div className="flex flex-col text-center">
        <div className="md:pt-16">
          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-bold">
            Find Brand New and Used Cars in Pakistan
          </h1>
          <h2 className="text-lg md:text-2xl font-medium mt-4">
            With thousands of cars, we have just the right one for you
          </h2>
        </div>

        {/* HeaderSearchBar component */}
        <HeaderSearchBar />
      </div>
    </div>
  );
};
