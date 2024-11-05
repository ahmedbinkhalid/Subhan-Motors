import React from 'react';
import { GetAllQueriesLayoutProps } from './types';
import { TableRow } from '../../../molecules/admin/TableRow';

export const GetAllQueriesLayout: React.FC<GetAllQueriesLayoutProps> = ({ data }) => {
  return (
    <section className="container mx-auto my-4 p-4 bg-gray-100 rounded-md">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-gray-700 bg-gray-200">
            <th className="p-2 border border-gray-300">#</th>
            <th className="p-2 border border-gray-300">Title</th>
            <th className="p-2 border border-gray-300">Phone Number</th>
            <th className="p-2 border border-gray-300">Email</th>
            <th className="p-2 border border-gray-300"></th> {/* Empty header for actions */}
          </tr>
        </thead>
        <tbody>
          {data.map((query, index) => (
            <TableRow key={index} index={index + 1} query={query} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
