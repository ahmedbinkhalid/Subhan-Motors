import React from "react";
import { ContactInformationInput } from "../../atoms/ContactInformationInput";
import { FaMobileScreenButton } from "react-icons/fa6";
import { useContact } from "../ContactContext";

export const ContactInformation: React.FC = () => {
  const { setSellerInfo: setContactInfo } = useContact();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section className="bg-slate-50 border-y p-4 sm:p-6 md:p-8 lg:px-12 hover:border-t-4 hover:border-t-blue-variant hover:shadow-lg font-sans text-charcoal-gray my-4">
      <h1 className="text-lg font-semibold my-2 sm:text-xl lg:text-2xl">
        Contact Information
      </h1>

      <div className="grid md:grid-cols-3 md:gap-8 gap-6">
        <div className="col-span-2 flex flex-col justify-center py-6">
          <ContactInformationInput
            label="Seller Name"
            type="text"
            placeholder="Enter Seller FullName"
            id="sellerName"
            onChange={handleChange}
          />
          <ContactInformationInput
            label="Mobile Number"
            type="tel"
            placeholder="Enter Seller Mobile No"
            id="mobileNumber"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-center gap-4 p-4">
          <FaMobileScreenButton size={96} className="text-blue-variant" />
          <p className="text-sm text-center text-charcoal-gray font-medium md:text-base lg:text-lg">
            Enter a genuine 11-digit mobile number with the format 03XXXXXXXXX.
            All inquiries will come to this number.
          </p>
        </div>
      </div>
    </section>
  );
};
