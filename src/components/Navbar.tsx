import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";
import { services } from "@/data/services";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Partners", href: "/partners" },
  { name: "Buy & Ship", href: "/buy-and-ship" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();
  const servicesActive = pathname.startsWith("/services");

  const closeMobile = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-custom section-padding py-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Move Different Logistics" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger
                    className={`flex items-center gap-1 text-sm font-medium transition-colors outline-none ${
                      servicesActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64 bg-background">
                    <DropdownMenuItem asChild>
                      <Link to="/services" className="font-semibold cursor-pointer">
                        All Services
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {services.map((s) => {
                      const Icon = s.icon;
                      return (
                        <DropdownMenuItem key={s.slug} asChild>
                          <Link to={`/services/${s.slug}`} className="cursor-pointer flex items-center gap-2">
                            <Icon className="w-4 h-4 text-accent" />
                            <span>{s.shortTitle}</span>
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+254798852545" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Phone className="w-4 h-4" />
              <span>+254 798 852 545</span>
            </a>
            <Button variant="accent" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        to={link.href}
                        className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                        onClick={closeMobile}
                      >
                        {link.name}
                      </Link>
                      <button
                        onClick={() => setServicesOpen((v) => !v)}
                        className="p-2"
                        aria-label="Toggle services"
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    {servicesOpen && (
                      <div className="pl-4 flex flex-col gap-2 border-l border-border ml-1 mb-2">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="text-sm text-muted-foreground hover:text-foreground py-1.5"
                            onClick={closeMobile}
                          >
                            {s.shortTitle}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={closeMobile}
                  >
                    {link.name}
                  </Link>
                ),
              )}
              <Button variant="accent" className="mt-4" asChild>
                <Link to="/contact" onClick={closeMobile}>Get a Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
