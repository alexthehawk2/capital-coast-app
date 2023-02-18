import SignIn from "@/components/Auth/SignIn";
import AuthLayout from "@/components/Layouts/AuthLayout";
import React from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <AuthLayout urlPathname={router.pathname}>
      <SignIn />
    </AuthLayout>
  );
};

export default Index;
