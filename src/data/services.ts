import {
  Plane,
  Ship,
  FileCheck,
  Truck,
  Package,
  Warehouse,
  ShoppingBag,
  Shield,
  Home,
  type LucideIcon,
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  features: string[];
  forWho: string;
  benefits: { title: string; description: string }[];
  process: { title: string; description: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const services: ServiceDetail[] = [
  {
    slug: "air-freight",
    icon: Plane,
    title: "Air Freight",
    shortTitle: "Air Freight",
    tagline: "Fast, reliable air cargo across the globe",
    description:
      "Fast and reliable air cargo services connecting Kenya to global destinations, ideal for time-sensitive and high-value shipments.",
    features: [
      "Express delivery options",
      "Dangerous goods handling",
      "Temperature-controlled cargo",
      "Door-to-door service",
    ],
    forWho: "Ideal for time-sensitive shipments, perishables, and high-value goods.",
    benefits: [
      { title: "Speed", description: "Transit times measured in days, not weeks." },
      { title: "Global Reach", description: "Access to major airports across every continent." },
      { title: "Reliability", description: "Scheduled flights with high on-time performance." },
    ],
    process: [
      { title: "Booking", description: "Share your cargo details and we secure space with our airline partners." },
      { title: "Pickup & Documentation", description: "We collect the goods and handle export paperwork." },
      { title: "Flight & Tracking", description: "Cargo is flown to destination with real-time tracking." },
      { title: "Clearance & Delivery", description: "Customs cleared and delivered to your door." },
    ],
    seoTitle: "Air Freight Services Kenya | Fast Global Air Cargo",
    seoDescription:
      "Reliable air freight from Kenya to worldwide destinations. Express, perishable, and dangerous goods handling with door-to-door delivery.",
  },
  {
    slug: "sea-freight",
    icon: Ship,
    title: "Sea Freight (FCL & LCL)",
    shortTitle: "Sea Freight",
    tagline: "Cost-effective ocean shipping worldwide",
    description:
      "Cost-effective ocean shipping for bulk cargo and containers, with FCL and LCL options through leading shipping lines.",
    features: [
      "Full Container Load (FCL)",
      "Less than Container Load (LCL)",
      "Reefer containers available",
      "Global port coverage",
    ],
    forWho: "Best for large volume, non-urgent shipments and bulk imports.",
    benefits: [
      { title: "Lower Cost", description: "The most economical option for large shipments." },
      { title: "High Capacity", description: "Move heavy and oversized cargo with ease." },
      { title: "Flexible Options", description: "Choose FCL, LCL, or reefer based on your needs." },
    ],
    process: [
      { title: "Quote & Booking", description: "We compare rates from top shipping lines for your route." },
      { title: "Origin Handling", description: "Cargo is collected, packed, and loaded at origin." },
      { title: "Ocean Transit", description: "Shipment sails via our partner carriers with regular updates." },
      { title: "Port Clearance & Delivery", description: "We clear at Mombasa and deliver inland." },
    ],
    seoTitle: "Sea Freight Kenya | FCL & LCL Ocean Shipping",
    seoDescription:
      "Affordable FCL and LCL sea freight services through Mombasa Port. Reefer containers and global coverage for bulk imports and exports.",
  },
  {
    slug: "customs-clearance",
    icon: FileCheck,
    title: "Customs Clearance",
    shortTitle: "Customs Clearance",
    tagline: "Expert customs handling & compliance",
    description:
      "Expert handling of all customs documentation and compliance requirements with licensed KRA agents.",
    features: [
      "KRA licensed agents",
      "Duty calculations",
      "Import/export permits",
      "Compliance advisory",
    ],
    forWho: "Essential for all importers and exporters entering Kenya markets.",
    benefits: [
      { title: "Faster Release", description: "Avoid delays with accurate, timely filings." },
      { title: "Cost Savings", description: "Correct HS codes and duty optimization save you money." },
      { title: "Full Compliance", description: "Stay compliant with KRA, KEBS, and other regulators." },
    ],
    process: [
      { title: "Document Review", description: "We review invoices, packing lists, and permits." },
      { title: "Entry Lodgement", description: "Customs entry is filed through the KRA iCMS system." },
      { title: "Duty Payment", description: "Duties and taxes are calculated and paid on your behalf." },
      { title: "Release & Delivery", description: "Cargo is released and coordinated for delivery." },
    ],
    seoTitle: "Customs Clearance Kenya | KRA Licensed Clearing Agents",
    seoDescription:
      "Professional customs clearance in Kenya. KRA licensed agents handle duties, permits, and compliance for smooth import and export.",
  },
  {
    slug: "inland-transport",
    icon: Truck,
    title: "Inland & Land Transport",
    shortTitle: "Inland Transport",
    tagline: "Reliable road transport across East Africa",
    description:
      "Seamless road transport connecting major ports to inland destinations across Kenya and East Africa.",
    features: [
      "Cross-border transport",
      "Dedicated fleet network",
      "Real-time GPS tracking",
      "Secure transit",
    ],
    forWho: "For businesses needing port-to-door or regional transport solutions.",
    benefits: [
      { title: "Regional Coverage", description: "Serving Uganda, Rwanda, Tanzania, DRC, and South Sudan." },
      { title: "Live Visibility", description: "GPS tracking on every truck for full transparency." },
      { title: "Fleet Variety", description: "Trucks, trailers, and specialized vehicles available." },
    ],
    process: [
      { title: "Planning", description: "We plan the optimal route and vehicle type." },
      { title: "Pickup", description: "Cargo is collected from port or origin location." },
      { title: "Transit", description: "Real-time tracking as the shipment moves inland or cross-border." },
      { title: "Delivery", description: "Safe offloading and proof of delivery at destination." },
    ],
    seoTitle: "Inland Transport Kenya | Road Freight & Cross-Border Trucking",
    seoDescription:
      "Reliable inland and cross-border road transport from Mombasa Port across East Africa with GPS-tracked, dedicated fleet.",
  },
  {
    slug: "last-mile-delivery",
    icon: Package,
    title: "Last-Mile Delivery",
    shortTitle: "Last-Mile Delivery",
    tagline: "Doorstep delivery you can count on",
    description:
      "Reliable final-mile delivery to customers across Kenya, perfect for e-commerce and distribution businesses.",
    features: [
      "Same-day options",
      "Proof of delivery",
      "Flexible scheduling",
      "Urban & rural coverage",
    ],
    forWho: "Perfect for e-commerce, distributors, and retail businesses.",
    benefits: [
      { title: "Speed", description: "Same-day and next-day delivery available in major towns." },
      { title: "Transparency", description: "Digital proof of delivery for every parcel." },
      { title: "Reach", description: "Coverage from Nairobi to rural counties." },
    ],
    process: [
      { title: "Order Intake", description: "We receive and sort your orders daily." },
      { title: "Route Optimization", description: "Deliveries are batched and routed for efficiency." },
      { title: "Delivery", description: "Riders and vans deliver directly to your customers." },
      { title: "Confirmation", description: "Digital POD is shared with you upon delivery." },
    ],
    seoTitle: "Last-Mile Delivery Kenya | Same-Day Parcel Delivery",
    seoDescription:
      "Fast last-mile delivery across Kenya for e-commerce, retail, and distributors. Same-day options with digital proof of delivery.",
  },
  {
    slug: "warehousing",
    icon: Warehouse,
    title: "Warehousing & Storage",
    shortTitle: "Warehousing",
    tagline: "Secure storage & inventory management",
    description:
      "Secure storage facilities with full inventory management, bonded warehouse access, and pick & pack services.",
    features: [
      "Bonded warehouse access",
      "Inventory management",
      "Pick & pack services",
      "Short & long-term storage",
    ],
    forWho: "Suitable for businesses needing secure, managed storage solutions.",
    benefits: [
      { title: "Security", description: "24/7 monitored facilities with strict access control." },
      { title: "Flexibility", description: "Scale storage up or down as your needs change." },
      { title: "Efficiency", description: "Integrated pick, pack, and dispatch operations." },
    ],
    process: [
      { title: "Intake", description: "Goods are received, checked, and logged into inventory." },
      { title: "Storage", description: "Cargo is stored in the right zone, including bonded areas." },
      { title: "Fulfillment", description: "Orders are picked, packed, and prepared for dispatch." },
      { title: "Reporting", description: "Regular inventory reports and stock reconciliation." },
    ],
    seoTitle: "Warehousing Kenya | Bonded Storage & Fulfillment",
    seoDescription:
      "Secure warehousing and storage in Kenya with bonded warehouse access, inventory management, and pick & pack fulfillment.",
  },
  {
    slug: "buy-and-ship",
    icon: ShoppingBag,
    title: "Buy & Ship Consolidation",
    shortTitle: "Buy & Ship",
    tagline: "We source, consolidate, and ship for you",
    description:
      "We purchase and consolidate goods from global suppliers across China, USA, UK, UAE, and India and deliver them to your door.",
    features: [
      "Supplier coordination",
      "Quality inspection",
      "Consolidation services",
      "Multi-country sourcing",
    ],
    forWho: "Ideal for importers sourcing from China, India, UAE, UK, or USA.",
    benefits: [
      { title: "Convenience", description: "One partner handles sourcing, payments, and shipping." },
      { title: "Cost Savings", description: "Consolidation reduces per-unit shipping cost." },
      { title: "Quality Assurance", description: "Pre-shipment inspection to protect your investment." },
    ],
    process: [
      { title: "Order", description: "Send us product links or supplier details." },
      { title: "Purchase & Inspect", description: "We pay the supplier and inspect the goods." },
      { title: "Consolidate", description: "Items are consolidated in our overseas warehouse." },
      { title: "Ship & Deliver", description: "Cargo is shipped to Kenya, cleared, and delivered to you." },
    ],
    seoTitle: "Buy & Ship Kenya | China, USA, UK, UAE & India Consolidation",
    seoDescription:
      "Buy and ship service from China, USA, UK, UAE, and India to Kenya. Sourcing, consolidation, and door-to-door delivery.",
  },
  {
    slug: "cargo-insurance",
    icon: Shield,
    title: "Cargo Insurance",
    shortTitle: "Cargo Insurance",
    tagline: "Protect your cargo end-to-end",
    description:
      "Comprehensive marine and cargo insurance for peace of mind on every shipment.",
    features: [
      "All-risk coverage",
      "Competitive premiums",
      "Quick claims processing",
      "Global coverage",
    ],
    forWho: "Recommended for all shippers wanting to protect their investments.",
    benefits: [
      { title: "Peace of Mind", description: "Cover for loss, damage, and theft in transit." },
      { title: "Fast Claims", description: "Streamlined claims process for quick payouts." },
      { title: "Custom Cover", description: "Policies tailored to cargo type and value." },
    ],
    process: [
      { title: "Assess", description: "We evaluate cargo value, route, and risk." },
      { title: "Quote", description: "You receive a competitive premium quote." },
      { title: "Cover", description: "Policy is issued before shipment moves." },
      { title: "Claim Support", description: "We support you through any claim, end to end." },
    ],
    seoTitle: "Cargo Insurance Kenya | Marine & Freight Insurance",
    seoDescription:
      "All-risk marine and cargo insurance for imports and exports through Kenya. Competitive premiums and quick claims support.",
  },
  {
    slug: "moving-and-relocation",
    icon: Home,
    title: "Moving & Relocation",
    shortTitle: "Moving & Relocation",
    tagline: "Stress-free moves, local & international",
    description:
      "Personal and corporate relocation services locally and internationally, from packing to unpacking.",
    features: [
      "Household goods moving",
      "Office relocations",
      "Packing services",
      "International moves",
    ],
    forWho: "For individuals and companies relocating within or outside Kenya.",
    benefits: [
      { title: "Full Service", description: "We pack, load, ship, and unpack for you." },
      { title: "Care", description: "Professional handling of fragile and valuable items." },
      { title: "Global Moves", description: "International relocation with customs handled." },
    ],
    process: [
      { title: "Survey", description: "We visit or video-call to assess your move." },
      { title: "Pack", description: "Our team packs items safely with quality materials." },
      { title: "Transport", description: "Goods are moved locally or shipped internationally." },
      { title: "Unpack & Settle", description: "We unpack at destination and help you settle in." },
    ],
    seoTitle: "Moving & Relocation Kenya | Home & Office Movers",
    seoDescription:
      "Professional home and office relocation services in Kenya and internationally. Packing, transport, customs, and unpacking handled.",
  },
];

export const getServiceBySlug = (slug?: string) =>
  services.find((s) => s.slug === slug);
