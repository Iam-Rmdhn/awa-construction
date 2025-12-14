import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';

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
