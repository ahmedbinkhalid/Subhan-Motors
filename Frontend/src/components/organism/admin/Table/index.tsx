import React from 'react';
import { TableRow } from '../../../molecules/admin/TableRow';
import { Query } from '../GetAllQueries/types';

interface TableProps {
  data: Query[];
}

export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border border-gray-200">#</th>
            <th className="p-2 border border-gray-200">Title</th>
            <th className="p-2 border border-gray-200">Phone Number</th>
            <th className="p-2 border border-gray-200">Actions</th>
            <th className="p-2 border border-gray-200">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((query, index) => (
            <TableRow key={query.id} index={index + 1} query={query} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
