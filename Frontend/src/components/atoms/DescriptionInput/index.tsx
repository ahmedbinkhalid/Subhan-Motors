import React from 'react';
import { DescriptionInputProps } from './types';

export const DescriptionInput: React.FC<DescriptionInputProps> = ({ placeholder, description, onChange }) => (
  <div>
    <textarea
      placeholder={`${placeholder} Description`}
      value={description}
      onChange={onChange}
      className="w-full p-3 h-32 text-charcoal-gray border rounded-md resize-none outline-none transition duration-300 ease-in-out"
      required
    />
  </div>
);

