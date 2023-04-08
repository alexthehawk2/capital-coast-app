import Image from "next/image";
import React from "react";
import { logo, hamEffect, hamStatic } from "@/assets";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import getAPI from "../utilities/helpers/getApi";
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
  const logoutHandler = () => {
    getAPI("/api/auth/logout").then((res) => {
      router.push("/signin");
    });
  };
  return (
    <>
      <nav className="bg-[rgb(34,35,40)] p-2 flex justify-between ss:justify-between flex-wrap">
        <div className="ml-[3rem] py-2 nav-item">
          <Image src={logo} alt="logo" width={120} />
        </div>
        <ul className="ss:flex items-center hidden">
          {navItems.map((item, index) => {
            return item.name !== "Logout" ? (
              <li key={index} className="nav-li">
                <Link
                  href={item.href}
                  className={
                    router.pathname == item.href
                      ? "active"
                      : "" && "cursor-pointer"
                  }
                >
                  {item.name}
                </Link>
              </li>
            ) : (
              <li
                key={index}
                className="nav-li text-[#9fa3a8] cursor-pointer"
                onClick={logoutHandler}
              >
                <span>Logout</span>
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
          {navItems.map((item, index) => {
            return item.name !== "Logout" ? (
              <li key={index} className="nav-li  mr-2">
                <Link
                  href={item.href}
                  className={`${router.pathname == item.href ? "active" : ""}`}
                >
                  {item.name}
                </Link>
              </li>
            ) : (
              <li
                key={index}
                className="nav-li text-[#9fa3a8] cursor-pointer mr-0"
                onClick={logoutHandler}
              >
                <a className="inline-block w-full">Logout</a>
              </li>
            );
          })}
        </ul>
        <div className=" w-[3.2rem] mr-[3rem] p-1 hidden ss:block">
          <div className="rounded-full h-[100%] text-white flex justify-center items-center bg-[#5D9C59] font-semibold">
            {user[0].toUpperCase()}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
