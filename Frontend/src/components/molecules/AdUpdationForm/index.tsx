import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import CarInformationDropDown from "../../atoms/CarInformationDropDown";
import CarInformationSubmitButton from "../../atoms/CarInformationSubmitButton";
import { CarInformationInput } from "../../atoms/CarInformationInput";
import { citiesOfPakistan, yearsFrom1900ToCurrent } from "../CarInformationForm/constants";
import { CarInformationDescription } from "../../atoms/CarInformationDescription";
import { CustomPopup } from "../../atoms/CustomPopup";
import { GetCarDetailById } from "../../apis/GetUsedOrBankCarById";
import { UpdateCarAd } from "../../apis/UpdateCarAd";

export interface AdUpdationProps {
  make: string;
  model: string;
  year: string;
  status: string;
  price: string;
  mileage: string;
  condition: string;
  transmission: string;
  engineType: string;
  engineCapacity: string;
  color: string;
  location: string;
  description: string;
}

type AdUpdationFormProps = {
  bgColor: string;
  _id: string | undefined;
};

const AdUpdationForm: React.FC<AdUpdationFormProps> = ({ bgColor, _id }) => {
  const [formData, setFormData] = useState<AdUpdationProps>({
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
  const [showCustomPopup, setShowCustomPopup] = useState(false);
  const [customPopupMessage, setCustomPopupMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCarData = async () => {
      if (_id) {
        try {
          const data = await GetCarDetailById(_id);
          setFormData(data);
        } catch (error) {
          console.error("Error fetching car details:", error);
        }
      } else {
        console.error("No ID found");
      }
    };

    fetchCarData();
  }, [_id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
      setCustomPopupMessage("User not authenticated");
      return;
    }

    try {
      const response = await UpdateCarAd(_id as string, formData, token);
      setCustomPopupMessage(response.message);
      setIsSuccess(!response.error);
      setShowCustomPopup(true);

      if (!response.error) {
        setTimeout(() => {
          navigate("/myAds");
        }, 1500); 
      }
    } catch (error) {
      console.error("Error updating car ad:", error);
    }
  };

  return (
    <section className={`bg-slate-100 border-y md:p-8 p-1 hover:border-t-4 hover:border-t-regal-red hover:shadow-lg font-sans text-charcoal-gray my-4`}>
      <div className="max-w-6xl mx-auto p-4 my-2">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              options={["Used", "Bank"]}
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
            <CarInformationSubmitButton bgColor={bgColor} btnTitle="Update" />
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
    </section>
  );
};

export default AdUpdationForm;
