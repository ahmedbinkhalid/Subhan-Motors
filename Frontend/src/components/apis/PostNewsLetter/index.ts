export const sendNewsletter = async (data: { title: string; news: string }) => {
    try {
        const response = await fetch("https://test-backend-1xtc.onrender.com/api/send-news", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Convert data to JSON string
        });

        if (!response.ok) {
            throw new Error('Network response was not ok'); // Throw error for non-200 responses
        }

        const result = await response.json(); // Parse JSON response
        return result;
    } catch (error) {
        console.error("Error sending newsletter:", error);
        throw error; // Rethrow the error for handling in the calling function
    }
};
