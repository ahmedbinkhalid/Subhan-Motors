import React, {useState} from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { FiTrash2 } from "react-icons/fi";
import { AddCarFormProps } from './types';
import { motion } from 'framer-motion';
import { addCar } from '../../../../assets/images';
import { AddCarImagePart } from '../AddCarImagePart';

export const AddNewCarForm : React.FC<AddCarFormProps> = ({onSubmit}) => {
    const [image, setImage] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);

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
        onSubmit({ image });
      };

      
  return (
    <React.Fragment>
        <AddCarImagePart />
{/* <form
    onSubmit={handleSubmit}
    className="max-w-md mx-auto bg-slate-50 shadow-lg rounded-md animate-fadeIn transition-all duration-300 ease-in-out w-full flex flex-col gap-3 p-4"
  >
    <div className="flex flex-col p-6">
      <motion.img
        src={addCar} 
        alt="Car Deal"
        className="object-contain h-auto w-auto"
        initial={{ y: 300, opacity: 0 }} 
        animate={{ x: [null, 100, 0], y: 0, opacity: 10, }} 
        transition={{
          duration: 2,
          ease: "easeInOut"
        }}
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
    </form> */}
    </React.Fragment>
    
  )
}

