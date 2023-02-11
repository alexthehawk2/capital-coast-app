import React from "react";

import { Button, Card } from "../components";
import { features } from "../contents/staticContent";
const Business = () => {
  return (
    <section id="business" className="flex flex-col sm:flex-row px-16 py-10">
      <div className="flex flex-col justify-around py-5 sm:py-0">
        <h1 className="text-4xl font-bold tracking-wide leading-[160%] mb-5">
          You do the business,
          <br />
          we’ll handle the money.
        </h1>
        <p className="opacity-70 mb-5 max-w-[75%]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button />
      </div>
      <div className=" sm:ml-5">
        {features.map((feature, index) => {
          return <Card key={feature.id} {...feature} index={index} />;
        })}
      </div>
    </section>
  );
};

export default Business;
