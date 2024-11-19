// src/services/HeaderSearchHandling.ts
export const fetchSearchResults = async (searchKey: string) => {
  if (searchKey.trim() === '') {
    throw new Error('Please enter a car make or model');
  }

  try {
    const response = await fetch(`https://test-backend-1xtc.onrender.com/api/searchcars/${searchKey}`);
    const data = await response.json();

    if (data.cars && data.cars.length > 0) {
        console.log("data",data.cars);
      return data.cars;
    } else {
      throw new Error(data.message || 'No cars found');
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error : any) {
    throw new Error('Error fetching search results: ' + error.message);
  }
};
