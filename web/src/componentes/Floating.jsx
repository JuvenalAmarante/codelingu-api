import React from "react";
import "./Floating.css";

const FloatingButton = ({ children, onClick }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default FloatingButton;
