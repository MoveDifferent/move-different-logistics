import { ClipboardList, Ship, MapPin, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Request a Quote",
    description: "Tell us about your cargo, origin, and destination. We'll provide a competitive quote within hours.",
  },
  {
    icon: Ship,
    number: "02",
    title: "We Coordinate Shipping",
    description: "Our team handles all logistics, documentation, and customs clearance on your behalf.",
  },
  {
    icon: MapPin,
    number: "03",
    title: "Track Your Cargo",
    description: "Monitor your shipment in real-time with our transparent tracking and regular updates.",
  },
  {
    icon: PackageCheck,
    number: "04",
    title: "Delivery to Your Door",
    description: "Receive your goods safely at your chosen location, anywhere in Kenya and beyond.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Process
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Getting your cargo from A to B shouldn't be complicated. Here's how we make it effortless.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary-foreground/20 -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary-foreground/10 flex items-center justify-center border-2 border-accent">
                  <step.icon className="w-10 h-10 text-accent" />
                </div>
                <span className="text-accent font-bold text-sm mb-2 block">{step.number}</span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
