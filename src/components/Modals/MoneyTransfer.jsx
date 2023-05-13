import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast,
} from "@chakra-ui/react";
import postAPI from "../utilities/helpers/postApi";
import { formatMoney } from "accounting-js";
const MoneyTransfer = ({
  isOpen,
  onClose,
  selectedBeneficiary,
  setAccountData,
}) => {
  const [amountValue, setAmountValue] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const toast = useToast();
  const amountChangeHandler = (e) => {
    setAmountValue(e.target.value);
    if (parseInt(e.target.value) > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  const transferHandler = () => {
    postAPI("/api/account/transfer-money", {
      beneficiaryAccountNumber: selectedBeneficiary.beneficiaryAccountNumber,
      amount: amountValue,
    }).then((res) => {
      if (res.status === 1) {
        toast({
          title: "Success",
          description: res.message,
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        setAccountData({
          accountBalance: formatMoney(res.remainingBalance),
        });
        onClose();
      } else {
        toast({
          title: "Error",
          description: res.message,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        onClose();
      }
    });
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      colorScheme="blackAlpha.200"
      preserveScrollBarGap
    >
      <ModalOverlay />
      <ModalContent bg={"#222328"}>
        <ModalHeader color={"white"}>Transfer Money</ModalHeader>
        <ModalCloseButton color={"white"} bg={"red"} />
        <ModalBody color={"white"}>
          <div>
            {selectedBeneficiary && (
              <p className="mb-2">
                Money Transfer To :{" "}
                <span className="text-blue-600 font-semibold">
                  {selectedBeneficiary.beneficiaryName}
                </span>
              </p>
            )}
            {selectedBeneficiary && (
              <p className="mb-2">
                Money Transfer Account Number:{" "}
                <span className="text-blue-600 font-semibold">
                  {selectedBeneficiary.beneficiaryAccountNumber}
                </span>
              </p>
            )}
          </div>
          <div className="flex mb-2">
            <label className="mr-2">Enter Amount: $</label>
            <input
              type="number"
              name="amountValue"
              className=" px-4 rounded-md bg-black"
              onChange={amountChangeHandler}
              value={amountValue}
            />
          </div>
          <p className="mb-2">
            Please confirm account details to proceed the transfer
          </p>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            variant="solid"
            _hover={{ bg: "green", color: "white" }}
            isDisabled={isDisabled}
            onClick={transferHandler}
          >
            Transfer
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MoneyTransfer;
