import { logo } from "@/assets";
import Sidebar from "@/components/navigation/Sidebar";
import ChangePassword from "@/components/profile/ChangePassword";
import Profile from "@/components/profile/Profile";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const _Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const 
  useEffect(() => {
    document.title = "Capital Coast | Profile";
    const main = document.querySelector(".main");
    console.log(main.offsetHeight);
    main.style.height = `${main.offsetHeight + 97}px`;
    onOpen();
  }, []);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Verification Code</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form></form>
            <p>
              please enter the Verification code received in your Email address
              below
            </p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="bg-black w-[100vw] h-[auto] p-5 main">
        <div className="flex justify-center sm:justify-start">
          <Image src={logo} alt="capital coast logo" height={100} width={200} />
        </div>
        <div className="sm:pl-[10rem]">
          <Sidebar />
          <Profile onOpen={onOpen} />
          <ChangePassword />
        </div>
      </div>
    </>
  );
};

export default _Profile;
