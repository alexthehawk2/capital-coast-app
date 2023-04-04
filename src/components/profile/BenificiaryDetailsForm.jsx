import React from "react";

import classes from "./BenificiaryDetailsForm.module.css";
import { useToast } from "@chakra-ui/react";
import { warning } from "framer-motion";
const BenificiaryDetailsForm = () => {
  const toast = useToast();
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
      toast({
        title: "Error",
        description: "Account number must be 10 digits",
        status: "warning",
        duration: 5000,
        position: "top-right",
        isClosable: true,
      });
      return;
    }
    if (accountHolderName.length < 5) {
      toast({
        title: "Error",
        description: "Account holder name must be at least 5 characters long",
        status: "warning",
        duration: 5000,
        position: "top-right",
        isClosable: true,
      });
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
      .then((data) => {
        toast({
          title: data.status == 1 ? "Success" : "Error",
          description: data.message,
          status: data.status == 1 ? "success" : "error",
          duration: 5000,
          position: "top-right",
        });
      })
      .catch((err) => {
        toast({
          title: "An error occurred.",
          description: err.message,
          status: "error",
          duration: 5000,
          position: "top-right",
        });
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
