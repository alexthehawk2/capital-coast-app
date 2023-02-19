import React, { useEffect } from "react";
import { useRouter } from "next/router";
import checkAuth from "@/components/utilities/helpers/checkAuth";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    async function test() {
      const result = await checkAuth();
      if (result.status === 401) {
        router.push("/signin");
      } else if (result.status === 200) {
      }
    }
    test();
  });
  return <div>secret content</div>;
};

export default Index;
