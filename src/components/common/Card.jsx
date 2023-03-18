import React from "react";

const Card = ({ bgColor, px, py, children, flex, width, justifyCenter }) => {
  const bgVariants = {
    "#1b1d21": "bg-[#1b1d21]",
    "#131519": "bg-[#131519]",
    "#2D2E37": "bg-[#2D2E37]",
    "#65DB98": "bg-[#65DB98]",
    "#E26B8D": "bg-[#E26B8D]",
  };
  const widthVariants = {
    full: "w-[100%]",
    half: "w-[50%]",
    cust76: "w-[76px]",
  };
  const paddingX = {
    1: "px-1",
    2: "px-2",
    4: "px-4",
    5: "px-5",
    6: "px-6",
    7: "px-7",
    10: "px-10",
    14: "px-14",
  };
  const paddingY = {
    1: "py-1",
    2: "py-2",
    4: "py-4",
    5: "py-5",
    6: "py-6",
    7: "py-7",
    10: "py-10",
    14: "py-14",
  };
  const isFlex = "flex";
  const isJustifiedCenter = "justify-center";
  return (
    <div
      className={`${bgColor ? bgVariants[bgColor] : "bg-[#2D2E37]"} ${
        px ? paddingX[px] : "px-4"
      } ${py ? paddingY[py] : "py-4"} rounded-lg ${
        justifyCenter ? isJustifiedCenter : ""
      } ${flex ? isFlex : ""} ${width ? widthVariants[width] : ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
