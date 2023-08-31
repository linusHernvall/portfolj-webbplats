import { useEffect } from 'react';
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
  // This effect runs when the component mounts
  useEffect(() => {
    // Retrieve the hash from the URL
    const hash = window.location.hash.substring(1);

    // Use the hash to find an element with the corresponding id
    const element = document.getElementById(hash);

    // If such an element exists, scroll to it
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []); // Empty dependency array means this effect runs once when the component mounts
  return (
    <div>
      <Subheader />
      <CollaborationSection />
      <div id='process'>
        <ProcessSection />
      </div>
      <TechStack />
      <div id='project'>
        <ProjectCarousel />
      </div>
      <div id='team'>
        <CoworkerSection />
      </div>
      <div id='contact'>
        <ContactSection />
      </div>
      <div id='about'>
        <AboutSection />
      </div>
      <div id='map'>
        <MapSection />
      </div>
    </div>
  );
}

export default Home;
