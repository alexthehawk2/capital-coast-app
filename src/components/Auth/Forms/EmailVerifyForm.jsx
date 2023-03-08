import postAPI from "@/components/utilities/helpers/postApi";
import { getUserEmail, setUserActive } from "@/features/user/userDetail";
import { Button, ModalFooter } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const EmailVerifyForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [activationCode, setActivationCode] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);

  const handleOnchange = (e) => {
    setError(false);
    const { name, value } = e.target;
    const { key } = e;
    if (key === "Backspace") {
      if (value.length === 0) {
        document.getElementById(parseInt(name) - 1)?.focus();
        setDisabled(true);
        return;
      }
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
  const email = useSelector((state) => state.userDetail.email);
  const handleVerifyEmail = (e) => {
    e.preventDefault();
    const code = Object.values(activationCode).join("");

    console.log(email);
    const payload = {
      enteredCode: code,
      email,
    };
    console.log(payload);
    postAPI("/api/auth/verify-email", payload).then((res) => {
      if (res.status === 1) {
        dispatch(setUserActive());
        onClose();
      } else {
        setError(
          "Entered code is incorrect, please entered the correct code and submit!"
        );
      }
    });
  };
  useEffect(() => {
    if (activationCode) {
      const keys = Object.keys(activationCode);
      // console.log(keys);
      for (let i = 0; i < keys.length; i++) {
        if (activationCode[i] === "") {
          setDisabled(true);
          return;
        }
      }

      setDisabled(false);
    }
  }, [activationCode]);
  return (
    <form>
      <p className="mb-4 text-sm text-center">
        Please enter the verification code received in your Email
      </p>
      <div className="flex justify-center text-center">
        <input
          type="number"
          name="0"
          className="w-[40px] border rounded-sm mr-4 text-center"
          value={activationCode[0]}
          onKeyDown={handleOnchange}
          readOnly
          id="0"
        />
        <input
          type="number"
          name="1"
          className="w-[40px] border rounded-sm mr-4 text-center"
          value={activationCode[1]}
          onKeyDown={handleOnchange}
          id="1"
          readOnly
        />
        <input
          type="number"
          name="2"
          className="w-[40px] border rounded-sm mr-4 text-center"
          value={activationCode[2]}
          onKeyDown={handleOnchange}
          id="2"
          readOnly
        />
        <input
          type="number"
          name="3"
          className="w-[40px] border rounded-sm mr-4 text-center"
          value={activationCode[3]}
          onKeyDown={handleOnchange}
          id="3"
          readOnly
        />
        <input
          type="number"
          name="4"
          className="w-[40px] border rounded-sm mr-4 text-center"
          value={activationCode[4]}
          onKeyDown={handleOnchange}
          id="4"
          readOnly
        />
        <input
          type="number"
          name="5"
          className="w-[40px] border rounded-sm text-center"
          value={activationCode[5]}
          onKeyDown={handleOnchange}
          id="5"
          readOnly
        />
      </div>
      <p
        className={`${
          error ? "error-message show" : "error-message hide"
        } text-center text-red-400 mt-2 `}
      >
        {error}
      </p>
      <ModalFooter>
        <Button colorScheme="red" mr={3} onClick={onClose}>
          Close
        </Button>
        <Button
          colorScheme={"cyan"}
          onClick={handleVerifyEmail}
          isDisabled={disabled}
        >
          Submit
        </Button>
      </ModalFooter>
    </form>
  );
};

export default EmailVerifyForm;
