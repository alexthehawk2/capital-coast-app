import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#00040F] flex p-4 sm:p-10">
      <div className="auth-container w-[100%] h-[100%]">{children}</div>
    </div>
  );
};

export default AuthLayout;
