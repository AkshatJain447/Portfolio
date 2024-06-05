import React from "react";
import { Link } from "react-scroll";
import { FaHome } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="absolute top-8 right-4 md:right-8 lg:right-16 flex gap-1 flex-col md:flex-row bg-gray-300 rounded-full p-1 shadow-lg z-10">
      <a
        href="#Home"
        className="text-2xl bg-white shadow-lg rounded-full p-1 cursor-pointer"
      >
        <FaHome />
      </a>
      <a
        href="#Projects"
        className="text-2xl bg-white shadow-lg rounded-full p-1 cursor-pointer"
      >
        <BiBriefcase />
      </a>
    </div>
  );
};

export default Navbar;
