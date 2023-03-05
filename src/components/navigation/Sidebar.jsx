import { profileIcon } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="p-5 bg-[#232020] flex flex-row fixed bottom-[20px] w-[90%] rounded-[10px] z-[50] md:flex-col">
      <Link href="/dashboard/profile">
        <div className="p-2 bg-[#3D3939] rounded-[10px]">
          <Image src={profileIcon} alt="profileIcon" />
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
