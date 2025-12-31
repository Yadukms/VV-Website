import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ScheduledEvents from './components/ScheduledEvents';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './styles/responsive.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <ScheduledEvents />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
