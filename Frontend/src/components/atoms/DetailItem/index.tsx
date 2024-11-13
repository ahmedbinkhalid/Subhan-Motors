import React from "react";
import { DetailItemProps } from "./types";

export const DetailItem: React.FC<DetailItemProps> = ({
  icon,
  label,
  value,
}) => (
  <div className="flex items-center space-x-4">
    <div className="text-blue-variant text-xl">{icon}</div>
    <div>
      <span className="block text-sm font-medium">{label}</span>
      <span className="text-lg font-semibold text-charcoal-gray">{value}</span>
    </div>
  </div>
);
