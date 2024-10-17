import React, { useState } from 'react';

type FullnameInputProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FullnameInput: React.FC<FullnameInputProps> = ({ name, value, onChange }) => {
  const [isValid, setIsValid] = useState(true);
  const [isFocused, setIsFocused] = useState(false); // Track focus state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Check for at least 4 to 5 English letters
    const englishLetterCount = (inputValue.match(/[A-Za-z]/g) || []).length; // Count English letters
    const isValidInput = englishLetterCount >= 4 && englishLetterCount <= 5; // Validate count

    onChange(e);
    
    // Update validity state
    setIsValid(isValidInput);
  };

  return (
    <div className={`py-2 px-4 border-[0.5px] ${!isValid || isFocused ? 'border-red-500' : 'border-[#37474F]'} rounded-md w-full h-full`}>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={isValid ? "Full Name" : "Input must include 4 to 5 Alphabets."} // Change placeholder on error
        className={`text-base w-full placeholder:text-sm outline-none bg-white ${!isValid ? 'placeholder-red-400 placeholder:text-xs' : ''} focus:border-red-500`} // Always set bg-white
        onFocus={() => setIsFocused(true)} // Set focus state to true on focus
        onBlur={() => {
          setIsFocused(false); // Reset focus state on blur
          if (!isValid) {
            // If invalid on blur, set placeholder to indicate error
            setIsValid(!isValid); // Keep the invalid state
          }
        }}
        required
        autoComplete='off'
      />
    </div>
  );
};
