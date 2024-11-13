import React, { useState } from "react";
import { PhoneNumberInputProps } from "./types";

export const PhoneNumber: React.FC<PhoneNumberInputProps> = ({
  name,
  value,
  onChange,
}) => {
  const [isValid, setIsValid] = useState(true);

  // Regex to match 11 digits starting with "03" and followed by 9 additional digits
  const phoneRegex = /^03\d{9}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Check if input matches the specified phone number pattern
    const validInput = phoneRegex.test(inputValue);
    setIsValid(validInput);

    // Update parent component's state with the value
    onChange(e);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-charcoal-gray">
        Phone Number
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder="03XXXXXXXXX" // Placeholder to guide users on the format
        className="p-2 outline-none rounded-md border-[0.5px]"
      />
      {!isValid && (
        <p className="text-regal-red text-sm mt-1">
          Please enter a valid phone number (e.g., 03XXXXXXXXX).
        </p>
      )}
    </div>
  );
};
