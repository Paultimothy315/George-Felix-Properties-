import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { PROPERTIES } from "@/src/data/mock";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { MapPin, BedDouble, Bath, SquareChevronRight, CalendarDays, CheckCircle2, Share2, Heart, ChevronLeft } from "lucide-react";

export function PropertyDetail() {
  const { id } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Quick fallback if id not found, though in real app we'd redirect to 404
  const property = PROPERTIES.find(p => p.id === id) || PROPERTIES[0];

  const handleRequestTour = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{property.title} | George Felix Properties Nig Ltd</title>
      </Helmet>

      {/* Breadcrumb Area */}
      <div className="pt-32 pb-6 max-w-7xl mx-auto px-6 lg:px-12">
        <Link to="/properties" className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal/60 hover:text-gold transition-colors mb-4">
          <ChevronLeft size={16} /> Back to Properties
        </Link>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <div>
            <div className="flex gap-2 mb-3">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {property.type}
              </span>
              {property.status && (
                <span className="bg-gold text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {property.status}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-primary mb-2 leading-tight">{property.title}</h1>
            <p className="text-charcoal flex items-center gap-2 text-lg">
              <MapPin className="text-gold" size={20} /> {property.address}
            </p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-4xl font-serif font-bold text-gold">{property.price}</p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[50vh] min-h-[400px]">
          <div className="lg:col-span-2 h-full rounded-2xl overflow-hidden relative group">
            <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary hover:text-gold shadow-md transition-colors">
                <Share2 size={20} />
              </button>
              <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary hover:text-gold shadow-md transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </div>
          <div className="hidden lg:grid grid-rows-2 gap-4 h-full">
            <div className="rounded-2xl overflow-hidden">
               <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-primary/40 flex items-center justify-center cursor-pointer hover:bg-primary/50 transition-colors">
                 <span className="text-white font-serif text-xl font-bold border-b-2 border-gold pb-1">+5 Photos</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-grey rounded-2xl border border-charcoal/5">
            <div className="flex flex-col gap-1 border-b md:border-b-0 md:border-r border-charcoal/10 pb-4 md:pb-0">
              <span className="text-sm font-semibold text-charcoal/60 flex items-center gap-1.5"><BedDouble size={16} className="text-gold"/> Bedrooms</span>
              <span className="font-serif text-xl text-primary font-bold">{property.beds || "-"}</span>
            </div>
            <div className="flex flex-col gap-1 border-b md:border-b-0 md:border-r border-charcoal/10 pb-4 md:pb-0 pl-0 md:pl-4">
              <span className="text-sm font-semibold text-charcoal/60 flex items-center gap-1.5"><Bath size={16} className="text-gold"/> Bathrooms</span>
              <span className="font-serif text-xl text-primary font-bold">{property.baths || "-"}</span>
            </div>
            <div className="flex flex-col gap-1 border-r border-charcoal/10 pl-0 md:pl-4 pt-4 md:pt-0">
              <span className="text-sm font-semibold text-charcoal/60 flex items-center gap-1.5"><SquareChevronRight size={16} className="text-gold"/> Square Feet</span>
              <span className="font-serif text-xl text-primary font-bold">{property.sqft || "-"}</span>
            </div>
            <div className="flex flex-col gap-1 pl-0 md:pl-4 pt-4 md:pt-0">
              <span className="text-sm font-semibold text-charcoal/60 flex items-center gap-1.5"><CalendarDays size={16} className="text-gold"/> Year Built</span>
              <span className="font-serif text-xl text-primary font-bold">2023</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-serif text-primary font-bold mb-4 relative inline-block">
              Property Description
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-gold"></span>
            </h2>
            <p className="text-charcoal/80 leading-relaxed text-lg whitespace-pre-line mt-6">
              {property.description}
              {"\n\n"}
              This exceptional property offers a rare combination of location, luxury, and lifestyle. The expansive living areas are flooded with natural light, featuring high ceilings and premium finishes throughout. The chef's kitchen is equipped with top-of-the-line appliances and custom cabinetry.
              {"\n\n"}
              Step outside to discover a carefully landscaped private sanctuary, perfect for entertaining or quiet relaxation. Every detail has been meticulously considered to ensure maximum comfort and sophistication.
            </p>
          </div>

          {/* Features */}
          <div>
             <h2 className="text-2xl font-serif text-primary font-bold mb-6 relative inline-block">
              Features & Amenities
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-gold"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mt-6">
              {property.features.map(f => (
                <div key={f} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-gold" />
                  <span className="text-charcoal font-medium">{f}</span>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-gold" />
                <span className="text-charcoal font-medium">Spacious Parking</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-gold" />
                <span className="text-charcoal font-medium">Borehole / Central Water</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-gold" />
                <span className="text-charcoal font-medium">Security Post</span>
              </div>
            </div>
          </div>

        </div>

        {/* Sidebar / Form */}
        <div>
          <div className="bg-white rounded-2xl shadow-xl shadow-primary/5 border border-primary/10 p-8 sticky top-24">
            <h3 className="text-2xl font-serif text-primary font-bold mb-2">Schedule a Tour</h3>
            <p className="text-sm text-charcoal/60 mb-6">Want to see this property? We'd love to show you around.</p>
            
            <form className="space-y-4" onSubmit={handleRequestTour}>
              <Input placeholder="Your Name" required />
              <Input type="email" placeholder="Email Address" required />
              <Input type="tel" placeholder="Phone Number" required />
              <div className="relative">
                <CalendarDays size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40" />
                <Input type="date" className="pl-10 text-charcoal/80" required />
              </div>
              <textarea 
                placeholder="I am interested in this property..."
                className="w-full flex min-h-[100px] rounded-md border border-charcoal/20 bg-white px-3 py-2 text-sm text-charcoal ring-offset-white placeholder:text-charcoal/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:border-gold resize-none transition-colors"
                defaultValue={`I am interested in ${property.title} located at ${property.address}.`}
                required
              />
              <Button size="lg" className="w-full text-base" disabled={isSubmitting || isSubmitted}>
                {isSubmitting ? "Sending Request..." : isSubmitted ? "Tour Requested!" : "Request Tour"}
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-charcoal/10 text-center">
              <p className="text-sm text-charcoal/60 mb-2">Or call us directly at</p>
              <a href="tel:+2348079026077" className="text-xl font-serif font-bold text-primary hover:text-gold transition-colors">
                +234 807 902 6077
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
