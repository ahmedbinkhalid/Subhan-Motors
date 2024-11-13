import React from "react";
import LoginForm from "../Forms/LoginForm";
import SignUpForm from "../Forms/SignUpForm";
import { useModal } from "../../organism/AllPagesLayout/ModalContext";
import { OtpForm } from "../Forms/ResetPasswordForm";
import { ForgotPasswordForm } from "../Forms/ForgotPasswordForm";

export const LoginSignUpForm: React.FC = () => {
  const { modalOpen } = useModal();

  return (
    <div className="relative flex flex-col bg-transparent shadow-gray-900 rounded-xl w-full max-w-md 2xl:p-4 p-2 2xl:gap-5 gap-4 lg:px-16 text-base font-semibold font-sans text-charcoal-gray">
      {modalOpen === "login" && <LoginForm />}
      {modalOpen === "signup" && <SignUpForm />}
      {modalOpen === "forgotPassword" && <ForgotPasswordForm />}
      {modalOpen === "newPassword" && <OtpForm />}
    </div>
  );
};
