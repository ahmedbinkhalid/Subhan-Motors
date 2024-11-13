
import React from "react";
import { Navigate } from "react-router-dom";
import { RouteProtectionValidatorProps } from "./types";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      return decodedToken.role === "Admin"; 
    } catch (error) {
      console.error("Error decoding the token:", error);
    }
  }
  return false; 
};

const RouteProtectionValidator: React.FC<RouteProtectionValidatorProps> = ({ element }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />; 
  }

  return element; 
};

export default RouteProtectionValidator;
