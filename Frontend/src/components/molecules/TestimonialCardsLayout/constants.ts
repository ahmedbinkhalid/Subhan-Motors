
import { TestimonialCardProps } from "../../atoms/TestimonialCard/types";
import { team1, team2, team3, team4 } from "../../../assets/images";
import { } from "../../../assets/images";

export const testimonials: TestimonialCardProps[] = [
  {
    name: "John Doe",
    title: "CEO, Tech Company",
    rating: 5,
    testimonial: "I’ve been working with this team for over a year, and I couldn’t be more pleased with the results. Their attention to detail, excellent communication.",
    imageUrl: team1,
  },
  {
    name: "Jane Smith",
    title: "Marketing Manager",
    rating: 4.5,
    testimonial: "The service provided exceeded all my expectations! Not only did they deliver on time, but they also went the extra mile to ensure everything was perfect. The team is always professional, reliable, and incredibly efficient.",
    imageUrl: team2,
  },
  {
    name: "David Wilson",
    title: "Freelancer",
    rating: 4,
    testimonial: "Working with this company has been a fantastic experience. They really took the time to understand my needs and delivered personalized solutions that helped me grow my business.",
    imageUrl: team3,
  },
  {
    name: "Jack Holland",
    title: "Product Manager",
    rating: 5,
    testimonial: "I've worked with many agencies in the past, but this team truly stands out. Their innovative approach to problem-solving transformed our project and led to results we never thought possible. I’m looking forward to continuing our partnership.",
    imageUrl: team4,
  },
];
