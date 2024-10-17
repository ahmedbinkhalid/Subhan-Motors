import { SellCarEasyStepsCardProps } from "../../atoms/SellCarEasyStepsCard/types";
import { IoCarSportOutline } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { MdOutlineSell } from "react-icons/md";

export const SellEasyStepsCardsData: SellCarEasyStepsCardProps[] = [
  {
    cardIcon: <IoCarSportOutline size={24} className="object-cover text-blue-variant" />,
    cardTitle: "Enter Your Car Information ", 
  },

  {
    cardIcon: <IoMdPhotos size={24} className="object-cover text-blue-variant" />,
    cardTitle: " Upload Photos", 
  },

  {
    cardIcon: <MdOutlineSell size={24} className="object-cover text-blue-variant" />,
    cardTitle: " Enter Your Selling Price", 
  },
];
