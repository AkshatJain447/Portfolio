import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

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
    <div className="fixed w-fit top-28 md:top-8 right-4 md:right-2 lg:right-10 flex gap-1 flex-col md:flex-row bg-gray-300 dark:bg-gray-700 rounded-full p-1 shadow-lg dark:shadow-gray-600 dark:shadow-md z-10">
      <button
        className="text-2xl bg-white dark:bg-gray-800 dark:text-gray-200 shadow-lg rounded-full p-1 cursor-pointer"
        onClick={toggleTheme}
      >
        {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </div>
  );
};

export default DarkMode;
