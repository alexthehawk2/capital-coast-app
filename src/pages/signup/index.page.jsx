import React from "react";
import SignUp from "../../components/Auth/SignUp";
import AuthLayout from "../../components/Layouts/AuthLayout";

function Page() {
  return (
    <AuthLayout>
      <SignUp />
    </AuthLayout>
  );
}
export { Page };
