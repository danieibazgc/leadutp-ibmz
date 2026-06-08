import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import AgendaSection from './components/AgendaSection';
import SpeakerSection from './components/SpeakerSection';
import RequirementsSection from './components/RequirementsSection';
import RegistrationSection from './components/RegistrationSection';
import Footer from './components/Footer';

/**
 * App — Root component composing all landing page sections.
 */
export default function App() {
  return (
    <>
      {/* Skip to main content — accessibility */}
      <a href="#event" className="skip-link">
        Saltar al contenido principal
      </a>

      <Navbar />

      <main>
        <HeroSection />
        <BenefitsSection />
        <AgendaSection />
        <SpeakerSection />
        <RequirementsSection />
        <RegistrationSection />
      </main>

      <Footer />
    </>
  );
}
