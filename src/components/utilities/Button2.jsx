import Image from "next/image";
import React from "react";

const Button2 = ({ disabled, name, handlerFunction, icon, iconSrc }) => {
  const disabledClass =
    "p-3 bg-[#3D3939] text-[#555555] rounded-[10px] font-bold cursor-not-allowed";
  const enabledClass =
    "p-3 bg-[#3D3939] rounded-[10px] bg-blue-gradient text-black font-bold";
  return (
    <button
      className={`${
        disabled ? disabledClass : enabledClass
      } text-center flex justify-center items-center`}
      onClick={(e) => handlerFunction(e) || null}
    >
      {icon && <Image src={iconSrc} alt="loader" className="mr-2" width={30} />}
      {name}
    </button>
  );
};

export default Button2;
