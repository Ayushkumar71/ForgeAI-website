import './styles/global.css';
import './styles/variables.css';
import './styles/components.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Comparison />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

export default App;
