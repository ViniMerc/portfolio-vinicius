import Particles from "./components/Particles";
import ProfileSection from "./sections/ProfileSection";
import ProjectsSection from "./sections/ProjectsSection";
import StudiesSection from "./sections/StudiesSection";

function App() {
  return (
    <div className="app">
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

      <div style={{ position: "relative", zIndex: 2 }}>
        <ProfileSection />
        <ProjectsSection />
        <StudiesSection />
      </div>
    </div>
  );
}

export default App;
