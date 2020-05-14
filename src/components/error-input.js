import React from 'react';

const ErrorInput = ({ message }) => {
  if (!message || message.length === 0) {
    return null;
  }
  return (
    <div style={{ color: 'red', fontWeight: 400 }} className="small">{message}</div>
  );
};

export default ErrorInput;
