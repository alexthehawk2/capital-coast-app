import Image from "next/image";
import React from "react";
import { discount, robot } from "../assets";
import styles from "../style";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      id="home"
    >
      <div
        className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 ${styles.flexStart}`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 text-[12px]">
          <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <span className="ml-1">Get 25$&nbsp;</span>
          <span className="opacity-60">on first&nbsp;</span>
          <span>transaction&nbsp;</span>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className={styles.heading}>
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>
            <br /> Payment Method.
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <div className="w-[100%] mt-[40px]">
          <p className={`${styles.paragraph}`}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
        <Image
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[47%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className="flex justify-center md:mr-4 mr-0 ss:hidden">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
