import React, { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import {
  fetchDailyVisitors,
  fetchLiveVisitors,
  fetchWeeklyVisitors,
  fetchMonthlyVisitors,
} from "../../../apis/FetchVisitors";

// Define colors: red for Weekly, blue for Monthly, and charcoal-gray for Daily
const COLORS = ["#36454F", "#0047AB", "#D22B2B"]; // Charcoal-gray added for Daily Visitors

export const Chart: React.FC = () => {
  const [dailyVisitors, setDailyVisitors] = useState<number | null>(null);
  const [liveVisitors, setLiveVisitors] = useState<number | null>(null);
  const [weeklyVisitors, setWeeklyVisitors] = useState<number | null>(null);
  const [monthlyVisitors, setMonthlyVisitors] = useState<number | null>(null);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      const dailyData = await fetchDailyVisitors();
      const liveData = await fetchLiveVisitors();
      const weeklyData = await fetchWeeklyVisitors();
      const monthlyData = await fetchMonthlyVisitors();

      setDailyVisitors(dailyData);
      setLiveVisitors(liveData);
      setWeeklyVisitors(weeklyData);
      setMonthlyVisitors(monthlyData);
    };

    fetchData();

    // Update screen width on window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Check if the data is loaded (non-null)
  if (
    dailyVisitors === null ||
    liveVisitors === null ||
    weeklyVisitors === null ||
    monthlyVisitors === null
  ) {
    return <div>Loading...</div>; // Loading until all values are fetched
  }

  // Prepare data for Pie chart
  const data = [
    { name: "Daily Visitors", value: dailyVisitors },
    { name: "Weekly Visitors", value: weeklyVisitors },
    { name: "Monthly Visitors", value: monthlyVisitors },
  ];

  // Dynamically adjust outerRadius based on screen size
  const getOuterRadius = () => {
    if (screenWidth <= 480) {
      // Mobile screens
      return 120;
    } else if (screenWidth <= 768) {
      // Tablet screens
      return 140;
    }
    return 180; // Default for larger screens
  };

  // Dynamically adjust container height on mobile
  const getChartHeight = () => {
    if (screenWidth <= 480) {
      // Mobile screens
      return 300; // Smaller height for mobile
    }
    return 450; // Default height for larger screens
  };

  return (
    <div className="md:max-w-2xl" style={{ width: "100%", height: "auto" }}>
      <ResponsiveContainer width="100%" height={getChartHeight()}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            fill="#D22B2B"
            // Only show labels on larger screens
            label={
              screenWidth > 480
                ? ({ name, value }) => `${name}: ${value}`
                : undefined
            }
            cx="50%"
            cy="50%"
            outerRadius={getOuterRadius()} // Dynamically set the outer radius
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Display labels below the chart only on mobile */}
      {screenWidth <= 480 && (
        <div className="flex flex-col items-center mt-4 p-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-between w-full max-w-xs p-2"
            >
              <div
                className="font-semibold"
                style={{ color: COLORS[index % COLORS.length] }}
              >
                {item.name}
              </div>
              <div>{item.value}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
