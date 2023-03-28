import React from "react";

import classes from "./BenificiaryDetailsForm.module.css";

const BenificiaryDetailsForm = () => {
  function handleKeyDown(e) {
    if (e.keyCode === 69 || e.keyCode === 107 || e.keyCode === 109) {
      e.preventDefault();
    }
  }
  return (
    <>
      <p className="mb-4 text-center font-bold text-xl">
        Enter Benificiary Details
      </p>
      <div className={classes.form}>
        <input
          name="accountNumber"
          type="number"
          placeholder="Enter a valid account number"
          autoComplete="off"
          onKeyDown={handleKeyDown}
        />
        <input
          name="accountHolderName"
          type="text"
          placeholder="Enter account holder full name"
          autoComplete="off"
        />
        <input type="submit" />
      </div>
    </>
  );
};

export default BenificiaryDetailsForm;
