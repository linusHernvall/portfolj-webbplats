import { Container, Col, Grid, Paper } from '@mantine/core';

function CollaborationSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: '#F7F9FC', paddingTop: '50px', paddingBottom: '50px' }}>
      <Container>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>SAMARBETSPARTNERS</h2>
        <Grid gutter='lg'>
          <Col span={12}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a href='#project' onClick={(e) => { e.preventDefault(); scrollToSection('project'); }}>
                <Paper
                  shadow='xs'
                  style={{
                    width: '200px', // Set fixed width
                    height: '100px', // Set fixed height
                  }}
                >
                  <img
                    src='../public/jacyzlogo.png'
                    alt='Collaboration 1'
                    style={{ width: '100%', height: '100%' }}
                  />
                </Paper>
              </a>
              <a href='#project' onClick={(e) => { e.preventDefault(); scrollToSection('project'); }}>
                <Paper
                  shadow='xs'
                  style={{
                    width: '200px', // Set fixed width
                    height: '100px', // Set fixed height
                  }}
                >
                  <img
                    src='https://i.pinimg.com/736x/a2/4b/d0/a24bd06484f40c317ca0aed6416c4fd3.jpg'
                    alt='Collaboration 2'
                    style={{ width: '100%', height: '100%' }}
                  />
                </Paper>
              </a>
              <a href='#project' onClick={(e) => { e.preventDefault(); scrollToSection('project'); }}>
                <Paper
                  shadow='xs'
                  style={{
                    width: '200px', // Set fixed width
                    height: '100px', // Set fixed height
                  }}
                >
                  <img
                    src='https://w7.pngwing.com/pngs/916/115/png-transparent-volvo-logo-volvo-cars-ab-volvo-logo-pga-tour-volvo-car-logo-brand-company-text-trademark.png'
                    alt='Collaboration 3'
                    style={{ width: '100%', height: '100%' }}
                  />
                </Paper>
              </a>
            </div>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}

export default CollaborationSection;
