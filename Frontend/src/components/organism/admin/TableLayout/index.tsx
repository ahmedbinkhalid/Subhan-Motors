// src/components/organism/admin/TableLayout.tsx
import React from 'react';
import { TableLayoutProps } from './types';
import { TableButton } from '../../../atoms/admin/TableButton';
import { handleDeleteMessage } from '../../../apis/handleDeleteMessage';
import { DeleteQuery } from '../../../apis/DeleteQuery';

export const TableLayout: React.FC<TableLayoutProps> = ({ title, columns, data, onDeleteSuccess }) => {
  
  const handleDeleteClick = async (id: string) => {
    try {
      // Dynamically select delete function based on the title
      if (title.includes("Queries")) {
        await DeleteQuery(id);
      } else {
        await handleDeleteMessage(id);
      }
      
      // Trigger success callback if provided
      if (onDeleteSuccess) {
        onDeleteSuccess(id);
      }
    } catch (error) {
      console.error('Failed to delete row:', error);
    }
  };

  

  return (
    <section className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden xxl:py-6 py-3">
      <h1 className="text-2xl text-center text-charcoal-gray font-semibold md:mb-8 mb-4">{title}</h1>
      
      {/* Desktop and Tablet Table Layout */}
      <div className="hidden md:block">
        <table className="w-full xl:text-left text-center">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="px-4 py-2 bg-gray-200">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t">
                <td className="xl:px-4 px-2 py-2">{rowIndex + 1}</td>
                <td className="xl:px-4 px-2 py-2">{row.subject || row.title}</td>
                <td className="xl:px-4 px-2 py-2">{row.phoneNumber}</td>
                <td className="xl:px-4 px-2 py-2">{row.email}</td>
                <td className="xl:px-4 px-2 py-2">
                  <TableButton label="View" icon="view" onClick={() => row.onView(row)} />
                </td>
                <td className="xl:px-4 px-2 py-2">
                  <TableButton label="Delete" icon="delete" onClick={() => handleDeleteClick(row.id)} />
                </td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden">
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="bg-gray-100 p-4 mb-4 rounded-lg shadow">
            <p className="text-sm font-semibold text-gray-600">#{rowIndex + 1}</p>
            <p className="text-lg font-semibold">{row.subject || row.title}</p>
            <p className="text-sm text-gray-600"><span className="font-semibold">Phone:</span> {row.phoneNumber}</p>
            <p className="text-sm text-gray-600"><span className="font-semibold">Email:</span> {row.email}</p>
            <div className="flex space-x-2 mt-4">
              <TableButton label="View" icon="view" onClick={() => row.onView(row)} />
              <TableButton label="Delete" icon="delete" onClick={() => handleDeleteClick(row.id)} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
