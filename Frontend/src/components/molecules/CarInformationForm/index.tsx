import React, { useState, useEffect } from "react";
import CarInformationDropDown from "../../atoms/CarInformationDropDown";
import CarInformationSubmitButton from "../../atoms/CarInformationSubmitButton";
import { CarInformationInput } from "../../atoms/CarInformationInput";
import { citiesOfPakistan, yearsFrom1900ToCurrent } from "./constants";
import { CarInformationDescription } from "../../atoms/CarInformationDescription";
import { useImageContext } from "../ImageContext";
import { useContact } from "../ContactContext";
import { CarFormData } from "./types";
import { postCarAd } from "../../apis/PostCarAd";
import { CustomPopup } from "../../atoms/CustomPopup";
import { useNavigate } from "react-router-dom";

type CarInformationFormProps = {
  bgColor: string;
};

const CarInformationForm: React.FC<CarInformationFormProps> = ({ bgColor }) => {
  const { images, setImages } = useImageContext();
  const { sellerInfo: contactInfo, setSellerInfo } = useContact();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<CarFormData>({
    sellerInfo: { sellerName: "", mobileNumber: "" },
    images: [],
    make: "",
    model: "",
    year: "",
    status: "",
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

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [customPopupMessage, setCustomPopupMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [showCustomPopup, setShowCustomPopup] = useState<boolean>(false);

  useEffect(() => {
    // Synchronize form data with contact info and images when they change
    setFormData((prevData) => ({
      ...prevData,
      sellerInfo: contactInfo,
      images: images,
    }));
  }, [images, contactInfo]); // Add contactInfo as a dependency to update when it changes

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

    // Validate that at least two images are included
    if (formData.images.length < 2) {
      setErrorMessage("Please upload at least 2 images.");
      return;
    } else {
      setErrorMessage(null); // Clear error message if validation passes
    }

    // Send the data for posting the car ad
    const response = await postCarAd(formData, token);

    if (response.error) {
      // Show failure message and set popup color to red
      setCustomPopupMessage("Failed to submit your ad. Please try again.");
      setIsSuccess(false);
      setShowCustomPopup(true);
    } else {
      // Show success message and set popup color to green
      setCustomPopupMessage("Your car ad has been successfully submitted!");
      setIsSuccess(true);
      setShowCustomPopup(true);

      // Reset form data, contact info, and images after successful submission
      setFormData({
        sellerInfo: { sellerName: "", mobileNumber: "" },
        images: [],
        make: "",
        model: "",
        year: "",
        status: "",
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

      setSellerInfo({ sellerName: "", mobileNumber: "" });
      setImages([]);
      navigate("/myAds");
    }

    // Hide the popup after 4 seconds
    setTimeout(() => {
      setShowCustomPopup(false); // Close the popup
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 my-2">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {errorMessage && (
          <div className="md:col-span-2 text-red-500 mb-4">{errorMessage}</div>
        )}

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
            label="Select Status"
            name="status"
            options={["Used", "Imported"]}
            value={formData.status}
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
          <CarInformationSubmitButton bgColor={bgColor} />
        </div>
      </form>
      {showCustomPopup && (
        <CustomPopup
          message={customPopupMessage}
          isSuccess={isSuccess}
          onClose={() => setShowCustomPopup(false)}
        />
      )}
    </div>
  );
};

export default CarInformationForm;
