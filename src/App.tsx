import { Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <main style={{ marginTop: '5rem' }}>
        <ScrollToTop />
        <Container maw={'1920px'} p={0}>
          <Outlet />
        </Container>
      </main>
      
      <Footer />
    </>
  );
}

export default App;
