// FetchVisitors.js

// Function to fetch daily visitors data
export const fetchDailyVisitors = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/daily');
      if (!response.ok) {
        throw new Error('Failed to fetch daily visitors data');
      }
      const data = await response.json();
      return data.dailyVisitors; // Assuming the backend returns an array or number
    } catch (error) {
      console.error(error);
      return 0; // Fallback valu
    }
  };
  
  // Function to fetch live visitors data
  export const fetchLiveVisitors = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/live');
      if (!response.ok) {
        throw new Error('Failed to fetch live visitors data');
      }
      const data = await response.json();
      return data.liveVisitors;
    } catch (error) {
      console.error(error);
      return 0; // Fallback value
    }
  };
  
  // Function to fetch weekly visitors data
  export const fetchWeeklyVisitors = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/weekly');
      if (!response.ok) {
        throw new Error('Failed to fetch weekly visitors data');
      }
      const data = await response.json();
      return data.weeklyVisitors;
    } catch (error) {
      console.error(error);
      return 0; // Fallback value
    }
  };
  
  // Function to fetch monthly visitors data
  export const fetchMonthlyVisitors = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/monthly');
      if (!response.ok) {
        throw new Error('Failed to fetch monthly visitors data');
      }
      const data = await response.json();
      return data.monthlyVisitors;
    } catch (error) {
      console.error(error);
      return 0; // Fallback value
    }
  };
  