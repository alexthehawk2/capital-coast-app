import React from "react";
import { google, apple, bill } from "../assets";
const Billing = () => {
  return (
    <section id="billing" className="flex flex-col sm:flex-row relative">
      <div className="w-[50%] h-[70%] absolute rounded-full z-0 left-[-310px] blue__gradient"></div>
      <div className="mr-5 mb-5 sm:mb-0">
        <img src={bill} alt="billing" className="max-w-[400px]" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold tracking-wide leading-[160%] mb-5 mt-5">
          Easily control your billing & invoicing.
        </h1>
        <p className="text-[#ffffff]/70">
          Transactions are super-fast with our payment network, making it easier
          for you enjoy seamless billing & invoicing.
        </p>
        <div className="flex flex-row mt-5">
          <img
            src={apple}
            alt="apple store"
            className="cursor-pointer mr-5 max-w-[128px]"
          />
          <img
            src={google}
            alt="play store"
            className="cursor-pointer mr-5 max-w-[128px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
