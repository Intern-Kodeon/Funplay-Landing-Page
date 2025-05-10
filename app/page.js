
import Client from './_components/Client';
import FinalCTA from './_components/FinalCTA';
import HeroSection from './_components/HeroSection';
import HowItWorks from './_components/HowItWorks';
import LeadForm from './_components/LeadForm';
import LogoSlide from './_components/LogoSlide';
import New from './_components/New';
import ProductHighlights from './_components/ProductHighlights';
import Testimonials from './_components/Testimonials';
import WhyFunPlayTrust from './_components/WhyFunPlayTrust';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <HeroSection />
      <Client />
      <WhyFunPlayTrust />
      <ProductHighlights />
      <New />
      <HowItWorks />
      <Testimonials />
      <LogoSlide />
      <LeadForm />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.9358241664922!2d72.90408581006024!3d19.371931281818988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a549da045c69%3A0x4a34161c050b4718!2sFunplay%20System%20Pvt%20Ltd%20-%20Outdoor%20Playground%20Equipment%20Designer%20and%20Manufacturer%20Mumbai%20India%20%7C%20Schools%2C%20Commercial%2C%20Builders!5e0!3m2!1sen!2sin!4v1746788591038!5m2!1sen!2sin" width="800"
        height="500"
        loading="lazy"
        className="w-full"
        title="Funplay System Pvt Ltd Location"
        allowFullScreen />
      <FinalCTA />
    </div>
  );
}