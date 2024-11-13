// Helper function to convert a File to a base64 string
const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

// src/api/PostNewBlog.ts

export const postNewBlog = async (blogData: {
    title: string;
    content: string;
    images: File[];
}): Promise<{ error?: string }> => {
    try {
        const imageBase64Array: string[] = [];

        // Convert each image to base64 if it's a File
        for (const image of blogData.images) {
            const base64Image = await convertToBase64(image);
            imageBase64Array.push(base64Image);
        }

        // Construct the data object to send as JSON
        const dataToSend = {
            title: blogData.title,
            content: blogData.content,
            images: imageBase64Array,
        };

        const response = await fetch('https://test-backend-1xtc.onrender.com/api/submit', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        });

        return await response.json();
    } catch (error) {
        console.error("Error during blog posting: ", error);
        return { error: "An error occurred during blog posting." };
    }
};
