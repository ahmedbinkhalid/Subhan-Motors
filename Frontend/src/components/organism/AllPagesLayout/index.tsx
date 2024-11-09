import React from "react";
import { LayoutProps } from "./types";
import { Header } from "../../molecules/Header";
import { Footer } from "../../atoms/Footer";
import { LoginSignUpForm } from "../../molecules/LoginSignUpForm";
import { IoIosCloseCircle } from "react-icons/io";
import { useModal } from "./ModalContext";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { modalOpen, closeModal } = useModal();

  return (
    <React.Fragment>
      <Header />
      <section className="max-w-[1200px] m-auto my-8 flex flex-col gap-4 max-lg:px-6 max-md:px-2 py-8">
        {children}
      </section>
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 shadow-sm h-auto">
          <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg py-4 max-md:mx-3">
            <button
              onClick={closeModal}
              className="cursor-pointer absolute top-4 right-6 text-charcoal-gray text-2xl z-20"
            >
              <IoIosCloseCircle />
            </button>
            {modalOpen === "signup" ? (
              <LoginSignUpForm
              />
            ) : modalOpen === "login" ? (
              <LoginSignUpForm
              />
            ) : modalOpen === "forgotPassword" ? (
              <LoginSignUpForm
              />
            ) : modalOpen === "newPassword" ? (
              <LoginSignUpForm
              />
            ) : null}
          </div>
        </div>
      )}
      <Footer />
    </React.Fragment>
  );
};
