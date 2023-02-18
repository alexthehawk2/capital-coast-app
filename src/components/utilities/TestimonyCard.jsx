import Image from "next/image";
import React from "react";
import { quotes } from "../../assets";
const TestimonyCard = ({ content, img, name, title }) => {
  return (
    <div className="p-5 flex flex-col feedback-card rounded-lg my-5 h-[400px] w-[400px] justify-evenly">
      <Image src={quotes} alt="quotes" className="max-w-[32px] mb-4" />
      <p className="text-white mb-4">{content}</p>
      <div className="flex flex-row">
        <Image src={img} alt={name} className="max-w-[40px] mr-4" />
        <div className="flex flex-col">
          <h1 className="">{name}</h1>
          <p className="text-[#ffffff]/70">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
