import "./Home.css";
import profPic from "../../assets/photo.jpg";
import { SiGmail } from "react-icons/si";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaMobileAlt,
  FaDownload,
} from "react-icons/fa";

const PersonalCard = () => {
  return (
    <div className=" bg-white flex flex-col items-center p-4 rounded-xl shadow-xl w-fit">
      <img
        src={profPic}
        alt="profilePic"
        className=" h-60 rounded-xl shadow-lg"
      />
      <h1 className="text-center font-bold text-3xl mt-4 tracking-wider">
        Akshat Jain
      </h1>
      <p className="text-center font-semibold text-xl my-2">Developer</p>
      <div className="flex gap-6 my-4 text-2xl">
        <span className=" hover:cursor-pointer border p-2 rounded-md hover:text-[#0077B5] shadow-md">
          <FaLinkedin className=" hover:scale-110 duration-100" />
        </span>
        <span className=" hover:cursor-pointer border p-2 rounded-md hover:text-slate-700 shadow-md">
          <FaGithub className=" hover:scale-110 duration-100" />
        </span>
        <span className=" hover:cursor-pointer border p-2 rounded-md hover:text-[#ee2a7b] shadow-md ">
          <FaInstagram className=" hover:scale-110 duration-100 " />
        </span>
      </div>
      <ul className=" bg-red-50 rounded-md p-3 shadow-md">
        <li className="flex gap-2 border-b pb-3 ">
          <SiGmail className="text-2xl text-teal-500" />
          <span>akjain9758@gmail.com</span>
        </li>
        <li className="flex gap-2 border-b py-3 ">
          <FaMobileAlt className="text-2xl text-blue-700" />
          <span>+91-7300716447</span>
        </li>
        <li className="flex gap-2 pt-3">
          <FaMapLocationDot className="text-2xl text-[#EA4335]" />
          <span>Saharanpur, UP</span>
        </li>
      </ul>
      <button className="flex gap-3 items-center bg-teal-600 p-3 mt-4 text-white rounded-lg drop-shadow-lg hover:scale-105 duration-100">
        <FaDownload />
        Download CV
      </button>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="w-[60%] flex flex-col justify-center items-center">
      <div className="bg-white m-2 shadow-lg rounded-lg p-6">
        <h2 className=" font-bold text-3xl tracking-wide pb-2 border-b">
          About Me
        </h2>
        <p className="text-justify pt-2">
          I am an aspiring software engineer with a strong technical background
          and a passion for solving complex problems. My journey through various
          academic and personal projects has equipped me with a versatile skill
          set, including proficiency in multiple programming languages and web
          development frameworks. In addition to my technical abilities, I value
          teamwork and adaptability, always striving to collaborate effectively
          and learn from each experience.
        </p>
        <p className="  text-justify">
          Outside of my technical interests, I enjoy gaming, painting,
          traveling, and reading, which provide a well-rounded perspective and
          inspire my creativity. I am excited to bring my skills and enthusiasm
          to a software engineering position, where I can make a tangible impact
          and continue to grow as a professional.
        </p>
      </div>
      <div className="flex">
        <div className="bg-white m-2 w-[80%] shadow-lg rounded-lg p-4">
          <h2 className=" font-bold text-3xl tracking-wide pb-2 border-b">
            Skills
          </h2>
          <ul className="pt-2">
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
        </div>
        <div className="bg-white m-2 shadow-lg rounded-lg p-4">
          <h2 className=" font-bold text-3xl tracking-wide pb-2 border-b">
            Certifications
          </h2>
          <ul className=" m-4 pt-2 list-disc">
            <li>Responsive Web Design: Google</li>
            <li>Introduction to Web Development: IBM</li>
            <li>Discrete Mathematics: NPTEL</li>
            <li>Probability and Statistics: NPTEL</li>
            <li>Front-End Web UI Frameworks and Tools: Coursera</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className=" flex bg-gray-100 justify-center gap-6 items-center h-screen">
      <PersonalCard />
      <AboutMe />
    </div>
  );
};

export default Home;
