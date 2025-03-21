import React, { useState, useEffect } from "react";
import CarInformationDropDown from "../../atoms/CarInformationDropDown";
import CarInformationSubmitButton from "../../atoms/CarInformationSubmitButton";
import { CarInformationInput } from "../../atoms/CarInformationInput";
import { CarInformationDescription } from "../../atoms/CarInformationDescription";
import { useImageContext } from "../ImageContext";
import { addNewCarFormData } from "./types";
import { DateCalender } from "../admin/DateCalender";
import { postAddNewCar } from "../../apis/PostAddNewCar";
import { CustomPopup } from "../../atoms/CustomPopup";

type AddNewCarInformationFormProps = {
  bgColor: string;
};

const AddNewCarInformationForm: React.FC<AddNewCarInformationFormProps> = ({
  bgColor,
}) => {
  const { images, setImages } = useImageContext(); // Ensure clearImages function is available in ImageContext

  const [formData, setFormData] = useState<addNewCarFormData>({
    images: [],
    make: "",
    model: "",
    releasedDate: "",
    transmission: "",
    engineType: "",
    engineCapacity: "",
    availableColor: "",
    location: "",
    description: "",
    startingPrice: "",
    maxPrice: "",
  });

  const [popupMessage, setPopupMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      images: images,
    }));
  }, [images]);

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

  const handleDateChange = (date: Date | null) => {
    setFormData({
      ...formData,
      releasedDate: date ? date.toISOString() : "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.images.length < 2) {
      setPopupMessage("Please upload at least 2 images.");
      setIsSuccess(false);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
      return;
    }

    try {
      const response = await postAddNewCar(formData);

      if (response.error) {
        setPopupMessage(`Submission failed: ${response.error}`);
        setIsSuccess(false);
      } else {
        setPopupMessage("Car information posted successfully!");
        setIsSuccess(true);

        // Clear form data after successful submission
        setFormData({
          images: [],
          make: "",
          model: "",
          releasedDate: "",
          transmission: "",
          engineType: "",
          engineCapacity: "",
          availableColor: "",
          location: "",
          description: "",
          startingPrice: "",
          maxPrice: "",
        });

        // Clear images by setting it to an empty array
        setImages([]); // This clears the images context
      }

      // Display success/failure popup
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000); // Hide popup after 4 seconds
    } catch (error) {
      console.error("Submission error:", error);
      setPopupMessage("An error occurred while posting car information.");
      setIsSuccess(false);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    }
  };

  return (
    <section className="bg-slate-100 border-y md:p-8 p-1 hover:border-t-4 hover:border-t-regal-red hover:shadow-lg font-sans text-charcoal-gray my-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="md:text-2xl text-xl font-semibold mt-4 mb-1">
          Car Information
        </h1>
        <h1 className="md:text-base text-sm font-normal">
          (All fields are mandatory, you need to provide each detail.)
        </h1>
      </div>
      <div className="max-w-6xl mx-auto p-4 my-2">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* CustomPopup for success/error messages */}
          {showPopup && (
            <CustomPopup
              message={popupMessage}
              isSuccess={isSuccess}
              onClose={() => setShowPopup(false)}
            />
          )}

          {/* Form fields */}
          <div className="space-y-4">
            <CarInformationInput
              label="Make"
              value={formData.make}
              onChange={handleChange}
              placeHolder="Enter car make"
              id_name="make"
            />
            <CarInformationInput
              label="Model"
              value={formData.model}
              onChange={handleChange}
              placeHolder="Enter car model"
              id_name="model"
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
              value={formData.availableColor}
              onChange={handleChange}
              placeHolder="Enter Car Color"
              id_name="availableColor"
            />
            <CarInformationDropDown
              label="Location"
              name="location"
              options={["Gujranwala", "Sialkot", "Lahore"]}
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-4">
            <CarInformationInput
              label="Starting Price"
              value={formData.startingPrice}
              onChange={handleChange}
              placeHolder="Enter Starting Price"
              id_name="startingPrice"
            />
            <CarInformationInput
              label="Maximum Price"
              value={formData.maxPrice}
              onChange={handleChange}
              placeHolder="Enter Maximum Price"
              id_name="maxPrice"
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
            <div>
              <p className="block text-sm font-medium text-charcoal-gray mb-3">
                Release Date
              </p>
              <DateCalender onDateChange={handleDateChange} />
            </div>
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
    </section>
  );
};

export default AddNewCarInformationForm;
