import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Search, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/src/components/ui/button";

const POSTS = [
  {
    id: 1,
    title: "Why Guzape is Abuja's Next Real Estate Goldmine",
    excerpt: "Discover the infrastructure developments turning Guzape into the most sought-after district for luxury real estate investment in the FCT.",
    category: "Market Updates",
    date: "Oct 12, 2023",
    author: "George Felix",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Smart Home Tech: What Buyers Are Looking For in 2024",
    excerpt: "From integrated solar systems to voice-command security, explore the modern amenities that significantly boost property value.",
    category: "Buying",
    date: "Sep 28, 2023",
    author: "Editorial Team",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "How to Accurately Price Your Home for a Fast Sale",
    excerpt: "Overpricing leads to stagnation. Underpricing loses you money. Learn how our data-driven approach finds the perfect sweet spot.",
    category: "Selling",
    date: "Sep 15, 2023",
    author: "George Felix",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "The Ultimate Guide to Real Estate Documentation in Nigeria",
    excerpt: "Demystifying Certificates of Occupancy, Governor's Consent, and Deeds of Assignment to protect your long-term investment.",
    category: "Investing",
    date: "Aug 30, 2023",
    author: "Legal Dept",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Katampe Extension: The Quiet Luxury Neighborhood",
    excerpt: "An in-depth look at Katampe Extension, comparing its residential tranquility against Maitama's bustling luxury scene.",
    category: "Neighborhood Guides",
    date: "Aug 14, 2023",
    author: "Editorial Team",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Renovation vs Relocation: What's the Better Investment?",
    excerpt: "Before listing your home or tearing down walls, consider these crucial factors to maximize your return on capital.",
    category: "Selling",
    date: "Jul 22, 2023",
    author: "Technical Team",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export function Blog() {
  return (
    <div className="bg-grey min-h-screen">
      <Helmet>
        <title>Blog | George Felix Properties Nig Ltd</title>
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">Real Estate Insights</h1>
          <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">Market updates, neighborhood guides, and expert advice to help you make informed property decisions.</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="bg-white sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex gap-4 overflow-x-auto hide-scrollbar">
          {["All", "Buying", "Selling", "Investing", "Market Updates", "Neighborhood Guides"].map((tab, i) => (
            <button key={tab} className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-primary text-white' : 'bg-grey text-charcoal/70 hover:bg-gold/20 hover:text-primary'}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12">
          
          {/* Main Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {POSTS.map((post, idx) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-charcoal/5 flex flex-col"
                >
                  <Link to="#" className="relative aspect-[16/9] overflow-hidden block">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 text-xs font-bold text-primary flex items-center gap-1.5">
                      <Tag size={12} /> {post.category}
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-charcoal/50 mb-3">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                      <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                    </div>
                    <h2 className="text-xl font-serif font-bold text-primary mb-3 hover:text-gold transition-colors">
                      <Link to="#">{post.title}</Link>
                    </h2>
                    <p className="text-charcoal/70 text-sm mb-6 flex-1">{post.excerpt}</p>
                    <Link to="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-gold hover:text-primary transition-colors mt-auto">
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" className="border-gold text-primary hover:bg-gold hover:text-white">Load More Articles</Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 shrink-0 space-y-10">
            {/* Search */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-charcoal/5">
              <h3 className="font-serif font-bold text-lg text-primary mb-4">Search Blog</h3>
              <div className="flex bg-grey rounded-lg overflow-hidden border border-charcoal/10 focus-within:border-gold focus-within:ring-1 focus-within:ring-gold transition-all">
                <input type="text" placeholder="Keywords..." className="w-full bg-transparent p-3 outline-none text-sm text-charcoal" />
                <button className="p-3 text-charcoal/50 hover:text-primary"><Search size={18}/></button>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-primary text-white p-6 rounded-2xl shadow-xl relative overflow-hidden">
               <div className="absolute inset-0 bg-noise opacity-20"></div>
               <div className="relative z-10">
                  <h3 className="font-serif font-bold text-xl mb-3">Market Insights to Your Inbox</h3>
                  <p className="text-sm text-white/70 mb-5">Join our curated list for exclusive off-market listings and investment advice.</p>
                  <form onSubmit={e => e.preventDefault()} className="space-y-3">
                    <input type="email" placeholder="Email Address" className="w-full h-11 rounded-md px-3 text-sm text-charcoal outline-none border-none" required />
                    <Button className="w-full bg-gold hover:bg-gold-hover text-primary">Subscribe</Button>
                  </form>
               </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
