import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigates to the previous page in history
  };

  return (
    <button className="back-btn" onClick={handleBack}>
      ← Back
    </button>
  );
};

export default BackButton;