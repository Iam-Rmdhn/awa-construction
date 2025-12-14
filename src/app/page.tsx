import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import ConsultationForm from '@/components/sections/ConsultationForm';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero />
      <About />
      <Services />
      <ConsultationForm />
      <Footer />
    </div>
  );
}
