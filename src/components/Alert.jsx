import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Alert = ({ message, type }) => {
  if (!message) return null;
  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  );
};

export default Alert;