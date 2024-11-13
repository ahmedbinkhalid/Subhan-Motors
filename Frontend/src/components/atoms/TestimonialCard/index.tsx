import { TestimonialCardProps } from "./types";
import { IoStarSharp } from "react-icons/io5";

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  rating,
  testimonial,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col bg-slate-50 rounded-md shadow-md p-4 md:p-6 lg:p-8 mt-8 gap-4 w-full mx-auto h-[320px] my-10">
      {" "}
      {/* Set min-h to enforce uniformity */}
      <p className="mt-4 text-charcoal-gray text-justify break-words flex-grow overflow-hidden">
        {testimonial}
      </p>
      <div className="flex items-center mt-4 justify-between border-t border-charcoal-gray pt-4">
        <div className="flex items-center gap-3">
          <img
            src={imageUrl}
            alt={name}
            className="w-12 h-12 sm:w-10 sm:h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg leading-6 font-semibold sm:text-base text-charcoal-gray">
              {name}
            </h3>
            <p className="text-charcoal-gray sm:text-sm">{title}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IoStarSharp className="text-yellow-600" size={24} />
          <span className="text-yellow-600 text-xl mt-[2px] sm:text-lg">
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
};
