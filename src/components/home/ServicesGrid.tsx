import { Link } from "react-router-dom";
import { services } from "@/data/services";

const ServicesGrid = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Logistics Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From origin to destination, we handle every aspect of your supply chain with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
