import { Package, Shield, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "One-Stop Solution",
    description: "Complete logistics from freight forwarding to final delivery, all under one roof.",
  },
  {
    icon: Shield,
    title: "Competitive Partner Rates",
    description: "Our asset-light model means lower overhead and better pricing for you.",
  },
  {
    icon: Clock,
    title: "Reliable Customs Clearance",
    description: "Licensed agents ensuring smooth, compliant clearance at all Kenya ports.",
  },
  {
    icon: Users,
    title: "Transparent Communication",
    description: "Real-time updates and dedicated support throughout your shipment journey.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Move Different Logistics?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine global reach with local expertise, delivering reliable logistics solutions tailored to your business needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
