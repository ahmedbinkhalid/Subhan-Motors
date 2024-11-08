import React from 'react';

export const AddressInfo : React.FC = () => {
  return (
    <section className='flex flex-col gap-6 bg-slate-50 py-8 px-6 max-w-md rounded-md text-charcoal-gray font-sans'>
        <h1 className='md:text-2xl text-xl font-semibold'>Feel free to drop by or call to say Hello!</h1>
        <div className='flex flex-col gap-[2px]'>
          <h3 className='md:text-lg text-base font-semibold'>Address</h3>
          <p className='md:text-base text-sm'>Saeed Alam Tower, 37-Commercial Zone</p>
          <p className='md:text-base text-sm'>Liberty Market, Gulberg, Lahore, Pakistan</p>
        </div>
        <div className='flex flex-col gap-[2px]'>
          <h3 className='md:text-lg text-base font-semibold'>Contact Information</h3>
          <p className='md:text-base text-sm'>Phone: 042 - 111 WHEELS (042 - 111 943 357)</p>
          <p className='md:text-base text-sm'>Email: customersupport@pakeventures.com</p>
        </div>
        <div className='flex flex-col gap-[2px]'>
          <h3 className='md:text-lg text-base font-semibold'>Office Timings</h3>
          <p className='md:text-base text-sm'>Monday-Friday: 09:00am-07:00pm</p>
          <p className='md:text-base text-sm'>Saturday-Sunday: 10:00am-06:00pm</p>
        </div>
      </section>
  )
}

