import React, { useEffect } from "react";
import { useRouter } from "next/router";
import checkAuth from "@/components/utilities/helpers/checkAuth";

const Index = () => {
  const router = useRouter();
  useEffect(() => {});
  return <div>secret content</div>;
};

export default Index;
