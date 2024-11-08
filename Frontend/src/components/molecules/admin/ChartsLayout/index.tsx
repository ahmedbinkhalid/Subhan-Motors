import React from 'react';
import { Chart } from '../../../atoms/admin/Chart';

export const ChartsLayout: React.FC = () => {
  return (
    <div className="flex p-4 justify-center items-center w-full">
      <Chart />
    </div>
  );
};
