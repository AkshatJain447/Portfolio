import "./Home.css";
import profPic from "../../assets/photo.jpg";
import Resume from "../../assets/AkshatJain.pdf";
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
        className=" h-60 rounded-xl shadow-lg"
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
            className=" hover:cursor-pointer border p-2 rounded-md hover:text-[#0077B5] shadow-md"
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
            className=" hover:cursor-pointer border p-2 rounded-md hover:text-gray-700 shadow-md"
            onClick={() =>
              window.open("https://github.com/AkshatJain447", "_blank")
            }
          >
            <FaGithub className=" hover:scale-110 duration-100" />
          </span>
          <span
            className=" hover:cursor-pointer border p-2 rounded-md hover:text-[#ee2a7b] shadow-md"
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
        <ul className=" bg-blue-50 dark:bg-[#3D3D3D] dark:text-gray-200 rounded-md p-3 shadow-md">
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

const AboutMe = () => {
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
        <p className="  text-justify dark:text-secondaryDarkText">
          Outside of my technical interests, I enjoy gaming, painting,
          traveling, and reading, which provide a well-rounded perspective and
          inspire my creativity. I am excited to bring my skills and enthusiasm
          to a software engineering position, where I can make a tangible impact
          and continue to grow as a professional.
        </p>
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
            <li className="my-1 skills">
              <span className="font-semibold mr-3 inline-block">
                Languages:
              </span>
              JavaScript, HTML5, CSS3, C++, Java, SQL, PL/SQL
            </li>
            <hr className="w-1/2 m-auto" />
            <li className="my-1 skills">
              <span className="font-semibold mr-3 inline-block">
                Core Concepts:
              </span>
              Data Structures, OOP, Operating Systems, System Design
            </li>
            <hr className="w-1/2 m-auto" />
            <li className="my-1 skills">
              <span className="font-semibold mr-3 inline-block">
                Libraries & Frameworks:
              </span>
              React.js, Redux, Redux Toolkit, Bootstrap, Tailwind CSS, Dnd-Kit,
              Ant Design
            </li>
            <hr className="w-1/2 m-auto" />
            <li className="my-1 skills">
              <span className="font-semibold mr-3 inline-block">
                Tools & Platforms:
              </span>
              NPM, Vite, Git, Netlify, Firebase
            </li>
            <hr className="w-1/2 m-auto" />
            <li className="my-1 skills">
              <span className="font-semibold mr-3 inline-block">
                Soft Skills:
              </span>
              Teamwork, Adaptability, Problem Solving, Management & Coordination
            </li>
          </ul>
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
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-6 items-center h-[100%] lg:h-screen">
      <PersonalCard />
      <AboutMe />
    </div>
  );
};

export default Home;
