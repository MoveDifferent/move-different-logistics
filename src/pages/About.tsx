import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, CheckCircle, Users, Award, Globe } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Partner-Driven Efficiency",
    description: "We leverage vetted logistics partners to deliver flexible, cost-effective solutions.",
  },
  {
    icon: Award,
    title: "Experienced Coordination",
    description: "Our team brings years of expertise in freight forwarding and supply chain management.",
  },
  {
    icon: CheckCircle,
    title: "Customer-First Approach",
    description: "Your success is our priority. We go the extra mile to exceed expectations.",
  },
  {
    icon: Globe,
    title: "Global Reach, Local Expertise",
    description: "Worldwide connections combined with deep knowledge of Kenyan and East African markets.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Moving Kenya Forward,
                <br />
                <span className="text-accent">One Shipment at a Time</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Move Different Logistics Ltd is a Kenya-based freight forwarding and logistics company with global reach. We operate on an asset-light, partner-driven model that ensures flexibility, competitive pricing, and reliable service.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-secondary rounded-2xl p-8 border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To simplify logistics through reliable partnerships, transparent communication, and end-to-end service excellence. We aim to be the bridge that connects businesses to global markets seamlessly.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-secondary rounded-2xl p-8 border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted logistics partner in Kenya and East Africa, known for reliability, transparency, and customer-centric solutions that empower businesses to grow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Partner With Us
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex gap-5 bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
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
              Ready to Move Different?
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
              Let's discuss how we can support your logistics needs.
            </p>
            <Button 
              variant="default" 
              size="xl"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
