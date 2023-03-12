import Link from "next/link";
import React from "react";
import Button from "./utilities/Button";

const TryService = () => {
  return (
    <section id="try-us">
      <div className="flex flex-col sm:flex-row bg-black-gradient rounded-lg px-6 py-8 justify-between">
        <div className="w-[100%] mb-5 sm:max-w-[50%] sm:mb-0">
          <h1 className="mb-5 text-4xl font-bold tracking-wide leading-[160%] ">
            Let’s try our service now!
          </h1>
          <p className="text-[#ffffff]/70">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="flex flex-col justify-center w-[100%] sm:max-w-[30%]">
          <Link className="w-fit" href={"/signup"}>
            <Button />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TryService;
