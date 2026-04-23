import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Services() {
  const services = [
    {
      id: "buy",
      title: "Buyer Representation",
      desc: "Navigating the real estate market requires an expert who holds your best interests above all else. We provide exclusive representation for buyers looking for luxury homes, family estates, or smart investments in Abuja and Lagos.",
      benefits: ["Access to off-market and pre-market properties", "Rigorous structural evaluation before purchase", "Aggressive negotiation to secure the best price"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      cta: "Find Your Home"
    },
    {
      id: "sell",
      title: "Seller & Listing Services",
      desc: "Selling a premium property shouldn't be left to chance. We combine deep market intelligence with high-end staging, professional photography, and targeted digital marketing to ensure your property commands its maximum value.",
      benefits: ["Strategic pricing based on live market data", "Multi-channel luxury marketing campaigns", "Vetting of all potential buyers for seamless closing"],
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      cta: "Get a Valuation",
      reverse: true
    },
    {
      id: "invest",
      title: "Property Investment Advisory",
      desc: "Real estate is the most proven vehicle for generational wealth. We guide investors toward high-yield land acquisitions and rental properties in rapidly appreciating areas like Guzape and Katampe.",
      benefits: ["ROI and Cap Rate analysis", "Feasibility studies for development plots", "Portfolio diversification strategies"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      cta: "Explore Investments"
    },
    {
      id: "engineering",
      title: "Civil & Structural Engineering",
      desc: "Through Purpose Project Engineering Service Ltd, our in-house engineering team provides end-to-end structural solutions. From raw land to fully finished estates, we build and manage with uncompromising quality.",
      benefits: ["Structural design and feasibility", "Construction project management", "Interior design and custom furnishing"],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      cta: "Discuss a Project",
      reverse: true
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Our Services | George Felix Properties Nig Ltd</title>
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-charcoal text-white relative">
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Full-Service Real Estate Solutions</motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-lg text-white/70 max-w-2xl mx-auto">
            From the first consultation to the final closing signature, we manage every detail with precision.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <div className="py-24 space-y-24">
        {services.map((svc, idx) => (
          <section key={svc.id} id={svc.id} className="max-w-7xl mx-auto px-6 lg:px-12 scroll-m-32">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${svc.reverse ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className={`${svc.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                  <div className="w-16 h-1 bg-gold mb-6"></div>
                  <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">{svc.title}</h2>
                  <p className="text-charcoal/70 text-lg leading-relaxed mb-8">{svc.desc}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {svc.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-primary font-medium">
                        <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={20} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild>
                    <Link to="/contact">{svc.cta}</Link>
                  </Button>
                </motion.div>
              </div>

              <div className={`${svc.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative">
                  <div className={`absolute inset-0 bg-gold/10 transform rounded-3xl ${svc.reverse ? '-translate-x-6 translate-y-6' : 'translate-x-6 translate-y-6'}`}></div>
                  <img src={svc.image} alt={svc.title} className="w-full h-auto aspect-[4/3] object-cover rounded-3xl relative z-10 shadow-xl" />
                </motion.div>
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="bg-noise" />
        <div className="max-w-3xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl font-serif mb-6">Not sure where to start? Let's talk.</h2>
          <p className="text-white/70 mb-10 text-lg">Every great investment begins with an honest conversation. Contact us to schedule your complimentary strategy session.</p>
          <Button size="lg" variant="outline" asChild className="hover:bg-gold hover:text-primary hover:border-gold px-12">
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
