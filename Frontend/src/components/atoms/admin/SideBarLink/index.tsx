import React, { useState } from 'react';
import { SideBarLinkProps } from './types';
import { Link, useNavigate } from 'react-router-dom';
import { RxDropdownMenu } from "react-icons/rx";

export const SideBarLink: React.FC<SideBarLinkProps> = ({
  linkTitle,
  linkPath,
  LinkIcon,
  linkOptions,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/'); // Navigate to the login page after logging out
  };

  return (
    <div className="relative">
      <button 
        className="flex w-full items-center text-charcoal-gray font-semibold hover:text-regal-red transition duration-200"
        onClick={linkOptions ? handleToggleDropdown : linkTitle === "Sign Out" ? handleLogout : undefined}
      >
        {!linkOptions && linkPath && linkTitle !== "Sign Out" ? (
          <Link className="flex items-center gap-3 w-full" to={linkPath}>
            <LinkIcon size={24} className="text-regal-red" />
            <span>{linkTitle}</span>
          </Link>
        ) : (
          <div className="flex items-center gap-3 w-full">
            <LinkIcon size={24} className="text-regal-red" />
            <span>{linkTitle}</span>
          </div>
        )}
        
        {linkOptions && <RxDropdownMenu size={24} className="font-bold text-charcoal-gray" />}
      </button>
      
      <hr className="my-2 border-gray-300" />

      {linkOptions && isDropdownOpen && (
        <div className="mt-2 z-10">
          <div className="py-1">
            {linkOptions.map((option, index) => (
              <Link
                key={index}
                to={option.path}
                className="block px-4 py-2 text-base font-semibold text-blue-variant hover:text-regal-red transition duration-200"
              >
                {option.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
