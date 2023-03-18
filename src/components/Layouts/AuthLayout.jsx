import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div
      className={`w-[100%] bg-[#00040F] flex p-4 sm:p-10 min-h-[100vh] items-center`}
    >
      <div className="auth-container w-[100%] h-[100%] flex">{children}</div>
    </div>
  );
};

export default AuthLayout;
