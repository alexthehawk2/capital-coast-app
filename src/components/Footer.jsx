import { logo } from "@/assets";
import Image from "next/image";
import React from "react";
import { footerLinks, socialMedia } from "../contents/staticContent";
const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row sm:justify-between flex-wrap">
      <div className="flex flex-col pb-5">
        <Image src={logo} alt="logo" className="w-[300px] h-[100px] mb-4" />
        <p className="text-[#ffffff]/70 ml-4">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex flex-row mt-5 pb-5">
        {footerLinks.map((footerLink, index) => {
          return (
            <ul className="flex flex-col  mr-5" key={index}>
              <h1 className="font-semibold mb-2">{footerLink.title}</h1>
              {footerLink.links.map((link, index) => {
                return (
                  <li className="text-white/70 mb-5" key={index}>
                    <a href={link.link}>{link.name}</a>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
      <hr className="w-[100%] mb-5" />
      <div className="w-[100%] p-4 flex flex-col-reverse sm:flex-row justify-between flex-wrap">
        <div className="text-white/70">
          <span className="mr-4">Copyright</span>
          <span className="mr-4">&copy;</span>
          <span className="mr-4">2023 CapitalCoast. All Rights Reserved.</span>
        </div>
        <div className="w-[100%] justify-center flex sm:w-auto mb-4 sm:mb-0">
          <ul className="flex flex-row">
            {socialMedia.map((social, index) => {
              return (
                <li
                  className={`${
                    socialMedia.length - 1 !== index ? "mr-5" : ""
                  }`}
                  key={social.id}
                >
                  <a>
                    <Image
                      src={social.icon}
                      alt={social.id}
                      className="w-[32px]"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
