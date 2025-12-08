import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag, Globe, Package, Truck, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Shop Online",
    description: "Purchase items from your favorite international stores or share product links with us.",
  },
  {
    number: "02",
    title: "Ship to Our Warehouse",
    description: "Send your packages to our partner warehouses in China, USA, UK, UAE, or India.",
  },
  {
    number: "03",
    title: "We Consolidate",
    description: "We combine multiple purchases into one shipment to reduce costs.",
  },
  {
    number: "04",
    title: "Customs & Delivery",
    description: "We handle all clearance and deliver directly to your doorstep in Kenya.",
  },
];

const countries = [
  { name: "China", flag: "🇨🇳" },
  { name: "USA", flag: "🇺🇸" },
  { name: "UK", flag: "🇬🇧" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "India", flag: "🇮🇳" },
];

const benefits = [
  "Save up to 70% on international shipping",
  "No minimum order requirements",
  "Free consolidation of multiple packages",
  "Full customs clearance included",
  "Door-to-door delivery anywhere in Kenya",
  "Real-time shipment tracking",
  "Dedicated customer support",
  "Secure handling of your goods",
];

const BuyAndShip = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                  Buy & Ship Service
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Shop Globally,
                  <br />
                  <span className="text-accent">Deliver Locally</span>
                </h1>
                <p className="text-primary-foreground/80 text-lg mb-8">
                  Access international markets with ease. We purchase, consolidate, and ship products from major global destinations right to your door in Kenya.
                </p>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Start Shipping
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              {/* Countries */}
              <div className="bg-primary-foreground/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-6">We Ship From</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {countries.map((country) => (
                    <div
                      key={country.name}
                      className="bg-primary-foreground/10 rounded-xl p-4 text-center hover:bg-primary-foreground/20 transition-colors"
                    >
                      <span className="text-3xl mb-2 block">{country.flag}</span>
                      <span className="font-medium">{country.name}</span>
                    </div>
                  ))}
                  <div className="bg-accent/20 rounded-xl p-4 text-center flex items-center justify-center">
                    <span className="text-accent font-medium text-sm">+ More coming</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Simple 4-Step Process
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary border-2 border-accent flex items-center justify-center">
                    <span className="text-accent font-bold text-2xl">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                  Why Buy & Ship?
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Benefits of Our Service
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="font-bold text-xl text-foreground mb-6">Popular Uses</h3>
                <div className="space-y-4">
                  {[
                    { icon: ShoppingBag, text: "Online shopping from Amazon, eBay, AliExpress" },
                    { icon: Globe, text: "Sourcing products for your business" },
                    { icon: Package, text: "Consolidating multiple small orders" },
                    { icon: Truck, text: "Heavy or bulky item shipping" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                      <item.icon className="w-6 h-6 text-accent" />
                      <span className="text-foreground text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-accent">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
              Ready to Start Shipping?
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
              Get a free quote for your next international shipment.
            </p>
            <Button 
              variant="default" 
              size="xl"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BuyAndShip;
