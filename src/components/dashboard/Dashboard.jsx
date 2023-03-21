import React from "react";
import Card from "../common/Card";
import Navbar from "../navigation/Navbar";
import Balance from "./Balance";
import Hero from "./Hero";
import TransferMoney from "./TransferMoney";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Hero>
        <div className="w-[100%] ss:w-[70%] mr-5">
          <Card bgColor={"#1b1d21"} px="5" py="4">
            <Balance />
          </Card>
          <div className="mt-4">
            <Card bgColor={"#1b1d21"} px="5" py="4">
              <div className="w-[100%] h-[200px]"></div>
            </Card>
          </div>
        </div>
        <Card bgColor={"#2D2E37"} width="cust33" px="10" py={"12"}>
          <TransferMoney />
        </Card>
      </Hero>
    </>
  );
};

export default Dashboard;
