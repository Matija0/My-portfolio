import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skills from "../assets/skills-image.png";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            My skills are a combination of frontend and backend technologies and
            tools. I have experience in building web applications using React,
            Node.js, Next.js and other tools. I am also familiar with version
            control systems like Git and deployment tools like Netlify and
            Vercel. I am always learning new technologies and practices to
            improve my skills and build better applications.
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
               before:w-full md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                className=" hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                src={skills}
                alt="skills"
              />
            </div>
          ) : (
            <img
              className=" hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src={skills}
              alt="skills"
            />
          )}
        </div>
      </div>
      {/* SKILLS */}
      <div className="md:flex justify-between mt-16 gap-32">
        {/* FRONTEND */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className=" relative h-32">
            <div className="z-10">
              <p className=" font-playfair font-semibold text-5xl">01</p>
              <p className=" font-playfair font-semibold text-3xl mt-3">
                Frontend
              </p>
            </div>
            <div className=" w-1/2 md:w-3/4 h-32 bg-blue-600 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            In Frontend I have experience in building web applications using
            React, Next.js, and other tools. I am familiar with state management
            libraries like Redux and useContext. I have also worked with CSS
            frameworks like Tailwind CSS and Bootstrap to style web
            applications. I am proeficient in building responsive web
            applications and have experience in building mobile-first
            applications.
          </p>
        </motion.div>
        {/* BACKEND */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className=" relative h-32">
            <div className="z-10">
              <p className=" font-playfair font-semibold text-5xl">02</p>
              <p className=" font-playfair font-semibold text-3xl mt-3">
                Backend
              </p>
            </div>
            <div className=" w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            In Backend I have experience in building web applications using
            Node.js, Express, and other tools. I have worked with databases like
            MongoDB and Firebase to store and retrieve data. I have also worked
            with REST APIs and GraphQL to fetch data from the server. I am
            familiar with authentication and authorization techniques to secure
            web applications. I have experience in building APIs and
            microservices using Node.js and Express.
          </p>
        </motion.div>
        {/* TOOLS */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className=" relative h-32">
            <div className="z-10">
              <p className=" font-playfair font-semibold text-5xl">03</p>
              <p className=" font-playfair font-semibold text-3xl mt-3">
                Tools
              </p>
            </div>
            <div className=" w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I have experience in using version control systems like Git to
            manage and track changes in code. I have worked with deployment
            tools like Netlify and Vercel to deploy web applications. I am
            familiar with Selenium Webdriver to automate testing of web
            applications. I have experience in using Postman and Insomnia to
            test APIs and fetch data from the server.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
