import { people1, people2, people3 } from "@/assets";
import Image from "next/image";
import React from "react";

const TransactionSummary = () => {
  return (
    <div className="text-white flex flex-col lg:flex-row my-0 lg:my-10 justify-center">
      <div className="ml-6 ss:ml-8 max-w-[200px] mr-12 mb-4 lg:mb-0">
        <select className="bg-[#1b1d21] text-3xl font-bold">
          <option value="1">Last 30 Days</option>
          <option value="2">Last 7 Days</option>
          <option value="3">Yesterday</option>
        </select>
      </div>
      <div className="flex flex-col mx-6 mr-0 pr-6 lg:border-r-[1px] border-[#35373B] mb-4 ss:mb-0">
        <p className="mb-2 text-[#B4B6BA] font-medium">Transactions</p>
        <p className="font-bold text-3xl">28</p>
      </div>
      <div className="flex flex-col mx-6 mr-0 pr-6 lg:border-r-[1px] border-[#35373B] mb-4 ss:mb-0">
        <p className="text-[#B4B6BA] font-medium">Joined Waves</p>
        <div className="flex pt-2 mb-4 ss:mb-0">
          <div
            className="rounded-full w-12 h-12 bg-red-50"
            style={{
              backgroundImage: `url(${people1.src})`,
              backgroundSize: "cover",
              border: "1px solid #000000",
              filter: "grayscale(100%)",
            }}
          ></div>
          <div
            className="rounded-full w-12 h-12 bg-red-50 img-for-joined-waves"
            style={{
              backgroundImage: `url(${people2.src})`,
              backgroundSize: "cover",
              border: "1px solid #000000",
            }}
          ></div>
          <div
            className="rounded-full w-12 h-12 bg-red-50 img-for-joined-waves"
            style={{
              backgroundImage: `url(${people3.src})`,
              backgroundSize: "cover",
              border: "1px solid #000000",
            }}
          ></div>
          <div
            className="rounded-full w-12 h-12 bg-red-50 img-for-joined-waves text-black text-center font-bold flex justify-center items-center"
            style={{
              backgroundColor: `#65DB98`,
              backgroundSize: "cover",
              border: "1px solid #000000",
            }}
          >
            <p>+8</p>
          </div>
        </div>
      </div>
      <div className="mr-8 ml-6">
        <p className="mb-2 text-[#B4B6BA] font-medium">Earnings</p>
        <p className="font-bold text-3xl">$2400</p>
      </div>
    </div>
  );
};

export default TransactionSummary;
