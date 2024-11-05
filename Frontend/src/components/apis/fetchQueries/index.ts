// GetQueries.js // Adjust the URL according to your backend route

export const fetchQueries = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/getQueries");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        console.error('Error fetching queries:', error);
        throw error; // Rethrow the error for handling in the component
    }
};
