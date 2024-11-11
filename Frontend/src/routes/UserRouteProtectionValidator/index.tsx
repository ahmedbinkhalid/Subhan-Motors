
import React from "react";
import { Navigate } from "react-router-dom";
import { RouteProtectionValidatorProps } from "../RouteProtectionValidator/types";

const isUserAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      return decodedToken.role === "User";
    } catch (error) {
      console.error("Error decoding the token:", error);
    }
  }
  return false; 
};

const UserRouteProtectionValidator: React.FC<RouteProtectionValidatorProps> = ({ element }) => {
  if (!isUserAuthenticated()) {
    return <Navigate to="/" replace />; 
  }

  return element; 
};

export default UserRouteProtectionValidator;
