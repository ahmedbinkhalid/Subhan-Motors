import React from "react";
import { IoMdPhotos } from "react-icons/io";
import { MdAddToPhotos } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export const UploadPhotos: React.FC = () => {

  type PhotoLimitationsProps = {
    limitation : string
  }

  const PhotoLimitations : React.FC<PhotoLimitationsProps> = ({limitation}) => (
    <p className="flex gap-2">
    <IoMdCheckmarkCircleOutline  size={20}
        className="object-cover text-blue-variant mt-[1.5px] font-bold" />
      <span className="text-charcoal-gray text-sm mt-[1.5px] font-medium">
      {limitation}
      </span>
    </p>
  )
  return (
    <section className="bg-slate-50 border-y p-8 hover:border-t-4 hover:border-t-blue-variant hover:shadow-lg font-sans text-charcoal-gray my-4">
      <h1 className="md:text-xl text-lg font-semibold my-4">Upload Photos</h1>

      <div className="border-2 border-dashed border-blue-variant p-12 my-6">
        <div className="flex gap-4 justify-center items-center w-full">
          <div className="p-4 rounded-full bg-slate-100 border-[0.5px]">
            <IoMdPhotos size={52} className="object-cover text-blue-variant" />
          </div>

          <div className="flex flex-col gap-1 self-end">
            <button className="bg-blue-variant hover:to-blue-800 cursor-pointer py-2 md:px-6 px-3 rounded-lg text-center md:text-base text-sm text-white font-semibold h-fit self-center flex gap-2">
              <MdAddToPhotos
                size={24}
                className="object-cover text-white mt-[1.5px]"
              />
              <span> Add Photos </span>
            </button>
            <p className="md:text-sm text-xs font-normal text-charcoal-gray text-center">
              (Max Limit 5MB per Image)
            </p>
          </div>
        </div>

        <section className="grid md:grid-cols-2 grid-cols-1 md:my-12 my-6">
            <div className="flex flex-col gap-4">
              <PhotoLimitations limitation = "Adding at least 8 pictures improves the chances for a quick sale." />
              <PhotoLimitations limitation = "Photos should be in 'jpeg, jpg, png, gif' format only." />
            </div>
            <div className="flex flex-col gap-4">
            <PhotoLimitations limitation = "Adding clear Front, Back and Interior pictures of your car." />
            <PhotoLimitations limitation = "Pictures should be 800x600 centre frame image" />
            </div>
          </section>


      </div>
    </section>
  );
};
