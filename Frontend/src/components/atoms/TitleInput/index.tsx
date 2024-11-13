import React from "react";
import { TitleInputProps } from "./types";

export const TitleInput: React.FC<TitleInputProps> = ({
  placeholder,
  title,
  onChange,
}) => (
  <div>
    <input
      type="text"
      placeholder={`${placeholder} Title`}
      value={title}
      onChange={onChange}
      className="w-full p-3 text-charcoal-gray border rounded-md outline-none transition duration-300 ease-in-out"
      required
    />
  </div>
);
