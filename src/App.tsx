import TopStrip from './components/TopStrip';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopStrip />
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
