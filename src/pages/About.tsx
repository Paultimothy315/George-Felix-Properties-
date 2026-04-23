import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/button";
import { Trophy, Users, Building, ShieldCheck, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

export function About() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>About Us | George Felix Properties Nig Ltd</title>
        <meta name="description" content="Learn about George Felix Properties Nig Ltd, a leading real estate agency and engineering firm in Abuja, Nigeria." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-charcoal text-white relative flex items-center justify-center min-h-[40vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Office building"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="bg-noise" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Our Story</motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Mastering Real Estate & Civil Engineering.</motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Built on Integrity, Driven by Excellence.</h2>
              <p className="text-charcoal/75 text-lg leading-relaxed mb-6">
                George Felix Properties Nig Ltd (RC: 8369607) was founded to bridge the gap between luxury real estate and structural integrity. Operating predominantly in the high-growth districts of Abuja — Guzape, Asokoro, Katampe, and Maitama — we have established ourselves as the premier destination for discerning buyers, sellers, and investors.
              </p>
              <p className="text-charcoal/75 text-lg leading-relaxed mb-8">
                Through our structural arm, Purpose Project Engineering Service Ltd, we don't just sell homes; we understand how they are built from the ground up. This duel expertise allows us to provide unmatched value and security to our clients.
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-charcoal/10">
                <div className="w-16 h-16 bg-grey rounded-full flex items-center justify-center">
                   <ShieldCheck className="text-gold" size={32} />
                </div>
                <div>
                  <p className="font-serif text-xl text-primary font-bold">Enduring Quality</p>
                  <p className="text-sm text-charcoal/60">Our promise to every client.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl flex gap-6 z-10 border border-charcoal/5 hidden md:flex">
                 <div className="text-center">
                    <p className="text-3xl font-serif font-bold text-primary">₦50B+</p>
                    <p className="text-xs text-charcoal/60 uppercase font-semibold mt-1">Transaction Vol</p>
                 </div>
                 <div className="w-px bg-charcoal/10"></div>
                 <div className="text-center">
                    <p className="text-3xl font-serif font-bold text-gold">100%</p>
                    <p className="text-xs text-charcoal/60 uppercase font-semibold mt-1">Transparency</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-primary text-white relative">
        <div className="bg-noise" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Our Core Values</h2>
            <p className="text-white/70 max-w-2xl mx-auto">The principles that guide every handshake, negotiation, and contract.</p>
          </div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: ShieldCheck, title: "Unwavering Integrity", desc: "We operate with total transparency. If a deal isn't right for you, we'll be the first to tell you." },
              { icon: Building, title: "Structural Insight", desc: "As engineers, we see beyond fresh paint. We evaluate the core infrastructure of every property." },
              { icon: Trophy, title: "Relentless Excellence", desc: "We go the extra mile to negotiate the best terms, craft the best marketing, and deliver seamless closings." }
            ].map((val, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                <val.icon className="text-gold mb-6" size={40} />
                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Minimal */}
      <section className="py-24 bg-grey">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center text-primary">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Meet the Experts</h2>
          <p className="text-charcoal/70 mb-16 max-w-2xl mx-auto text-lg">A dedicated team of brokers, engineers, and property managers working in unison for your success.</p>
          
          <div className="flex items-center justify-center flex-col">
            <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-full flex items-center justify-center shadow-xl mb-6 overflow-hidden border-4 border-white">
               <img 
                 src="/ceo.jpg" 
                 alt="Engr. George Felix - Founder & Lead Broker" 
                 className="w-full h-full object-cover" 
               />
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-2">Engr. George Felix</h3>
            <p className="text-charcoal/60 uppercase tracking-widest text-sm font-semibold mb-6">Founder & Lead Broker</p>
            <p className="max-w-2xl text-charcoal/80 leading-relaxed mx-auto italic">
              "We believe that acquiring property is one of the most significant milestones in our clients' lives. Our duty is not merely to sell, but to steward them through that process with protective expertise."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold">
         <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 font-bold">Partner With Us Today</h2>
            <Button asChild size="lg" className="bg-primary text-white hover:bg-white hover:text-primary transition-colors text-lg px-8 py-6 h-auto">
              <Link to="/contact">Work With Our Team</Link>
            </Button>
         </div>
      </section>

    </div>
  );
}
