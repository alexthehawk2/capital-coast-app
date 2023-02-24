import React, { useState } from "react";
import AuthButtons from "../AuthButtons";
import openEye from "../../../assets/openEye.svg";
import closedEye from "../../../assets/closedEye.svg";
import Image from "next/image";
import postAPI from "@/components/utilities/helpers/postApi";
const SignUpForm = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const onInputChangeHandler = (e, type) => {
    setUserData({
      ...userData,
      [type]: e.target.value,
    });
  };
  const togglePasswordDisplay = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitHandler = () => {
    const apiRoute = "/api/auth/signup";
    postAPI(apiRoute, userData).then((res) => {
      try {
        if (res) {
          if (res.status === 0) {
            toggleToaster(res.message);
          } else if (res.status === 1) {
            // window.location.href = "/dashboard";
          }
        }
      } catch (e) {
        toggleToaster(e.message);
      }
    });
  };
  return (
    <form>
      <div className="mb-2">
        <input
          type="text"
          placeholder="First Name"
          className="placeholder:text-[#ffffff]/20 rounded-lg w-[100%] mb-2 bg-[#363D3E] px-4 py-3 focus-visible:outline-[1px] focus-visible:outline-[#75CDFF]"
          onChange={(e) => onInputChangeHandler(e, "firstName")}
          value={userData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="placeholder:text-[#ffffff]/20 rounded-lg w-[100%] bg-[#363D3E] px-4 py-3 focus-visible:outline-[1px] focus-visible:outline-[#75CDFF]"
          onChange={(e) => onInputChangeHandler(e, "lastName")}
          value={userData.lastName}
        />
      </div>
      <div className="w-[100%] mb-2">
        <input
          type="email"
          className="bg-[#363D3E] placeholder:text-[#ffffff]/20 px-4 py-3 rounded-lg w-[100%] focus-visible:outline-[1px] focus-visible:outline-[#75CDFF]"
          onChange={(e) => onInputChangeHandler(e, "email")}
          placeholder="Email"
          value={userData.email}
        />
      </div>
      <div className="w-[100%] mb-4">
        <input
          type={showPassword ? "text" : "password"}
          className="bg-[#363D3E] placeholder:text-[#ffffff]/20 px-4 py-3 rounded-lg w-[100%] focus-visible:outline-[1px] focus-visible:outline-[#75CDFF]"
          onChange={(e) => onInputChangeHandler(e, "password")}
          placeholder="Password"
          value={userData.password}
        />
        <Image
          src={showPassword ? closedEye : openEye}
          alt="eye icon"
          className="ml-[-50px] inline cursor-pointer"
          onClick={togglePasswordDisplay}
        />
      </div>
      <p className="mb-4 text-sm font-semibold">
        By signing up, you are accepting our{" "}
        <a href="#" className="text-[#2476F1]">
          terms and conditions
        </a>{" "}
        and{" "}
        <a href="#" className="text-[#2476F1]">
          privacy policy
        </a>
        .
      </p>
      <AuthButtons name="Sign Up" handleSubmit={onSubmitHandler} />
    </form>
  );
};

export default SignUpForm;
