import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Ship, Plane, FileCheck, Truck, Warehouse, Shield, ExternalLink } from "lucide-react";

const partnerCategories = [
  {
    title: "Shipping Lines & Freight Forwarders",
    icon: Ship,
    partners: [
      {
        name: "Maersk Kenya",
        description: "Global leader in sea freight, strong Mombasa presence",
        logo: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&h=200&fit=crop",
      },
      {
        name: "MSC (Mediterranean Shipping Company)",
        description: "Extensive route network for FCL/LCL",
        logo: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&h=200&fit=crop",
      },
      {
        name: "CMA CGM Kenya",
        description: "Competitive rates, good Asian trade routes",
        logo: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?w=400&h=200&fit=crop",
      },
      {
        name: "Bollore Logistics Kenya",
        description: "Integrated freight forwarding and customs",
        logo: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=200&fit=crop",
      },
      {
        name: "DHL Global Forwarding Kenya",
        description: "Air and sea freight, strong documentation support",
        logo: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=200&fit=crop",
      },
    ],
  },
  {
    title: "Air Cargo & Airlines",
    icon: Plane,
    partners: [
      {
        name: "Kenya Airways Cargo",
        description: "Domestic hub advantage at JKIA",
        logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=200&fit=crop",
      },
      {
        name: "Emirates SkyCargo",
        description: "Excellent Middle East and Asia connections",
        logo: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=400&h=200&fit=crop",
      },
      {
        name: "Turkish Cargo",
        description: "Competitive rates, growing African network",
        logo: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=400&h=200&fit=crop",
      },
    ],
  },
  {
    title: "Customs Clearing Agents",
    icon: FileCheck,
    partners: [
      {
        name: "Spedag Interfreight Kenya",
        description: "Licensed customs broker with strong reputation",
        logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop",
      },
      {
        name: "Galaxy Logistics Kenya",
        description: "Established clearing and forwarding agent",
        logo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop",
      },
      {
        name: "Cheki Logistics",
        description: "Tech-forward customs clearing services",
        logo: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop",
      },
    ],
  },
  {
    title: "Land Transport & Last-Mile Delivery",
    icon: Truck,
    partners: [
      {
        name: "Sendy",
        description: "Tech-enabled last-mile delivery across Kenya",
        logo: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=400&h=200&fit=crop",
      },
      {
        name: "Lori Systems",
        description: "Digital freight network for inland transport",
        logo: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=200&fit=crop",
      },
      {
        name: "Fargo Courier",
        description: "Reliable courier and parcel delivery",
        logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop",
      },
      {
        name: "Crown Worldwide Kenya",
        description: "Moving and relocation logistics specialist",
        logo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop",
      },
    ],
  },
  {
    title: "Warehousing & Storage",
    icon: Warehouse,
    partners: [
      {
        name: "TransWarehouse Kenya",
        description: "Bonded and non-bonded warehousing in Nairobi/Mombasa",
        logo: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=200&fit=crop",
      },
      {
        name: "Chandaria Industries (Warehouse Division)",
        description: "Large-scale storage facilities",
        logo: "https://images.unsplash.com/photo-1565791380713-1756b9a05343?w=400&h=200&fit=crop",
      },
      {
        name: "Jetline Logistics",
        description: "Warehousing with fulfillment capabilities",
        logo: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&h=200&fit=crop",
      },
    ],
  },
  {
    title: "Cargo Insurance",
    icon: Shield,
    partners: [
      {
        name: "CIC Insurance (Cargo Division)",
        description: "Comprehensive marine cargo insurance",
        logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
      },
      {
        name: "Jubilee Insurance",
        description: "Competitive cargo and transit insurance products",
        logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=200&fit=crop",
      },
    ],
  },
];

const Partners = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Partners
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted Partners Network
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                We collaborate with industry-leading partners across shipping, air cargo, customs, transport, warehousing, and insurance to deliver seamless logistics solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="section-padding bg-background">
          <div className="container-custom space-y-16">
            {partnerCategories.map((category, categoryIndex) => (
              <div key={category.title}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.partners.map((partner, index) => (
                    <div
                      key={partner.name}
                      className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="h-40 overflow-hidden">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                          {partner.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {partner.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {categoryIndex < partnerCategories.length - 1 && (
                  <div className="border-b border-border mt-16" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-accent">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Become a Partner
            </h2>
            <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8">
              Interested in partnering with Move Different Logistics? We're always looking to expand our network with reliable service providers.
            </p>
            <a
              href="mailto:logistics@movedifferent.co.ke"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Contact Us for Partnership
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;
