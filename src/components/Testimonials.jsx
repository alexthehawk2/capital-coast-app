import React from "react";
import { feedback } from "../contents/staticContent";
import TestimonyCard from "./utilities/TestimonyCard";
const Testimonials = () => {
  return (
    <section id="testimonials" className="flex flex-col relative">
      <div className="flex flex-col sm:flex-row p-4">
        <h1 className="text-4xl font-bold tracking-wide leading-[160%] mb-5">
          What people are saying about us
        </h1>
        <p className="text-[#ffffff]/70 mt-4">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex flex-col items-center sm:flex-row cursor-pointer">
        {feedback.map((item) => {
          return <TestimonyCard key={item.id} {...item} />;
        })}
      </div>
      <div className="absolute rounded-[200px] blue__gradient rotate-48 w-[50%] h-[40%] top-[30%] right-[-40%]"></div>
    </section>
  );
};

export default Testimonials;
