import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex flex-col fixed top-40 left-4 items-center gap-3">
      <ul className=" flex flex-col ml-0.5 gap-3">
        <li className=" group flex items-center justify-center border border-emerald-400 hover:bg-emerald-400 rounded-lg pl-2.5 pt-2.5 transform transition-transform duration-300 hover:-translate-y-2">
          <a href="https://github.com/otmaneechchafyky">
            <svg
              className="w-7 h-7 text-emerald-400 group-hover:text-cyan-950"
              viewBox="0 0 24 24"
            >
              <TbBrandGithubFilled />
            </svg>
          </a>
        </li>
        <li className=" group flex items-center justify-center border border-emerald-400 hover:bg-emerald-400 rounded-lg pl-2.5 pt-2.5 transform transition-transform duration-300 hover:-translate-y-2">
          <a href="https://www.linkedin.com/in/otmane-echchafyky/">
            <svg
              className="w-7 h-7 text-emerald-400 group-hover:text-cyan-950"
              viewBox="0 0 24 24"
            >
              <FaLinkedinIn />
            </svg>
          </a>
        </li>
        <li className=" group flex items-center justify-center border border-emerald-400 hover:bg-emerald-400 rounded-lg pl-2.5 pt-2.5 transform transition-transform duration-300 hover:-translate-y-2">
          <a href="https://twitter.com/EchchafykyO">
            <svg
              className="w-7 h-7 text-emerald-400 group-hover:text-cyan-950"
              viewBox="0 0 24 24"
            >
              <FaTwitter />
            </svg>
          </a>
        </li>
      </ul>
      <div className="border border-emerald-400 h-80 w-0.5"></div>
    </div>
  );
};

export default SocialMedia;
