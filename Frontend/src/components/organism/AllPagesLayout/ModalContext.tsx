import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type ModalType = "login" | "signup" | "forgotPassword" | "newPassword" | null;

// Allow onClose to be either a callback or a link path (string)
type OnCloseType = (() => void) | string | null;

interface ModalContextType {
  modalOpen: ModalType;
  openModal: (formType: ModalType, onClose?: OnCloseType) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState<ModalType>(null);
  const [postCloseAction, setPostCloseAction] = useState<OnCloseType>(null);
  const navigate = useNavigate();

  const openModal = (formType: ModalType, onClose?: OnCloseType) => {
    setModalOpen(formType);
    setPostCloseAction(onClose || null);
  };

  const closeModal = () => {
    setModalOpen(null);
    if (typeof postCloseAction === 'function') {
      // Call the callback function if it's provided
      postCloseAction();
    } else if (typeof postCloseAction === 'string' && postCloseAction) {
      // Navigate to the link path if it's a non-empty string
      navigate(postCloseAction);
    }
    setPostCloseAction(null); // Reset the action
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
