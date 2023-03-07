import Image from "next/image";
import React from "react";

const Button = ({
  name,
  width,
  handlerFunction,
  icon,
  iconSrc,
  isDisabled,
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (isDisabled) return;
        handlerFunction();
      }}
      className={`font-semibold ${isDisabled ? "" : "cursor-pointer"} ${
        width || "max-w-[150px]"
      } px-4 py-3 rounded-md bg-blue-gradient text-black flex justify-center items-center ${
        isDisabled ? "cursor-not-allowed" : ""
      }`}
    >
      {icon && (
        <Image src={iconSrc} width={30} alt="spinner" className="mr-2" />
      )}
      {name || "Get Started"}
    </button>
  );
};

export default Button;
