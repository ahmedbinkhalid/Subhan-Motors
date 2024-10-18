// src/components/forms/LoginForm.tsx

import React, { useState } from "react";
import { login } from "../../../services/AuthService";
import { SignInEmailInput } from "../../../atoms/SignInEmailInput";  
import { PasswordInput } from "../../../atoms/PasswordInput";
import { FormSubmissionButton } from "../../../atoms/FormSubmissionButton";
import { useModal } from "../../../organism/AllPagesLayout/ModalContext";
import { continueWithData } from "../../../atoms/ContinueWithButton/constants";
import { ContinueWithButton } from "../../../atoms/ContinueWithButton";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { openModal, closeModal } = useModal();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;

    const response = await login(email, password);
    if (response.token) {
      localStorage.setItem("token", response.token);
      window.location.reload();
      alert("Login successful!");
      closeModal();
    } else {
      alert(`Login failed: ${response.error}`);
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
       <div className="flex flex-col gap-4">
       <h1 className="md:text-3xl text-2xl self-center font-bold leading-none">Login</h1>
       <p className="self-center text-lg font-medium leading-none text-center"> Welcome Back</p>
      <SignInEmailInput name="email" value={formData.email} onChange={handleInputChange} />
      <PasswordInput name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" />
      <FormSubmissionButton data="Login" />

      <button className="text-md:lg text-base text-regal-red hover:text-blue-variant font-sans font-semibold cursor-pointer hover:underline" onClick={() => openModal("forgotPassword")}>Forgot Password?</button>

      <legend className="text-center"> OR </legend>
      {
        continueWithData.map((objData, index) => (
          <ContinueWithButton
                      icon={objData.icon}
                      btnLabel={objData.btnLabel}
                      key={index}
                    />
        ))
      }

      <button className="py-1 font-bold">
          Don't have an Account ? 
          <span className="text-md:lg text-base text-regal-red hover:text-blue-variant font-sans font-semibold cursor-pointer hover:underline mx-2" onClick={() => openModal("signup")}>
            Sign Up
          </span>
        </button>
      
      </div>
    </form>
  );
};

export default LoginForm;
