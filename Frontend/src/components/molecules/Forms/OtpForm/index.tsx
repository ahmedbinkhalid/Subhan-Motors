import React, { useState } from 'react';
import { OTP } from '../../../../assets/icons';
import OTPInput from '../../../atoms/OTPInput';
import { PasswordInput } from '../../../atoms/PasswordInput';
import { FormSubmissionButton } from '../../../atoms/FormSubmissionButton';
import { resetPassword } from '../../../services/AuthService';
import { useModal } from "../../../organism/AllPagesLayout/ModalContext";

export const OtpForm: React.FC = () => {
  const [otp, setOtp] = useState(''); // State for OTP input
  const [newPassword, setNewPassword] = useState(''); // State for new password
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
  const [message, setMessage] = useState<string | null>(null); // State for messages
  const { openModal, } = useModal();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleOtpChange = (value: string) => {
    setOtp(value); // Update OTP state
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const otpToken = localStorage.getItem('otpToken');
    
    if (!otpToken) {
      setMessage('OTP token is missing. Please initiate the password reset process again.');
      return;
    }

    const response = await resetPassword({
      otpToken,
      otp,
      newpassword: newPassword,
      confirmpassword: confirmPassword,
    });

    if (response.error) {
      setMessage(response.error);
    } else {
      setMessage(response.message || '');
      localStorage.removeItem("otpToken");
      openModal("login");
      // Redirect or perform other actions on success
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <img
        src={OTP}
        alt="Reset Password"
        className="object-contain h-48"
      />
      <h1 className="text-2xl self-center font-bold leading-none py-4">Resetting Your Password!</h1>
      <OTPInput onChange={handleOtpChange} /> {/* Pass the handler here */}
      <PasswordInput
        placeholder="Enter a new Password ..."
        name="newPassword"
        value={newPassword}
        onChange={handlePasswordChange}
      />
      <PasswordInput
        placeholder="Re-type new Password ..."
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <FormSubmissionButton data="Reset" />
      {message && <p className="text-center mt-4">{message}</p>} {/* Display message */}
    </form>
  );
};
