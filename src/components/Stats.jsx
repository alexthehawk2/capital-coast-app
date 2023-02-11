import React from "react";
import { stats } from "../contents/staticContent";
import styles from "../style";

const Stats = () => {
  return (
    <section
      id="stats"
      className={`flex flex-col items-start sm:flex-row  ${styles.paddingY} lg:justify-center`}
    >
      {stats.map((stat, index) => {
        return (
          <div className="flex items-center flex-start mb-6 pl-10" key={index}>
            <span className="text-4xl font-semibold mr-4">{stat.value}</span>
            <span className="text-gradient mr-4">{stat.title}</span>
            {index !== stats.length - 1 && (
              <span className="ml-4 hidden sm:block">|</span>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Stats;
