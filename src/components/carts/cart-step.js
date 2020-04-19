/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const CartStep = ({
  title, index, setCurrentStep, currentStep, 
}) => {
  return (
    <div className={`bs-wizard-step ${index <= currentStep ? 'active' : 'disabled'}`}>
      <div className="text-center bs-wizard-stepnum">{title}</div>
      <div className="progress">
        <div className="progress-bar" />
      </div>
      <Link onClick={() => setCurrentStep(index)} class="bs-wizard-dot" />
    </div>
  );
};
 
export default CartStep;
