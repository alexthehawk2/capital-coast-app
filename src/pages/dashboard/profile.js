import { logo } from "@/assets";
import Sidebar from "@/components/navigation/Sidebar";
import ChangePassword from "@/components/profile/ChangePassword";
import Profile from "@/components/profile/Profile";
import Image from "next/image";
import React, { useEffect } from "react";
const profile = () => {
  useEffect(() => {
    document.title = "Capital Coast | Profile";
    const main = document.querySelector(".main");
    console.log(main.offsetHeight);
    main.style.height = `${main.offsetHeight + 97}px`;
  }, []);
  return (
    <div className="bg-black w-[100vw] h-[auto] p-5 main">
      <div className="flex justify-center">
        <Image src={logo} alt="capital coast logo" height={100} width={200} />
      </div>
      <Sidebar />
      {/* <Profile /> */}
      {/* <ChangePassword /> */}
    </div>
  );
};

export default profile;
