import React, { useState } from "react";
import styles from "../style";
import { close, menu, logo } from "../assets";
import { navLinks } from "../contents/staticContent";
import Image from "next/image";
import Link from 'next/link'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-3 justify-between items-center navbar">
      <Image src={logo} alt="CapitalCoast" className="w-[124px] h-[60px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((item, index) => {
          return (
            <li
              key={item.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                index !== 0 ? "opacity-70" : ""
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            >
              <Link href={`#${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
        >
          <ul className="list-none flex flex-col justify-end items-center">
            {navLinks.map((item, index) => {
              return (
                <li
                  key={item.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  }`}
                >
                  <Link href={`#${item.id}`}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
