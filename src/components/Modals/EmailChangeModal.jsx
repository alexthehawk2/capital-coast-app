import React, { useState } from "react";
import { forwardRef, useEffect } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  useToast,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import postAPI from "../utilities/helpers/postApi";
import Image from "next/image";
import { codeVerified, lockDynamic, lockStatic } from "@/assets";
import { getCookie } from "../utilities/helpers/helpers";
import { setUserDetail } from "@/features/user/userDetail";

// eslint-disable-next-line react/display-name
const EmailChangeModal = forwardRef(
  ({ changeToEmail, firstName, lastName, setUserData }, ref) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    React.useImperativeHandle(ref, () => ({
      onOpen,
      onClose,
    }));
    const dispatch = useDispatch();
    const [isDisabledForEmailCodeBtn, setIsDisabledForEmailCodeBtn] =
      useState(true);
    const [isDisabledForActiveCodeBtn, setIsDisabledForActiveCodeBtn] =
      useState(true);
    const [
      isAllowedToSubmitCodeForNewEmail,
      setIsAllowedToSubmitCodeForNewEmail,
    ] = useState(false);
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
          return;
        }
        setEmailUpdateCode((prev) => {
          return {
            ...prev,
            [name]: "",
          };
        });

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
          return;
        }
        setActivationCode((prev) => {
          return {
            ...prev,
            [name]: "",
          };
        });

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

    useEffect(() => {
      const keys = Object.keys(emailUpdateCode);
      for (let i = 0; i < keys.length; i++) {
        if (emailUpdateCode[i] === "") {
          setIsDisabledForEmailCodeBtn(true);
          return;
        }
      }
      setIsDisabledForEmailCodeBtn(false);
    }, [emailUpdateCode]);

    useEffect(() => {
      const keys = Object.keys(activationCode);
      for (let i = 0, x = 7; i < keys.length; i++, x++) {
        if (activationCode[x] === "") {
          setIsDisabledForActiveCodeBtn(true);
          return;
        }
      }

      setIsDisabledForActiveCodeBtn(false);
    }, [activationCode]);
    const UserEmail = useSelector((state) => state.userDetail.email);

    const handleVerifyEmail = (type) => {
      if (type === "currentEmail") {
        const payload = {
          email: UserEmail,
          emailUpdateCode: Object.values(emailUpdateCode).join(""),
          type: "emailUpdateCodeVerify",
        };
        postAPI("/api/profile/update-profile", payload).then((res) => {
          if (res.status === 1) {
            toast({
              title: "Success",
              description: res.message,
              status: "success",
              duration: 3000,
              position: "top-right",
            });
            const div = document.getElementById("verify-email-1");
            div.classList.add("blur-effect");
            const imageDiv = document.getElementById("verified2");
            const blurDiv2 = document.getElementById("verify-email-2");
            setIsAllowedToSubmitCodeForNewEmail(true);
            const intervalId = setInterval(() => {
              imageDiv.classList.add("hidden");
              blurDiv2.classList.remove("blur-effect");
            }, 700);
            const timeoutId = setTimeout(() => {
              clearInterval(intervalId);
              clearTimeout(timeoutId);
            }, 1000); // clear both the interval and timeout after 1 second
          } else {
            toast({
              title: "Error",
              description: res.message + ", please try again",
              status: "error",
              duration: 3000,
              position: "top-right",
            });
          }
        });
      } else if (type === "newEmail") {
        const body = {
          email: UserEmail,
          enteredCode: Object.values(activationCode).join(""),
          payload: {
            changeEmail: changeToEmail,
            firstName,
            lastName,
          },
          type: "activationCodeVerify",
        };
        postAPI("/api/profile/update-profile", body).then((res) => {
          if (res.status === 1) {
            toast({
              title: "Success",
              description: res.message,
              status: "success",
              duration: 3000,
              position: "top-right",
            });
            const user = JSON.parse(getCookie("user"));
            user.email = changeToEmail;
            user.firstName = firstName;
            user.lastName = lastName;
            document.cookie = `user=${JSON.stringify(user)}; path=/`;
            dispatch(setUserDetail(user));
            onClose();
          } else {
            toast({
              title: "Error",
              description: res.message + ", please try again",
              status: "error",
              duration: 3000,
              position: "top-right",
            });
          }
        });
      }
    };
    return (
      <>
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setEmailUpdateCode((prev) => {
              return {
                ...prev,
                0: "",
                1: "",
                2: "",
                3: "",
                4: "",
                5: "",
              };
            });
            setActivationCode((prev) => {
              return {
                ...prev,
                7: "",
                8: "",
                9: "",
                10: "",
                11: "",
                12: "",
              };
            });
            setIsAllowedToSubmitCodeForNewEmail(false);
            setUserData(() => {
              const user = JSON.parse(getCookie("user"));
              return {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
              };
            });
            onClose();
          }}
          closeOnOverlayClick={false}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Email Update Verification</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form>
                <div id="verify-email-1" className="relative">
                  {isAllowedToSubmitCodeForNewEmail && (
                    <div className="absolute" id="verified">
                      <Image src={codeVerified} alt="verified" width={50} />
                    </div>
                  )}
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
                      onClick={() => handleVerifyEmail("currentEmail")}
                      isDisabled={isDisabledForEmailCodeBtn}
                    >
                      Submit
                    </Button>
                  </ModalFooter>
                </div>
                <div id="verify-email-2" className={`relative blur-effect`}>
                  <div className="absolute" id="verified2">
                    <Image
                      src={
                        isAllowedToSubmitCodeForNewEmail
                          ? lockDynamic
                          : lockStatic
                      }
                      alt="verified"
                      width={50}
                    />
                  </div>
                  <p className="mb-4 text-sm text-center mt-4">
                    Please enter the verification code received in{" "}
                    {changeToEmail}
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
                    <Button
                      colorScheme="red"
                      mr={3}
                      onClick={() => {
                        setEmailUpdateCode((prev) => {
                          return {
                            ...prev,
                            0: "",
                            1: "",
                            2: "",
                            3: "",
                            4: "",
                            5: "",
                          };
                        });
                        setActivationCode((prev) => {
                          return {
                            ...prev,
                            7: "",
                            8: "",
                            9: "",
                            10: "",
                            11: "",
                            12: "",
                          };
                        });
                        setIsAllowedToSubmitCodeForNewEmail(false);
                        setUserData((prev) => {
                          const user = JSON.parse(getCookie("user"));
                          return {
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                          };
                        });
                        onClose();
                      }}
                    >
                      Close
                    </Button>
                    <Button
                      colorScheme={"cyan"}
                      onClick={() => handleVerifyEmail("newEmail")}
                      isDisabled={isDisabledForActiveCodeBtn}
                    >
                      Submit
                    </Button>
                  </ModalFooter>
                </div>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
);
export default EmailChangeModal;
