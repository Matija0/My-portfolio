import { useEffect, useState } from "react"
import useMediaQuery from "./hooks/useMediaQuery"
import { motion } from "framer-motion"
import Navbar from "./scenes/Navbar"
import DotGroup from "./scenes/DotGroup"
import Landing from "./scenes/Landing"
import LineGradient from "./components/LineGradient"
import MySkills from "./scenes/MySkills"
import Projects from "./scenes/Projects"
import Details from "./scenes/Details"
import Contact from "./scenes/Contact"
import Footer from "./scenes/Footer"


function App() {
  
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient width="w-full" />
      <div className="w-5/6 mx-auto md:h-fit ">
        <motion.div
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <MySkills />
        </motion.div>
      </div>
      <LineGradient width="w-full"/>
      <div className="w-5/6 mx-auto">
        <motion.div
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient width="w-full"/>
      <LineGradient width="w-full"/>
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App
