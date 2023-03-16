import Image from "next/image";
import React from "react";
import { hamburgerIcon, logo } from "@/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navItems = ["Home", "Home", "Home"];
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-[rgb(34,35,40)] p-2 flex justify-between flex-wrap">
        <div className="ml-4 py-2 nav-item">
          <Image src={logo} alt="logo" width={120} />
        </div>
        <div className="nav-item flex justify-end" onClick={toggle}>
          <Image
            src={hamburgerIcon}
            alt="logo"
            width={50}
            className="mr-2"
            attributes={{
              loop: false,
            }}
          />
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
