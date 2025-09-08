import { motion } from "framer-motion";
import { DataProjects } from "../data/DataProjects";
import Cards from "../components/card";

const StudiesSection = () => {
  return (
    <motion.section
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="hero-name"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Estudos
      </motion.h2>

      <div className="projects-grid">
        {DataProjects.map((project, index) => (
          <Cards key={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default StudiesSection;
