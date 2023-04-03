import React from "react";

import classes from "./BenificiaryDetailsForm.module.css";

const BenificiaryDetailsForm = () => {
  const [accountDetails, setAccountDetails] = React.useState({
    accountNumber: "",
    accountHolderName: "",
  });
  function handleKeyDown(e) {
    if (e.keyCode === 69 || e.keyCode === 107 || e.keyCode === 109) {
      e.preventDefault();
    }
  }
  const handleChange = (e, type) => {
    setAccountDetails({ ...accountDetails, [type]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const accountNumber = accountDetails.accountNumber;
    const accountHolderName = accountDetails.accountHolderName;
    if (accountNumber.length !== 10) {
      alert("Account number must be 10 digits");
      return;
    }
    if (accountHolderName.length < 5) {
      alert("Account holder name must be at least 5 characters");
      return;
    }
    const data = {
      beneficiaryAccountNumber: accountNumber,
      beneficiaryName: accountHolderName,
    };
    fetch("/api/profile/add-beneficiary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <p className="mb-4 text-center font-bold text-xl">
        Enter Beneficiary Details
      </p>
      <div className={classes.form}>
        <input
          name="accountNumber"
          type="number"
          placeholder="Enter a valid account number"
          autoComplete="off"
          onKeyDown={handleKeyDown}
          onChange={(e) => handleChange(e, "accountNumber")}
        />
        <input
          name="accountHolderName"
          type="text"
          placeholder="Enter account holder full name"
          autoComplete="off"
          onChange={(e) => handleChange(e, "accountHolderName")}
        />
        <input type="submit" onClick={handleSubmit} />
      </div>
    </>
  );
};

export default BenificiaryDetailsForm;
