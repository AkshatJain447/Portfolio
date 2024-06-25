import React from "react";
import { FaHome } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      className="fixed w-fit top-8 right-4 md:right-12 lg:right-20 flex gap-1 flex-col md:flex-row bg-gray-300 dark:bg-[#3D3D3D] rounded-full p-1 shadow-lg dark:shadow-gray-700 dark:shadow-md z-10 md:mr-1"
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <motion.button
        className="text-2xl bg-white dark:bg-card dark:text-primaryDarkText shadow-lg rounded-full p-1 cursor-pointer"
        onClick={() => {
          const homeRef = document.getElementById("Home");
          homeRef.scrollIntoView({
            behavior: "smooth",
          });
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaHome />
      </motion.button>
      <motion.button
        className="text-2xl bg-white dark:bg-card dark:text-primaryDarkText shadow-lg rounded-full p-1 cursor-pointer"
        onClick={() => {
          const projectRef = document.getElementById("Projects");
          projectRef.scrollIntoView({
            behavior: "smooth",
          });
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
      >
        <BiBriefcase />
      </motion.button>
    </motion.div>
  );
};

export default Navbar;
