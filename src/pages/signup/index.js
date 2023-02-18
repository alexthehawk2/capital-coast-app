import SignUp from "@/components/Auth/SignUp";
import AuthLayout from "@/components/Layouts/AuthLayout";
import React from "react";

const index = () => {
  return (
    <AuthLayout>
      <SignUp />
    </AuthLayout>
  );
};

export default index;
