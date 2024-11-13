import React from "react";
import { GetCarsLayout } from "../../components/organism/admin/GetCarsLayout";

type GetUsedCars = {
  role: string;
};

export const GetUsedCars: React.FC<GetUsedCars> = ({ role }) => {
  return (
    <GetCarsLayout title="All Listed Used Cars" managedBy="Used" role={role} />
  );
};
