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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isValid, setIsValid] = useState(true);

  const validatePassword = (password: string) => {
    const minLength = 8;
    const hasAlphabet = /[a-zA-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Check if password meets all criteria
    const isValidPassword =
      password.length >= minLength &&
      hasAlphabet &&
      hasDigit &&
      hasSpecialSymbol;

    setIsValid(isValidPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(e);
    validatePassword(newValue);
  };

  const setPasswordVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div
      className={`flex p-2 px-4 border-[0.5px] rounded-md w-full h-full gap-14`}
    >
      <input
        type={visibility ? "text" : "password"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        className={`text-base w-full bg-transparent placeholder:text-sm outline-none md:placeholder:opacity-75 xxl:opacity-100`}
        autoComplete="off"
        required
      />
      <p
        className="text-sm font-semibold text-red-400 cursor-pointer"
        onClick={setPasswordVisibility}
      >
        {visibility ? "Hide" : "Show"}
      </p>
    </div>
  );
};
