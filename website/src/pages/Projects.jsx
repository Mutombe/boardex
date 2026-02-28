import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

/* ─── VISION: Masonry gallery of completed projects - kitchens, offices, hotels, retail ─── */

const cats = ['All', 'Residential', 'Commercial', 'Hospitality', 'Retail'];

const projects = [
  { img: 'https://images.unsplash.com/photo-1725257928373-dc6d2ac7b145?w=600&q=80', title: 'Luxury Kitchen Renovation', cat: 'Residential', desc: 'Complete melamine board kitchen fit-out for a private residence in Borrowdale.' },
  { img: 'https://images.unsplash.com/photo-1771147372799-d94991e92ce7?w=600&q=80', title: 'Corporate HQ Fit-out', cat: 'Commercial', desc: 'Full office furniture supply for a major Harare financial institution.' },
  { img: 'https://images.unsplash.com/photo-1550567418-1bd5c7712337?w=600&q=80', title: 'Boutique Hotel Interiors', cat: 'Hospitality', desc: 'Custom MDF wall cladding and furniture for a Victoria Falls hotel.' },
  { img: 'https://images.unsplash.com/photo-1770385605649-11de1a033064?w=600&q=80', title: 'Retail Showroom', cat: 'Retail', desc: 'Display units and shelving systems for a premium Harare retail outlet.' },
  { img: 'https://images.unsplash.com/photo-1765434669956-afcd50058d69?w=600&q=80', title: 'Bespoke Bedroom Suite', cat: 'Residential', desc: 'Floor-to-ceiling wardrobes and bedside units in oak melamine finish.' },
  { img: 'https://images.unsplash.com/photo-1764810815228-b7f9432eec5c?w=600&q=80', title: 'Executive Boardroom', cat: 'Commercial', desc: 'Premium boardroom table and wall paneling for a Bulawayo law firm.' },
  { img: 'https://images.unsplash.com/photo-1759038086841-506aae3e1545?w=600&q=80', title: 'Restaurant Interior', cat: 'Hospitality', desc: 'Custom booth seating and bar counter using moisture-resistant chipboard.' },
  { img: 'https://images.unsplash.com/photo-1771033834141-023d630b3965?w=600&q=80', title: 'Pharmacy Shelving', cat: 'Retail', desc: 'Complete shelving solution for a chain of pharmacies across Harare.' },
];

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center navy-mesh grain overflow-hidden">
        <div className="absolute bottom-0 right-[10%] w-80 h-80 bg-orange/8 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-32 pb-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">Portfolio</span>
            <h1 className="font-syne font-bold text-4xl sm:text-5xl lg:text-7xl text-white mt-4 max-w-3xl leading-[1.05]">
              Projects That <span className="text-gradient">Inspire</span>
            </h1>
            <p className="text-white/50 font-outfit text-lg mt-6 max-w-xl">
              Explore our showcase of completed projects across Zimbabwe, from luxury homes to commercial spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 flex-wrap mb-12">
            {cats.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-xl font-outfit text-sm font-medium transition-all ${
                  active === cat ? 'bg-navy text-white shadow-lg' : 'bg-white text-navy/60 hover:bg-navy/5 border border-navy/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={i === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                >
                  <div className="group relative rounded-3xl overflow-hidden h-full cursor-pointer">
                    <div className={`${i === 0 ? 'h-80 md:h-full min-h-[400px]' : 'h-72'}`}>
                      <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      <span className="text-orange text-xs font-outfit font-medium uppercase tracking-wider">{project.cat}</span>
                      <h3 className="font-syne font-bold text-white text-xl lg:text-2xl mt-2">{project.title}</h3>
                      <p className="text-white/50 font-outfit text-sm mt-2 max-w-md">{project.desc}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
