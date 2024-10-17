import React, { useState } from "react";
import { signup } from "../../../services/AuthService";
import { FullnameInput } from "../../../atoms/FullnameInput";
import { SignInEmailInput } from "../../../atoms/SignInEmailInput";
import { PasswordInput } from "../../../atoms/PasswordInput";
import { FormSubmissionButton } from "../../../atoms/FormSubmissionButton";
import { useModal } from "../../../organism/AllPagesLayout/ModalContext";
import { continueWithData } from "../../../atoms/ContinueWithButton/constants";
import { ContinueWithButton } from "../../../atoms/ContinueWithButton";

interface SignUpFormProps {
  onSignupSuccess?: (fullname: string) => void; // Optional prop to handle signup success
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { openModal, } = useModal();
  let passFullname = false;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { fullname, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await signup(fullname, email, password);
    if (!response.error) {
      alert("User registered successfully!");
      openModal("login");
      passFullname = true;

      // If passFullname is true, call the onSignupSuccess prop function with fullname
      if (onSignupSuccess && passFullname) {
        onSignupSuccess(fullname);
      }
    } else {
      alert(`Signup failed: ${response.error}`);
    }
  };

  return (
    <form onSubmit={handleSignupSubmit}>
      <div className="flex flex-col gap-4">
        <h1 className="self-center font-bold leading-none py-2 md:text-3xl text-2xl">Sign Up</h1>
        <p className="self-center text-lg font-semibold leading-none">
          Join Us and Explore New Services
        </p>
        <FullnameInput name="fullname" value={formData.fullname} onChange={handleInputChange} />
        <SignInEmailInput name="email" value={formData.email} onChange={handleInputChange} />
        <PasswordInput name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" />
        <PasswordInput
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm Password"
        />
        <FormSubmissionButton data="Sign Up" />

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
          Already have an Account ?
          <span className="text-md:lg text-base text-regal-red hover:text-blue-variant font-sans font-semibold cursor-pointer hover:underline mx-2" onClick={() => openModal("login")}>
            SignIn
          </span>
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
