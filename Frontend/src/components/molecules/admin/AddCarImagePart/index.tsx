import React from 'react';
import { addCar } from '../../../../assets/images';
import { motion } from 'framer-motion';
import { UploadPhotos } from '../../UploadPhotos';

export const AddCarImagePart : React.FC = () => {
  return (
    <section className='bg-slate-50 border-y-2 hover:border-y-0 hover:border-t-4 hover:border-t-regal-red max-w-5xl mx-auto grid md:grid-cols-3 grid-cols-1'>
       <div className='w-full flex justify-center items-center'>
       <motion.img
        src={addCar}
        alt="add Car"
        className='object-contain h-96'
        initial={{ y: 200, opacity: 0 }} 
        animate={{ x: [null, 100, 0], y: 0, opacity: 50, }} 
        transition={{
          duration: 2,
          ease: "easeInOut"
        }}
        />
       </div>
       

        <div className='col-span-2 m-5'>
          <UploadPhotos
          bgColor='regal-red'
        hoverBgColor='bgred-600'/>
        </div>
    </section>
  )
}
