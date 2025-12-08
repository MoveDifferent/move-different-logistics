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
  Home
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast, reliable air cargo services for time-sensitive shipments worldwide.",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description: "Cost-effective FCL & LCL ocean shipping for bulk and container cargo.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Expert handling of all documentation and compliance requirements.",
  },
  {
    icon: Truck,
    title: "Inland Transport",
    description: "Seamless road transport connecting ports to your final destination.",
  },
  {
    icon: Package,
    title: "Last-Mile Delivery",
    description: "Reliable doorstep delivery across Kenya and East Africa.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure storage solutions with inventory management services.",
  },
  {
    icon: ShoppingBag,
    title: "Buy & Ship",
    description: "We purchase and consolidate goods from global suppliers for you.",
  },
  {
    icon: Shield,
    title: "Cargo Insurance",
    description: "Comprehensive coverage protecting your goods in transit.",
  },
  {
    icon: Home,
    title: "Moving & Relocation",
    description: "Personal and corporate relocation services within and beyond Kenya.",
  },
];

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
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className="group bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
