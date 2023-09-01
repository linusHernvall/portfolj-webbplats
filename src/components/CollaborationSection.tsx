import '../collab.css'; // Import your component-specific CSS file here

function CollaborationSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='collaboration-images' style={{ backgroundColor: '#F7F9FC', paddingTop: '50px', paddingBottom: '50px' }}>
      <div className='container'>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>SAMARBETSPARTNERS</h2>
        <div className='image-container'>
          <a href='#project' onClick={(e) => { e.preventDefault(); scrollToSection('project'); }}>
            <div className='image-box'>
              <img src='../public/jacyzlogo.png' alt='Collaboration 1' />
            </div>
          </a>
          <a href='#project' onClick={(e) => { e.preventDefault(); scrollToSection('project'); }}>
            <div className='image-box'>
              <img src='https://i.pinimg.com/736x/a2/4b/d0/a24bd06484f40c317ca0aed6416c4fd3.jpg' alt='Collaboration 2' />
            </div>
          </a>
          <a href='#project' onClick={(e) => { e.preventDefault(); scrollToSection('project'); }}>
            <div className='image-box'>
              <img src='https://w7.pngwing.com/pngs/916/115/png-transparent-volvo-logo-volvo-cars-ab-volvo-logo-pga-tour-volvo-car-logo-brand-company-text-trademark.png' alt='Collaboration 3' />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CollaborationSection;
