import React, { useState } from "react";
import { login } from "../../../apis/AuthServices/Login";
import { SignInEmailInput } from "../../../atoms/SignInEmailInput";
import { PasswordInput } from "../../../atoms/PasswordInput";
import { FormSubmissionButton } from "../../../atoms/FormSubmissionButton";
import { useModal } from "../../../organism/AllPagesLayout/ModalContext";
import { CustomPopup } from "../../../atoms/CustomPopup"; // Ensure CustomPopup is imported

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [CustomPopupMessage, setCustomPopupMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [showCustomPopup, setShowCustomPopup] = useState<boolean>(false);
  const { openModal, closeModal } = useModal();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await login(email, password);

      if (response.token) {
        localStorage.setItem("token", response.token);
        setCustomPopupMessage("Login successful!");
        setIsSuccess(true);

        setShowCustomPopup(true);
        setTimeout(() => {
          setShowCustomPopup(false); 
          closeModal();
          window.location.reload(); 
        }, 1000);
      } else {
        setCustomPopupMessage(`Login failed: ${response.error}`);
        setIsSuccess(false);
        setShowCustomPopup(true);
        setTimeout(() => {
          setShowCustomPopup(false); // Hide the popup after 4 seconds
        }, 4000);
      }
    } catch (error) {
      console.error("Login error:", error);
      setCustomPopupMessage("Error during login. Please try again.");
      setIsSuccess(false);
      setShowCustomPopup(true);
      setTimeout(() => {
        setShowCustomPopup(false); 
      }, 4000);
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <div className="flex flex-col gap-4">
        <h1 className="md:text-3xl text-2xl self-center font-bold leading-none">
          Login
        </h1>
        <p className="self-center text-lg font-medium leading-none text-center">
          {" "}
          Welcome Back
        </p>

        <SignInEmailInput
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <PasswordInput
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <FormSubmissionButton data="Login" />

        <button
          className="text-md:lg text-base text-regal-red hover:text-blue-variant font-sans font-semibold cursor-pointer hover:underline"
          onClick={() => openModal("forgotPassword")}
        >
          Forgot Password?
        </button>

        <legend className="text-center"> OR </legend>

        <button className="py-1 font-bold">
          Don't have an Account ?
          <span
            className="text-md:lg text-base text-regal-red hover:text-blue-variant font-sans font-semibold cursor-pointer hover:underline mx-2"
            onClick={() => openModal("signup")}
          >
            Sign Up
          </span>
        </button>
      </div>

      {/* CustomPopup */}
      {showCustomPopup && (
        <CustomPopup
          message={CustomPopupMessage}
          isSuccess={isSuccess}
          onClose={() => setShowCustomPopup(false)}
        />
      )}
    </form>
  );
};

export default LoginForm;
