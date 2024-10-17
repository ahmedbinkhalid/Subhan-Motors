import React, { useState } from "react";

type PasswordInputProps = {
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder,
  name,
  value,
  onChange,
}) => {
  const [visibility, setVisibility] = useState(false);
  const [isValid, setIsValid] = useState(true); // Track password validity

  const validatePassword = (password: string) => {
    const minLength = 8;
    const hasAlphabet = /[a-zA-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    // Check if password meets all criteria
    const isValidPassword = password.length >= minLength && hasAlphabet && hasDigit && hasSpecialSymbol;

    setIsValid(isValidPassword); // Update validity state
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(e); // Call the parent onChange handler
    validatePassword(newValue); // Validate password whenever it changes
  };

  const setPasswordVisibility = () => {
    setVisibility(!visibility); // Toggle the visibility
  };

  return (
    <div className={`flex p-2 px-4 border-[0.5px] ${isValid ? 'border-[#37474F]' : 'border-red-500'} rounded-md w-full h-full gap-14`}>
      <input
        type={visibility ? "text" : "password"}
        placeholder={isValid ? placeholder : "choose 8 characters strong password "}
        name={name}
        value={value}
        onChange={handleChange}
        className={`text-base w-full bg-transparent placeholder:text-sm outline-none placeholder:opacity-75 ${!isValid ? 'placeholder-red-500 placeholder:text-xs' : ''}`}
        required
      />
      <p
        className="text-sm font-semibold text-red-400 cursor-pointer"
        onClick={setPasswordVisibility}
      >
        {visibility ? "Hide" : "Show"} {/* Toggle text */}
      </p>
    </div>
  );
};
