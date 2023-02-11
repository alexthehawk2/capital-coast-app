import React from "react";
import CapitalCoast from "../assets/CapitalCoast.png";
import { footerLinks } from "../contents/staticContent";
const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row">
      <div className="flex flex-col">
        <img src={CapitalCoast} alt="logo" />
        <p className="text-[#ffffff]/70">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div>
        {footerLinks.map((footerLink, index) => {
          return (
            <ul className="flex flex-col" key={index}>
              <h1 className="font-bold">{footerLink.title}</h1>
            </ul>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
