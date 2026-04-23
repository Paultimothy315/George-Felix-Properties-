import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Helmet } from "react-helmet-async";
import { PROPERTIES } from "@/src/data/mock";
import { Button } from "@/src/components/ui/button";
import { MapPin, BedDouble, Bath, SquareChevronRight, Heart, Filter, ChevronLeft, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Properties() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("status") || "All";
  
  const [filterType, setFilterType] = useState(initialType);
  const [sortBy, setSortBy] = useState("Newest First");
  const [isFiltering, setIsFiltering] = useState(false);
  
  // Real active filters that apply when button is clicked
  const [activeFilters, setActiveFilters] = useState({
    type: initialType
  });

  const handleApplyFilters = () => {
    setIsFiltering(true);
    setTimeout(() => {
      setActiveFilters({ type: filterType });
      setIsFiltering(false);
    }, 400); // Simulate network delay
  };

  const filteredProperties = useMemo(() => {
    let result = [...PROPERTIES];
    
    // Type filter
    if (activeFilters.type && activeFilters.type !== "All") {
      result = result.filter(p => propertyMatchesType(p, activeFilters.type!));
    }
    
    // Sort
    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => extractPrice(a.price) - extractPrice(b.price));
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => extractPrice(b.price) - extractPrice(a.price));
    }
    
    return result;
  }, [activeFilters, sortBy]);

  // Helpers
  function propertyMatchesType(property: any, typeFilter: string) {
    if (typeFilter === "Buy") return property.type === "Buy";
    if (typeFilter === "Rent") return property.type === "Rent";
    if (typeFilter === "Commercial") return property.title.toLowerCase().includes("commercial");
    return true;
  }
  
  function extractPrice(priceStr: string) {
    const num = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
    if (priceStr.toLowerCase().includes('billion')) return num * 1000;
    return num;
  }

  return (
    <>
      <Helmet>
        <title>Properties | George Felix Properties Nig Ltd</title>
        <meta name="description" content="Browse luxury and affordable properties for sale and rent in Abuja." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-white relative">
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-sm text-gold font-semibold uppercase tracking-widest mb-4 flex gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Properties</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif">Find Your Perfect Property</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-grey min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Sidebar Filters (Desktop) */}
            <div className="hidden lg:block w-72 shrink-0 glass shadow-sm rounded-xl p-6 sticky top-24 self-start">
              <div className="flex items-center gap-2 font-serif text-xl text-primary font-bold mb-6 pb-4 border-b border-charcoal/10">
                <Filter size={20} className="text-gold" /> Filter Search
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Property Type</h4>
                  <div className="space-y-2">
                    {["All", "Buy", "Rent", "Commercial"].map(type => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="type" 
                          className="accent-gold w-4 h-4 cursor-pointer"
                          checked={filterType === type}
                          onChange={() => setFilterType(type)}
                        />
                        <span className="text-sm text-charcoal/80 group-hover:text-primary transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Location</h4>
                  <select className="w-full h-10 border border-charcoal/20 rounded-md px-3 text-sm focus:border-gold outline-none">
                    <option>All Locations</option>
                    <option>Guzape</option>
                    <option>Asokoro Extension</option>
                    <option>Katampe</option>
                    <option>Maitama 2</option>
                    <option>Wuye</option>
                  </select>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Price Range</h4>
                  <select className="w-full h-10 border border-charcoal/20 rounded-md px-3 text-sm focus:border-gold outline-none">
                    <option>Any Price</option>
                    <option>Under ₦100M</option>
                    <option>₦100M - ₦500M</option>
                    <option>₦500M - ₦1B</option>
                    <option>Over ₦1B</option>
                  </select>
                </div>
                
                <Button className="w-full mt-4" onClick={handleApplyFilters} disabled={isFiltering}>
                  {isFiltering ? "Applying..." : "Apply Filters"}
                </Button>
              </div>
            </div>

            {/* Grid */}
            <div className="flex-1 w-full">
              {/* Sort Bar */}
              <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm mb-6 border border-charcoal/5">
                <p className="text-sm text-charcoal/60 font-medium">Showing <span className="text-primary font-bold">{filteredProperties.length}</span> properties</p>
                <select 
                  className="text-sm border-none bg-transparent font-medium text-primary outline-none cursor-pointer"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]">
                <AnimatePresence mode="popLayout">
                  {filteredProperties.length === 0 ? (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }}
                      className="col-span-1 md:col-span-2 py-20 text-center flex flex-col items-center justify-center bg-white rounded-2xl border border-charcoal/5"
                    >
                      <p className="text-primary font-serif text-2xl mb-2">No properties found</p>
                      <p className="text-charcoal/60">Try adjusting your filters to see more results.</p>
                      <Button variant="outline" className="mt-6" onClick={() => { setFilterType("All"); setActiveFilters({type: "All"}); }}>Clear Filters</Button>
                    </motion.div>
                  ) : (
                    filteredProperties.map((property, idx) => (
                      <motion.div 
                        key={property.id}
                        layout
                        initial="hidden" 
                        animate="visible" 
                        exit={{ opacity: 0, scale: 0.95 }}
                        variants={fadeUp}
                        transition={{ delay: idx * 0.05 }}
                        className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-transparent hover:border-gold/30 transition-all duration-300 flex flex-col h-full relative"
                      >
                    <Link to={`/properties/${property.id}`} className="absolute inset-0 z-0"></Link>
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
                      <button className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary hover:text-gold hover:bg-white transition-colors cursor-pointer">
                        <Heart size={18} />
                      </button>
                      <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-6 flex flex-col flex-1 relative z-10 pointer-events-none">
                      <div className="text-2xl font-serif font-bold text-primary mb-2 line-clamp-1">{property.price}</div>
                      <h3 className="text-lg font-medium text-charcoal mb-2 line-clamp-1">{property.title}</h3>
                      <div className="flex items-center text-charcoal/60 text-sm mb-6 pb-6 border-b border-charcoal/10">
                        <MapPin size={16} className="mr-1.5 text-gold shrink-0" />
                        <span className="truncate">{property.address}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-charcoal mt-auto">
                        {property.beds > 0 && (
                          <div className="flex items-center gap-1.5">
                            <BedDouble size={18} className="text-charcoal/40" /> <span>{property.beds}</span>
                          </div>
                        )}
                        {property.baths > 0 && (
                          <div className="flex items-center gap-1.5">
                            <Bath size={18} className="text-charcoal/40" /> <span>{property.baths}</span>
                          </div>
                        )}
                        {property.sqft && (
                          <div className="flex items-center gap-1.5">
                            <SquareChevronRight size={18} className="text-charcoal/40" /> <span>{property.sqft} sqft</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))
               )}
              </AnimatePresence>
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center items-center gap-2">
                <Button variant="outline" size="sm" className="w-10 h-10 border-charcoal/20 !text-charcoal disabled:opacity-50" disabled><ChevronLeft size={18}/></Button>
                <Button variant="default" size="sm" className="w-10 h-10">1</Button>
                <Button variant="outline" size="sm" className="w-10 h-10 border-charcoal/20 !text-charcoal hover:border-gold hover:!text-primary">2</Button>
                <Button variant="outline" size="sm" className="w-10 h-10 border-charcoal/20 !text-charcoal hover:border-gold hover:!text-primary">3</Button>
                <Button variant="outline" size="sm" className="w-10 h-10 border-charcoal/20 !text-charcoal"><ChevronRight size={18}/></Button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
