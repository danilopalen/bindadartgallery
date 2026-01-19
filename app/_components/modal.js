import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // If not open, render nothing

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose} // Close when clicking the backdrop
    >
      <div
        style={{
          width: "100%",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
        }}
        // Prevent the modal content from closing the modal when clicked
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
