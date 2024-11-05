import React from 'react';
import { TableRowProps } from './types';
import { TableButton } from '../../../atoms/admin/TableButton';

export const TableRow: React.FC<TableRowProps> = ({ index, query }) => {
  return (
    <tr className="text-sm border-b">
      <td className="p-2 border border-gray-200">{index}</td>
      <td className="p-2 border border-gray-200">{query.title}</td>
      <td className="p-2 border border-gray-200">{query.phoneNumber}</td>
      <td className="p-2 border border-gray-200">{query.email}</td>
      <td className="p-2 border border-gray-200 flex space-x-2 justify-center">
        <TableButton label="View Details" icon="view" onClick={() => console.log('View Details')} />
        <TableButton label="Delete" icon="delete" onClick={() => console.log('Delete')} />
      </td>
    </tr>
  );
};
