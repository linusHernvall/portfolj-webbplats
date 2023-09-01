import React, { useEffect, useState } from 'react';

function CollaborationSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 634);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 634);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    paddingTop: '50px',
    paddingBottom: '50px',
  };

  const headingStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '30px',
  };

  const imageContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexFlow: isSmallScreen ? 'column wrap' : 'row nowrap', // Conditionally apply flexFlow
  };

  const imageBoxStyle: React.CSSProperties = {
    width: '200px',
    height: '200px',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
  };

  return (
    <div style={containerStyle} className="collaboration-images">
      <div className="container">
        <h2 style={headingStyle}>SAMARBETSPARTNERS</h2>
        <div style={imageContainerStyle} className="image-container">
          <a href="#project" onClick={(e) => { e.preventDefault(); scrollToSection('project'); }}>
            <div style={imageBoxStyle} className="image-box">
              <img src="../public/jacyzlogo.png" alt="Collaboration 1" style={imageStyle} />
            </div>
          </a>
          <a href="#project" onClick={(e) => { e.preventDefault(); scrollToSection('project'); }}>
            <div style={imageBoxStyle} className="image-box">
              <img
                src="https://i.pinimg.com/736x/a2/4b/d0/a24bd06484f40c317ca0aed6416c4fd3.jpg"
                alt="Collaboration 2"
                style={imageStyle}
              />
            </div>
          </a>
          <a href="#project" onClick={(e) => { e.preventDefault(); scrollToSection('project'); }}>
            <div style={imageBoxStyle} className="image-box">
              <img
                src="https://w7.pngwing.com/pngs/916/115/png-transparent-volvo-logo-volvo-cars-ab-volvo-logo-pga-tour-volvo-car-logo-brand-company-text-trademark.png"
                alt="Collaboration 3"
                style={imageStyle}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CollaborationSection;
