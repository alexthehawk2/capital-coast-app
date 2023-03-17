import Image from "next/image";
import React from "react";
import { logo, hamEffect, hamStatic } from "@/assets";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [menuIcon, setMenuIcon] = React.useState(hamStatic);
  const user = useSelector((state) => state.userDetail.firstName);
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    {
      name: "Profile",
      href: "/dashboard/profile",
    },
    {
      name: "Logout",
      href: "/logout",
    },
  ];
  const toggle = () => {
    setIsOpen(!isOpen);
    setMenuIcon(isOpen ? hamStatic : hamEffect);
  };
  return (
    <>
      <nav className="bg-[rgb(34,35,40)] p-2 flex justify-between ss:justify-between flex-wrap">
        <div className="ml-[3rem] py-2 nav-item">
          <Image src={logo} alt="logo" width={120} />
        </div>
        <ul className="ss:flex items-center hidden">
          {navItems.map((item, index) => {
            return (
              <li key={index} className="nav-li">
                <Link
                  href={item.href}
                  className={router.pathname == item.href ? "active" : ""}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="nav-item flex justify-end ss:hidden" onClick={toggle}>
          <Image src={menuIcon} alt="logo" className="mr-2 ham-icon" />
        </div>
        <ul
          className={`text-white nav-item nav-menu ss:hidden ${
            !isOpen ? "nav-hide" : ""
          }`}
        >
          {navItems.map((item, index) => (
            <li key={index} className={`mr-2 ss:hidden nav-li`}>
              <Link
                href={item.href}
                className={router.pathname == item.href ? "active" : ""}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className=" w-[3.2rem] mr-[3rem] p-1 hidden ss:block">
          <div className="rounded-full h-[100%] text-white flex justify-center items-center bg-[#5D9C59]">
            {user[0].toUpperCase()}
          </div>
        </div>
      </nav>
      {/* <div style={{ backgroundColor: "skyblue", height: "100px" }}></div> */}
    </>
  );
};

export default Navbar;
