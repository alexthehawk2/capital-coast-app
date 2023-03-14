import { logo } from "@/assets";
import Sidebar from "@/components/navigation/Sidebar";
import Profile from "@/components/profile/Profile";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import EmailVerifyForm from "@/components/Auth/Forms/EmailVerifyForm";
const _Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Verification Code</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EmailVerifyForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className="bg-black w-[100%] h-[auto] p-5 main min-h-[100vh]">
        <div className="flex justify-center sm:justify-start">
          <Image src={logo} alt="capital coast logo" height={100} width={200} />
        </div>
        <div className="sm:pr-[3rem] sm:pl-[10rem]">
          <Sidebar />
          <Profile onOpen={onOpen} />
        </div>
      </div>
    </>
  );
};

export default _Profile;
