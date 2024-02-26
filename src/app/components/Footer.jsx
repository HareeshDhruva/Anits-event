import React from "react";
import { footerLinks } from "../data/Data";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex justify-between items-center flex-wrap gap-5 sm:px-16 px-6 py-10 ">
        <div className="text-white">
          <span className="text-[#ff6694] font-bold">ANITS FEST 2K24</span>
          <br/>
          <div className>
          <p className="flex-wrap max-w-[400px] text-gray-400">
          A diverse array of competitions and cultural showcases awaits, promising excitement for all!
          </p>
          </div>
        </div>
        <div className="flex gap-10">
          {footerLinks.map((link) => (
            <div key={link.title}>
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <li
                  key={item.title}
                  href={item.url}
                  className="text-gray-400 flex"
                >
                  {item.title}
                </li>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr className="bgone w-[80%] m-auto" />
      <div className="flex justify-end items-center flex-wrap sm:px-16 px-6 py-8">
        <div>
          <p>@2024 hareesh dhruva. All Rights Reserved</p>
          <ul href="/" className="text-gray-400">
            Privacy Policy
          </ul>
          <ul href="/" className="text-gray-400">
            Terms of use
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
