import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { motion } from "framer-motion";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.div
      className="fixed w-fit top-28 md:top-8 right-4 md:right-2 lg:right-10 flex gap-1 flex-col md:flex-row bg-gray-300 dark:bg-[#3D3D3D] rounded-full p-1 shadow-lg dark:shadow-gray-700 dark:shadow-md z-10"
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <motion.button
        className="text-2xl bg-white dark:bg-card dark:text-primaryDarkText shadow-lg rounded-full p-1 cursor-pointer"
        onClick={toggleTheme}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
      </motion.button>
    </motion.div>
  );
};

export default DarkMode;
