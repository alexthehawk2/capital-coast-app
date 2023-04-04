import Dashboard from "@/components/dashboard/Dashboard";
import React, { useEffect } from "react";

const _Dashboard = () => {
  useEffect(() => {
    document.title = "Capital Coast | Dashboard";
  }, []);
  return (
    <div className="min-h-[100vh] bg-[#050505]">
      <Dashboard />
    </div>
  );
};

export default _Dashboard;
