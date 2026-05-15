import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import IndustriesServed from "@/components/home/IndustriesServed";
import CTASection from "@/components/home/CTASection";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Move Different Logistics Ltd",
  url: "https://move-different-logistics.lovable.app/",
  telephone: "+254798852545",
  email: "logistics@movedifferent.co.ke",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  areaServed: "East Africa",
  description:
    "Kenya's trusted logistics partner for air & sea freight, customs clearance, warehousing and last-mile delivery.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+254798852545",
    contactType: "customer service",
    areaServed: "KE",
  },
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Move Different Logistics | Freight Forwarding Kenya"
        description="Kenya's trusted logistics partner for air & sea freight, customs clearance, warehousing and last-mile delivery across East Africa."
        path="/"
        jsonLd={organizationLd}
      />
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
