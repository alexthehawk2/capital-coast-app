import React, { useEffect, useState } from "react";
import Card from "../common/Card";
import Navbar from "../navigation/Navbar";
import Balance from "./Balance";
import Hero from "./Hero";
import RecentTransactions from "./RecentTransactions";
import TransactionSummary from "./TransactionSummary";
import TransferMoney from "./TransferMoney";
import { formatMoney } from "accounting-js";
import getAPI from "../utilities/helpers/getApi";

const Dashboard = () => {
  const [accountData, setAccountData] = useState({
    accountBalance: null,
  });
  useEffect(() => {
    getAPI(`/api/profile/get-account-details`).then((res) => {
      setAccountData({
        accountBalance: formatMoney(
          res.response.account?.accountBalance.balance
        ),
      });
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero>
        <div className="w-[100%] lg:w-[70%] flex flex-col justify-between mr-5">
          <Card bgColor={"#1b1d21"} px="5" py="4">
            <Balance accountData={accountData} />
          </Card>
          <div className="mt-4 mb-4 lg:mb-0">
            <Card bgColor={"#1b1d21"} px="5" py="10">
              <TransactionSummary />
            </Card>
          </div>
        </div>
        <Card bgColor={"#2D2E37"} width="cust33" px="10" py={"12"}>
          <TransferMoney setAccountData={setAccountData} />
        </Card>
      </Hero>
      <section className="mt-4 mx-2 ss:mx-12">
        <Card bgColor={"#1b1d21"} width="full" px={"0"}>
          <RecentTransactions></RecentTransactions>
        </Card>
      </section>
    </>
  );
};

export default Dashboard;
