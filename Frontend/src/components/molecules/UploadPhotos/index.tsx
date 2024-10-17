import React from 'react';
import { IoMdPhotos } from "react-icons/io";

export const UploadPhotos : React.FC = () => {
  return (
    <section className='bg-slate-50 border-y p-8 hover:border-t-4 hover:border-t-blue-variant hover:shadow-lg font-sans text-charcoal-gray my-4'>
    <h1 className='md:text-xl text-lg font-semibold my-4'>
    Upload Photos
    </h1>

    <div className='border-2 border-dashed border-blue-variant p-8 my-6 items-center justify-center'>
        <div className='flex gap-4'>
        <div className='p-4 rounded-full bg-slate-100 border-[0.5px]'>
        <IoMdPhotos size={52} className="object-cover text-blue-variant" />
        </div>
        </div>
    </div>
</section>
  )
}

