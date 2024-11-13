import React from "react";
import { FeaturedCarsCardLayout } from "../../components/molecules/FeaturedCardsLayout";
import { OfferingCardsLayout } from "../../components/molecules/OfferingCardsLayout";
import { SellYourCar } from "../../components/atoms/SellYourCar";
import { BlogCardLayout } from "../../components/molecules/BlogCardLayout";

import { TestimonialCardsLayout } from "../../components/molecules/TestimonialCardsLayout";
import { CompaniesCardsLayout } from "../../components/molecules/CompaniesCardsLayout";


export const Home: React.FC = () => {
  return (
    <React.Fragment>
        <SellYourCar />
        <OfferingCardsLayout />
        <FeaturedCarsCardLayout
          managedBy="Used Cars for Sale"
          viewAll="Used Cars for Sale"
          viewAllPath="/allUsedCars"
        />
        <FeaturedCarsCardLayout
          managedBy="Brand New Cars for Sale"
          viewAll="Brand New Cars for Sale"
          viewAllPath="/allNewCars"
        />
        <FeaturedCarsCardLayout
          managedBy="Bank Released Cars for Sale"
          viewAll="Bank Released Cars for Sale"
          viewAllPath="/allBankCars"
        />
        <BlogCardLayout />
        <CompaniesCardsLayout />
        <TestimonialCardsLayout />
        </React.Fragment>
  );
};
