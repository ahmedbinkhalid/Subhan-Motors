import React from "react";
import { TableButtonProps } from "./types";
import { GiBleedingEye } from "react-icons/gi";
import { MdOutlineDeleteOutline } from "react-icons/md";

export const TableButton: React.FC<TableButtonProps> = ({
  label,
  icon,
  onClick,
}) => {
  return (
    <button
      className="flex items-center space-x-1 bg-regal-red hover:bg-red-700 text-white py-1 px-3 rounded text-sm md:text-base"
      onClick={onClick}
    >
      {icon === "view" ? (
        <GiBleedingEye color="white" size={22} className="mt-1" />
      ) : (
        <MdOutlineDeleteOutline color="white" size={22} />
      )}
      <span>{label}</span>
    </button>
  );
};
