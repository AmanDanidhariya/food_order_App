import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, className="" }) => {
  const modalRef = useRef();
  useEffect(() => {
    if (open) {
      modalRef.current.showModal();
    }
  }, [open]);
  return createPortal(
    <dialog ref={modalRef} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
