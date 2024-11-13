import React, { useState } from "react";
import { forgotPassword as forgotPasswordIcon } from "../../../../assets/icons";
import { SignInEmailInput } from "../../../atoms/SignInEmailInput";
import { FormSubmissionButton } from "../../../atoms/FormSubmissionButton";
import { forgotPassword } from "../../../apis/AuthServices/ForgotPassword";
import { useModal } from "../../../organism/AllPagesLayout/ModalContext";

interface ForgotPasswordResponse {
  message?: string;
  error?: string;
  otpToken?: string;
}

export const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const { openModal } = useModal();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response: ForgotPasswordResponse = await forgotPassword(email);
    console.log(response);

    if (response.error) {
      setMessage(response.error);
    } else {
      setMessage(response.message || "");

      if (response.otpToken) {
        localStorage.setItem("otpToken", response.otpToken);
      }

      openModal("newPassword");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex flex-col gap-4">
        <div className="h-auto flex justify-center items-center mt-6 pt-4">
          <img
            src={forgotPasswordIcon}
            alt="forgotPassword"
            className="object-contain h-32 md:h-44 lg:h-48 2xl:h-64"
          />
        </div>
        <h1 className="text-2xl self-center font-bold leading-none">
          Forgot Password
        </h1>
        <p className="opacity-75 self-center text-lg font-medium leading-none text-center mb-2">
          We help you reset your password!
        </p>
        <SignInEmailInput
          placeholder="Type your Registered email !..."
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <FormSubmissionButton data="Continue" />
        {message && <p className="text-center mt-4">{message}</p>}
      </div>
    </form>
  );
};
