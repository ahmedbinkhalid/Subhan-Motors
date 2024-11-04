import React, { useState } from "react";
import { BlogFormProps } from "./types";
import { FiTrash2 } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import { addNewBlog } from "../../../../assets/images";
import { TitleInput } from "../../../atoms/TitleInput";
import { DescriptionInput } from "../../../atoms/DescriptionInput";

const AddBlogForm: React.FC<BlogFormProps> = ({ onSubmit }) => {
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setIsLoading(true);
      setTimeout(() => {
        setImage(selectedFile);
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleImageDelete = () => {
    setImage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ image, title, description });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-slate-50 shadow-lg rounded-md animate-fadeIn transition-all duration-300 ease-in-out w-full flex flex-col gap-3 p-4"
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
          onChange={handleImageChange}
        />
      </div>

      <div className="flex justify-center">
        {isLoading ? (
          <div className="w-16 h-16 border-4 border-regal-red border-dashed rounded-full animate-spin"></div>
        ) : (
          image && (
            <div className="relative group w-72 h-48">
              <img
                src={URL.createObjectURL(image)}
                alt="Selected"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
              <button
                type="button"
                onClick={handleImageDelete}
                className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-lg hover:bg-red-500 transition duration-200 ease-in-out"
              >
                <FiTrash2
                  className="text-gray-600 group-hover:text-white"
                  size={18}
                />
              </button>
            </div>
          )
        )}
      </div>

      <TitleInput
        placeholder="Blog"
        title={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <DescriptionInput
        placeholder="Blog"
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
    </form>
  );
};

export default AddBlogForm;
