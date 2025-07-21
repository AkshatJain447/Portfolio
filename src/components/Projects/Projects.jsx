import { useEffect, useRef } from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import "./Projects.css";
import { motion, useAnimation, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    display: project3,
    title: "EVENTEASE: SMART HOTEL MANAGEMENT SYSTEM",
    duration: "Web Development Training Project | Apr 2025 - Jun 2025",
    techStack:
      "React.js, Redux, Node.js, Express.js, MongoDB, Tailwind CSS, Firebase",
    desc: [
      "Engineered a comprehensive hotel and event management platform enabling real-time booking, vendor coordination, and user authentication.",
      "Streamlined booking workflows for 300+ venues with scalable backend APIs and modular design.",
      "Implemented responsive, user-centered UIs and collaborated in a fast-paced Agile environment with modern version control practices.",
    ],
    link: "https://eventeaseportal.netlify.app/",
  },
  {
    id: 2,
    display: project1,
    title: "CAPABLE CAREERS: JOB PORTAL FOR DISABLED INDIVIDUALS",
    duration: "4th Rank, HackFusion | Aug 2023 - Sep 2024",
    techStack: "HTML, CSS, JavaScript, React.js, Redux, Tailwind CSS, Firebase",
    desc: [
      "Led the creation of an accessible job portal connecting specially-abled talent with government opportunities.",
      "Developed real-time job listings, personalized career modules, and an intuitive interface empowering 400,000+ potential users.",
      "Fostered community interaction and inclusive hiring by integrating training resources and skill-building journeys.",
    ],
    link: "https://capablecareers.netlify.app/",
  },
  {
    id: 3,
    display: project2,
    title: "PATIENT APPOINTMENT BOOKING SYSTEM",
    duration: "Hackathon Winner | 7 Oct 2023 – 8 Oct 2023",
    techStack: "HTML, CSS, JavaScript, Tailwind CSS, Java, XML, NFC, Firebase",
    desc: [
      "Developed a digital solution transforming patient appointments in public hospitals, reducing queues and wait times.",
      "Built a cross-platform mobile app for seamless appointment booking and tracking of medical records.",
      "Enabled hospitals to digitally manage EHR and optimize doctor-patient allocation, supporting up to 30,000 daily appointments.",
    ],
    link: "https://patientappointmentbooking.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div>
      <motion.h1
        className="text-4xl font-bold tracking-wider text-center pt-8 dark:text-primaryDarkText"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        Projects
      </motion.h1>
      <hr className="w-1/3 m-auto my-6 h-[2px] bg-black dark:bg-secondaryDarkText" />
      <ul className="w-[95%] md:w-[90%] lg:w-[80%] m-auto">
        {projects.map((project) => {
          const projRef = useRef();
          const isInView = useInView(projRef, { once: true });
          const controls = useAnimation();

          useEffect(() => {
            if (isInView) controls.start("visible");
          }, [isInView, controls]);

          return (
            <motion.div
              ref={projRef}
              key={project.id}
              variants={{
                hidden: { opacity: 0, translateY: 90 },
                visible: { opacity: 1, translateY: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{
                type: "spring",
                duration: 0.5,
                stiffness: 50,
              }}
              className={`bg-white dark:bg-card dark:text-primaryDarkText lg:flex gap-6 justify-evenly items-center h-full rounded-lg dark:shadow-gray-700 dark:shadow-md shadow-lg p-4 my-6 ${
                project.id % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <img
                src={project.display}
                alt="project image"
                className="hover:cursor-pointer hover:scale-105 duration-100 h-52 md:h-72 m-auto rounded-md drop-shadow-lg"
                onClick={() => window.open(project.link, "_blank")}
              />
              <div className="p-4">
                <h2 className="font-bold text-lg lg:text-xl">
                  {project.title}
                </h2>
                <p className="text-sm italic dark:text-accent1">
                  {project.duration}
                </p>
                <ul className="list-disc list-inside text-justify dark:text-secondaryDarkText">
                  {project.desc.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  className="italic text-blue-600 dark:text-blue-400 hover:scale-105 duration-100 m-auto w-fit mt-3 block"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Go to Website
                </a>
              </div>
            </motion.div>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
