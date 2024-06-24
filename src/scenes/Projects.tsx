import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import fitnessApp from "../assets/fitness-app.png";
import webshop from "../assets/webshop.png";
import dvor from "../assets/dvor.png";
import projectMGMT from "../assets/Project-MGMT.png";
import notesApp from "../assets/notes-app.png";
import ticketApp from "../assets/ticket-app.png";
import weatherApp from "../assets/weather-app.png";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

type ProjectProps = {
  title: string;
  image: string;
  description?: string;
};

const Project = ({ title, image, description }: ProjectProps) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
      </div>
      <img src={image} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          These are some of the projects I have worked on. Using a combination
          of my skills to build Fullstack applications that are user-friendly
          and visually appealing. All of them are avaliable on my GitHub.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-full max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Fitness App"
            image={fitnessApp}
            description="Fitness App built in React and Firebase that enables users to track their weekly workouts, diet plan and calculate their fitness related objectives"
          />
          <Project
            title="Webshop"
            image={webshop}
            description="Webshop that uses dummy json products with full on funcitonality to place orders, user info, searching and filtering products."
          />

          {/* ROW 2 */}
          <Project
            title="Restaurant Dvor"
            image={dvor}
            description="Landing page for a restaurant with modern UX/UI"
          />
          <Project
            title="Project Management System"
            image={projectMGMT}
            description="Fullstack app built in React for Frontend and Node/Express Backend using MongoDB as Datasabe for managing Projects and Clients"
          />
          <Project title="Notes App" image={notesApp} description="Simpler version of Notion for tracking notes with great UX/UI" />

          {/* ROW 3 */}
          <Project title="Ticket App" image={ticketApp} description="Ticket system for troubleshooting hardware or software problems built in Next.js" />
          <Project title="Weather App" image={weatherApp} description="Simple weather application where user enters location and it shows current weather" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue-600
              max-w-full max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
