import SignIn from "@/components/Auth/SignIn";
import AuthLayout from "@/components/Layouts/AuthLayout";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Index = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>CapitalCoast | Sign In</title>
      </Head>
      <AuthLayout urlPathname={router.pathname}>
        <SignIn />
      </AuthLayout>
    </>
  );
};

export default Index;
