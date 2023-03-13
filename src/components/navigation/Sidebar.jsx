import { logoutIcon, profileIcon } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { clearUserDetail } from "@/features/user/userDetail";
import getAPI from "../utilities/helpers/getApi";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    getAPI("/api/auth/logout").then((res) => {
      dispatch(clearUserDetail());
      router.push("/signin");
    });
  };
  return (
    <div
      className={`p-5 bg-[#232020] flex flex-row fixed bottom-[20px] w-[90%] rounded-[10px] z-[50] sm:flex-col sm:bottom-auto sm:w-auto border border-[skyblue] sm:h-[70vh] sm:left-[20px] sm:justify-between`}
    >
      <Link href="/dashboard/profile">
        <div className="p-2 bg-[#3D3939] rounded-[10px]">
          <Image src={profileIcon} alt="profileIcon" />
        </div>
      </Link>
      <div
        className="p-2 bg-[#3D3939] rounded-[10px] cursor-pointer"
        onClick={logoutHandler}
      >
        <Image src={logoutIcon} alt="profileIcon" width={44} />
      </div>
    </div>
  );
};

export default Sidebar;
