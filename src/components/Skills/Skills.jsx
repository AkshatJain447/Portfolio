import { IoMdClose } from "react-icons/io";

const Skills = ({ setIsOpen }) => {
  return (
    <>
      <h2 className=" flex justify-between items-center font-bold text-2xl lg:text-3xl tracking-wide pb-2 border-b dark:border-accent1 dark:text-primaryDarkText">
        Skills
        <IoMdClose
          onClick={() => setIsOpen(false)}
          className=" hover:scale-[1.2] duration-150 cursor-pointer"
        />
      </h2>
      <ul className="pt-2 dark:text-secondaryDarkText">
        <li className="my-1 skills">
          <span className="font-semibold mr-3 inline-block">Languages:</span>
          C++, JavaScript (ES6+), HTML5, CSS3, Python, SQL
        </li>
        <hr className="w-1/2 m-auto" />

        <li className="my-1 skills">
          <span className="font-semibold mr-3 inline-block">
            Frameworks & Libraries:
          </span>
          React.js, Redux, Node.js, Express.js, Tailwind CSS, Dnd-Kit, Ant
          Design, Axios
        </li>
        <hr className="w-1/2 m-auto" />

        <li className="my-1 skills">
          <span className="font-semibold mr-3 inline-block">Databases:</span>
          MongoDB, Mongoose, MySQL, Firebase (Realtime DB + Firestore)
        </li>
        <hr className="w-1/2 m-auto" />

        <li className="my-1 skills">
          <span className="font-semibold mr-3 inline-block">
            Core Concepts:
          </span>
          Data Structures & Algorithms, Object-Oriented Programming (OOP),
          RESTful APIs, MVC Architecture, Authentication & Authorization, System
          Design Basics
        </li>
        <hr className="w-1/2 m-auto" />

        <li className="my-1 skills">
          <span className="font-semibold mr-3 inline-block">
            Tools & Platforms:
          </span>
          Git & GitHub, Vite, Postman, JWT, Netlify, Render, VS Code, NPM
        </li>
        <hr className="w-1/2 m-auto" />

        <li className="my-1 skills">
          <span className="font-semibold mr-3 inline-block">Soft Skills:</span>
          Teamwork, Adaptability, Problem-Solving, Time Management,
          Communication, Project Coordination
        </li>
      </ul>
    </>
  );
};

export default Skills;
