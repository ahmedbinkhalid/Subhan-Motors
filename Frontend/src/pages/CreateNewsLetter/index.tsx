import React from "react";
import { NewsLetterForm } from "../../components/molecules/admin/NewsLetterForm";
import { sendNewsletter } from "../../components/apis/PostNewsLetter";
import { newsLetterFormData } from "../../components/molecules/admin/NewsLetterForm/types";

export const CreateNewsLetter: React.FC = () => {
  const handleSubmit = async (data: newsLetterFormData) => {
    try {
      const apiData = { title: data.title, news: data.description };
      await sendNewsletter(apiData);
      console.log("Newsletter sent successfully!");
    } catch (error) {
      console.error("Failed to send newsletter:", error);
    }
  };

  return <NewsLetterForm onSubmit={handleSubmit} />;
};
