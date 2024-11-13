import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { CarDetailProps } from "./types";
import { GetCarDetailById } from "../../components/apis/GetUsedOrBankCarById";
import { getCarDetails } from "./constants";

const CarDetail: React.FC<{
  Icon: React.ElementType;
  label: string;
  value: string;
  iconClass: string;
}> = ({ Icon, label, value, iconClass }) => (
  <div className="flex items-center space-x-4 hover:text-regal-red transition duration-300 ease-in-out transform hover:scale-105">
    <Icon className={`text-3xl ${iconClass}`} />
    <div className="text-lg text-charcoal-grey">
      <span className="block text-sm font-medium">{label}</span>
      <span className="font-semibold">{value || `N/A`}</span>
    </div>
  </div>
);

const ImageSlider: React.FC<{
  images: string[];
  selectedImageIndex: number;
  onImageChange: (index: number) => void;
}> = ({ images, selectedImageIndex, onImageChange }) => (
  <div className="flex flex-col items-center lg:w-1/2 space-y-4">
    <div className="relative w-full h-96 bg-gray-200 rounded-lg shadow-xl overflow-hidden transform transition duration-500 ease-in-out hover:scale-105">
      <img
        src={images[selectedImageIndex]}
        alt="Car Image"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>

    <div className="flex space-x-4 overflow-x-auto py-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="cursor-pointer transform transition duration-300 ease-in-out hover:scale-105"
          onClick={() => onImageChange(index)}
        >
          <img
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-24 h-16 object-cover rounded-md shadow-md transition-all duration-200 ${
              selectedImageIndex === index ? "border-2 border-regal-red" : ""
            }`}
          />
        </div>
      ))}
    </div>
  </div>
);

const ViewDetailedCar: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [carData, setCarData] = useState<CarDetailProps | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageChange = (index: number) => {
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    const fetchCarData = async () => {
      if (id) {
        try {
          const data = await GetCarDetailById(id);
          setCarData(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching car details:", error);
        }
      } else {
        console.error("No ID found in the URL");
      }
    };

    fetchCarData();
  }, [id]);

  if (!carData) {
    return <div>Loading...</div>;
  }

  const carDetails = getCarDetails(carData); // Use the imported function to generate carDetails

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-10">
        <ImageSlider
          images={carData.images}
          selectedImageIndex={selectedImageIndex}
          onImageChange={handleImageChange}
        />

        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-4xl font-extrabold text-center text-regal-red hover:text-green-600 transition duration-300 transform hover:scale-105 mb-6">
            {`${carData.make} ${carData.model}`}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
            {carDetails.map((detail, index) => (
              <CarDetail
                key={index}
                Icon={detail.Icon}
                label={detail.label}
                value={detail.value}
                iconClass={detail.iconClass}
              />
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-regal-red mb-2">
              Description
            </h3>
            <p className="text-base text-charcoal-gray bg-blue-50 p-4 rounded-md shadow-inner whitespace-pre-line">
              {carData.description || "No description available"}
            </p>
          </div>

          <div className="my-8 flex flex-col gap-6">
            <div className="text-lg text-blue-variant font-semibold text-center">
              Contact @SubhanMotors for more Details.
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => alert(`Dialing ${carData.PhoneNumber}`)}
                className="flex items-center space-x-2 px-6 py-2 bg-regal-red hover:bg-green-600 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <FiPhoneCall className="text-2xl" />
                <div className="text-lg">
                  <span className="block text-sm font-medium">Owner Phone</span>
                  <span className="font-semibold">
                    {carData.PhoneNumber || "N/A"}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailedCar;
