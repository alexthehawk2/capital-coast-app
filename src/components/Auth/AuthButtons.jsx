import Image from "next/image";
import React from "react";

const AuthButtons = ({ name, icon, handleSubmit }) => {
  return (
    <div
      className="px-2 mb-2 justify-center items-center text-black rounded-lg py-3 cursor-pointer text-center bg-blue-gradient flex sm:odd:mr-6 sm:w-[100%]"
      onClick={handleSubmit}
    >
      {icon && <Image src={icon} alt={icon} className="mr-4" />}
      <span className="text-base font-bold">{name}</span>
    </div>
  );
};

export default AuthButtons;
