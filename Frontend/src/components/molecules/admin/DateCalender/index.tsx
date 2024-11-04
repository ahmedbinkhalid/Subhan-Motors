import React, { useState } from "react";
import DateDisplay from "../../../atoms/admin/DateDisplay";
import DatePicker, { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DateCalender : React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const toggleDatePickerVisibility = () => {
    setShowDatePicker((prev) => !prev);
  };
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
      setShowDatePicker(false);
    }
  };
  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }: ReactDatePickerCustomHeaderProps) => (
    <div className="flex justify-between items-center px-2 py-1 bg-regal-red text-[#FFFFFF]">
      <button
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        className="text-[#FFFFFF] text-xl p-2"
      >
        {"<"}
      </button>
      <span className="text-lg font-medium">
        {new Intl.DateTimeFormat("en-US", {
          month: "long",
          year: "numeric",
        }).format(date)}
      </span>
      <button
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        className="text-xl text-[#FFFFFF] p-2"
      >
        {">"}
      </button>
    </div>
  );
  const customDayStyles = (date: Date) => {
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
    return isToday
      ? "bg-blue-500 text-white"
      : "bg-white text-gray-800 hover:bg-blue-100";
  };

  return (
    <div className="relative">
      <DateDisplay
        date={selectedDate ?? new Date()}
        toggleDatePicker={toggleDatePickerVisibility}
      />

      {showDatePicker && (
        <div className="absolute top-full z-50 right-0 w-full md:w-auto">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            monthsShown={1}
            renderCustomHeader={renderCustomHeader}
            dayClassName={(date) => customDayStyles(date)}
            calendarClassName="bg-blue p-2 rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

