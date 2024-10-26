import React from "react";
import { MdMailLock } from "react-icons/md";

type SignInEmailInputProps = {
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SignInEmailInput: React.FC<SignInEmailInputProps> = ({
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="flex p-2 px-4 border-[0.5px] rounded-md w-full h-full gap-3">
      <MdMailLock size={28} className="" />
      <input
        type="email"
        placeholder={placeholder || "example@gmail.com"}
        name={name}
        value={value}
        onChange={onChange}
        className="text-base w-full placeholder:text-sm outline-none placeholder:opacity-75 bg-transparent"
        autoComplete="off" 
        required
      />
    </div>
  );
};
