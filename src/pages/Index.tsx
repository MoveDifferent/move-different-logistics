import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import IndustriesServed from "@/components/home/IndustriesServed";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <ServicesGrid />
        <HowItWorks />
        <IndustriesServed />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
