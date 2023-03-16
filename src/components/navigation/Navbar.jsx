import Image from "next/image";
import React from "react";
import { logo, hamEffect, hamStatic } from "@/assets";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [menuIcon, setMenuIcon] = React.useState(hamStatic);
  const navItems = ["Home", "Home", "Home"];
  const toggle = () => {
    setIsOpen(!isOpen);
    setMenuIcon(isOpen ? hamStatic : hamEffect);
  };
  return (
    <>
      <nav className="bg-[rgb(34,35,40)] p-2 flex justify-between flex-wrap">
        <div className="ml-4 py-2 nav-item">
          <Image src={logo} alt="logo" width={120} />
        </div>
        <div className="nav-item flex justify-end" onClick={toggle}>
          <Image src={menuIcon} alt="logo" className="mr-2 ham-icon" />
        </div>
        <ul
          className={`text-white nav-item nav-menu ${
            !isOpen ? "nav-hide" : ""
          }`}
        >
          {navItems.map((item, index) => (
            <li key={index} className={`nav-li`}>
              {item}
            </li>
          ))}
        </ul>
        {/* <div className="hidden"></div> */}
      </nav>
      {/* <div style={{ backgroundColor: "skyblue", height: "100px" }}></div> */}
    </>
  );
};

export default Navbar;
