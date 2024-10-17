import React from 'react';
import { IoMdPhotos } from "react-icons/io";

export const UploadPhotos : React.FC = () => {
  return (
    <section className='bg-slate-50 border-y p-8 hover:border-t-4 hover:border-t-blue-variant hover:shadow-lg font-sans text-charcoal-gray my-4'>
    {/* <h1 className='md:text-xl text-lg font-semibold my-4'>
    Upload Photos
    </h1>

    <div className='border-2 border-dashed border-blue-variant p-8 my-6 items-center justify-center'>
        <div className='flex gap-4'>
        <div className='p-4 rounded-full bg-slate-100 border-[0.5px]'>
        <IoMdPhotos size={52} className="object-cover text-blue-variant" />
        </div>
        </div>
    </div> */}

<div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload Photos</h2>
      <div className="flex items-center justify-between">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 opacity-50 rounded-lg"></div>
          <img
            className="w-20 h-20 rounded-lg object-cover"
            src="/placeholder-image.png"
            alt="Placeholder"
          />
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">
          + Add Photos
        </button>
      </div>
      <p className="text-gray-600 mt-2 text-sm">
        (Max limit 5 MB per image)
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="ml-3 text-gray-800">
            Adding at least 8 pictures improves the chances
            for a quick sale.
          </p>
        </div>
        < div className="flex items-center">
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="ml-3 text-gray-800">
            Make sure the images are clear and well-lit.
          </p>
        </div>
      </div>
    </div>
</section>
  )
}

