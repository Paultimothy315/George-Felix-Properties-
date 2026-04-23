import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { NAV_LINKS, COMPANY_INFO } from "@/src/data/mock";
import { Button } from "@/src/components/ui/button";

import { LogoIcon } from "@/src/components/ui/LogoIcon";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const textColor = isHome && !isScrolled && !mobileMenuOpen ? "text-white" : "text-primary";
  const hoverColor = isHome && !isScrolled && !mobileMenuOpen ? "hover:text-gold" : "hover:text-gold";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
          {
            "bg-white/95 backdrop-blur-md shadow-sm py-4": isScrolled || !isHome,
            "bg-transparent py-6": !isScrolled && isHome,
          }
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="relative z-50 flex items-center gap-2 group">
            <div className="w-24 h-14 md:w-28 md:h-16 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <LogoIcon className="w-full h-full drop-shadow-md" />
            </div>
            <span
              className={cn(
                "flex flex-col justify-center transition-colors",
                textColor
              )}
            >
              <span className="font-serif font-bold text-xl leading-none tracking-tight">George Felix</span>
              <span className="font-serif font-normal text-sm leading-tight tracking-wider text-gold opacity-90">Properties</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
                  textColor,
                  hoverColor
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="ml-4">
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("md:hidden p-2 relative z-50", mobileMenuOpen ? "text-white" : textColor)}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-primary z-40 flex flex-col justify-center px-6 pt-20 pb-10">
          <nav className="flex flex-col gap-6 text-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white font-serif text-2xl hover:text-gold transition-all duration-300 hover:-translate-y-1 inline-block"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8">
              <Button asChild size="lg" className="w-full max-w-sm mx-auto">
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
