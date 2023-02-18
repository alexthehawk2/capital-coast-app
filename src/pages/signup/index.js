import SignUp from "@/components/Auth/SignUp";
import AuthLayout from "@/components/Layouts/AuthLayout";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>CapitalCoast | Sign Up</title>
      </Head>
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    </>
  );
};

export default index;
