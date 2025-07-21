import { IoMdClose } from "react-icons/io";

const education = [
  {
    id: 1,
    degree: "Bachelors in Computer Science Engineering",
    institution: "Chandigarh University, Gharuan",
    session: "2021 – 2025",
    score: "8.08 CGPA",
  },
  {
    id: 2,
    degree: "Intermediate (CBSE), Science",
    institution: "Saraswati Vihar Sr. Sec. School, Saharanpur",
    session: "2020-2021",
    score: "96.4%",
  },
  {
    id: 3,
    degree: "Matriculation (CBSE), Science",
    institution: "Saraswati Vihar Sr. Sec. School, Saharanpur",
    session: "2018-2019",
    score: "94.6%",
  },
];

const About = ({ setIsOpen }) => {
  return (
    <>
      <h2 className="flex justify-between items-center font-bold text-2xl lg:text-3xl tracking-wide pb-2 border-b dark:border-accent1 dark:text-primaryDarkText">
        About Me
        <IoMdClose
          onClick={() => setIsOpen(false)}
          className=" hover:scale-[1.2] duration-150 cursor-pointer"
        />
      </h2>
      <p className="text-justify pt-2 dark:text-secondaryDarkText px-1">
        I am a passionate software engineer with a solid technical foundation
        and a curiosity for tackling complex challenges. Through hands-on
        academic and personal projects, I have built a strong, adaptable skill
        set—spanning multiple programming languages and modern web development
        frameworks. My commitment to continuous learning and collaboration
        allows me to thrive in team environments, where I consistently
        contribute ideas and embrace new perspectives.
      </p>
      <p className="  text-justify dark:text-secondaryDarkText px-1">
        Beyond the screen, I recharge through gaming, painting, travel, and
        reading. These interests fuel my creativity and provide a balanced
        outlook that enhances my work as an engineer. I am eager to bring my
        skills, energy, and diverse experiences to a software engineering role
        where I can make a meaningful impact and embrace growth as a lifelong
        learner.
      </p>
      <h3 className="font-semibold text-xl lg:text-2xl tracking-wide py-2 border-b dark:border-accent1 dark:text-primaryDarkText">
        Education
      </h3>
      <ul className="px-5 py-1 dark:text-secondaryDarkText">
        {education.map((edu) => (
          <li key={edu.id} className=" list-disc">
            <h4 className="text-md font-semibold tracking-wide">
              {edu.degree}
            </h4>
            <p className="flex flex-col md:flex-row justify-between">
              <span className="md:w-[400px]">{edu.institution}</span>
              <span>{edu.session}</span>
              <span className="md:w-[80px] md:text-right">{edu.score}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default About;
