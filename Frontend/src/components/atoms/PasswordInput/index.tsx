import React, { useState } from "react";

type placeholderProp = {
  placeholder: string;
};

export const PasswordInput: React.FC<placeholderProp> = ({ placeholder }) => {
  const [visibility, setVisibility] = useState(false);

  const setPasswordVisibility = () => {
    setVisibility(!visibility); // Toggle the visibility
    console.log("Password visibility:", !visibility); // Debugging line to check visibility status
  };

  return (
    <div className="flex p-2 px-4 border-[0.5px] border-[#37474F] rounded-md w-full h-full gap-14">
      <input
        type={visibility ? "text" : "password"}
        placeholder={placeholder}
        className="text-base w-full bg-transparent placeholder:text-sm outline-none placeholder:opacity-75"
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
