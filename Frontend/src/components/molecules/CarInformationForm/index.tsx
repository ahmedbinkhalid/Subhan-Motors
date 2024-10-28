import React, { useState, useEffect } from "react";
import CarInformationDropDown from "../../atoms/CarInformationDropDown";
import CarInformationSubmitButton from "../../atoms/CarInformationSubmitButton";
import { CarInformationInput } from "../../atoms/CarInformationInput";
import { citiesOfPakistan, yearsFrom1900ToCurrent } from "./constants";
import { CarInformationDescription } from "../../atoms/CarInformationDescription";
import { useImageContext } from "../ImageContext";
import { CarFormData } from "./types";
import { useContact } from "../ContactContext";

const CarInformationForm: React.FC = () => {
  const { images } = useImageContext();
  const { contactInfo } = useContact();

  const [formData, setFormData] = useState<CarFormData>({
    sellerInfo: { sellerName: "", mobileNumber: "" },
    images: [],
    make: "",
    model: "",
    year: "",
    category: "",
    price: "",
    mileage: "",
    condition: "",
    transmission: "",
    engineType: "",
    engineCapacity: "",
    color: "",
    location: "",
    description: "",
  });

  // Use useEffect to update formData when images and contactInfo are loaded
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Captured Form Data:", formData); // Log all captured values
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
            label="Year"
            name="year"
            options={yearsFrom1900ToCurrent}
            value={formData.year}
            onChange={handleChange}
          />
          <CarInformationInput
            label="Driven in km's"
            value={formData.mileage}
            onChange={handleChange}
            placeHolder="Enter Mileage"
            id_name="mileage"
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
          <CarInformationDropDown
            label="Location"
            name="location"
            options={citiesOfPakistan}
            value={formData.location}
            onChange={handleChange}
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
          <CarInformationInput
            label="Price"
            value={formData.price}
            onChange={handleChange}
            placeHolder="Enter Price"
            id_name="price"
          />
          <CarInformationDropDown
            label="Car Condition"
            name="condition"
            options={["Poor", "Good", "Very Good", "Excellent"]}
            value={formData.condition}
            onChange={handleChange}
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
          <CarInformationDropDown
            label="Car Category"
            name="category"
            options={["Used", "Bank Released"]}
            value={formData.category}
            onChange={handleChange}
          />
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
          <CarInformationSubmitButton />
        </div>
      </form>
    </div>
  );
};

export default CarInformationForm;
