import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import CapacitacionSection from '../components/CapacitacionSection';
import CursosSection from '../components/CursosSection';
import SobreNosotros from '../components/SobreNosotros';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <CapacitacionSection />
      <CursosSection />
      <SobreNosotros />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}