import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="bg-white rounded-lg p-3 inline-block mb-6">
              <img src={logo} alt="Move Different Logistics" className="h-14 w-auto" />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted logistics partner in Kenya and East Africa. End-to-end freight forwarding, customs clearance, and delivery solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Services", "Buy & Ship", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/ & /g, "-and-").replace(/ /g, "-")}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {["Air Freight", "Sea Freight", "Customs Clearance", "Warehousing", "Last-Mile Delivery"].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Nairobi, Kenya<br />East Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+254798852545" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  +254 798 852 545
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:logistics@movedifferent.co.ke" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  logistics@movedifferent.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Move Different Logistics Ltd. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-1">
              Website Design & Digital Marketing by{" "}
              <a
                href="https://infinitedigitalnetwork.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors underline underline-offset-2"
              >
                Infinite Digital Network
              </a>
            </p>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
