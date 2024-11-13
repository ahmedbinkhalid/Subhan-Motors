import React from "react";
import { FaCalendarDays } from "react-icons/fa6";

interface DateDisplayProps {
  date: Date | null; // Allow date to be null for placeholder support
  toggleDatePicker: () => void;
}

export const DateDisplay: React.FC<DateDisplayProps> = ({
  date,
  toggleDatePicker,
}) => {
  // Format the date only if it's defined; otherwise, show placeholder
  const formattedDate = date
    ? `${new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
        date
      )} | ${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    : "Select Release Date"; // Placeholder text

  return (
    <div>
      {/* Label for date display */}
      <label className="block text-sm font-medium text-charcoal-gray">
        Release Date
      </label>

      <div className="relative mt-3">
        {/* Displayed date text or placeholder */}
        <div className="block w-full p-2 pr-10 border border-gray-300 rounded-md outline-none bg-white">
          <p
            className={`text-base ${
              date ? "text-charcoal-gray" : "text-gray-400"
            }`}
          >
            {formattedDate}
          </p>
        </div>

        {/* Calendar icon button */}
        <button
          onClick={toggleDatePicker}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-charcoal-gray"
        >
          <FaCalendarDays size={20} />
        </button>
      </div>
    </div>
  );
};
