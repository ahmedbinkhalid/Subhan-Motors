import React from 'react';
import { CarInformationDropDownProps } from './types';
import { RxDropdownMenu } from "react-icons/rx";

const CarInformationDropDown: React.FC<CarInformationDropDownProps> = ({ label, name, options, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-charcoal-gray">{label}</label>

      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="mt-3 block w-full p-2 pr-10 border border-gray-300 rounded-md outline-none appearance-none"
          required
        >
          <option value="">Select {label}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <RxDropdownMenu size={24} className='font-sans font-semibold text-charcoal-gray' />
        </div>
      </div>
    </div>
  );
};

export default CarInformationDropDown;
