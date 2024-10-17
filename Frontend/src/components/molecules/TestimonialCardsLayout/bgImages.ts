
import { carouselBg1, carouselBg2, headerBg1, service1} from "../../../assets/images"; 

export const backgroundImages = [
  `url(${carouselBg1})`, // Correctly use backticks for template literals
  `url(${carouselBg2})`, // Added the second image as well
  `url(${headerBg1})`,   // Added a third image for demonstration
  `url(${service1})`,   // Added a third image for demonstration
  // Add more images as necessary
];