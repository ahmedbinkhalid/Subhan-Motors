import React from "react";
import { AiFillDashboard, AiOutlineClose } from "react-icons/ai";
import { SideBarLinksData } from "./constants";
import { SideBarLink } from "../../../atoms/admin/SideBarLink";

interface SideBarProps {
  toggleSidebar: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ toggleSidebar }) => {
  return (
    <div className="fixed lg:static inset-0 z-50 lg:z-auto flex flex-col bg-slate-50 
                shadow-xl lg:shadow-none lg:pt-10 py-6 px-4 h-full bottom-0 rounded-lg lg:w-3/4 xl:w-auto max-md:w-3/4 max-lg:w-1/3 max-md:bottom-4">
      <div className="flex justify-between items-center mb-4">
        <p className="flex gap-4 items-center">
          <AiFillDashboard size={34} className="text-regal-red" />
          <span className="text-lg text-blue-variant font-bold">Dashboard Widgets</span>
        </p>
        {/* Close Icon, visible only on smaller screens */}
        <AiOutlineClose size={24} className="text-regal-red cursor-pointer lg:hidden" onClick={toggleSidebar} />
      </div>
      <div className="flex flex-col gap-4">
        {SideBarLinksData.map((data, index) => (
          <SideBarLink
            key={index}
            linkTitle={data.linkTitle}
            linkPath={data.linkPath}
            LinkIcon={data.LinkIcon}
            linkOptions={data.linkOptions}
          />
        ))}
      </div>
    </div>
  );
};
