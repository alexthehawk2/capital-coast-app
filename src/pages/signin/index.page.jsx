import React from "react";
import SignIn from "../../components/Auth/SignIn";
import AuthLayout from "../../components/Layouts/AuthLayout";

function Page({ urlPathname }) {
  return (
    <AuthLayout urlPathname={urlPathname}>
      <SignIn />
    </AuthLayout>
  );
}
export { Page };
