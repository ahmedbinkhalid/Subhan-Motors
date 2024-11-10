import React, { useState } from "react";
import { IoMdPhotos } from "react-icons/io";
import { MdAddToPhotos } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LuImageMinus } from "react-icons/lu";
import { useImageContext } from "../../ImageContext";

interface PhotoLimitationsProps {
  limitation: string;
}

export const AddCarUploadPhotos: React.FC = () => {
  const { images, setImages } = useImageContext();
  const [loading, setLoading] = useState<Record<number, boolean>>({});

  const PhotoLimitations: React.FC<PhotoLimitationsProps> = ({ limitation }) => (
    <p className="flex gap-2">
      <IoMdCheckmarkCircleOutline size={20} className="object-cover text-regal-red mt-[1.5px] font-bold" />
      <span className="text-charcoal-gray text-sm mt-[1.5px] font-medium">{limitation}</span>
    </p>
  );

  const allowedFormats = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
  const maxSizeMB = 5 * 1024 * 1024;
  const maxImages = 10;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files);

      if (images.length + newImages.length > maxImages) {
        alert(`You can upload a maximum of ${maxImages} images.`);
        return;
      }

      newImages.forEach((file, index) => {
        if (!allowedFormats.includes(file.type)) {
          alert("Only JPG, JPEG, PNG, and GIF formats are allowed.");
          return;
        }

        if (file.size > maxSizeMB) {
          alert("Each image must be 5 MB or smaller.");
          return;
        }

        const reader = new FileReader();
        reader.onload = () => {
          const imageUrl = reader.result as string;
          setImages((prevImages) => [...prevImages, imageUrl]);
          const newIndex = images.length + index;
          setLoading((prevLoading) => ({ ...prevLoading, [newIndex]: true }));

          setTimeout(() => {
            setLoading((prevLoading) => ({ ...prevLoading, [newIndex]: false }));
          }, 2000);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleDelete = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setLoading((prevLoading) => {
      const updatedLoading = { ...prevLoading };
      delete updatedLoading[index];
      return updatedLoading;
    });
  };

  return (
    <section className="bg-slate-100 border-y md:p-12 p-4 hover:border-t-4 hover:border-t-regal-red hover:shadow-lg font-sans text-charcoal-gray my-8">
      <h1 className="md:text-xl text-lg font-semibold mb-6">Upload Photos</h1>

      <div className="border-2 border-dashed border-regal-red md:p-12 p-4 ">
        <div className="flex md:gap-4 gap-2 justify-center items-center w-full">
          <div className="p-4 rounded-full bg-slate-100 border-[0.5px]">
            <IoMdPhotos size={52} className="object-cover text-regal-red" />
          </div>

          <div className="flex flex-col gap-1 self-end">
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="bg-regal-red hover:bg-red-700 py-2 md:px-6 px-3 rounded-lg text-center md:text-base text-sm text-white font-semibold h-fit self-center flex gap-2">
                <MdAddToPhotos size={24} className="object-cover text-white mt-[1.5px]" />
                <span> Add Photos </span>
              </div>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <p className="md:text-sm text-xs font-normal text-charcoal-gray text-center">
              (Max Limit 5MB per Image)
            </p>
          </div>
        </div>

        <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 md:my-8 my-4 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
          {images.map((image, index) => (
            <div key={index} className="relative w-40 h-40 bg-gray-100 rounded-md overflow-hidden flex justify-center items-center">
              <img src={image} alt={`uploaded ${index}`} className="w-full h-full object-cover" />

              {loading[index] && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                  <span className="text-white text-sm font-semibold">Loading...</span>
                </div>
              )}

              <button
                onClick={() => handleDelete(index)}
                className="absolute top-1 right-1 p-1 hover:bg-opacity-80 bg-white rounded-full"
              >
                <LuImageMinus size={20} className="text-regal-red" />
              </button>
            </div>
          ))}
        </div>

        <section className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col gap-4">
            <PhotoLimitations limitation="Adding at least 8 pictures improves the chances for a quick sale." />
            <PhotoLimitations limitation="Photos should be in 'jpeg, jpg, png, gif' format only." />
          </div>
          <div className="flex flex-col gap-4">
            <PhotoLimitations limitation="Adding clear Front, Back and Interior pictures of your car." />
            <PhotoLimitations limitation="Pictures should be 800x600 centre frame image" />
          </div>
        </section>
      </div>
    </section>
  );
};
