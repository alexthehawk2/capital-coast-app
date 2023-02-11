import React from "react";

const Card = ({ icon, title, content }) => {
  return (
    <div
      className={`cursor-pointer p-4 flex flex-row rounded-lg feature-card mb-2`}
    >
      <div className="flex justify-center items-center">
        <div
          className="rounded-full p-4 flex justify-center items-center mr-4 w-[60px]"
          style={{ backgroundColor: "rgba(9, 151, 124, 0.1)" }}
        >
          <img src={icon} alt={content} className="w-[100%]" />
        </div>
      </div>
      <div>
        <h1 className="font-semibold">{title}</h1>
        <p className="text-[#ffffff]/70">{content}</p>
      </div>
    </div>
  );
};

export default Card;
