// CarInformationForm.tsx
import React, { useState, useEffect } from "react";
import CarInformationDropDown from "../../../atoms/CarInformationDropDown";
import CarInformationSubmitButton from "../../../atoms/CarInformationSubmitButton";
import { CarInformationInput } from "../../../atoms/CarInformationInput";
import { CarInformationDescription } from "../../../atoms/CarInformationDescription";
import { useImageContext } from "../../../molecules/ImageContext";
import { useContact } from "../../../molecules/ContactContext";
import { postCarAd } from "../../../apis/PostCarAd";
import { DateCalender } from "../../../molecules/admin/DateCalender";
import { FormProps } from "react-router-dom";
type AddNewCarFormProps = {
  bgColor: string;
};

export const AddNewCarForm: React.FC<AddNewCarFormProps> = ({ bgColor }) => {
  const { images } = useImageContext();
  const { sellerInfo: contactInfo } = useContact();

  const [formData, setFormData] = useState<FormProps>({
    sellerInfo: { sellerName: "", mobileNumber: "" },
    images: [],
    make: "",
    model: "",
    startingPrice: "",
    maxPrice: "",
    date: "",
    price: "",
    transmission: "",
    engineType: "",
    engineCapacity: "",
    color: "",
    description: "",
  });

  // Populate sellerInfo and images from context
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      sellerInfo: contactInfo,
      images: images,
    }));
  }, [images, contactInfo]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("User not authenticated");
      return;
    }

    const response = await postCarAd(formData, token);
    if (response.error) {
      console.error("Error:", response.error);
    } else {
      console.log("Successfully posted car data:", formData);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 my-2">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="space-y-4">
          <CarInformationInput
            label="Make"
            value={formData.make}
            onChange={handleChange}
            placeHolder="Enter car make"
            id_name="make"
          />
          <CarInformationDropDown
            label="Transmission"
            name="transmission"
            options={["Automatic", "Manual"]}
            value={formData.transmission}
            onChange={handleChange}
          />
          <CarInformationInput
            label="Color"
            value={formData.color}
            onChange={handleChange}
            placeHolder="Enter Car Color"
            id_name="color"
          />

          <CarInformationInput
            label="Starting Price"
            value={formData.color}
            onChange={handleChange}
            placeHolder="Enter Starting Price"
            id_name="startingPrice"
          />
          <CarInformationInput
            label=" Maximum Price"
            value={formData.color}
            onChange={handleChange}
            placeHolder="Enter maximum Price"
            id_name="maxPrice"
          />
        </div>
        <div className="space-y-4">
          <CarInformationInput
            label="Model"
            value={formData.model}
            onChange={handleChange}
            placeHolder="Enter car model"
            id_name="model"
          />
          <CarInformationDropDown
            label="Engine Type"
            name="engineType"
            options={["Petrol", "Diesel", "LPG", "Electric", "Hybrid"]}
            value={formData.engineType}
            onChange={handleChange}
          />
          <CarInformationInput
            label="Engine Capacity (cc)"
            value={formData.engineCapacity}
            onChange={handleChange}
            placeHolder="Enter Engine Capacity"
            id_name="engineCapacity"
          />
          <DateCalender />
        </div>

        <div className="md:col-span-2">
          <CarInformationDescription
            label="Description"
            value={formData.description}
            onChange={handleChange}
            placeHolder="Enter Details About your Car"
            id_name="description"
          />
        </div>

        <div className="md:col-span-2 flex justify-center my-8">
          <CarInformationSubmitButton bgColor={bgColor} />
        </div>
      </form>
    </div>
  );
};
