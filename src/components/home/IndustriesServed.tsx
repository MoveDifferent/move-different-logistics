import { Building2, ShoppingCart, Store, Heart, User } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "SMEs & Traders",
    description: "Reliable import/export solutions scaled to your business needs.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Fast fulfillment and delivery for online retail businesses.",
  },
  {
    icon: Store,
    title: "Retailers & Wholesalers",
    description: "Bulk shipping and inventory management solutions.",
  },
  {
    icon: Heart,
    title: "NGOs & Corporates",
    description: "Specialized logistics for large-scale and project-based shipments.",
  },
  {
    icon: User,
    title: "Individuals",
    description: "Personal shipping, buy & ship, and relocation services.",
  },
];

const IndustriesServed = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted Across Sectors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From small businesses to large enterprises, we provide logistics solutions tailored to every industry.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-card rounded-xl p-6 text-center border border-border hover:border-accent/50 hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <industry.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{industry.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
