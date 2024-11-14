// AdminLayout.tsx
import React, { useState } from "react";
import { AdminHeader } from "../../../molecules/admin/AdminHeader";
import { Main } from "../Main";
import { AdminFooter } from "../../../atoms/admin/AdminFooter";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <AdminHeader toggleSidebar={toggleSidebar} />
      <Main isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
        {children}
      </Main>
      <AdminFooter />
    </React.Fragment>
  );
};
