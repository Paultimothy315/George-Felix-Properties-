import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, ChevronDown, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { LogoIcon } from "@/src/components/ui/LogoIcon";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-grey min-h-screen">
      <Helmet>
        <title>Contact Us | George Felix Properties Nig Ltd</title>
      </Helmet>

      <section className="pt-32 pb-20 bg-primary text-white relative">
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Get in Touch</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Ready to buy, sell, or invest? Our team is available to answer your questions and provide expert guidance.
          </p>
        </div>
      </section>

      <section className="py-16 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border-t-4 border-gold">
            <div className="w-14 h-14 bg-grey rounded-full flex items-center justify-center text-primary mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-serif font-bold text-xl text-primary mb-2">Call Us</h3>
            <p className="text-sm text-charcoal/60 mb-4">Mon - Fri, 8am - 6pm</p>
            <a href="tel:+2348079026077" className="text-lg font-bold text-gold hover:text-primary transition-colors">+234 807 902 6077</a>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border-t-4 border-gold">
            <div className="w-14 h-14 bg-grey rounded-full flex items-center justify-center text-primary mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-serif font-bold text-xl text-primary mb-2">Email Us</h3>
            <p className="text-sm text-charcoal/60 mb-4">We usually reply within 24 hours.</p>
            <a href="mailto:info@georgefelixproperties.com" className="text-lg font-bold text-gold hover:text-primary transition-colors">info@georgefelixproperties.com</a>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border-t-4 border-gold">
            <div className="w-14 h-14 bg-grey rounded-full flex items-center justify-center text-primary mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-serif font-bold text-xl text-primary mb-2">Visit HQ</h3>
            <p className="text-sm text-charcoal/60 mb-2">12 Sani Zangon - Daura St</p>
            <p className="text-sm text-charcoal/60 font-medium">Guzape, Abuja, Nigeria</p>
          </div>

        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-3xl shadow-sm border border-charcoal/5 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Form */}
            <div className="w-full lg:w-1/2 p-8 lg:p-16">
              <h2 className="text-3xl font-serif text-primary font-bold mb-2">Send a Message</h2>
              <p className="text-charcoal/60 mb-8">Fill out the form below and we will get back to you shortly.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">First Name *</label>
                    <Input placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Last Name *</label>
                    <Input placeholder="Doe" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Email Address *</label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Phone Number</label>
                    <Input type="tel" placeholder="+234..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">I am a...</label>
                  <div className="relative">
                    <select className="flex h-12 w-full appearance-none rounded-md border border-charcoal/20 bg-white px-3 py-2 text-sm text-charcoal ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:border-gold transition-colors">
                      <option>Prospective Buyer</option>
                      <option>Property Seller</option>
                      <option>Real Estate Investor</option>
                      <option>Looking to Rent</option>
                      <option>Other Enquiry</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/50 pointer-events-none" size={18} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Message *</label>
                  <textarea 
                    placeholder="How can we help you?"
                    className="w-full flex min-h-[120px] rounded-md border border-charcoal/20 bg-white px-3 py-2 text-sm text-charcoal ring-offset-white placeholder:text-charcoal/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:border-gold resize-none transition-colors"
                    required
                  />
                </div>

                <Button size="lg" className="w-full sm:w-auto px-8 gap-2" disabled={isSubmitting || isSubmitted}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : isSubmitted ? (
                    <><CheckCircle size={18} /> Message Sent!</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </Button>
                <div className="text-xs text-charcoal/40 flex items-center gap-1.5 mt-4">
                  <ShieldCheck size={14} /> Your information is kept strictly confidential.
                </div>
              </form>
            </div>

            {/* Map / Image */}
            <div className="w-full lg:w-1/2 bg-charcoal min-h-[400px] relative">
               <img src="https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Abuja skyline" className="w-full h-full object-cover opacity-50" />
               
               <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                  <div className="bg-white/95 backdrop-blur shadow-2xl rounded-2xl p-6 md:p-8 max-w-sm pointer-events-auto border-t-4 border-gold text-center lg:translate-x-[-20%] xl:translate-x-[-30%]">
                     <div className="w-32 h-20 sm:w-40 sm:h-24 mx-auto mb-4 flex items-center justify-center drop-shadow-md">
                       <LogoIcon className="w-full h-full" />
                     </div>
                     <h3 className="font-serif text-xl font-bold text-primary mb-2">George Felix HQ</h3>
                     <p className="text-sm text-charcoal/70 mb-4 pb-4 border-b border-charcoal/10">12 Sani Zangon - Daura St<br/>Guzape, Abuja</p>
                     
                     <div className="flex flex-col gap-3 text-sm text-left align-middle mx-auto inline-block">
                       <span className="flex items-center gap-3"><Clock size={16} className="text-gold" /> Mon - Fri: 8:00 AM - 6:00 PM</span>
                       <span className="flex items-center gap-3"><Clock size={16} className="text-gold" /> Saturday: By Appointment</span>
                       <span className="flex items-center gap-3 text-charcoal/50"><Clock size={16} className="text-charcoal/30" /> Sunday: Closed</span>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
