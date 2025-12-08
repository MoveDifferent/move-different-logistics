import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Plane, 
  Ship, 
  FileCheck, 
  Truck, 
  Package, 
  Warehouse, 
  ShoppingBag, 
  Shield,
  Home,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo services connecting Kenya to global destinations.",
    features: ["Express delivery options", "Dangerous goods handling", "Temperature-controlled cargo", "Door-to-door service"],
    forWho: "Ideal for time-sensitive shipments, perishables, and high-value goods.",
  },
  {
    icon: Ship,
    title: "Sea Freight (FCL & LCL)",
    description: "Cost-effective ocean shipping for bulk cargo and containers.",
    features: ["Full Container Load (FCL)", "Less than Container Load (LCL)", "Reefer containers available", "Global port coverage"],
    forWho: "Best for large volume, non-urgent shipments and bulk imports.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Expert handling of all customs documentation and compliance requirements.",
    features: ["KRA licensed agents", "Duty calculations", "Import/export permits", "Compliance advisory"],
    forWho: "Essential for all importers and exporters entering Kenya markets.",
  },
  {
    icon: Truck,
    title: "Inland & Land Transport",
    description: "Seamless road transport connecting major ports to inland destinations.",
    features: ["Cross-border transport", "Dedicated fleet network", "Real-time GPS tracking", "Secure transit"],
    forWho: "For businesses needing port-to-door or regional transport solutions.",
  },
  {
    icon: Package,
    title: "Last-Mile Delivery",
    description: "Reliable final-mile delivery to customers across Kenya.",
    features: ["Same-day options", "Proof of delivery", "Flexible scheduling", "Urban & rural coverage"],
    forWho: "Perfect for e-commerce, distributors, and retail businesses.",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Storage",
    description: "Secure storage facilities with full inventory management.",
    features: ["Bonded warehouse access", "Inventory management", "Pick & pack services", "Short & long-term storage"],
    forWho: "Suitable for businesses needing secure, managed storage solutions.",
  },
  {
    icon: ShoppingBag,
    title: "Buy & Ship Consolidation",
    description: "We purchase and consolidate goods from global suppliers for you.",
    features: ["Supplier coordination", "Quality inspection", "Consolidation services", "Multi-country sourcing"],
    forWho: "Ideal for importers sourcing from China, India, UAE, UK, or USA.",
  },
  {
    icon: Shield,
    title: "Cargo Insurance",
    description: "Comprehensive marine and cargo insurance for peace of mind.",
    features: ["All-risk coverage", "Competitive premiums", "Quick claims processing", "Global coverage"],
    forWho: "Recommended for all shippers wanting to protect their investments.",
  },
  {
    icon: Home,
    title: "Moving & Relocation",
    description: "Personal and corporate relocation services locally and internationally.",
    features: ["Household goods moving", "Office relocations", "Packing services", "International moves"],
    forWho: "For individuals and companies relocating within or outside Kenya.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Complete Logistics Solutions
                <br />
                <span className="text-accent">Tailored to Your Needs</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                From air and sea freight to final-mile delivery, we offer end-to-end logistics services that keep your supply chain moving efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Icon & Title */}
                      <div className="md:w-1/3">
                        <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                          <service.icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground mb-3">{service.title}</h2>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>

                      {/* Features */}
                      <div className="md:w-1/3">
                        <h3 className="font-semibold text-foreground mb-4">Key Features</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-muted-foreground text-sm">
                              <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* For Who */}
                      <div className="md:w-1/3">
                        <h3 className="font-semibold text-foreground mb-4">Who It's For</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          {service.forWho}
                        </p>
                        <Button variant="accent" size="sm" asChild>
                          <Link to="/contact">Get a Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-accent">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
              Every business is unique. Let's discuss your specific logistics requirements.
            </p>
            <Button 
              variant="default" 
              size="xl"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link to="/contact">Talk to Our Team</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
