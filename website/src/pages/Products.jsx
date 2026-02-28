import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter, Layers, Box, DoorOpen, Wrench, Search } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

/* ─── VISION: Product page with filterable cards, each showing board texture close-ups ─── */

const categories = [
  { id: 'all', name: 'All Products', icon: Box },
  { id: 'melamine', name: 'Melamine', icon: Layers },
  { id: 'mdf', name: 'MDF', icon: Box },
  { id: 'chipboard', name: 'Chipboard', icon: Layers },
  { id: 'doors', name: 'Doors', icon: DoorOpen },
  { id: 'hardware', name: 'Hardware', icon: Wrench },
];

const allProducts = [
  { id: 1, name: 'White Melamine Board 16mm', cat: 'melamine', price: '$49.88', img: 'https://images.unsplash.com/photo-1551127481-cd46e92972eb?w=400&q=80', desc: 'High-pressure white melamine with cutting & edging included.', badge: 'Best Seller' },
  { id: 2, name: 'Oak Melamine Board 18mm', cat: 'melamine', price: '$54.99', img: 'https://images.unsplash.com/photo-1651991419911-2339ed3b1a89?w=400&q=80', desc: 'Premium oak-finish melamine for elegant furniture applications.' },
  { id: 3, name: 'Grey Melamine Board 16mm', cat: 'melamine', price: '$52.50', img: 'https://images.unsplash.com/photo-1636495426633-0f53d11e4dab?w=400&q=80', desc: 'Modern grey finish melamine, perfect for contemporary designs.' },
  { id: 4, name: 'Standard MDF 16mm', cat: 'mdf', price: '$38.00', img: 'https://images.unsplash.com/photo-1572852515703-596a50742d44?w=400&q=80', desc: 'High-density MDF panel for superior machining and finishing.', badge: 'Popular' },
  { id: 5, name: 'Moisture Resistant MDF 18mm', cat: 'mdf', price: '$45.50', img: 'https://images.unsplash.com/photo-1644358686685-4ed525a59663?w=400&q=80', desc: 'Green-core MDF with enhanced moisture resistance properties.' },
  { id: 6, name: 'Ultra-Light MDF 12mm', cat: 'mdf', price: '$32.00', img: 'https://images.unsplash.com/photo-1634672652995-ee7525bce595?w=400&q=80', desc: 'Lightweight MDF ideal for wall paneling and decorative applications.' },
  { id: 7, name: 'Standard Chipboard 16mm', cat: 'chipboard', price: '$28.00', img: 'https://images.unsplash.com/photo-1564691848938-d0fc26235733?w=400&q=80', desc: 'Cost-effective chipboard for general furniture manufacturing.' },
  { id: 8, name: 'Moisture Resistant Chipboard', cat: 'chipboard', price: '$35.00', img: 'https://images.unsplash.com/photo-1706027554815-ae587412dbef?w=400&q=80', desc: 'Enhanced water-resistant chipboard for kitchen applications.' },
  { id: 9, name: 'Hollow Core Door 813mm', cat: 'doors', price: '$42.00', img: 'https://images.unsplash.com/photo-1766128868192-442b1df0a8db?w=400&q=80', desc: 'Standard hollow core interior door, primed and ready to finish.' },
  { id: 10, name: 'Solid Core Door 813mm', cat: 'doors', price: '$89.00', img: 'https://images.unsplash.com/photo-1760067538068-03d10481bacb?w=400&q=80', desc: 'Heavy-duty solid core door for enhanced soundproofing.', badge: 'Premium' },
  { id: 11, name: 'Soft-Close Hinge Set', cat: 'hardware', price: '$12.50', img: 'https://images.unsplash.com/photo-1595428774839-7e35900fb7f1?w=400&q=80', desc: 'Professional soft-close cabinet hinges, pack of 2.' },
  { id: 12, name: 'Drawer Slide 450mm', cat: 'hardware', price: '$18.00', img: 'https://images.unsplash.com/photo-1593663922663-34cbd6671eae?w=400&q=80', desc: 'Full extension ball-bearing drawer slides, pair.' },
];

export default function Products() {
  const [active, setActive] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = allProducts.filter(p => {
    const matchesCat = active === 'all' || p.cat === active;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center navy-mesh grain overflow-hidden">
        <div className="absolute top-20 left-[15%] w-72 h-72 bg-orange/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[60%] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-32 pb-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">Product Catalogue</span>
            <h1 className="font-syne font-bold text-4xl sm:text-5xl lg:text-7xl text-white mt-4 max-w-3xl leading-[1.05]">
              Premium <span className="text-gradient">Board Products</span> for Every Project
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Search and filter bar */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10 sticky top-20 z-30 bg-cream/90 backdrop-blur-md py-4 -mt-4 rounded-2xl">
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-outfit text-sm font-medium transition-all ${
                    active === cat.id
                      ? 'bg-navy text-white shadow-lg shadow-navy/20'
                      : 'bg-white text-navy/60 hover:bg-navy/5 border border-navy/5'
                  }`}
                >
                  <cat.icon size={14} />
                  {cat.name}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-64">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy/30" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-navy/10 rounded-xl py-2.5 pl-10 pr-4 text-sm font-outfit focus:outline-none focus:border-orange/50 transition-colors"
              />
            </div>
          </div>

          {/* Product grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map(product => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/products/${product.cat}`}
                    className="group block bg-white rounded-3xl overflow-hidden border border-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-orange text-white text-[10px] font-outfit font-medium px-3 py-1 rounded-full uppercase">{product.badge}</span>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-5">
                      <div className="text-orange text-xs font-outfit font-medium uppercase tracking-wider mb-1">{product.cat}</div>
                      <h3 className="font-syne font-bold text-navy text-base mb-2 group-hover:text-orange transition-colors">{product.name}</h3>
                      <p className="text-navy/50 font-outfit text-xs leading-relaxed mb-4">{product.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-syne font-bold text-navy text-lg">{product.price}</span>
                        <span className="text-orange font-outfit text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Details <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-navy/40 font-outfit text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
