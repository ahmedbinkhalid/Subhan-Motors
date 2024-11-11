// RouteProtectionValidator.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { RouteProtectionValidatorProps } from "./types";

// Check if user has an "Admin" role
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      return decodedToken.role === "Admin"; // Ensure the user has the "Admin" role
    } catch (error) {
      console.error("Error decoding the token:", error);
    }
  }
  return false; // If no token or not Admin, return false
};

const RouteProtectionValidator: React.FC<RouteProtectionValidatorProps> = ({ element }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />; // Redirect to login page if not authenticated
  }

  return element; // Render the element if authenticated
};

export default RouteProtectionValidator;
