import Dashboard from "@/components/dashboard/Dashboard";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const _Dashboard = () => {
  const activeStatus = useSelector((state) => state.userDetail.activeStatus);
  const router = useRouter();
  const toast = useToast();
  useEffect(() => {
    document.title = "Capital Coast | Dashboard";
    if (!activeStatus) {
      toast({
        title: "Error",
        description: "Please verify your email to access dashboard",
        status: "error",
        duration: 5000,
        position: "top-right",
      });
      router.push("/dashboard/profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="min-h-[100vh] bg-[#050505]">
      <Dashboard />
    </div>
  );
};

export default _Dashboard;
