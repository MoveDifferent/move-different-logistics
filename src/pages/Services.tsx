import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const servicesLd = services.map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.title,
  description: s.description,
  provider: {
    "@type": "LocalBusiness",
    name: "Move Different Logistics Ltd",
  },
  areaServed: "Kenya",
  url: `https://move-different-logistics.lovable.app/services/${s.slug}`,
}));

const Services = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Logistics Services Kenya | Air, Sea, Customs & Delivery"
        description="Air freight, sea freight, customs clearance, inland transport, warehousing, last-mile delivery and more — end-to-end logistics across East Africa."
        path="/services"
        jsonLd={servicesLd}
      />
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
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.slug}
                    className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-8 md:p-10">
                      <div className="flex flex-col md:flex-row gap-8">
                        {/* Icon & Title */}
                        <div className="md:w-1/3">
                          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                            <Icon className="w-8 h-8 text-primary-foreground" />
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

                        {/* For Who + CTA */}
                        <div className="md:w-1/3">
                          <h3 className="font-semibold text-foreground mb-4">Who It's For</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            {service.forWho}
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <Button variant="accent" size="sm" asChild>
                              <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-2">
                                Learn More <ArrowRight className="w-4 h-4" />
                              </Link>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <Link to="/contact">Get a Quote</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
