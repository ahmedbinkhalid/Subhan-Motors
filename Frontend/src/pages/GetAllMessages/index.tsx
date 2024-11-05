import React from 'react';
import { TableLayout } from '../../components/organism/admin/TableLayout';

export const GetAllMessages : React.FC = () => {
  const columns = ['#', 'Message Subject', 'Phone Number', 'Email', 'Actions', ''];
  const data = [
    { subject: 'Message 1', phoneNumber: '123-456-7890', email: 'message1@example.com', onView: () => {}, onDelete: () => {} },
    { subject: 'Message 2', phoneNumber: '098-765-4321', email: 'message2@example.com', onView: () => {}, onDelete: () => {} },
    // ... other data rows
  ];

  return <TableLayout title="Get All Messages" columns={columns} data={data} />;
}