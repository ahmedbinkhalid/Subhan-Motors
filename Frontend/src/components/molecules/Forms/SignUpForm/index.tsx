import React, { useState } from "react";
import { signup } from "../../../apis/AuthServices/SignUp";
import { FullnameInput } from "../../../atoms/FullnameInput";
import { SignInEmailInput } from "../../../atoms/SignInEmailInput";
import { PasswordInput } from "../../../atoms/PasswordInput";
import { FormSubmissionButton } from "../../../atoms/FormSubmissionButton";
import { useModal } from "../../../organism/AllPagesLayout/ModalContext";
import { CustomPopup } from "../../../atoms/CustomPopup"; // Ensure it's imported correctly

interface SignUpFormProps {
  onSignupSuccess?: (fullname: string) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [CustomPopupMessage, setCustomPopupMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [showCustomPopup, setShowCustomPopup] = useState<boolean>(false);
  const { openModal } = useModal();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { fullname, email, password, confirmPassword } = formData;

    // Check for password match
    if (password !== confirmPassword) {
      setCustomPopupMessage("Passwords do not match");
      setIsSuccess(false);
      setShowCustomPopup(true);
      return;
    }

    try {
      const response = await signup(fullname, email, password);
      console.log("Signup response:", response); // Debugging: Log API response

      if (!response.error) {
        setCustomPopupMessage("User registered successfully!");
        setIsSuccess(true);

        // If a success callback is passed, execute it
        if (onSignupSuccess) {
          onSignupSuccess(fullname);
        }

        // Show popup for 4 seconds, then open login modal
        setShowCustomPopup(true);
        setTimeout(() => {
          setShowCustomPopup(false); // Hide the popup after 4 seconds
          openModal("login"); // Open the login modal
        }, 1000);
      } else {
        setCustomPopupMessage(`Signup failed: ${response.error}`);
        setIsSuccess(false);
        setShowCustomPopup(true);
      }
    } catch (error) {
      console.error("Signup error:", error); // Debugging: Log error in catch
      setCustomPopupMessage("Error during signup. Please try again.");
      setIsSuccess(false);
      setShowCustomPopup(true);
    }
  };

  return (
    <div className="flex flex-col md:gap-2 gap-2 py-1">
      <h1 className="self-center font-bold leading-none md:text-3xl text-2xl">
        Sign Up
      </h1>
      <p className="self-center text-lg font-semibold leading-none py-2">
        Join Us and Explore New Services
      </p>
      <form
        onSubmit={handleSignupSubmit}
        className="flex flex-col md:gap-3 gap-2"
      >
        <FullnameInput
          name="fullname"
          value={formData.fullname}
          onChange={handleInputChange}
        />
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
        <PasswordInput
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm Password"
        />
        <FormSubmissionButton data="Sign Up" />
      </form>

      <legend className="text-center"> OR </legend>
      <button className="py-1 font-bold">
        Already have an Account ?
        <span
          className="text-md:lg text-base text-regal-red hover:text-blue-variant font-sans font-semibold cursor-pointer hover:underline mx-2"
          onClick={() => openModal("login")}
        >
          SignIn
        </span>
      </button>

      {showCustomPopup && (
        <CustomPopup
          message={CustomPopupMessage}
          isSuccess={isSuccess}
          onClose={() => setShowCustomPopup(false)}
        />
      )}
    </div>
  );
};

export default SignUpForm;
