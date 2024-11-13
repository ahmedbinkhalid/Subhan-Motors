/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { newsLetterFormProps } from "./types";
import { TitleInput } from "../../../atoms/TitleInput";
import { DescriptionInput } from "../../../atoms/DescriptionInput";
import { newsLetter } from "../../../../assets/images";
import { CustomPopup } from "../../../atoms/CustomPopup"; // Ensure CustomPopup is imported

export const NewsLetterForm: React.FC<newsLetterFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [popupMessage, setPopupMessage] = useState(""); // State for popup message
  const [isSuccess, setIsSuccess] = useState(false); // To track if the form submission was successful

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onSubmit({ title, description });
      setPopupMessage("Your post has been sent successfully!");
      setIsSuccess(true);
      setTitle("");
      setDescription("");
    } catch (error) {
      setPopupMessage("Your post did not send successfully.");
      setIsSuccess(false); // Mark as error
    } finally {
      setShowPopup(true); // Show the popup after submitting
      setTimeout(() => {
        setShowPopup(false); // Hide the popup after 4 seconds
      }, 2000);
    }
  };

  return (
    <section className="w-full lg:my-24 md:my-16 my-8 grid md:grid-cols-2 grid-cols-1 max-w-5xl lg:gap-12 gap-8 mx-auto">
      <div className="flex justify-center items-center">
        <img src={newsLetter} alt="newsLetter" className="bg-cover" />
      </div>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-slate-50 shadow-xl rounded-md animate-fadeIn transition-all duration-300 ease-in-out w-full flex flex-col gap-4 p-8"
        >
          <h1 className="text-center md:text-2xl text-xl font-sans font-bold text-charcoal-gray my-2">
            Create News Letter
          </h1>

          <TitleInput
            placeholder="NewsLetter"
            title={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <DescriptionInput
            placeholder="NewsLetter"
            description={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="w-1/2 py-3 text-white bg-regal-red rounded-lg font-semibold hover:bg-red-600 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Post News
            </button>
          </div>
        </form>
      </div>

      {/* CustomPopup */}
      {showPopup && (
        <CustomPopup
          message={popupMessage}
          isSuccess={isSuccess}
          onClose={() => setShowPopup(false)} // Close the popup
        />
      )}
    </section>
  );
};
