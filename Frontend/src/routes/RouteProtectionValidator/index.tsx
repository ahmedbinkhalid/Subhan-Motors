import React from "react";
import { RouteProtectionValidatorProps } from "./types";
import { UserToken } from "../../components/atoms/PageLinks/types";
import { jwtDecode } from "jwt-decode";
import { useModal } from "../../components/organism/AllPagesLayout/ModalContext";
import { useNavigate } from "react-router-dom";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decodedToken = jwtDecode<UserToken>(token);
      return decodedToken.role == "Admin";
    } catch (error) {
      console.error("Error decoding the token:", error);
    }
  }
  return false;
};

const RouteProtectionValidator: React.FC<RouteProtectionValidatorProps> = ({
  element,
}) => {
  const {openModal} = useModal();
  const navigate = useNavigate();
  if (!isAuthenticated()) {
    navigate("/");
    openModal("login");
  }

  return element;
};

export default RouteProtectionValidator;
