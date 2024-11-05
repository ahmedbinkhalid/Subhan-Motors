import React from 'react';
import { NewsLetterForm } from '../../components/molecules/admin/NewsLetterForm';
import { sendNewsletter } from '../../components/apis/PostNewsLetter'; // Adjust this import as necessary
import { newsLetterFormData } from '../../components/molecules/admin/NewsLetterForm/types'; // Adjust the import path as necessary

export const CreateNewsLetter: React.FC = () => {
    const handleSubmit = async (data: newsLetterFormData) => {
        try {
            // Change this to match the expected data structure in your API
            const apiData = { title: data.title, news: data.description }; // Make sure to pass `news` instead of `description`
            await sendNewsletter(apiData); // Call the API function
            console.log("Newsletter sent successfully!");
            
        } catch (error) {
            console.error("Failed to send newsletter:", error);
        }
    };

    return (
        <NewsLetterForm onSubmit={handleSubmit} />
    );
};
