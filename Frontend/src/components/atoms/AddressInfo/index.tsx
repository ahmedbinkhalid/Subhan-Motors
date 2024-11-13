import React from "react";

export const AddressInfo: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 bg-slate-50 px-6 max-w-md rounded-md text-charcoal-gray font-sans h-auto md:py-16 py-8">
      <h1 className="md:text-2xl text-xl font-semibold">
        Feel free to Contact{" "}
      </h1>
      <div className="flex flex-col gap-[2px]">
        <h3 className="md:text-lg text-base font-semibold">Address</h3>
        <p className="md:text-base text-sm">
          {" "}
          Mandyala moor pindi bypass GT road0, Gujranwala, Punjab,52250
        </p>
      </div>
      <div className="flex flex-col gap-[2px]">
        <h3 className="md:text-lg text-base font-semibold">
          Contact Information
        </h3>
        <p className="md:text-base text-sm">Phone: +92-300-8749966 </p>
        <p className="md:text-base text-sm">
          Email: atifsubhanmotors@gmail.com{" "}
        </p>
      </div>
      <div className="flex flex-col gap-[2px]">
        <h3 className="md:text-lg text-base font-semibold">Office Timings</h3>
        <p className="md:text-base text-sm">Monday-Friday: 09:00am-07:00pm</p>
        <p className="md:text-base text-sm">Saturday-Sunday: 10:00am-06:00pm</p>
      </div>
    </section>
  );
};
