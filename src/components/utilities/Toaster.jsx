import React, { useState } from "react";

const Toaster = ({ toggleDisplay }) => {
  return (
    <div
      id="toaster1"
      className="absolute right-[20px] top-[20px] px-10 py-5 text-center max-w-[400px] text-black bg-cyan-300 rounded-lg z-50 toaster"
    >
      <p className="text-center">{toggleDisplay}</p>
    </div>
  );
};

export default Toaster;
