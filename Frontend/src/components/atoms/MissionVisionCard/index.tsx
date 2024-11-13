import React from "react";
import { MissionVisionCardProps } from "./types";

export const MissionVisionCard: React.FC<MissionVisionCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-3 text-charcoal-gray"> {title}</h3>
      <p className="text-lg text-charcoal-gray">{description}</p>
    </div>
  );
};
