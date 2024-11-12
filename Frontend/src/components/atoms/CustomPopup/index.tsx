// Popup.tsx
import React, { useEffect } from "react";
import { CustomPopupProps } from "./types";


export const CustomPopup: React.FC<CustomPopupProps> = ({ message, isSuccess, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer); 
  }, [onClose]);

  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded shadow-lg z-50 text-white ${
        isSuccess ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <p>{message}</p>
    </div>
  );
};
