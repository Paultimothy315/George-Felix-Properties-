import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { SOCIAL_LINKS, COMPANY_INFO, NAV_LINKS } from "@/src/data/mock";

import { LogoIcon } from "@/src/components/ui/LogoIcon";

const SERVICES_LINKS = [
  { name: "Buy a Home", href: "/services#buy" },
  { name: "Sell Your Home", href: "/services#sell" },
  { name: "Property Investment", href: "/services#invest" },
  { name: "Rental Management", href: "/services#rent" },
  { name: "Commercial Real Estate", href: "/services#commercial" },
  { name: "Relocation Services", href: "/services#relocation" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Col 1 */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="w-20 h-12 md:w-24 md:h-14 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform bg-white/5 rounded-lg p-2">
                <LogoIcon className="w-full h-full drop-shadow-md" />
              </div>
              <span className="flex flex-col justify-center text-white transition-all duration-300 group-hover:-translate-y-0.5">
                <span className="font-serif font-bold text-xl leading-none tracking-tight">George Felix</span>
                <span className="font-serif font-normal text-sm leading-tight tracking-wider opacity-80">Properties</span>
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-sm">
              Exceptional services in property and engineering. Your trusted partner for luxury and affordable real estate across Nigeria.
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.name === "Instagram" ? Instagram 
                           : social.name === "Facebook" ? Facebook 
                           : Linkedin;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-primary hover:border-gold transition-all"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="font-serif text-white text-lg mb-6 tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="font-serif text-white text-lg mb-6 tracking-wide">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {SERVICES_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="font-serif text-white text-lg mb-6 tracking-wide">Contact Info</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-start gap-3 hover:text-gold transition-all duration-300 hover:-translate-y-0.5 group">
                  <Phone size={18} className="mt-0.5 text-gold group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-start gap-3 hover:text-gold transition-all duration-300 hover:-translate-y-0.5 group">
                  <Mail size={18} className="mt-0.5 text-gold group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={22} className="mt-0.5 text-gold shrink-0" />
                <span className="text-sm">{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold transition-all duration-300 hover:-translate-y-0.5 inline-block">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-all duration-300 hover:-translate-y-0.5 inline-block">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-gold transition-all duration-300 hover:-translate-y-0.5 inline-block">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
