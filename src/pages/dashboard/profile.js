import Profile from "@/components/profile/Profile";
import React, { useEffect } from "react";
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
import Navbar from "@/components/navigation/Navbar";
const _Profile = () => {
  useEffect(() => {
    document.title = "Capital Coast | Profile";
  }, []);
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
      <div className="bg-black w-[100%] h-[auto] main min-h-[100vh]">
        <Navbar />
        <div className="sm:pr-[3rem] sm:pl-[3rem]">
          <Profile onOpen={onOpen} />
        </div>
      </div>
    </>
  );
};

export default _Profile;
