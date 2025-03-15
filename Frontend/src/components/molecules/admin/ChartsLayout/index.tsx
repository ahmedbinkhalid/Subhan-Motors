import { useState } from "react";
import { Chart } from "../../../atoms/admin/Chart";
import DataLoader from "../../../atoms/DataLoader";

export const ChartsLayout = () => {
  const [chartLoading, setChartLoading] = useState(false);
  return (
    <div className="flex flex-col gap-4 md:px-4 md:py-2 justify-center items-center w-full">
      {
        chartLoading ? (
          <DataLoader loadingTitle="User Stats" />
        ) : (
          <> 
           <h1 className="md:text-3xl text-xl font-sans font-semibold text-charcoal-gray md:mb-2 mt-4 mb-2  text-center">
        Statistics
      </h1>
      <Chart setChartLoading={setChartLoading} />
          </>
        )
      }
    </div>
  );
};
