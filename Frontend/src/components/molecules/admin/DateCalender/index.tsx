import React, { useState } from "react";
import DatePicker, { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateCalenderProps {
  onDateChange: (date: Date | null) => void; // Callback function to update the parent's state
}

export const DateCalender: React.FC<DateCalenderProps> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  
  const toggleDatePickerVisibility = () => {
    setShowDatePicker((prev) => !prev);
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
      onDateChange(date); // Notify parent component
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
      : "bg-white text-gray-700 hover:bg-gray-200";
  };

  return (
    <div className="relative ">
      <div
        onClick={toggleDatePickerVisibility}
        className="flex justify-between items-center cursor-pointer bg-white px-3 py-2 text-charcoal-gray font-sans border rounded-md shadow-sm"
      >
        <span>{selectedDate ? selectedDate.toDateString() : "Select Date"}</span>
        <button className="ml-2 text-xl">📅</button>
      </div>
      {showDatePicker && (
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          renderCustomHeader={renderCustomHeader} // Fix here: renderCustomHeader should be passed directly
          dayClassName={(date) => customDayStyles(date)}
        />
      )}
    </div>
  );
};

export default DateCalender;
