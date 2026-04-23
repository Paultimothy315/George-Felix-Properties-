import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Building2, Search, ArrowRight, Heart, MapPin, 
  BedDouble, Bath, SquareChevronRight, CheckCircle2,
  Phone, MoveRight, ChevronDown, Star
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PROPERTIES } from "@/src/data/mock";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export function Home() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (activeTab) params.append("status", activeTab);
    if (location) params.append("location", location);
    if (propertyType) params.append("type", propertyType);
    
    navigate(`/properties?${params.toString()}`);
  };

  const handleValuation = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/contact');
  };

  return (
    <div className="w-full">
      {/* SECTION 2: HERO */}
      <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury home exterior"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
          <div className="bg-noise" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-gold uppercase tracking-widest text-sm font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gold block"></span>
              Your Trusted Real Estate Partner
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-6">
              Find the Home You've Always Deserved.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
              We help buyers, sellers, and investors make confident real estate decisions with expert guidance and local market mastery in Abuja and beyond.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/properties">Browse Properties</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get a Free Home Valuation</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-20">
          <ChevronDown className="text-white/60" size={32} />
        </div>

        {/* Floating Stat Chips */}
        <div className="absolute bottom-0 right-0 left-0 hidden lg:block z-20 translate-y-1/2">
          <div className="max-w-7xl mx-auto px-12">
            <div className="grid grid-cols-4 gap-6">
              {[
                { label: "Homes Sold", value: "500+" },
                { label: "Client Satisfaction", value: "98%" },
                { label: "Years Experience", value: "15+" },
                { label: "In Transactions", value: "₦50B+" }
              ].map((stat, i) => (
                <div key={i} className="glass dark:glass-dark rounded-xl p-6 text-center shadow-lg border-t-gold top-border-accent">
                  <p className="text-3xl font-serif text-primary font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-charcoal/70 font-medium tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SEARCH BAR */}
      <section className="bg-white pt-10 pb-20 lg:pt-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            <h2 className="text-sm font-semibold tracking-widest text-primary/60 uppercase mb-4">Search Over 1,200+ Active Listings</h2>
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-primary/5 p-4 lg:p-6 flex flex-col md:flex-row gap-4">
              <div className="flex-1 w-full bg-grey rounded-lg p-1 flex">
                {["Buy", "Rent", "Commercial"].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 rounded-md text-sm font-medium py-2.5 transition-all ${
                      activeTab === tab ? "bg-white shadow text-primary" : "text-charcoal/60 hover:text-primary"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="flex-1 min-w-[200px] border border-charcoal/10 rounded-lg px-4 flex items-center mb-0 bg-white">
                <MapPin className="text-gold mr-2" size={18} />
                <input 
                  type="text" 
                  placeholder="Location or Area" 
                  className="w-full h-12 outline-none text-sm bg-transparent" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="flex-1 min-w-[150px] border border-charcoal/10 rounded-lg px-4 flex items-center mb-0 bg-white">
                <Building2 className="text-gold mr-2" size={18} />
                <select 
                  className="w-full h-12 outline-none text-sm bg-transparent text-charcoal cursor-pointer"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Property Type</option>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Land">Land</option>
                </select>
              </div>
              <Button size="lg" className="w-full md:w-auto px-8 gap-2" onClick={handleSearch}>
                <Search size={18} /> Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: FEATURED LISTINGS */}
      <section className="py-24 bg-grey relative">
        {/* Diagonal divider top */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-primary mb-4 relative inline-block">
                Featured Properties
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gold rounded-full"></span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-charcoal/70 text-lg max-w-2xl mt-6">
                Hand-picked listings across the region's most sought-after neighborhoods.
              </motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Link to="/properties" className="group flex items-center gap-2 font-semibold text-gold hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex">
                View All Listings <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTIES.slice(0, 3).map((property, idx) => (
              <motion.div 
                key={property.id}
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeUp}
                transition={{ delay: idx * 0.1 }}
                onClick={() => navigate(`/properties/${property.id}`)}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] border border-transparent hover:border-gold/30 transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {property.type}
                    </span>
                    {property.status && (
                      <span className="bg-primary/90 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        {property.status}
                      </span>
                    )}
                  </div>
                  <button className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary hover:text-gold hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300">
                    <Heart size={18} />
                  </button>
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-2xl font-serif font-bold text-primary mb-2 line-clamp-1">{property.price}</div>
                  <h3 className="text-lg font-medium text-charcoal mb-2 line-clamp-1">{property.title}</h3>
                  <div className="flex items-center text-charcoal/60 text-sm mb-6 pb-6 border-b border-charcoal/10">
                    <MapPin size={16} className="mr-1.5 text-gold shrink-0" />
                    <span className="truncate">{property.address}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-charcoal mt-auto">
                    {property.beds > 0 && (
                      <div className="flex items-center gap-1.5">
                        <BedDouble size={18} className="text-charcoal/40" /> <span>{property.beds} Beds</span>
                      </div>
                    )}
                    {property.baths > 0 && (
                      <div className="flex items-center gap-1.5">
                        <Bath size={18} className="text-charcoal/40" /> <span>{property.baths} Baths</span>
                      </div>
                    )}
                    {property.sqft && (
                      <div className="flex items-center gap-1.5">
                        <SquareChevronRight size={18} className="text-charcoal/40" /> <span>{property.sqft} SqFt</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="bg-noise" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Your Journey to the Perfect Home, Simplified</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">We've refined our process to eliminate the stress from buying, selling, or investing in real estate.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line desktop */}
            <div className="hidden md:block absolute top-[44px] left-[12%] right-[12%] h-[2px] bg-gold/20 border-t border-dashed border-gold/40 z-0"></div>
            
            {[
              { num: "01", title: "Tell Us What You Need", desc: "Share your goals, budget, and ideal timeline during a free consultation." },
              { num: "02", title: "We Curate Matches", desc: "Our team scours the market to find properties that perfectly align with your criteria." },
              { num: "03", title: "Tour With Confidence", desc: "Visit selected homes with expert guidance on neighborhood trends and property value." },
              { num: "04", title: "Close & Celebrate", desc: "We handle the tough negotiations and complex paperwork so you can just enjoy the win." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeUp}
                transition={{ delay: idx * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center p-4"
              >
                <div className="w-20 h-20 bg-primary border-4 border-primary shadow-[0_0_0_2px_rgba(201,168,76,0.3)] rounded-full flex items-center justify-center font-serif text-2xl font-bold text-gold mb-6 bg-noise relative">
                  <div className="absolute inset-0 rounded-full bg-white/5"></div>
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: ABOUT / TRUST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <div className="aspect-[4/5] rounded-tl-full rounded-tr-full overflow-hidden border-8 border-grey shadow-xl p-2 bg-grey">
                <img 
                  src="/ceo.jpg" 
                  alt="Engr. George Felix - CEO"
                  className="w-full h-full object-cover rounded-tl-full rounded-tr-full"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-gold text-primary p-8 rounded-2xl shadow-xl max-w-[280px] hidden md:block">
                <p className="font-serif text-4xl font-bold mb-2">15+</p>
                <p className="font-medium text-sm">Years of transforming finding a house into finding a home.</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Why Choose Us</motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                Real Estate Expertise Built on Decades of Local Trust
              </motion.h2>
              <motion.p variants={fadeUp} className="text-charcoal/75 text-lg mb-8 leading-relaxed">
                At George Felix Properties Nig Ltd, we don't just sell real estate; we provide comprehensive engineering and property solutions. Our dual expertise ensures that whether you're buying a luxury villa or investing in raw land, you have structural insight and market intelligence on your side.
              </motion.p>
              
              <ul className="mb-10 space-y-4">
                {[
                  "No-pressure, strategic guidance",
                  "Deep neighborhood knowledge in Abuja & Lagos",
                  "Negotiation strategies that consistently win"
                ].map((item, i) => (
                  <motion.li variants={fadeUp} key={i} className="flex items-center gap-3 font-medium text-primary">
                    <CheckCircle2 className="text-gold" size={24} />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <motion.div variants={fadeUp}>
                <Link to="/about" className="inline-flex items-center gap-2 font-bold text-gold hover:text-primary transition-all duration-300 hover:translate-x-1 text-lg pb-1 border-b-[2px] border-gold hover:border-primary">
                  Meet Our Team <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: SERVICES */}
      <section className="py-24 bg-[#F5F3EF] relative">
         <div className="absolute top-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 0, 0 100%, 100% 0)" }}></div>
         
         <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 pt-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Full-Service Real Estate, Start to Finish</h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto text-lg">Comprehensive solutions tailored to your unique property journey.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Buy a Home", desc: "Discover exclusive listings and navigate the buying process with expert negotiators.", icon: Building2 },
                { title: "Sell Your Home", desc: "Maximize your property's value with our proven marketing and staging strategies.", icon: Search },
                { title: "Property Investment", desc: "Identify high-yield opportunities in emerging neighborhoods and commercial hubs.", icon: MoveRight },
                { title: "Rental Management", desc: "Stress-free property management that protects your investment and ensures tenant satisfaction.", icon: ShieldCheck },
                { title: "Commercial Real Estate", desc: "Strategic spaces for your business to thrive, from retail to premium office suites.", icon: Briefcase },
                { title: "Civil Engineering", desc: "Our structural engineering arm provides feasibility, design, and construction oversight.", icon: HardHat }
              ].map((service, i) => {
                const Icon = service.icon || Building2;
                return (
                  <motion.div 
                    key={i}
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    variants={fadeUp}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border-t-4 border-transparent hover:border-gold relative"
                  >
                    <div className="w-14 h-14 bg-grey rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-charcoal/70 mb-6 flex-1 text-sm leading-relaxed">{service.desc}</p>
                    <Link to={`/services`} className="text-gold font-semibold text-sm group-hover:text-primary transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-300 relative">
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
         </div>
      </section>

      {/* SECTION 8: TESTIMONIALS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-primary mb-4 relative inline-block">
                Client Success Stories
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gold rounded-full"></span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-charcoal/70 text-lg max-w-2xl mt-6">
                Hear from the homeowners and investors who have experienced the George Felix difference.
              </motion.p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "George Felix Properties made finding our dream home in Guzape an absolute breeze. They handled everything from structural vetting to negotiation seamlessly.",
                author: "Sarah & John A.",
                role: "First-Time Homeowners",
                rating: 5
              },
              {
                text: "Their engineering background gave me confidence when investing in raw land in Katampe. They aren't just selling land; they understand the terrain.",
                author: "Alhaji Musa T.",
                role: "Property Investor",
                rating: 5
              },
              {
                text: "Sold my Maitama property well above the initial asking price. The staging, marketing, and the way they vetted serious buyers was world-class.",
                author: "Elena R.",
                role: "Seller",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeUp}
                transition={{ delay: idx * 0.15 }}
                className="bg-[#F5F3EF] rounded-2xl p-8 lg:p-10 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group flex flex-col"
              >
                <div className="absolute top-0 right-0 -mr-4 -mt-4 text-gold/10 group-hover:text-gold/20 transition-colors duration-500">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                </div>
                
                <div className="flex gap-1 mb-6 text-gold relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-charcoal/80 text-lg leading-relaxed mb-8 relative z-10 font-serif italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 relative z-10 border-t border-charcoal/10 pt-6 mt-auto">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold font-serif shadow-md">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.author}</h4>
                    <p className="text-sm text-charcoal/60">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA BANNER */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif mb-4">What Is Your Home Worth Today?</motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 mb-10 text-lg">
              Get an instant, data-driven estimate and connect with a local expert for a full market analysis — completely free.
            </motion.p>
            <motion.form variants={fadeUp} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-4" onSubmit={handleValuation}>
              <input 
                type="text" 
                placeholder="Enter your property address" 
                className="flex-1 h-14 rounded-md px-6 text-charcoal outline-none focus:ring-2 focus:ring-gold border-none"
                required
              />
              <Button type="submit" size="default" className="h-14 px-8 text-lg shrink-0">Get Free Valuation</Button>
            </motion.form>
            <motion.p variants={fadeUp} className="text-sm text-gold">No obligation. No spam. Just clarity.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="bg-noise" />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Ready to Make Your Move?
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-white/80 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're buying, selling, or investing — our team is ready to guide you every step of the way.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="h-14 px-10 text-lg" asChild>
              <Link to="/properties">Browse Listings</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg" asChild>
              <Link to="/contact">Talk to an Agent</Link>
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

// Temporary icon fallbacks
// In a real app we'd import these properly from lucide-react, 
// using simple substitutes here to avoid import errors
function ShieldCheck(props: any) { return <CheckCircle2 {...props} /> }
function Briefcase(props: any) { return <Building2 {...props} /> }
function HardHat(props: any) { return <Building2 {...props} /> }
