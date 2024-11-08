import React, { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import {
  fetchDailyVisitors,
  fetchLiveVisitors,
  fetchWeeklyVisitors,
  fetchMonthlyVisitors,
} from "../../../apis/FetchVisitors";

// Define colors: two red and two blue
const COLORS = ["#D22B2B", "#0047AB", "#D22B2B", "#0047AB"];

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
    { name: "Live Visitors", value: liveVisitors },
    { name: "Weekly Visitors", value: weeklyVisitors },
    { name: "Monthly Visitors", value: monthlyVisitors },
  ];

  // Dynamically adjust outerRadius based on screen size
  const getOuterRadius = () => {
    if (screenWidth <= 480) { // Mobile screens
      return 100;
    } else if (screenWidth <= 768) { // Tablet screens
      return 140;
    }
    return 180; // Default for larger screens
  };

  return (
    <div className="max-w-2xl" style={{ width: "100%", height: "450px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            fill="#D22B2B"
            label={({ name, value }) => `${name}: ${value}`} // Display label over each pie slice
            cx="50%"
            cy="50%"
            outerRadius={getOuterRadius()} // Dynamically set the outer radius
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
