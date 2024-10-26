import React from "react";
import { CarInformationInputProps } from "../CarInformationInput/types";

export const CarInformationDescription: React.FC<CarInformationInputProps> = ({
  id_name,
  label,
  value,
  placeHolder,
  onChange,
}) => {
  return (
    <div className="col-span-2">
      <label
        htmlFor="description"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <textarea
        id={id_name}
        name={id_name}
        value={value}
        onChange={onChange}
        className="mt-3 block w-full p-2 border border-gray-300 rounded-md outline-none"
        placeholder={placeHolder}
        rows={4}
        required
      />
    </div>
  );
};
