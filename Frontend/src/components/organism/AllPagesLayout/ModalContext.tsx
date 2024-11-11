import React, { createContext, useContext, useState, ReactNode } from 'react';

type ModalType = "login" | "signup" | "forgotPassword" | "newPassword" | null;

interface ModalContextType {
  modalOpen: ModalType;
  openModal: (formType: ModalType, onClose?: () => void) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState<ModalType>(null);
  const [postLoginCallback, setPostLoginCallback] = useState<(() => void) | null>(null);

  const openModal = (formType: ModalType, onClose?: () => void) => {
    setModalOpen(formType);
    setPostLoginCallback(() => onClose || null);
  };

  const closeModal = () => {
    setModalOpen(null);
    if (postLoginCallback) {
      postLoginCallback();
      setPostLoginCallback(null);
    }
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
}
