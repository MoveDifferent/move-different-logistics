import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const serviceOptions = [
  "Air Freight",
  "Sea Freight",
  "Customs Clearance",
  "Inland Transport",
  "Last-Mile Delivery",
  "Warehousing",
  "Buy & Ship",
  "Cargo Insurance",
  "Moving & Relocation",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    origin: "",
    destination: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        origin: "",
        destination: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Move Your Cargo
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Get a competitive quote or speak with our logistics experts. We're here to help with all your shipping needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Request a Quote</h2>
                  <p className="text-muted-foreground mb-8">Fill out the form and we'll respond within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company (Optional)
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+254 700 000 000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Type *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Origin / Country
                        </label>
                        <Input
                          name="origin"
                          value={formData.origin}
                          onChange={handleChange}
                          placeholder="e.g., China, USA"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Destination
                        </label>
                        <Input
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          placeholder="e.g., Nairobi, Kenya"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message / Cargo Description
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe your cargo, weight, dimensions, or any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? "Sending..." : "Submit Quote Request"}
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-secondary rounded-2xl p-6 border border-border">
                  <h3 className="font-bold text-lg text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Office Location</p>
                        <p className="text-muted-foreground text-sm">Nairobi, Kenya<br />East Africa</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <a href="tel:+254798852545" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                          +254 798 852 545
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a href="mailto:logistics@movedifferent.co.ke" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                          logistics@movedifferent.co.ke
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Business Hours</p>
                        <p className="text-muted-foreground text-sm">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                  <h3 className="font-bold text-lg mb-3">Need Urgent Assistance?</h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    For time-sensitive shipments or emergencies, call us directly.
                  </p>
                  <Button
                    variant="accent"
                    size="default"
                    className="w-full"
                    asChild
                  >
                    <a href="tel:+254798852545">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
