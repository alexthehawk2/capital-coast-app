import React from "react";
import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} w-[100%] h-[100%] rounded-full bg-primary flex-col`}
      >
        <div className={`${styles.flexStart} flex-col`}>
          <div className="flex flex-row text-gradient font-semibold">
            <p>Get </p>
            <img src={arrowUp} alt="arrow-up" />
          </div>
          <p className="text-gradient font-semibold">Started</p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
