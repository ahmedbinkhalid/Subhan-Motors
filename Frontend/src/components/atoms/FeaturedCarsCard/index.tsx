import { Link } from "react-router-dom";
import { FeaturedCarsCardProps } from "./types";

export const FeaturedCarsCard: React.FC<FeaturedCarsCardProps> = ({
  carImage,
  carMake,
  carModel,
  carPrice,
  carCity,
  _id,
}) => {
  return (
    <Link to={`/viewDetailedCar/${_id}`}>
      <div className="flex flex-col justify-between bg-white shadow-md italic w-64 mx-auto rounded-md my-3">
        <img
          src={carImage}
          alt="Featured Car"
          className="object-fill h-56 w-auto rounded-md"
        />
        <div className="mx-4 gap-6 py-4">
          <h1 className="md:text-xl text-lg text-charcoal-gray font-semibold truncate">
            {carMake}, {carModel}
          </h1>
          <p className="md:text-lg text-base text-blue-variant truncate font-medium">
            {" "}
            Rs. {carPrice}{" "}
          </p>
          <p className="md:text-base text-sm text-charcoal-gray font-normal">
            {" "}
            Location : {carCity}{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};
