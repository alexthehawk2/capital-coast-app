import React, { useEffect, useState } from "react";
import getAPI from "../utilities/helpers/getApi";

const AccountDetails = ({ selectedTab }) => {
  const [loading, setLoading] = useState(false);
  const [accountData, setAccountData] = useState({
    accountNumber: "",
    balance: {
      available: "",
      currency: "",
    },
    accountStatus: "",
    accountType: "",
  });
  useEffect(() => {
    if (selectedTab === "accountDetails") {
      setLoading(true);
      getAPI("/api/profile/get-account-details").then((res) => {
        setAccountData(() => {
          return {
            accountNumber: res.response.account.accountNumber,
            balance: {
              available: res.response.account.accountBalance.balance,
              currency: res.response.account.accountBalance.currency,
            },
            accountStatus: res.response.account.accountStatus,
            accountType: res.response.account.accountType,
          };
        });
        setLoading(false);
      });
    }
  }, [selectedTab]);
  return (
    <div className="w-[100%]">
      <div>
        <h1 className="text-center text-2xl mt-2 font-bold">Account Details</h1>
      </div>
      <div className="flex w-[100%] sm:w-[50%] mt-4">
        <label className="w-[150px]">Account Number</label>
        <label className="mx-4">:</label>
        <label className="">{accountData.accountNumber}</label>
      </div>
      <div className="flex w-[100%] sm:w-[50%] mt-4">
        <label className="w-[150px]">Available Balance</label>
        <label className="mx-4">:</label>
        <label className="">
          {accountData.balance.currency ? "$" : ""}{" "}
          {accountData.balance.available}
        </label>
      </div>
      <div className="flex w-[100%] sm:w-[50%] mt-4">
        <label className="w-[150px]">Account Status</label>
        <label className="mx-4">:</label>
        <label className="">{accountData.accountStatus}</label>
      </div>
      <div className="flex w-[100%] sm:w-[50%] mt-4">
        <label className="w-[150px]">Account Type</label>
        <label className="mx-4">:</label>
        <label className="">{accountData.accountType}</label>
      </div>
    </div>
  );
};

export default AccountDetails;
