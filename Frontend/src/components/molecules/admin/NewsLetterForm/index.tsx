import React, { useState } from "react";
import { newsLetterFormProps } from "./types";
import { TitleInput } from "../../../atoms/TitleInput";
import { DescriptionInput } from "../../../atoms/DescriptionInput";
import { newsLetter } from "../../../../assets/images";

export const NewsLetterForm: React.FC<newsLetterFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onSubmit({ title, description });
      setPopupMessage("Your post has been sent successfully!");

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setPopupMessage("Your post did not send successfully.");
    } finally {
      setPopupVisible(true);
    }
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    window.location.reload();
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

      {popupVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-lg font-bold">{popupMessage}</h2>
            <button
              className="mt-4 text-red-500 font-semibold"
              onClick={handleClosePopup}
            >
              × Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
