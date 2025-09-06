import { motion } from "framer-motion";
import Cards from "./components/card";
import Particles from "./components/Particles";
import { projects } from "./data/projects";
import Profile from "./components/profile";

function App() {
  return (
    <div className="app">
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.5}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>

      <div style={{ position: "relative", zIndex: 2 }}>
        <Profile />

        <motion.section
          className="projects-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Cards key={index} {...project} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default App;
