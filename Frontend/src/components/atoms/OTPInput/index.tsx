import React, { useState, useRef, useEffect } from "react";

interface OTPInputProps {
  onChange: (otp: string) => void; // Add this prop
}

const OTPInput: React.FC<OTPInputProps> = ({ onChange }) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (value: string, index: number) => {
    if (/\D/.test(value)) return; 

    const otpCopy = [...otp];
    otpCopy[index] = value;
    setOtp(otpCopy);

    onChange(otpCopy.join("")); 

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center space-x-4">
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          className="w-12 h-12 text-center text-lg border-b-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-regal-red"
        />
      ))}
    </div>
  );
};

export default OTPInput;
