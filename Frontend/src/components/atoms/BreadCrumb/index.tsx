import React from "react";
import { BreadCrumbProps } from "./types";

const BreadCrumb: React.FC<BreadCrumbProps> = ({ title }) => {
  return (
    <div
      className="h-[47vh] bg-cover bg-center"
      style={{
        backgroundImage: `url("https://t3.ftcdn.net/jpg/06/09/87/48/360_F_609874803_boIlmkyVD3R2Ui0qE8AiIcdfDBPzvez7.jpg")`,
      }}
    >
      <div className="flex justify-center items-center w-full h-full bg-gradient-to-r from-gray-950 via-red-950 to-gray-950 opacity-75">
        <h1 className="text-center text-6xl text-white animate-slideInDown opacity-100 font-medium">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default BreadCrumb;
