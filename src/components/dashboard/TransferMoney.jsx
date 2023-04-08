import Image from "next/image";
import React, { useEffect, useState } from "react";
import { bankBuilding, checkmark, settings } from "@/assets";
import Card from "../common/Card";
import getAPI from "../utilities/helpers/getApi";
import { useDisclosure } from "@chakra-ui/react";
import MoneyTransfer from "../Modals/MoneyTransfer";
const TransferMoney = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    const getBeneficiaries = async () => {
      const res = await getAPI(
        "http://localhost:3001/api/account/get-beneficiaries"
      );
      if (res.status === 1) setBeneficiaries(res.beneficiaries);
    };
    getBeneficiaries();
  }, []);

  const accountSelectHandler = (e) => {
    const selectedAccount = e.currentTarget;
    const accountContainer = document.getElementById("account-container");
    accountContainer.childNodes.forEach((child) => {
      child.childNodes[0].childNodes[0].childNodes[0].classList.add("hidden");
    });
    selectedAccount.childNodes[0].childNodes[0].classList.toggle("hidden");
    setSelectedAccount(selectedAccount.id);
  };
  const transferHandler = () => {
    if (selectedAccount) {
      const selectedAccountData = beneficiaries.filter(
        (beneficiary) =>
          beneficiary.beneficiaryAccountNumber === parseInt(selectedAccount)
      );
      setSelectedBeneficiary(selectedAccountData[0]);
      onOpen();
    } else {
      alert("Please select an account");
    }
  };
  return (
    <div className="w-[100%] h-[100%] flex flex-col">
      <div className="flex justify-between mt-4 mb-6">
        <h1 className="text-white font-bold text-2xl">Transfer Money</h1>
        <div className="rounded-lg flex justify-center items-center p-3 bg-[#27292D] cursor-pointer">
          <Image src={settings} alt="settings icon" width={30} />
        </div>
      </div>
      <div
        className="max-h-[235px] overflow-y-scroll pr-2 cursor-pointer"
        id="account-container"
      >
        {beneficiaries.length === 0 ? (
          <p>No beneficiaries found.</p>
        ) : (
          beneficiaries.map((beneficiary) => {
            return (
              <Card
                width={"full"}
                px="4"
                py="4"
                bgColor="#1C1D21"
                my="4"
                key={beneficiary.beneficiaryAccountNumber}
              >
                <div
                  className="flex"
                  onClick={accountSelectHandler}
                  id={beneficiary.beneficiaryAccountNumber}
                >
                  <div className="mr-4 px-6 py-3 bg-[#E36B8D] rounded-md relative">
                    <Image
                      src={checkmark}
                      className="absolute hidden top-[1px] right-[1px]"
                      alt="checkmark-icon"
                    />
                    <Image src={bankBuilding} alt="settings icon" width={35} />
                  </div>
                  <div>
                    <p className="mb-2 text-white font-semibold">
                      ****{" "}
                      {beneficiary.beneficiaryAccountNumber
                        .toString()
                        .slice(-4)}
                    </p>
                    <p className="italic text-[#B4B6BA]">
                      {beneficiary.beneficiaryName}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })
        )}
      </div>
      <div className="">
        <Card width={"full"} px="4" py="4" bgColor="#63DA9E" my="4">
          <button className="w-[100%] font-semibold" onClick={transferHandler}>
            Transfer Amount
          </button>
        </Card>
      </div>

      <p className=" text-[#9B9C9F] text-center">
        <span>*</span>
        <span className="underline font-medium">
          you can transfer amount easily to any of the linked accounts
        </span>
      </p>
      <MoneyTransfer
        isOpen={isOpen}
        onClose={onClose}
        selectedBeneficiary={selectedBeneficiary}
      />
    </div>
  );
};

export default TransferMoney;
