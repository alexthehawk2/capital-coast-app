import Image from "next/image";
import Link from "next/link";
import React from "react";
import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => {
  return (
    <Link href={"/signup"}>
      <div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
      >
        <div
          className={`${styles.flexCenter} w-[100%] h-[100%] rounded-full bg-primary flex-col`}
        >
          <div className={`${styles.flexStart} flex-col`}>
            <div className="flex flex-row text-gradient font-semibold">
              <p>Get </p>
              <Image src={arrowUp} alt="arrow-up" />
            </div>
            <p className="text-gradient font-semibold">Started</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GetStarted;
