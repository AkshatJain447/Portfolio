import React from "react";
import { FaHome } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="fixed w-fit top-8 right-4 md:right-12 lg:right-20 flex gap-1 flex-col md:flex-row bg-gray-300 dark:bg-gray-700 rounded-full p-1 shadow-lg dark:shadow-gray-600 dark:shadow-md z-10 md:mr-1">
      <button
        className="text-2xl bg-white dark:bg-gray-800 dark:text-gray-200 shadow-lg rounded-full p-1 cursor-pointer"
        onClick={() => {
          const homeRef = document.getElementById("Home");
          homeRef.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <FaHome />
      </button>
      <button
        className="text-2xl bg-white dark:bg-gray-800 dark:text-gray-200 shadow-lg rounded-full p-1 cursor-pointer"
        onClick={() => {
          const projectRef = document.getElementById("Projects");
          projectRef.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <BiBriefcase />
      </button>
    </div>
  );
};

export default Navbar;
