import SignIn from "@/components/Auth/SignIn";
import AuthLayout from "@/components/Layouts/AuthLayout";
import React from "react";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>CapitalCoast | Sign In</title>
      </Head>
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    </>
  );
};

export default Index;
