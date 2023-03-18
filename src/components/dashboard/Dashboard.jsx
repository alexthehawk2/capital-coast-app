import { logo } from "@/assets";
import React from "react";
import Card from "../common/Card";
import Navbar from "../navigation/Navbar";
import Balance from "./Balance";
import Hero from "./Hero";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Hero>
        <div className="w-[70%] min-h-[100px]">
          <Card bgColor={"#1b1d21"} px="5" py="4">
            <Balance />
          </Card>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </Hero>
    </>
  );
};

export default Dashboard;
