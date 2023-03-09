import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
const EmailChangeModal = ({ changeToEmail, openModal }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [emailUpdateCode, setEmailUpdateCode] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });
  const [activationCode, setActivationCode] = useState({
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
  });
  
  const handleOnChangeForEmailUpdateCode = (e) => {
    const { name, value } = e.target;
    const { key } = e;
    if (key === "Backspace") {
      if (value.length === 0) {
        document.getElementById(parseInt(name) - 1)?.focus();
        setDisabled(true);
        return;
      }
      setEmailUpdateCode((prev) => {
        return {
          ...prev,
          [name]: "",
        };
      });
      setDisabled(true);

      return;
    }
    if (isNaN(key)) return;
    if (value.length > 1) return;
    setEmailUpdateCode((prev) => {
      return {
        ...prev,
        [name]: key,
      };
    });
    document.getElementById(parseInt(name) + 1)?.focus();
  };
  const handleOnChangeForEmailActiveCode = (e) => {
    const { name, value } = e.target;
    const { key } = e;
    if (key === "Backspace") {
      if (value.length === 0) {
        document.getElementById(parseInt(name) - 1)?.focus();
        setDisabled(true);
        return;
      }
      debugger;
      setActivationCode((prev) => {
        return {
          ...prev,
          [name]: "",
        };
      });
      setDisabled(true);

      return;
    }
    if (isNaN(key)) return;
    if (value.length > 1) return;
    setActivationCode((prev) => {
      return {
        ...prev,
        [name]: key,
      };
    });
    document.getElementById(parseInt(name) + 1)?.focus();
  };
  const UserEmail = useSelector((state) => state.userDetail.email);
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Email Update Verification</ModalHeader>
          <ModalBody>
            <form>
              <div>
                <p className="mb-4 text-sm text-center">
                  Please enter the email update code received in {UserEmail}
                </p>
                <div className="flex justify-center text-center">
                  <input
                    type="number"
                    name="0"
                    className="w-[40px] border rounded-sm mr-4 text-center"
                    value={emailUpdateCode[0]}
                    onKeyDown={handleOnChangeForEmailUpdateCode}
                    readOnly
                    id="0"
                  />
                  <input
                    type="number"
                    name="1"
                    className="w-[40px] border rounded-sm mr-4 text-center"
                    value={emailUpdateCode[1]}
                    onKeyDown={handleOnChangeForEmailUpdateCode}
                    id="1"
                    readOnly
                  />
                  <input
                    type="number"
                    name="2"
                    className="w-[40px] border rounded-sm mr-4 text-center"
                    value={emailUpdateCode[2]}
                    onKeyDown={handleOnChangeForEmailUpdateCode}
                    id="2"
                    readOnly
                  />
                  <input
                    type="number"
                    name="3"
                    className="w-[40px] border rounded-sm mr-4 text-center"
                    value={emailUpdateCode[3]}
                    onKeyDown={handleOnChangeForEmailUpdateCode}
                    id="3"
                    readOnly
                  />
                  <input
                    type="number"
                    name="4"
                    className="w-[40px] border rounded-sm mr-4 text-center"
                    value={emailUpdateCode[4]}
                    onKeyDown={handleOnChangeForEmailUpdateCode}
                    id="4"
                    readOnly
                  />
                  <input
                    type="number"
                    name="5"
                    className="w-[40px] border rounded-sm text-center"
                    value={emailUpdateCode[5]}
                    onKeyDown={handleOnChangeForEmailUpdateCode}
                    id="5"
                    readOnly
                  />
                </div>

                <ModalFooter>
                  <Button
                    colorScheme={"cyan"}
                    // onClick={handleVerifyEmail}
                    // isDisabled={disabled}
                  >
                    Submit
                  </Button>
                </ModalFooter>
              </div>

              <p className="mb-4 text-sm text-center">
                Please enter the verification code received in {changeToEmail}
              </p>
              <div className="flex justify-center text-center">
                <input
                  type="number"
                  name="7"
                  className="w-[40px] border rounded-sm mr-4 text-center"
                  value={activationCode[7]}
                  onKeyDown={handleOnChangeForEmailActiveCode}
                  readOnly
                  id="7"
                />
                <input
                  type="number"
                  name="8"
                  className="w-[40px] border rounded-sm mr-4 text-center"
                  value={activationCode[8]}
                  onKeyDown={handleOnChangeForEmailActiveCode}
                  id="8"
                  readOnly
                />
                <input
                  type="number"
                  name="9"
                  className="w-[40px] border rounded-sm mr-4 text-center"
                  value={activationCode[9]}
                  onKeyDown={handleOnChangeForEmailActiveCode}
                  id="9"
                  readOnly
                />
                <input
                  type="number"
                  name="10"
                  className="w-[40px] border rounded-sm mr-4 text-center"
                  value={activationCode[10]}
                  onKeyDown={handleOnChangeForEmailActiveCode}
                  id="10"
                  readOnly
                />
                <input
                  type="number"
                  name="11"
                  className="w-[40px] border rounded-sm mr-4 text-center"
                  value={activationCode[11]}
                  onKeyDown={handleOnChangeForEmailActiveCode}
                  id="11"
                  readOnly
                />
                <input
                  type="number"
                  name="12"
                  className="w-[40px] border rounded-sm text-center"
                  value={activationCode[12]}
                  onKeyDown={handleOnChangeForEmailActiveCode}
                  id="12"
                  readOnly
                />
              </div>
              <ModalFooter>
                <Button colorScheme="red" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button
                  colorScheme={"cyan"}
                  // onClick={handleVerifyEmail}
                  // isDisabled={disabled}
                >
                  Submit
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EmailChangeModal;
