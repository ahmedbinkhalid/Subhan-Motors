import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import { testimonials } from "./constants";
import { TestimonialCard } from "../../atoms/TestimonialCard";

export const TestimonialCardsLayout: React.FC = () => {
  return (
    <section className="w-full px-4 rounded-lg py-6 my-4">
      <Swiper
        spaceBetween={20} // Space between slides can be adjusted
        slidesPerView={1}
        navigation={false} // Disable navigation buttons
        pagination={{ clickable: true }} // Enable pagination
        autoplay={{
          delay: 2000, // Slide interval of 2 seconds
          disableOnInteraction: false, // Keep autoplay after user interaction
        }}
        loop={true} // Enable loop to cycle through slides continuously
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 card on mobile
          },
          768: {
            slidesPerView: 2, // 2 cards on tablet
          },
          1024: {
            slidesPerView: 3, // 3 cards on desktop
          },
        }}
        modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard
              name={testimonial.name}
              title={testimonial.title}
              rating={testimonial.rating}
              testimonial={testimonial.testimonial}
              imageUrl={testimonial.imageUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};