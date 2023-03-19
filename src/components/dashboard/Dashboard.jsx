import { logo, moneyLocked } from "@/assets";
import Image from "next/image";
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
        <div className="ss:w-[30%] bg-[#2D2E37]">
          <div className="">
            <Image src={moneyLocked} alt="test" />
          </div>
        </div>
      </Hero>
    </>
  );
};

export default Dashboard;
