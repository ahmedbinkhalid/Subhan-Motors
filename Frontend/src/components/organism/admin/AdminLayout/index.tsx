import React from 'react';
import { AdminHeader } from '../../../molecules/admin/AdminHeader';
import { Main } from '../Main';
import { AdminFooter } from '../../../atoms/AdminFooter';

type AdminLayoutProps = {
    children : React.ReactNode;
}

export const AdminLayout : React.FC <AdminLayoutProps> = ({
    children
}) => {
  return (
    <React.Fragment>
      <AdminHeader />
        <Main children = {children} />
        <AdminFooter />
    </React.Fragment>
  )
}
