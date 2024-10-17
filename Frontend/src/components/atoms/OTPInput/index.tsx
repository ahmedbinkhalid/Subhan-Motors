import React, { useState, useRef } from 'react';

const OTPInput: React.FC = () => {
  // State to hold the value of each OTP input box
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  
  // Refs to store each input field for programmatic focus
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle input change
  const handleChange = (value: string, index: number) => {
    // Copy current OTP values and update the current box with new value
    const otpCopy = [...otp];
    otpCopy[index] = value;

    // Update OTP state
    setOtp(otpCopy);

    // Move focus to the next input box if a digit is entered
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle key down for backspace to focus the previous input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center space-x-2">
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1} // Allow only one character per input
          value={otp[index]}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)} // Store the reference for focus control
          className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-regal-red"
        />
      ))}
    </div>
  );
};

export default OTPInput;
