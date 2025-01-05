import React from 'react';

const LoadingSpinner = ({ size = 'medium' }) => {
  const spinnerSize = {
    small: '1rem',
    medium: '2rem',
    large: '3rem'
  };

  return (
    <div className="d-flex justify-content-center align-items-center p-5">
      <div 
        className="spinner-border text-dark" 
        style={{ width: spinnerSize[size], height: spinnerSize[size] }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner; 