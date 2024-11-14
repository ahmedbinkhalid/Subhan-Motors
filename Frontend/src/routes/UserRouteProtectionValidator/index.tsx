import React from "react";
import { useNavigate } from "react-router-dom";
import { RouteProtectionValidatorProps } from "../RouteProtectionValidator/types";
import { UserToken } from "../../components/atoms/PageLinks/types";
import { jwtDecode } from "jwt-decode";
import { useModal } from "../../components/organism/AllPagesLayout/ModalContext";


const isUserAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decodedToken = jwtDecode<UserToken>(token);
      return decodedToken.role === "User";
    } catch (error) {
      console.error("Error decoding the token:", error);
    }
  }
  return false;
};

const UserRouteProtectionValidator: React.FC<RouteProtectionValidatorProps> = ({
  element,
}) => {
  const {openModal} = useModal();
const navigate = useNavigate();
  if (!isUserAuthenticated()) {
   openModal("login");
   navigate("/");
   
  }

  return element;
};

export default UserRouteProtectionValidator;
