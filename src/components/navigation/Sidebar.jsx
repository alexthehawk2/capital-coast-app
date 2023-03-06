import { profileIcon } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div
      className={`p-5 bg-[#232020] flex flex-row fixed bottom-[20px] w-[90%] rounded-[10px] z-[50] sm:flex-col sm:bottom-auto sm:w-auto border border-[skyblue] sm:h-[70vh] sm:left-[20px]`}
    >
      <Link href="/dashboard/profile">
        <div className="p-2 bg-[#3D3939] rounded-[10px]">
          <Image src={profileIcon} alt="profileIcon" />
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
