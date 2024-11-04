import React from "react";
import { SideBar } from "../../../molecules/admin/SideBar";

type MainProps = {
  children: React.ReactNode;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

export const Main: React.FC<MainProps> = ({ children, isSidebarOpen, toggleSidebar }) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-6 p-4">
      {/* Sidebar is conditionally rendered based on screen size and toggle state */}
      <div className={`xl:col-span-1 lg:col-span-2 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <SideBar toggleSidebar={toggleSidebar} />
      </div>
      {/* Adjust main content width based on sidebar visibility */}
      <div className={`xl:col-span-5 lg:col-span-4 col-span-1`}>
        {children}
      </div>
    </section>
  );
};
