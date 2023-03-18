import {
  arrowDown15,
  arrowUp15,
  arrowUp2,
  moneyLocked,
  moneyPot,
} from "@/assets";
import Image from "next/image";
import React from "react";
import Card from "../common/Card";

const Balance = () => {
  return (
    <div className="text-white">
      <div className="flex w-[100%] justify-between items-center mx-8 mb-5">
        <h1 className="font-bold text-xl">My Balance</h1>
        <select className="bg-[#1b1d21] p-2 rounded-lg text-[#B4B6BA] mr-[3.5rem]">
          <option value="option1">Select Range</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="mt-5 rounded-md bg-[#131519] p-3 flex mx-8">
        <div className="w-[50%]">
          <Card bgColor={"#131519"} px={2} py={2} flex justifyCenter>
            <div className="mx-4">
              <Image src={moneyPot} alt="moneypot" width={50} />
            </div>
            <div>
              <p className="text-[#B4B6BA] mb-4">Available Balance</p>
              <div className="flex mb-5">
                <p className="text-white mr-6 text-4xl font-bold">
                  <span className="dollar-symbol">$</span>43,731
                </p>
                <div className="flex items-end">
                  <span className="text-[#B4B6BA] italic inline-block">
                    USD
                  </span>
                </div>
              </div>
              <p className=" mr-6 underline text-[#70CC9D]">
                View Transactions
              </p>
            </div>
            <div>
              <Card bgColor={"#65DB98"} px="2" py="1" width={"cust76"}>
                <Image
                  src={arrowUp15}
                  width={15}
                  className="mr-1 inline-block"
                  alt="arrow"
                />
                <span className="text-black font-medium text-[14px]">2.0%</span>
              </Card>
            </div>
          </Card>
        </div>
        <div className="bg-[#1b1d21] w-[50%] rounded-lg">
          <Card bgColor={"#1b1d21"} px={2} py={2} flex justifyCenter>
            <div className="mx-4">
              <Image src={moneyLocked} alt="moneypot" width={50} />
            </div>
            <div>
              <p className="text-[#B4B6BA] mb-4">Pending</p>
              <div className="flex mb-5">
                <p className="text-white mr-6 text-4xl font-bold">
                  <span className="dollar-symbol">$</span>836.00
                </p>
                <div className="flex items-end">
                  <span className="text-[#B4B6BA] italic inline-block">
                    USD
                  </span>
                </div>
              </div>
              <p className=" mr-6 underline text-[#70CC9D]">
                View Transactions
              </p>
            </div>
            <div>
              <Card bgColor={"#E26B8D"} px="2" py="1" width={"cust76"}>
                <Image
                  src={arrowDown15}
                  width={15}
                  className="mr-1 inline-block"
                  alt="arrow"
                />
                <span className="text-black font-medium text-[14px]">
                  -4.0%
                </span>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Balance;
