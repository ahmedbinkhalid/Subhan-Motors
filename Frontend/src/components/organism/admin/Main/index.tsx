import React from "react";
import { SideBar } from "../../../molecules/admin/SideBar";

type MainProps = {
  children: React.ReactNode;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

export const Main: React.FC<MainProps> = ({ children, isSidebarOpen, toggleSidebar }) => {
  return (
    <section className="w-full md:p-4 py-6 px-3 flex"> {/* Added flex here to align items in a row */}
      {/* Sidebar */}
      <div className={`w-3/12 xl:w-[20%] xxl:w-[15%]  ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <SideBar toggleSidebar={toggleSidebar} />
      </div>
      {/* Main content */}
      <div className="xxl:w-4/5 lg:w-3/4 w-full md:p-4"> {/* Adjusted to 9/12 to take up remaining space */}
        {children}
      </div>
    </section>
  );
};
