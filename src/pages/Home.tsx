import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
      // Get the distance to scroll
      const distance = Math.abs(window.pageYOffset - element.offsetTop);

      // Estimate the time it will take to scroll there: 1 ms per pixel scrolled
      // You can adjust the multiplier as needed
      const estimatedTime = distance * 1;

      // Scroll to the section
      element.scrollIntoView({ behavior: 'smooth' });

      // Remove the hash from the URL after scrolling completes
      setTimeout(() => {
        history.replaceState(null, document.title, window.location.pathname);
      }, estimatedTime);
    }
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Hem - ELD'S IT</title>
      </Helmet>
      <Subheader />
      <CollaborationSection />
      <div id='process'>
        <ProcessSection />
      </div>
      <div id='project'>
        <ProjectCarousel />
      </div>
      <div id='team'>
        <CoworkerSection />
      </div>
      <TechStack />
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
