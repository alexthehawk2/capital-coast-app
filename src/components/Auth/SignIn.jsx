import React, { useEffect } from "react";
import Link from "next/link";
import {
  appleAuthIcon,
  authShield,
  bill,
  googleAuthIcon,
  logo,
} from "../../assets";
import AuthButtons from "./AuthButtons";
import SignInForm from "./Forms/SignInForm";
import Toaster from "../utilities/Toaster";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { clearUserDetail } from "@/features/user/userDetail";
import { getCookie } from "../utilities/helpers/helpers";
const SignIn = () => {
  const [displayToaster, setDisplayToaster] = React.useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!getCookie("user")) {
      dispatch(clearUserDetail());
    }
  });
  return (
    <>
      {displayToaster && <Toaster toggleDisplay={displayToaster} />}
      <div className="w-[40%] h-[100%] hidden sm:flex text-white px-10 py-5 sm:flex-col sm:items-center">
        <Image
          src={logo}
          alt={"CapitalCoast Logo"}
          className="mb-16 w-[200px] h-[100px]"
        />
        <Image src={bill} alt={"Hero image"} className="mb-2 max-w-[430px]" />
        <h1 className="mb-4 text-center text-2xl font-bold">
          You are about to enter the
          <br />
          world of payments
        </h1>
      </div>
      <div className="auth__right-container rounded-tr-[32px]  w-[100%] md:w-[60%] h-[100%] flex flex-col text-white rounded-tl-[32px] ">
        <div className="p-5 rounded-tl-[32px] flex justify-center relative flex-col h-[100%]">
          <div className="flex justify-center md:hidden">
            <Image
              src={logo}
              alt="CapitalCoast logo"
              className="w-[124px] h-[60px] "
            />
          </div>
          <div className="flex flex-col w-[100%] h-[100%]">
            <div className="flex flex-col items-center mb-2">
              <h1 className="text-2xl font-bold mb-5 text-center">
                Login to your account
              </h1>
              <p className="text-xs text-center">
                we&apos;ll get you started in no time!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row px-5 sm:justify-center mb-5">
              <AuthButtons icon={googleAuthIcon} name="Login with Google" />
              <AuthButtons icon={appleAuthIcon} name="Login with Apple" />
            </div>
            <div className="px-5">
              <div className="w-[100%] h-[20px] border-b-[1px] border-[#BBB4E3] text-center mb-11">
                <span className="text-[14px] bg-[#0e0e0f] relative px-[10px] bottom-[-5px]">
                  or with email
                </span>
              </div>
            </div>
            <div className="px-5 mb-2">
              <SignInForm setDisplayToaster={setDisplayToaster} />
            </div>
            <p className="text-center mb-2">
              New in here ?{" "}
              <Link href="/signup" className="text-[#2476F1] font-semibold">
                Create an account
              </Link>
            </p>
            <div className="flex flex-row justify-between mt-auto">
              <Image
                src={authShield}
                alt="AuthShield"
                width={"32px"}
                height={"32px"}
              />
              <p>Copyright 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
