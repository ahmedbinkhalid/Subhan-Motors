import React from "react";
import { AiFillDashboard, AiFillCloseSquare } from "react-icons/ai";
import { SideBarLinksData } from "./constants";
import { SideBarLink } from "../../../atoms/admin/SideBarLink";
import { useMediaQuery } from "react-responsive";

interface SideBarProps {
  toggleSidebar: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ toggleSidebar }) => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });

  const handleLinkClick = () => {
    if (isMobileOrTablet) {
      toggleSidebar();
    }
  };

  return (
    <div
      className="fixed lg:mt-5 lg:static inset-0 z-50 lg:z-auto flex flex-col bg-slate-50 shadow-lg lg:py-10 py-6 px-4 h-auto bottom-0 rounded-lg max-md:bottom-4 
                 lg:w-auto md:w-2/6 w-[70%]"
    >
      <div className="flex justify-between items-center lg:mb-12 mb-6">
        <p className="flex gap-4 items-center">
          <AiFillDashboard size={34} className="text-regal-red" />
          <span className="text-lg text-charcoal-gray font-bold">
            Dashboard Widgets
          </span>
        </p>
        <AiFillCloseSquare
          size={24}
          className="text-regal-red cursor-pointer lg:hidden"
          onClick={toggleSidebar}
        />
      </div>
      <div className="flex flex-col gap-4">
        {SideBarLinksData.map((data, index) => (
          <SideBarLink
            key={index}
            linkTitle={data.linkTitle}
            linkPath={data.linkPath}
            LinkIcon={data.LinkIcon}
            linkOptions={data.linkOptions}
            onClick={handleLinkClick}
          />
        ))}
      </div>
    </div>
  );
};
