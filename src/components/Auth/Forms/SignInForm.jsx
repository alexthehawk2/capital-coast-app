import React, { useEffect, useState } from "react";
import AuthButtons from "../AuthButtons";
import openEye from "../../../assets/openEye.svg";
import closedEye from "../../../assets/closedEye.svg";
import Cookies from "js-cookie";
import postAPI from "../../utilities/helpers/getApi";
const SignInForm = ({ toggleToaster }) => {
  const [userData, setUserData] = useState({
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
    postAPI(
      "https://capital-coast-server.onrender.com/api/login",
      userData
    ).then((res) => {
      if (res) {
        if (res.status === 0) {
          toggleToaster(res.message);
        }
      }
    });
  };
  return (
    <form>
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
        <img
          src={showPassword ? closedEye : openEye}
          alt="eye icon"
          className="ml-[-50px] inline cursor-pointer"
          onClick={togglePasswordDisplay}
        />
      </div>
      <AuthButtons name="Login" handleSubmit={onSubmitHandler} />
    </form>
  );
};

export default SignInForm;
