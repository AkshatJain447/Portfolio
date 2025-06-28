import { useEffect, useRef } from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import "./Projects.css";
import { motion, useAnimation, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    display: project1,
    title: "CAPABLE CAREERS: JOB PORTAL FOR DISABLED PEOPLE",
    duration: "4th rank in Hackathon | Aug 2023 - Sep 2024",
    techStack: "HTML, CSS, JavaScript, React.js, Redux, Tailwind CSS, Firebase",
    desc: [
      "Leading the development of a website to assist disabled individuals in finding government jobs",
      "Addressing the underrepresentation of disabled people in government positions, providing a platform to track and apply for job opportunities",
      "Offering training courses tailored to specific job requirements and a supportive community for users",
    ],
    link: "https://capablecareers.netlify.app/",
  },
  {
    id: 2,
    display: project2,
    title: "PATIENT APPOINTMENT BOOKING",
    duration: "Hackathon Winner | 7 Oct 2023 – 8 Oct 2023",
    techStack: "HTML, CSS, JavaScript, Tailwind CSS, Java, XML, NFC, Firebase",
    desc: [
      "Developed a digital solution for appointment booking in government hospitals to reduce overcrowding, long queues, and improve doctor availability",
      "Created a mobile app for patients to book appointments and track their medical history",
      "Designed a website for hospitals to manage patient data (Electronic Health Records) and hospital resources efficiently",
    ],
    link: "https://patientappointmentbooking.netlify.app/",
  },
  {
    id: 3,
    display: project3,
    title: "TEACHNOOK | WEB DEVELOPMENT TRAINING",
    duration: "June 2023-August 2023",
    techStack: "HTML, CSS, JavaScript, React.js, Redux, Tailwind CSS, Firebase",
    desc: [
      "Studied and practiced web development utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js)",
      "Developed several minor projects to reinforce skills in web application development",
      "Completed a major project focusing on Hotel Management System, facilitating room booking and management for prominent local hotels",
    ],
    link: "https://eventeaseportal.netlify.app/",
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
