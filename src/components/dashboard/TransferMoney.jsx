import Image from "next/image";
import React from "react";
import { bankBuilding, paypal, settings } from "@/assets";
import Card from "../common/Card";

const TransferMoney = () => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col">
      <div className="flex justify-between mt-4 mb-6">
        <h1 className="text-white font-bold text-2xl">Transfer Money</h1>
        <div className="rounded-lg flex justify-center items-center p-3 bg-[#27292D] cursor-pointer">
          <Image src={settings} alt="settings icon" width={30} />
        </div>
      </div>
      <Card width={"full"} px="4" py="4" bgColor="#1C1D21" my="4">
        <div className="flex">
          <div className="mr-4 px-6 py-3 bg-[#E36B8D] rounded-md">
            <Image src={bankBuilding} alt="settings icon" width={35} />
          </div>
          <div>
            <p className="mb-2 text-white font-semibold">**** 8462</p>
            <p className="italic text-[#B4B6BA]">City Bank</p>
          </div>
        </div>
      </Card>
      <Card width={"full"} px="4" py="4" bgColor="#1C1D21" my="4">
        <div className="flex">
          <div className="mr-4 px-6 py-3 bg-[#7DAAE6] rounded-md min-w-fit">
            <Image src={paypal} alt="settings icon" width={35} />
          </div>
          <div className="max-w-fit">
            <p className="mb-2 text-white font- max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
              abirdey@gmail...
            </p>
            <p className="italic text-[#B4B6BA]">Paypal</p>
          </div>
        </div>
      </Card>
      <div className="">
        <Card width={"full"} px="4" py="4" bgColor="#63DA9E" my="4">
          <button className="w-[100%] font-semibold">Transfer Amount</button>
        </Card>
      </div>

      <p className=" text-[#9B9C9F] text-center">
        <span>*</span>
        <span className="underline font-medium">
          you can transfer amount easily to any of the linked accounts
        </span>
      </p>
    </div>
  );
};

export default TransferMoney;
