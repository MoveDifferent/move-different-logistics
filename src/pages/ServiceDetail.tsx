import { useParams, Link, Navigate } from "react-router-dom";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Move Different Logistics Ltd",
    },
    areaServed: "Kenya",
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={service.seoTitle}
        description={service.seoDescription}
        path={`/services/${service.slug}`}
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
            <div className="max-w-3xl">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                {service.tagline}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-primary-foreground/80 text-lg">{service.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">Get a Quote</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <a href="tel:+254798852545">Call +254 798 852 545</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features + For Who */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Who It's For</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.forWho}</p>
                <Button variant="accent" asChild>
                  <Link to="/contact">Talk to Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Benefits</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {service.benefits.map((b) => (
                <div
                  key={b.title}
                  className="bg-card rounded-xl border border-border p-6 hover:border-accent/50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Process</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, i) => (
                <div key={step.title} className="relative bg-card border border-border rounded-xl p-6">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
                  Explore More
                </span>
                <h2 className="text-3xl font-bold text-foreground">Other Services</h2>
              </div>
              <Link
                to="/services"
                className="text-accent font-semibold text-sm inline-flex items-center gap-2 hover:underline"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherServices.map((s) => {
                const SIcon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
                      <SIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {s.shortTitle}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.tagline}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-accent">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
              Ready to Ship with Confidence?
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
              Get a tailored quote for {service.shortTitle.toLowerCase()} today.
            </p>
            <Button
              variant="default"
              size="xl"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
