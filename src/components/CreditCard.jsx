import Image from "next/image";
import Link from "next/link";
import React from "react";
import { card } from "../assets";
import Button from "./utilities/Button";

const CreditCard = () => {
  return (
    <section
      id="credit-card"
      className="relative flex flex-col sm:flex-row justify-between mt-5 mb-5"
    >
      <div className="w-[50%] h-[70%] absolute rounded-full z-0 left-[-675px] pink__gradient"></div>
      <div className="w-[100%] sm:max-w-[50%] mb-5 sm:mr-5 sm:mb-0">
        <h1 className="text-4xl font-bold tracking-wide leading-[160%] mb-5 mt-5">
          Find a better card deal in few easy steps.
        </h1>
        <p className="text-[#ffffff]/70 mb-5">
          Get reward points after every purchase using a our rewards credit card
          specially curated for you.
        </p>
        <Link href={"/signup"} className="w-fit block">
          <Button />
        </Link>
      </div>
      <div>
        <Image
          src={card}
          alt="credit-card-dashboard"
          className="max-w-[400px]"
        />
      </div>
    </section>
  );
};

export default CreditCard;
