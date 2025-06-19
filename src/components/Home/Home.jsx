import "./Home.css";
import profPic from "../../assets/photo.png";
<<<<<<< HEAD
import Resume from "../../assets/Akshat_Jain_Resume.pdf";
=======
import Resume from "../../assets/Akshat Jain.pdf";
>>>>>>> 412e5420a65817da8ed79ffac34ccd908cc265b3
import { SiGmail } from "react-icons/si";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaMobileAlt,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";
import cIcon from "../../assets/c++.svg";
import javaIcon from "../../assets/java.svg";
import htmlIcon from "../../assets/html-1.svg";
import cssIcon from "../../assets/css-3.svg";
import jsIcon from "../../assets/logo-javascript.svg";
import reactIcon from "../../assets/react-2.svg";
import reduxIcon from "../../assets/redux.svg";
import tailwindIcon from "../../assets/tailwindcss.svg";
import gitIcon from "../../assets/git-icon.svg";
import firebaseIcon from "../../assets/firebase-2.svg";
import netlifyIcon from "../../assets/netlify.svg";
import { useState } from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";

const Modal = ({ children }) => {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-fit bg-white dark:bg-card w-[90%] md:w-fit z-10 rounded-lg shadow-xl dark:shadow-darkBg p-2 border border-[#dcdcdc81] dark:border-[#4e4d4d81]"
      id="modal"
    >
      {children}
    </div>
  );
};

const PersonalCard = () => {
  return (
    <motion.div
      className=" bg-white dark:bg-card dark:text-primaryDarkText flex gap-3 flex-col md:flex-row mt-3 lg:flex-col items-center p-4 rounded-xl shadow-xl dark:shadow-gray-700 dark:shadow-md  w-fit"
      initial={{ scale: 0.85 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <img
        src={profPic}
        alt="profilePic"
        className=" h-56 rounded-xl shadow-lg"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-center font-bold text-3xl lg:mt-4 tracking-wider">
          Akshat Jain
        </h1>
        <p className="text-center font-semibold text-xl lg:my-2 dark:text-accent1">
          Developer
        </p>
        <div className="flex gap-6 my-3 lg:my-4 text-2xl">
          <span
            className=" hover:cursor-pointer border p-2 rounded-md hover:text-[#0077B5] shadow-md hover:border-[#0077B5]"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/akshat-jain-b016391a6/",
                "_blank"
              )
            }
          >
            <FaLinkedin className=" hover:scale-110 duration-100" />
          </span>
          <span
            className=" hover:cursor-pointer border p-2 rounded-md hover:text-gray-700 dark:hover:text-gray-500 shadow-md hover:border-gray-600"
            onClick={() =>
              window.open("https://github.com/AkshatJain447", "_blank")
            }
          >
            <FaGithub className=" hover:scale-110 duration-100" />
          </span>
          <span
            className=" hover:cursor-pointer border p-2 rounded-md hover:text-[#ee2a7b] shadow-md hover:border-[#ee2a7b]"
            onClick={() =>
              window.open(
                "https://www.instagram.com/akshat_jain447?igsh=aWMwNm92MmtyYWhv",
                "_blank"
              )
            }
          >
            <FaInstagram className=" hover:scale-110 duration-100 " />
          </span>
        </div>
        <ul className=" bg-blue-50 dark:bg-[#3D3D3D] dark:text-gray-100 rounded-md p-3 shadow-md">
          <li className="flex gap-2 border-b pb-2 lg:pb-3 dark:border-accent1">
            <SiGmail className="text-2xl text-teal-500" />
            <span>akjain9758@gmail.com</span>
          </li>
          <li className="flex gap-2 border-b py-2 lg:py-3 dark:border-accent1">
            <FaMobileAlt className="text-2xl text-blue-700 dark:text-blue-500" />
            <span>+91-7300716447</span>
          </li>
          <li className="flex gap-2 pt-2 lg:pt-3 dark:border-accent1">
            <FaMapLocationDot className="text-2xl text-[#EA4335]" />
            <span>Saharanpur, UP</span>
          </li>
        </ul>
        <a href={Resume} download>
          <button className="flex gap-3 items-center bg-blue-100 dark:bg-accent1 p-3 mt-2 lg:mt-4 text-accent1 dark:text-gray-200 rounded-lg drop-shadow-lg hover:scale-105 duration-100">
            <FaDownload />
            Download Resume
          </button>
        </a>
      </div>
    </motion.div>
  );
};

const AboutMe = ({ setIsOpen, setModalVal }) => {
  return (
    <div className=" w-[90%] lg:w-[60%] flex flex-col justify-center items-center">
      <motion.div
        className="bg-white dark:bg-card dark:text-primaryDarkText m-2 shadow-lg dark:shadow-gray-700 dark:shadow-md  rounded-lg p-3 lg:p-6"
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h2 className=" font-bold text-2xl lg:text-3xl tracking-wide pb-2 border-b dark:border-accent1">
          About Me
        </h2>
        <p className="text-justify pt-2 dark:text-secondaryDarkText">
          I am an aspiring software engineer with a strong technical background
          and a passion for solving complex problems. My journey through various
          academic and personal projects has equipped me with a versatile skill
          set, including proficiency in multiple programming languages and web
          development frameworks. In addition to my technical abilities, I value
          teamwork and adaptability, always striving to collaborate effectively
          and learn from each experience.
        </p>
        <motion.button
          className="bg-blue-50 text-accent1 rounded-lg mt-1 md:-mt-2 py-1 px-3 hover:text-blue-50 hover:bg-accent1 shadow-md float-right duration-100 dark:bg-accent1 dark:text-blue-50"
          whileHover={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.3,
            type: "spring",
          }}
          onClick={() => {
            setIsOpen(true);
            setModalVal("About");
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          View More
        </motion.button>
      </motion.div>
      <div className="flex flex-col md:flex-row">
        <motion.div
          className="bg-white dark:bg-card dark:text-primaryDarkText m-2 w-[95%] lg:w-[80%] shadow-lg dark:shadow-gray-700 dark:shadow-md  rounded-lg p-4"
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h2 className=" font-bold text-2xl lg:text-3xl tracking-wide pb-2 border-b dark:border-accent1">
            Skills
          </h2>
          <ul className="pt-2 dark:text-secondaryDarkText">
            <li>
              <span className="font-semibold mr-3 inline-block mb-1">
                Languages:
              </span>
              <div className="flex gap-2 flex-wrap">
                <div className="flex justify-between px-2 py-[6px] border border-blue-200 dark:border-accent1 rounded-md dark:text-secondaryDarkText w-full md:w-40 items-center">
                  <img src={cIcon} alt="C++" className="h-8" />
                  C++
                </div>
                <div className="flex justify-between px-2 py-[6px] border border-blue-200 dark:border-accent1 rounded-md dark:text-secondaryDarkText w-full md:w-40 items-center">
                  <img src={javaIcon} alt="java" className="h-8" />
                  JAVA
                </div>
                <div className="flex justify-between px-2 py-[6px] border border-blue-200 dark:border-accent1 rounded-md dark:text-secondaryDarkText w-full md:w-40 items-center">
                  <img src={htmlIcon} alt="html" className="h-8" />
                  HTML
                </div>
                <div className="flex justify-between px-2 py-[6px] border border-blue-200 dark:border-accent1 rounded-md dark:text-secondaryDarkText w-full md:w-40 items-center">
                  <img src={cssIcon} alt="css" className="h-8" />
                  CSS
                </div>
                <div className="flex justify-between px-2 py-[6px] border border-blue-200 dark:border-accent1 rounded-md dark:text-secondaryDarkText w-full md:w-40 items-center">
                  <img src={jsIcon} alt="js" className="h-8" />
                  Javascript
                </div>
              </div>
            </li>
            <li>
              <span className="font-semibold mr-3 inline-block mt-2 mb-1">
                Libraries & Frameworks:
              </span>
              <div className="flex gap-2 flex-wrap">
                <span className="flex justify-between px-2 py-[6px] border border-blue-200 dark:border-accent1 rounded-md dark:text-secondaryDarkText w-full md:w-40 items-center">
                  <img src={reactIcon} alt="reactjs" className="h-8" />
                  ReactJs
                </span>
                <span className="flex justify-between px-2 py-[6px] border border-blue-200 dark:border-accent1 rounded-md dark:text-secondaryDarkText w-full md:w-40 items-center">
                  <img src={reduxIcon} alt="redux" className="h-6" />
                  Redux
                </span>
                <span className="flex justify-between px-2 py-[6px] border border-blue-200 dark:border-accent1 rounded-md dark:text-secondaryDarkText w-full md:w-40 items-center">
                  <img src={tailwindIcon} alt="tailwind css" className="h-5" />
                  Tailwind CSS
                </span>
              </div>
            </li>
            <li>
              <span className="font-semibold mr-3 inline-block mt-2 mb-1">
                Tools & Platforms:
              </span>
              <div className="flex gap-2 flex-wrap">
                <span className="flex justify-between px-2 py-[6px] border border-blue-200 dark:border-accent1 rounded-md dark:text-secondaryDarkText w-full md:w-40 items-center">
                  <img src={firebaseIcon} alt="firebase" className="h-8" />
                  Firebase
                </span>
                <span className="flex justify-between px-2 py-[6px] border border-blue-200 dark:border-accent1 rounded-md dark:text-secondaryDarkText w-full md:w-40 items-center">
                  <img src={gitIcon} alt="git" className="h-8" />
                  Git
                </span>
                <span className="flex justify-between px-2 py-[6px] border border-blue-200 dark:border-accent1 rounded-md dark:text-secondaryDarkText w-full md:w-40 items-center">
                  <img src={netlifyIcon} alt="netlify" className="h-8" />
                  Netlify
                </span>
              </div>
            </li>
          </ul>
          <motion.button
            className="bg-blue-50 text-accent1 rounded-lg mt-3 py-1 px-3 hover:text-blue-50 hover:bg-accent1 shadow-md float-right duration-100 dark:bg-accent1 dark:text-blue-50"
            whileHover={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.3,
              type: "spring",
            }}
            onClick={() => {
              setIsOpen(true);
              setModalVal("Skills");
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            View More
          </motion.button>
        </motion.div>
        <motion.div
          className="bg-white dark:bg-card dark:text-primaryDarkText m-2 shadow-lg dark:shadow-gray-700 dark:shadow-md  rounded-lg p-4"
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h2 className=" font-bold text-2xl lg:text-3xl tracking-wide pb-2 border-b dark:border-accent1">
            Certifications
          </h2>
          <ul className=" m-4 pt-2 list-disc dark:text-secondaryDarkText">
            <li>Responsive Web Design: Google</li>
            <li>Introduction to Web Development: IBM</li>
            <li>Discrete Mathematics: NPTEL</li>
            <li>Probability and Statistics: NPTEL</li>
            <li>Front-End Web UI Frameworks and Tools: Coursera</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalVal, setModalVal] = useState();

  const handleOutClick = (e) => {
    if (e.target.id !== "modal" && isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        className={`flex flex-col lg:flex-row justify-center gap-6 items-center h-[100%] lg:h-screen ${
          isOpen && "blur-[2px]"
        }`}
        onClick={(e) => handleOutClick(e)}
      >
        <PersonalCard />
        <AboutMe setIsOpen={setIsOpen} setModalVal={setModalVal} />
      </div>
      {isOpen &&
        (modalVal == "About" ? (
          <Modal>
            <About setIsOpen={setIsOpen} />
          </Modal>
        ) : (
          <Modal>
            <Skills setIsOpen={setIsOpen} />
          </Modal>
        ))}
    </>
  );
};

export default Home;
