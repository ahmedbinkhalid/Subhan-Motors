import React from "react";

export const NotOnlyCompany: React.FC = () => {
  return (
    <section
      className="relative w-full bg-right bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("https://www.anaconda.com/wp-content/uploads/2024/05/Anaconda-10yr-white.webp")`,
      }}
    >
      <div className="w-full bg-white bg-opacity-20 p-8 rounded-md shadow-lg">
        <div className="md:p-12 max-w-2xl">
          <h1 className="lg:text-6xl text-3xl font-bold mb-4 text-charcoal-gray">
            We’re not just a company; we’re a movement.
          </h1>
          <p className="text-xl text-blue-variant font-sans font-semibold">
            Subhan Motors stands at the forefront of the automotive revolution.
            We offer a diverse range of high-quality vehicles and unparalleled
            customer service, empowering our customers and community with the
            freedom to explore their journeys. Our commitment to innovation and
            excellence ensures that every vehicle meets the highest standards of
            performance and safety, helping our customers drive forward with
            confidence.
          </p>
        </div>
      </div>
    </section>
  );
};
