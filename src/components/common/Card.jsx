import React from "react";

const Card = ({
  bgColor,
  px,
  py,
  children,
  flex,
  width,
  justifyCenter,
  mx,
  my,
}) => {
  const bgVariants = {
    "#1b1d21": "bg-[#1b1d21]",
    "#131519": "bg-[#131519]",
    "#2D2E37": "bg-[#2D2E37]",
    "#65DB98": "bg-[#65DB98]",
    "#E26B8D": "bg-[#E26B8D]",
    "#1C1D21": "bg-[#1C1D21]",
    "#63DA9E": "bg-[#63DA9E]",
  };
  const widthVariants = {
    full: "w-[100%]",
    half: "w-[50%]",
    cust76: "w-[76px]",
    cust33: "w-[100%] lg:w-[33%]",
  };
  const paddingX = {
    0: "px-0",
    1: "px-1",
    2: "px-2",
    4: "px-4",
    5: "px-5",
    6: "px-6",
    7: "px-7",
    10: "px-10",
    12: "px-12",
  };
  const paddingY = {
    0: "py-0",
    1: "py-1",
    2: "py-2",
    4: "py-4",
    5: "py-5",
    6: "py-6",
    7: "py-7",
    10: "py-10",
    12: "py-12",
  };
  const marginX = {
    1: "mx-1",
    2: "mx-2",
    4: "mx-4",
    5: "mx-5",
    6: "mx-6",
    7: "mx-7",
  };
  const marginY = {
    1: "my-1",
    2: "my-2",
    4: "my-4",
    5: "my-5",
    6: "my-6",
    7: "my-7",
  };
  const isFlex = "flex";
  const isJustifiedCenter = "justify-center";
  return (
    <div
      className={`${bgColor ? bgVariants[bgColor] : "bg-[#2D2E37]"} ${
        px ? paddingX[px] : "px-4"
      } ${py ? paddingY[py] : "py-4"} rounded-lg ${
        justifyCenter ? isJustifiedCenter : ""
      } ${flex ? isFlex : ""} ${width ? widthVariants[width] : ""} ${
        mx ? marginX[mx] : ""
      } ${my ? marginY[my] : ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
