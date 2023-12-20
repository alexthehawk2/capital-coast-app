import React, { useEffect, useState } from "react";
import AuthButtons from "../AuthButtons";
import openEye from "../../../assets/openEye.svg";
import closedEye from "../../../assets/closedEye.svg";
import postAPI from "../../utilities/helpers/postApi";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { setUserDetail } from "@/features/user/userDetail";
import { useRouter } from "next/router";
import { toggleToaster } from "@/components/utilities/helpers/helpers";
const SignInForm = ({ setDisplayToaster }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  function parseJwt(token) {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

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
    const apiRoute = "/api/auth/login";
    postAPI(apiRoute, userData).then((res) => {
      try {
        if (res) {
          if ((res.status = "500")) {
            toggleToaster(res.message, setDisplayToaster);
            return;
          }
          if (res.status === "0") {
            toggleToaster(res.message, setDisplayToaster);
          } else if (res.status === "1") {
            const { token } = res;
            const user = parseJwt(token);
            dispatch(setUserDetail(user));
            router.push("/dashboard");
          }
        }
      } catch (e) {
        toggleToaster(e.message, setDisplayToaster);
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
        <Image
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
