import React from "react";
import { BookingForm } from "../../components/organism/BookingForm";

export const OnlineBooking: React.FC = () => {
  return (
    <section className="bg-slate-50 border-y md:p-8 p-1 hover:border-t-4 hover:border-t-regal-red hover:shadow-lg font-sans text-charcoal-gray my-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="md:text-2xl text-xl font-semibold mt-4 mb-1">
          {" "}
          What you want ?{" "}
        </h1>
        <h1 className="md:text-base text-sm font-normal">
          {" "}
          (All fields are mandatory, you need to provide each detail.){" "}
        </h1>
      </div>
      <BookingForm />
    </section>
  );
};
