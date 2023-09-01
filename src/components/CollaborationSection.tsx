import React, { useEffect, useState } from 'react';

function CollaborationSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

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
    width: '140px',
    height: '140px',
    marginLeft: '30px',
    marginRight: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const jacyzBoxStyle: React.CSSProperties = {
    ...imageBoxStyle,
    width: '200px',
    height: '140px',
    marginLeft: '0px',
    marginRight: '0px',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
  };

  return (
    <div style={containerStyle} className='collaboration-images'>
      <div className='container'>
        <h2 style={headingStyle}>SAMARBETSPARTNERS</h2>
        <div style={imageContainerStyle} className='image-container'>
          <a
            href='#project'
            onClick={e => {
              e.preventDefault();
              scrollToSection('project');
            }}
          >
            <div style={jacyzBoxStyle} className='image-box'>
              <img src='/jacyz-logo.svg' alt='Collaboration 1' style={imageStyle} />
            </div>
          </a>
          <a
            href='#project'
            onClick={e => {
              e.preventDefault();
              scrollToSection('project');
            }}
          >
            <div style={imageBoxStyle} className='image-box'>
              <img src='/mcdonalds-logo.svg' alt='Collaboration 2' style={imageStyle} />
            </div>
          </a>
          <a
            href='#project'
            onClick={e => {
              e.preventDefault();
              scrollToSection('project');
            }}
          >
            <div style={imageBoxStyle} className='image-box'>
              <img src='/volvo-logo.svg' alt='Collaboration 3' style={imageStyle} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CollaborationSection;
