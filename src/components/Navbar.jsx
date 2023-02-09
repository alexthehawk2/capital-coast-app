import React from "react";
import styles from "../style";
import { close, logoPng, menu, logoBlack, logoWhite } from "../assets";
import { navLinks } from "../contents/staticContent";
const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logoWhite} alt="CapitalCoast" className="w-[124px] h-[60px]" />
      <ul className="flex-row w-[50%]">
        {navLinks.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
