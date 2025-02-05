import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { ReactTyped } from "react-typed";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Front-End Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Daniyal <br className="sm:hidden md:block" />
        Malik
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
       <ReactTyped
          strings={[
            "Full-Stack Developer",
            "MERN Stack Developer",
            "React.js Expert",
            "Passionate Coder",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />  <br /> with 1 years learning expeience and 6 month of
        free lancing experience.
      </motion.p>
    </div>
  );
};

export default HeroText;
