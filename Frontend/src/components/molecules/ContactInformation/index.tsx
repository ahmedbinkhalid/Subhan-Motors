import React from 'react';
import {ContactInformationInput} from '../../atoms/ContactInformationInput';
import { FaMobileScreenButton } from "react-icons/fa6";

export const ContactInformation: React.FC = () => {
  return (
    <section className="bg-slate-50 border-y p-4 sm:p-6 md:p-8 lg:px-12 hover:border-t-4 hover:border-t-blue-variant hover:shadow-lg font-sans text-charcoal-gray my-4">
      <h1 className="text-lg font-semibold my-2 sm:text-xl lg:text-2xl">
        Contact Information
      </h1>

      <div className='grid md:grid-cols-3 md:gap-8 gap-6'>

        <div className='col-span-2 flex flex-col justify-center py-6'>

        <ContactInformationInput
                label="Seller Name"
                type="text"
                placeholder="Enter Seller FullName"
                id="sellerName"
            />
            <ContactInformationInput
                label="Mobile Number"
                type="tel"
                placeholder="Enter Seller Mobile No"
                id="mobileNumber"
            />
        </div>

        <div className='flex items-center justify-center gap-4 p-4'>
        <FaMobileScreenButton size={96} className="text-blue-variant" />
          <p className="text-sm text-center text-charcoal-gray font-medium md:text-base lg:text-lg">
            Enter a genuine 11-digit mobile number with the format 03XXXXXXXXX. All inquiries will come to this number.
          </p>
        </div>

      </div>
      {/* <div className="flex flex-col items-center justify-center">
            <div className="w-full">
                <div className="flex items-center mb-4 gap-6">
                    <label htmlFor="sellerName" className="mb-1 text-sm font-medium text-gray-700">Seller Name</label>
                    <input
                        type="text"
                        id="sellerName"
                        className="flex-1 p-2 border border-gray-300 rounded-md outline-none"
                        placeholder="Enter seller name"
                    />
                </div>

                <div className="flex items-center mb-4">
                    <label htmlFor="mobileNumber" className="mb-1 text-sm font-medium text-gray-700">Mobile Number</label>
                    <input
                        type="tel"
                        id="mobileNumber"
                        className="flex-1 p-2 border border-gray-300 rounded-md outline-none"
                        placeholder="Enter mobile number"
                    />
                </div>
            </div>
        </div> */}

        {/* <div className="flex flex-col gap-4 items-center justify-center md:flex-row md:col-span-2 lg:col-span-1">
          <FaMobileScreenButton size={48} className="text-blue-variant" />
          <p className="text-sm text-center text-charcoal-gray font-medium md:text-base lg:text-lg">
            Enter a genuine 11-digit mobile number with the format 03XXXXXXXXX. All inquiries will come to this number.
          </p>
        </div> */}
    </section>
  );
};
