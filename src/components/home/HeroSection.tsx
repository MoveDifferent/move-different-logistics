import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import hero7 from "@/assets/hero-7.jpg";

const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  const advance = useCallback(() => {
    setTransitioning(true);
    setNext((current + 1) % images.length);
    setTimeout(() => {
      setCurrent((current + 1) % images.length);
      setTransitioning(false);
    }, 1000);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance]);

  const highlights = [
    "Licensed & Certified",
    "24/7 Cargo Tracking",
    "Competitive Rates",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Sliding Background Images */}
      {images.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 z-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : i === next && transitioning ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />

      {/* Slide indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-accent w-8" : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Kenya's Trusted Logistics Partner
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            End-to-End Logistics
            <br />
            <span className="text-accent">Solutions You Can Trust</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-up delay-100">
            Air & Sea Freight | Customs Clearance | Inland Transport | Warehousing | Buy & Ship
          </p>

          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up delay-200">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
