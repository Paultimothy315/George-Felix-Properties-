import { FileText, MapPin, Search } from 'lucide-react';

export const PROPERTIES = [
  {
    id: "prop-1",
    type: "Buy",
    title: "Smart Duplex",
    price: "₦1.1 Billion",
    address: "Guzape, Abuja",
    beds: 5,
    baths: 6,
    sqft: "8,500",
    features: ["Swimming Pool", "StarLink", "Alexa Automation", "Smart Security"],
    status: "New",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Experience the pinnacle of luxury living in this fully automated 5-bedroom smart duplex. Located in the exclusive district of Guzape, this commanding residence perfectly blends state-of-the-art technology with bespoke architectural details."
  },
  {
    id: "prop-2",
    type: "Buy",
    title: "Luxury Mansion",
    price: "₦950 Million",
    address: "Guzape, Abuja",
    beds: 5,
    baths: 6,
    sqft: "7,200",
    features: ["Fully Detached", "Smart Features", "Move-in Ready", "Home Theater"],
    status: "",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "An architectural masterpiece nestled in Guzape. This 5-bedroom fully detached mansion comes complete with luxury finishes, expansive living areas, and a dedicated cinema room."
  },
  {
    id: "prop-3",
    type: "Buy",
    title: "Prime Land",
    price: "₦750 Million",
    address: "Asokoro Extension, Abuja",
    beds: 0,
    baths: 0,
    sqft: "12,900", // 1200 sqm approx
    features: ["C of O", "Build-ready", "Fenced", "Corner Piece"],
    status: "Reduced",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "A rare opportunity to acquire 1,200 square meters of prime build-ready land in the highly sought-after Asokoro Extension. Secure your C of O today and build your dream estate."
  },
  {
    id: "prop-4",
    type: "Rent",
    title: "Furnished Executive Apartment",
    price: "₦13 Million/year",
    address: "Katampe, Abuja",
    beds: 3,
    baths: 3,
    sqft: "3,100",
    features: ["30KVA Solar", "24/7 Power", "Executive Style", "Fully Furnished"],
    status: "New",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Step into seamless luxury with this 3-bedroom fully furnished apartment in Katampe. Enjoy uninterrupted 24/7 power backed by a robust 30KVA solar installation."
  },
  {
    id: "prop-5",
    type: "Buy",
    title: "Modern Terraced Home",
    price: "₦450 Million",
    address: "Maitama 2, Abuja",
    beds: 4,
    baths: 5,
    sqft: "4,500",
    features: ["Bespoke Fittings", "Gym", "Rooftop Terrace"],
    status: "",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "This contemporary 4-bedroom terraced home in Maitama 2 offers a stunning open-plan layout, perfect for modern family living or entertaining guests."
  },
  {
    id: "prop-6",
    type: "Commercial",
    title: "Premium Office Space",
    price: "₦35 Million/year",
    address: "Wuye, Abuja",
    beds: 0,
    baths: 4,
    sqft: "15,000",
    features: ["Open Plan", "Fibers Optic", "Basement Parking"],
    status: "",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Elevate your business profile with this expansive 15,000 sq ft office space in Wuye, complete with ample parking and ultra-fast connectivity."
  }
];

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" }
];

export const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://www.instagram.com/georgefelixpropertiesnigltd/" },
  { name: "Facebook", href: "https://www.facebook.com/engrgeorgefelix1/" },
  { name: "LinkedIn", href: "https://ng.linkedin.com/in/george-felix-properties-nig-ltd-0a4500203" }
];

export const COMPANY_INFO = {
  name: "George Felix Properties Nig Ltd",
  shortName: "GFPNL",
  phone: "+234 807 902 6077",
  email: "info@georgefelixproperties.com",
  address: "12 Sani Zangon - Daura St, Guzape, Abuja, Nigeria"
};
