import React, {useState} from "react";
import { LayoutProps } from "./types";
import { Header } from "../../molecules/Header";
import { Footer } from "../../atoms/Footer";
import { LoginSignUpForm } from "../../molecules/LoginSignUpForm";
import { IoIosCloseCircle } from "react-icons/io";

export const Layout: React.FC<LayoutProps> = ({ children }) => {

  const [modalOpen, setModalOpen] = useState<null | "login" | "signup" | "forgotPassword" | "newPassword">(null);

  const openModal = (formType: "login" | "signup" | "forgotPassword" | "newPassword" ) => {
    setModalOpen(formType);
  };

  const closeModal = () => {
    setModalOpen(null);
  };

  return (
    <>
    <Header openModal={openModal} />
    <section className="max-w-[1200px] m-auto my-8 flex flex-col gap-4 max-lg:px-6
      max-md:px-2 py-8">
      {children}
      </section>
      {/* Modal for SignUp or Login */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 shadow-sm h-auto">
          <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg py-4 max-md:mx-2">
            <button
              onClick={closeModal}
              className="cursor-pointer absolute top-4 right-6 text-gray-900 text-2xl z-20"
            >
              <IoIosCloseCircle />
            </button>
            {modalOpen === "signup" ? (
              <LoginSignUpForm
                mainHeading="SignUp"
                mainData="Join us to explore more!"
                lastText="Already have an account? Login"
                btnText="Sign Up"
                openModal={openModal}
              />
            ) : modalOpen === "login" ? (
              <LoginSignUpForm
                mainHeading="Login"
                mainData="Welcome back! Please login"
                lastText="Don't have an account? Sign Up"
                btnText="Login"
                openModal={openModal}
              />
            ) : modalOpen === "forgotPassword" ? (
              <LoginSignUpForm
              mainHeading="Forgot Password"
              mainData="Please Reset your Password!"
              lastText=""
              btnText="Reset"
              openModal={openModal}
            />
            ) : modalOpen === "newPassword" ? (

              <LoginSignUpForm
              mainHeading="Enter 4 Digit OTP"
              mainData="Create a New Password!"
              lastText=""
              btnText="Continue"
              openModal={openModal}
            />
            )
            : ""
            }
          </div>
        </div>
      )}
      <Footer />
      </>
  );
};
