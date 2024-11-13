import React from "react";
import { CarInformationInputProps } from "./types";

export const CarInformationInput: React.FC<CarInformationInputProps> = ({
  id_name,
  label,
  value,
  placeHolder,
  onChange,
}) => {
  return (
    <div>
      <label
        htmlFor={id_name}
        className="block text-sm font-medium text-charcoal-gray"
      >
        {label}
      </label>
      <input
        type="text"
        id={id_name}
        name={id_name}
        value={value}
        onChange={onChange}
        className="mt-3 block w-full p-2 border border-gray-300 rounded-md outline-none"
        placeholder={placeHolder}
        required
      />
    </div>
  );
};
