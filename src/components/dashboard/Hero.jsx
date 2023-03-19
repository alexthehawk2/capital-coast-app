import React from "react";

const Hero = ({ children }) => {
  return (
    <section className="mt-4 mx-2 ss:mx-12">
      <div className="flex flex-col ss:flex-row items-stretch w-[100%] h-[100%]">
        {children}
      </div>
    </section>
  );
};

export default Hero;
