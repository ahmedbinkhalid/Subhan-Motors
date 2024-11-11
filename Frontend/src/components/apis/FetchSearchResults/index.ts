// src/services/HeaderSearchHandling.ts
export const fetchSearchResults = async (searchKey: string) => {
  if (searchKey.trim() === '') {
    throw new Error('Please enter a car make or model');
  }

  try {
    const response = await fetch(`http://localhost:5000/api/searchcars/${searchKey}`);
    const data = await response.json();

    if (data.cars && data.cars.length > 0) {
        console.log(data);
      return data.cars;
    } else {
      throw new Error(data.message || 'No cars found');
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error : any) {
    throw new Error('Error fetching search results: ' + error.message);
  }
};
