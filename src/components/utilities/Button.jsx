import React from "react";

const Button = ({ name, width, handlerFunction }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handlerFunction();
      }}
      className={`font-semibold cursor-pointer ${
        width || "max-w-[150px]"
      } px-4 py-3 rounded-md bg-blue-gradient text-black`}
    >
      {name || "Get Started"}
    </button>
  );
};

export default Button;
