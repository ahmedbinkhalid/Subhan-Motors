import React from "react";
import { TextAreaInputProps } from "./types";

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  label,
  name,
  value,
  onChange,
  required = false,
}) => (
  <div className="w-full">
    <label className="block text-gray-700">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={label}
      rows={4}
    />
  </div>
);

export default TextAreaInput;
