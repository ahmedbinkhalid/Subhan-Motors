import React, { useState } from "react";
import { postNewBlog } from "../../../apis/PostNewBlog"; // Import the API handler
import { BlogFormProps } from "./types";
import { FiTrash2 } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import { addNewBlog } from "../../../../assets/images";
import { TitleInput } from "../../../atoms/TitleInput";
import { DescriptionInput } from "../../../atoms/DescriptionInput";
import { CustomPopup } from "../../../atoms/CustomPopup"; // Ensure CustomPopup is imported

const AddBlogForm: React.FC<BlogFormProps> = ({ onSubmit }) => {
  const [imageFiles, setImageFiles] = useState<File[]>([]); // Store image files as an array
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(""); // State to manage error messages
  const [showPopup, setShowPopup] = useState<boolean>(false); // State for popup visibility
  const [popupMessage, setPopupMessage] = useState<string>(""); // State for popup message
  const [isSuccess, setIsSuccess] = useState<boolean>(false); // To track if submission was successful
  const controls = useAnimation();

  React.useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({ x: "30%", transition: { duration: 2 } });
        await controls.start({ x: "0%", transition: { duration: 2 } });
        await controls.start({ x: "-30%", transition: { duration: 2 } });
        await controls.start({ x: "0%", transition: { duration: 2 } });
      }
    };

    sequence();
  }, [controls]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setImageFiles(selectedFiles);
      setError("");
    }
  };

  const handleImageDelete = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (imageFiles.length === 0) {
      setError("Please select at least one image.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await postNewBlog({
        title,
        content: description,
        images: imageFiles,
      });

      if (response.error) {
        setPopupMessage(`Error: ${response.error}`);
        setIsSuccess(false);
        setShowPopup(true);
      } else {
        // Assuming a successful response is when `error` is undefined or null
        console.log("Blog submitted:", response);
        onSubmit({
          image: imageFiles.length > 0 ? imageFiles : [],
          title,
          description,
        });

        // Show success popup and clear the form
        setPopupMessage("Blog successfully added!");
        setIsSuccess(true);
        setShowPopup(true);

        // Clear form after success
        setTitle("");
        setDescription("");
        setImageFiles([]);

        setTimeout(() => {
          setShowPopup(false); // Hide popup after 4 seconds
        }, 2000);
      }
    } catch (error) {
      console.error("Network error:", error);
      setPopupMessage("Error during blog submission. Please try again.");
      setIsSuccess(false);
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false); // Hide popup after 4 seconds
      }, 2000);
    }

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:max-w-md mx-auto bg-slate-50 shadow-lg rounded-md animate-fadeIn transition-all duration-300 ease-in-out w-full flex flex-col gap-3 p-4"
    >
      <h1 className="text-center md:text-2xl text-xl font-sans font-bold text-charcoal-gray my-2">
        Create a New Blog
      </h1>
      <div className="flex justify-center h-40 overflow-hidden relative">
        <motion.img
          src={addNewBlog}
          alt="Animated"
          className="w-auto object-cover"
          animate={controls}
        />
      </div>

      <div className="flex justify-center">
        <label
          htmlFor="image-picker"
          className="cursor-pointer text-white bg-regal-red px-4 py-2 rounded-md font-bold hover:bg-red-600 transition duration-300 ease-in-out flex gap-1"
        >
          <BiImageAdd size={20} className="mt-[3px]" />
          Select Image
        </label>
        <input
          type="file"
          id="image-picker"
          accept="image/*"
          className="hidden"
          multiple
          onChange={handleImageChange}
        />
      </div>

      <div className="flex justify-center">
        {isLoading ? (
          <div className="w-16 h-16 border-4 border-regal-red border-dashed rounded-full animate-spin"></div>
        ) : (
          imageFiles.length > 0 && (
            <div className="flex flex-wrap justify-center">
              {imageFiles.map((file, index) => (
                <div key={index} className="relative group w-72 h-48 m-2">
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Selected"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleImageDelete(index)}
                    className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-lg hover:bg-red-500 transition duration-200 ease-in-out"
                  >
                    <FiTrash2
                      className="text-gray-600 group-hover:text-white"
                      size={18}
                    />
                  </button>
                </div>
              ))}
            </div>
          )
        )}
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <TitleInput
        placeholder="Blog Title"
        title={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <DescriptionInput
        placeholder="Blog Description"
        description={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="w-1/2 py-3 text-white bg-regal-red rounded-lg font-semibold hover:bg-red-600 hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Add Blog
        </button>
      </div>

      {/* CustomPopup */}
      {showPopup && (
        <CustomPopup
          message={popupMessage}
          isSuccess={isSuccess}
          onClose={() => setShowPopup(false)}
        />
      )}
    </form>
  );
};

export default AddBlogForm;
