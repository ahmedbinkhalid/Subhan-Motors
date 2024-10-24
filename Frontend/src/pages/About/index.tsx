import React from 'react';
import { about, headerBg1, team1, team2, team3, team4 } from '../../assets/images';
import CarInformationSubmitButton from '../../components/atoms/CarInformationSubmitButton';
import { FaRegCheckCircle, FaUserShield, FaLightbulb } from 'react-icons/fa';
import { LeaderShip } from '../../components/molecules/LeaderShip';

export const About : React.FC = () => {
  return (
    <section className='flex flex-col md:gap-12 gap-8'>

<div className="bg-gray-50 py-12 rounded-lg">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          About Subhan Motors
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-12 md:py-6">
          {/* Left Column: Image */}
          <div className="flex">
            <img
              src={about}
              alt="Subhan Motors"
              className="rounded-lg"
            />
          </div>

          {/* Right Column: Text */}
          <div className="flex flex-col justify-center md:col-span-2">
            <p className="text-lg text-gray-600 mb-3">
              Subhan Motors is a trusted name in the automotive industry, providing
              high-quality vehicles and exceptional customer service for over 20 years.
              We are passionate about cars and believe in delivering the best value to our customers.
            </p>
            <p className="text-lg text-gray-600 mb-3">
              Our team of dedicated professionals ensures that each car we offer meets the
              highest standards of performance, safety, and reliability. Whether you're looking
              for a family car, a luxury vehicle, or a reliable truck, Subhan Motors has the
              perfect vehicle for you.
            </p>
            <p className="text-lg text-gray-600 mb-3">
              At Subhan Motors, customer satisfaction is our top priority. We pride ourselves
              on providing a seamless buying experience, from the moment you walk into our showroom
              to the moment you drive away in your new car.
            </p>
          </div>
        </div>

        {/* Section: Mission and Vision */}
       
      </div>


    </div>

    <LeaderShip />

        <section
  className="relative w-full bg-right bg-no-repeat bg-cover"
  style={{
    backgroundImage: `url("https://www.anaconda.com/wp-content/uploads/2024/05/Anaconda-10yr-white.webp")`,
  }}
>
  {/* Outer div with full width and no visual separation on the right */}
  <div className="w-full bg-white bg-opacity-20 p-8 rounded-md shadow-lg">
    {/* Inner content remains unaffected */}
    <div className="md:p-12 max-w-2xl">
      <h1 className="text-6xl font-bold mb-4 text-charcoal-gray">
        We’re not just a company; we’re a movement.
      </h1>
      <p className="text-xl text-blue-variant font-sans font-semibold">
      Subhan Motors stands at the forefront of the automotive revolution. We offer a diverse range of high-quality vehicles and unparalleled customer service, empowering our customers and community with the freedom to explore their journeys. Our commitment to innovation and excellence ensures that every vehicle meets the highest standards of performance and safety, helping our customers drive forward with confidence.
      </p>
      {/* <CarInformationSubmitButton /> */}
    </div>
  </div>
</section>

        <div className="bg-gray-50 py-12 rounded-lg">
      <div className="container mx-auto px-4 rounded-lg">
        {/* New Section: Our Values */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
              <FaRegCheckCircle className="mx-auto mb-4 w-16 h-16 text-blue-variant" />
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We believe in honesty and transparency in all our interactions with customers and partners.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <FaUserShield className="mx-auto mb-4 w-16 h-16 text-blue-variant" />
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We strive to exceed their expectations.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <FaLightbulb className="mx-auto mb-4 w-16 h-16 text-blue-variant" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly seek out new ways to improve our services and products to better serve our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </section>




  )
}

