
import { FaCar, FaTachometerAlt, FaCogs, FaPaintBrush, FaDollarSign, FaLocationArrow } from "react-icons/fa";
import { CarDetailProps } from "./types";

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};


export const getCarDetails = (carData: CarDetailProps) => [
  carData.startingPrice && carData.maxPrice
    ? {
        Icon: FaDollarSign,
        label: "Price Range",
        value: `Rs. ${carData.startingPrice} - ${carData.maxPrice}`,
        iconClass: "text-regal-red",
      }
    : {
        Icon: FaDollarSign,
        label: "Price",
        value: carData.price ? ` Rs. ${carData.price}` : "N/A",
        iconClass: "text-regal-red",
      },

  carData.releasedDate
    ? {
        Icon: FaCar,
        label: "Release Date",
        value: formatDate(carData.releasedDate),
        iconClass: "text-regal-red",
      }
    : {
        Icon: FaCar,
        label: "Year",
        value: carData.year || "N/A",
        iconClass: "text-regal-red",
      },

  carData.color
    ? {
        Icon: FaPaintBrush,
        label: "Color",
        value: carData.color,
        iconClass: "text-regal-red",
      }
    : carData.availableColors
    ? {
        Icon: FaPaintBrush,
        label: "Available Colors",
        value:
          typeof carData.availableColors === "string"
            ? carData.availableColors
            : carData.availableColors.join(", "),
        iconClass: "text-regal-red",
      }
    : {
        Icon: FaPaintBrush,
        label: "Available Colors",
        value: "N/A",
        iconClass: "text-regal-red",
      },

  {
    Icon: FaTachometerAlt,
    label: "Driven",
    value: carData.mileage ? `${carData.mileage} L` : "N/A",
    iconClass: "text-regal-red",
  },
  {
    Icon: FaCogs,
    label: "Transmission",
    value: carData.transmission || "N/A",
    iconClass: "text-regal-red",
  },
  {
    Icon: FaTachometerAlt,
    label: "Engine Capacity",
    value:  carData.engineCapacity  ? `${carData.engineCapacity} cc` : "N/A",
    iconClass: "text-regal-red",
  },
  {
    Icon: FaLocationArrow,
    label: "Location",
    value: carData.location || "N/A",
    iconClass: "text-regal-red",
  },
];
