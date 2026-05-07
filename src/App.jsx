import './index.css';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Work } from './components/Work';
import { DashboardLive } from './components/DashboardLive';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PortfolioTweaks } from './components/PortfolioTweaks';

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Work />
      <DashboardLive />
      <Contact />
      <Footer />
      <PortfolioTweaks />
    </>
  );
}
