import React from 'react';
import { TableLayout } from '../../components/organism/admin/TableLayout';

export const GetAllQueries: React.FC = () => {
  const columns = ['#', 'Title', 'Phone Number', 'Email', 'Actions', ''];
  const data = [
    { title: 'Query 1', phoneNumber: '123-456-7890', email: 'query1@example.com', onView: () => {}, onDelete: () => {} },
    { title: 'Query 2', phoneNumber: '098-765-4321', email: 'query2@example.com', onView: () => {}, onDelete: () => {} },
    // ... other data rows
  ];

  return <TableLayout title="Get All Queries" columns={columns} data={data} />;
};
