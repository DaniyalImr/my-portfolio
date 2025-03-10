import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10  ">About Me</h2>
      <p className="text-4xl  text-cyan " >
      I am  a skilled full-stack developer specializing in MERN stack, cloud technologies, and real-time applications. With a strong focus on performance, scalability, and UI/UX, I have  built projects like a bookstore, blog platform, and portfolio. My expertise spans React, Node.js, MongoDB, authentication systems, and state management—delivering seamless and efficient web experiences. 🚀
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
