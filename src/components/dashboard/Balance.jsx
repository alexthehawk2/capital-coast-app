import {
  arrowDown15,
  arrowUp15,
  arrowUp2,
  moneyLocked,
  moneyPot,
} from "@/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Card from "../common/Card";
import getAPI from "../utilities/helpers/getApi";
import { formatMoney } from "accounting-js";
const Balance = () => {
  const [loading, setLoading] = useState(false);
  const [accountData, setAccountData] = useState({
    accountBalance: null,
  });
  useEffect(() => {
    setLoading(true);
    getAPI(`/api/profile/get-account-details`).then((res) => {
      setAccountData({
        accountBalance: formatMoney(
          res.response.account.accountBalance.balance
        ),
      });
      setLoading(false);
    });
  }, []);
  return (
    <div className="text-white">
      <div className="flex w-[100%] justify-between items-center mx-0 ss:mx-8 mb-5 ss:mt-12">
        <h1 className="font-bold text-2xl">My Balance</h1>
        <select className="bg-[#1b1d21] p-2 rounded-lg text-[#B4B6BA] mr-0 ss:mr-[3.5rem]">
          <option value="option1">Select Range</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="mt-5 rounded-md bg-[#131519] p-3 flex mx-0 lg:mx-8 flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%]">
          <Card bgColor={"#131519"} px={2} py={2} flex justifyCenter>
            <div className="mx-4">
              <Image src={moneyPot} alt="money-pot" width={50} />
            </div>
            <div className="min-w-[136px]">
              <p className="text-[#B4B6BA] mb-4 max-w-[160px]">
                Available Balance
              </p>
              <div className="flex mb-5 justify-between flex-wrap">
                <p className="text-white mr-2 ss:mr-6 text-4xl font-bold break-words">
                  {accountData.accountBalance ?? accountData.accountBalance}
                </p>
                <div className="flex items-end">
                  <span className="text-[#B4B6BA] italic inline-block">
                    USD
                  </span>
                </div>
              </div>
              <p className=" mr-6 underline text-[#70CC9D] cursor-pointer">
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
        <div className="bg-[#1b1d21] w-[100%] lg:w-[50%] rounded-lg">
          <Card bgColor={"#1b1d21"} px={2} py={2} flex justifyCenter>
            <div className="mx-4">
              <Image
                src={moneyLocked}
                alt="moneypot"
                width={50}
                className="mt-2"
              />
            </div>
            <div className="min-w-[136px]">
              <p className="text-[#B4B6BA] mb-4 max-w-[160px]">Pending</p>
              <div className="flex mb-5 justify-between">
                <p className="text-white mr-2 ss:mr-6 text-4xl font-bold">
                  <span className="dollar-symbol">$</span>836.00
                </p>
                <div className="flex items-end">
                  <span className="text-[#B4B6BA] italic inline-block">
                    USD
                  </span>
                </div>
              </div>
              <p className=" mr-6 underline text-[#70CC9D] cursor-pointer">
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
