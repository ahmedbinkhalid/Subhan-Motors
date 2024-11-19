
import { TestimonialCardProps } from "../../atoms/TestimonialCard/types";
import {test1, test2, test3, test4 } from "../../../assets/images";
import { } from "../../../assets/images";

export const testimonials: TestimonialCardProps[] = [
  {
    name: "Arfan Baig",
    title: "CEO, Tech Company",
    rating: 5,
    testimonial: "I’ve been working with this team for over a year, and I couldn’t be more pleased with the results. Their attention to detail, excellent communication.",
    imageUrl: test1,
  },
  {
    name: "M. Jameel",
    title: "Marketing Manager",
    rating: 4.5,
    testimonial: "The service provided exceeded all my expectations! Not only did they deliver on time, but they also went the extra mile to ensure everything was perfect. The team is always professional, reliable, and incredibly efficient.",
    imageUrl: test2,
  },
  {
    name: "Atif Ch",
    title: "Freelancer",
    rating: 4,
    testimonial: "Working with this company has been a fantastic experience. They really took the time to understand my needs and delivered personalized solutions that helped me grow my business.",
    imageUrl: test3,
  },
  {
    name: "Saleem Amjad",
    title: "Product Manager",
    rating: 5,
    testimonial: "I've worked with many agencies in the past, but this team truly stands out. Their innovative approach to problem-solving transformed our project and led to results we never thought possible. I’m looking forward to continuing our partnership.",
    imageUrl: test4,
  },
];
