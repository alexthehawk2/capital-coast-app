import Image from "next/image";
import React from "react";
import { settings } from "@/assets";
import Card from "../common/Card";

const TransferMoney = () => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col">
      <div className="flex justify-between mt-4 mb-6">
        <h1 className="text-white font-bold text-2xl">Cash Out</h1>
        <div className="rounded-lg flex justify-center items-center p-3 bg-[#27292D] cursor-pointer">
          <Image src={settings} alt="settings icon" width={30} />
        </div>
      </div>
      <Card width={'full'} px="4" py={}></Card>
    </div>
  );
};

export default TransferMoney;
