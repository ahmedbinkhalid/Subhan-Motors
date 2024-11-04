import React, { useState } from 'react';

type ButtonProps = {
  bgColor : string;
}
const CarInformationSubmitButton: React.FC<ButtonProps> = ({bgColor}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Reset the button after some time
    }, 1000); // Simulates loading time
  };

  return (
    <button
      onClick={handleClick}
      className={`relative w-48 h-11 border-2 border-${bgColor} rounded-md text-${bgColor} font-medium overflow-hidden cursor-pointer flex justify-center items-center focus:outline-none md:text-lg text-base`}
    >
      {/* First text: "Submit" */}
      <span
        className={`absolute transition-transform ease-in-out duration-500 ${
          loading ? '-translate-y-12 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        Add For Sale 
      </span>

      {/* Second text: "Added for sale!" */}
      <span
        className={`absolute transition-all ease-in-out duration-500 ${
          loading ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        } text-white z-10`} // Higher z-index for the text
      >
        Added for sale!
      </span>

      {/* Loader animation */}
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden rounded-md z-0"> {/* Lower z-index for the loader */}
        <div
          className={`w-full h-full bg-${bgColor} rounded-md transition-transform duration-700 ease-in-out ${
            loading ? 'translate-x-0' : '-translate-x-full'
          }`}
        ></div>
      </div>
    </button>
  );
};

export default CarInformationSubmitButton;
