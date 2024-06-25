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
          React.js, Redux, Redux Toolkit, Bootstrap, Tailwind CSS, Dnd-Kit, Ant
          Design
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
          <span className="font-semibold mr-3 inline-block">Soft Skills:</span>
          Teamwork, Adaptability, Problem Solving, Management & Coordination
        </li>
      </ul>
    </>
  );
};

export default Skills;
