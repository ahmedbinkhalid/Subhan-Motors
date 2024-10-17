import React, { createContext, useContext, useState, ReactNode } from 'react';

type ModalType = "login" | "signup" | "forgotPassword" | "newPassword" | null;

interface ModalContextType {
  modalOpen: ModalType;
  openModal: (formType: ModalType) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState<ModalType>(null);

  const openModal = (formType: ModalType) => {
    setModalOpen(formType);
  };

  const closeModal = () => {
    setModalOpen(null);
  };

  return (
    <ModalContext.Provider value={{ modalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
