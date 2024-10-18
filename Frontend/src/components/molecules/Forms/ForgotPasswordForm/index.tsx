import React, { useState } from 'react';
import { forgotPassword as forgotPasswordIcon } from '../../../../assets/icons';
import { SignInEmailInput } from '../../../atoms/SignInEmailInput';
import { FormSubmissionButton } from '../../../atoms/FormSubmissionButton';
import { forgotPassword } from '../../../services/AuthService';
import { useModal } from "../../../organism/AllPagesLayout/ModalContext";

// Update the interface to include otpToken
interface ForgotPasswordResponse {
  message?: string;
  error?: string;
  otpToken?: string; // Add otpToken here
}

export const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState(''); // State for the email input
  const [message, setMessage] = useState<string | null>(null);
  const { openModal } = useModal();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); // Update email state
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Call the forgot password service
    const response: ForgotPasswordResponse = await forgotPassword(email);
    console.log(response);

    // Handle response
    if (response.error) {
      setMessage(response.error); // Set error message
    } else {
      setMessage(response.message || '');

      // Extract otpToken and set it in local storage
      if (response.otpToken) {
        localStorage.setItem('otpToken', response.otpToken);
      }

      openModal("newPassword");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='px-10'>
      <div className="flex flex-col gap-4">
        <div className='h-auto flex justify-center items-center mt-6 pt-4'>
          <img
            src={forgotPasswordIcon}
            alt="forgotPassword"
            className="object-contain h-32 md:h-48 lg:h-64" // Adjusted image heights for responsiveness
          />
        </div>
        <h1 className="text-2xl self-center font-bold leading-none">Forgot Password</h1>
        <p className="opacity-75 self-center text-lg font-medium leading-none text-center">
          We help you reset your password!
        </p>
        <SignInEmailInput 
          placeholder="Type your Registered email !..."
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <FormSubmissionButton 
          data="Continue" 
        />
        {message && <p className="text-center mt-4">{message}</p>} {/* Display success/error message */}
      </div>
    </form>
  );
};