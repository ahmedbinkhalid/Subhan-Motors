import React from 'react';

export const AboutCompany : React.FC = () => {
  return (
    <div className="bg-gray-50 md:px-12 md:py-16 p-4 rounded-lg">
      <div className="container mx-auto">
        <h1 className="md:text-3xl text-2xl font-bold text-center text-charcoal-gray md:mb-10 mb-6">
          About Subhan Motors
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex">
            <img
              src='https://lh3.googleusercontent.com/p/AF1QipM1jMCGXPlKY4qpSfzy48n4QYPX7c1cZ0lL0uAv=s680-w680-h510'
              alt="Subhan Motors"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center md:col-span-2">
            <p className="text-charcoal-gray text-lg mb-3">
              Subhan Motors is a trusted name in the automotive industry, providing
              high-quality vehicles and exceptional customer service for over 20 years.
              We are passionate about cars and believe in delivering the best value to our customers.
            </p>
            <p className="text-charcoal-gray text-lg mb-3">
              Our team of dedicated professionals ensures that each car we offer meets the
              highest standards of performance, safety, and reliability. Whether you're looking
              for a family car, a luxury vehicle, or a reliable truck, Subhan Motors has the
              perfect vehicle for you.
            </p>
            <p className="text-charcoal-gray text-lg mb-3">
              At Subhan Motors, customer satisfaction is our top priority. We pride ourselves
              on providing a seamless buying experience, from the moment you walk into our showroom
              to the moment you drive away in your new car.
            </p>
          </div>
        </div>       
      </div>
    </div>
  )
}