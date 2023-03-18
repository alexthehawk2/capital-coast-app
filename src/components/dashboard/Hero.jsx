import React from "react";

const Hero = ({ children }) => {
  return (
    <section className="mt-4 mx-12">
      <div className="flex flex-col ss:flex-row justify-between items-center w-[100%] min-h-[100px]">
        {children}
      </div>
    </section>
  );
};

export default Hero;
