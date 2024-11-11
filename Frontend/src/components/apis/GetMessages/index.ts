// src/components/apis/GetMessages.ts
export const getMessages = async () => {
    try {
        const response = await fetch('https://test-backend-1xtc.onrender.com/api/getContact'); // Adjust the URL based on your API endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok'); // Handle HTTP errors
        }
        const data = await response.json(); // Parse the JSON data
        return data; // Return the fetched data
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw new Error('Failed to fetch messages'); // Handle errors appropriately
    }
};
