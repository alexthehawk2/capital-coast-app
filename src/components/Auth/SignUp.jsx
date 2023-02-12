import React from "react";
import { newWhiteLogo } from "../../assets";
const SignUp = () => {
  return (
    <>
      <div className="w-[40%] h-[100%] hidden md:flex text-white">left</div>
      <div className="w-[100%] md:w-[60%] h-[100%] flex flex-col text-white">
        <div>
          <img
            src={newWhiteLogo}
            alt="CapitalCoast logo"
            className="w-[124px] h-[60px] md:hidden"
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
