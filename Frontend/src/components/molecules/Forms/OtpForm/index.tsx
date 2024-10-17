import React, { useState } from 'react';
import { OTP } from '../../../../assets/icons';
import OTPInput from '../../../atoms/OTPInput';
import { PasswordInput } from '../../../atoms/PasswordInput';
import { FormSubmissionButton } from '../../../atoms/FormSubmissionButton';

export const OtpForm: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <React.Fragment>
      <img
        src={OTP}
        alt="forgotPassword"
        className="object-contain h-48"
      />
      <h1 className="text-2xl self-center font-bold leading-none py-4">Resetting Your Password!</h1>
      <OTPInput />
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
      {/* Additional logic for enabling the button based on password match can be added */}
      <FormSubmissionButton data="Reset" />
    </React.Fragment>
  );
};
