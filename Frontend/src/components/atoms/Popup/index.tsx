
import React from "react";
import { PopupProps } from "./types";

export const Popup: React.FC<PopupProps> = ({ message, onClose, bgColor }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className={`p-6 w-80 bg-${bgColor} rounded-md shadow-md text-regal-red bg-slate-100 text-center`}>
        <p className="mb-4">{message}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-white text-charcoal-gray rounded-md font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
};

