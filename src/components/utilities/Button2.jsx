import React from "react";

const Button2 = ({ disabled, name }) => {
  const disabledClass =
    "p-3 bg-[#3D3939] text-[#555555] rounded-[10px] font-bold cursor-not-allowed";
  const enabledClass =
    "p-3 bg-[#3D3939] rounded-[10px] bg-blue-gradient text-black font-bold";
  return (
    <button className={disabled ? disabledClass : enabledClass}>{name}</button>
  );
};

export default Button2;
