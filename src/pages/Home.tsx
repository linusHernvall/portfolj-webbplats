import AboutSection from '../components/AboutSection';
import CollaborationSection from '../components/CollaborationSection';
import ContactSection from '../components/ContactSection';
import CoworkerSection from '../components/CoworkerSection';
import MapSection from '../components/MapSection';
import ProcessSection from '../components/ProcessSection';
import ProjectCarousel from '../components/ProjectCarousel';
import Subheader from '../components/Subheader';
import TechStack from '../components/TechStack';

function Home() {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------

  // TSX ------------------------------------------------------------------------
  return (
    <div>
      <Subheader />
      <CollaborationSection />
      <ProcessSection />
      <TechStack />
      <ProjectCarousel />
      <CoworkerSection />
      <ContactSection />
      <div id='about'>
        <AboutSection />
      </div>
      <MapSection />
    </div>
  );
}

export default Home;
