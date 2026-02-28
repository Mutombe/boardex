import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

/* ─── VISION: Modern blog grid with featured post hero, recent articles ─── */

const posts = [
  {
    title: 'Choosing the Right Board for Your Kitchen Project',
    excerpt: 'A comprehensive guide to selecting between melamine, MDF, and chipboard for kitchen cabinetry. Learn about moisture resistance, durability, and finish options.',
    date: 'Feb 20, 2026',
    author: 'BoardEx Team',
    cat: 'Guide',
    img: 'https://images.unsplash.com/photo-1771372343841-d7d1b58391a0?w=600&q=80',
    featured: true,
  },
  {
    title: 'BoardEx Expands to Marondera',
    excerpt: 'We\'re excited to announce the opening of our newest branch in Marondera, bringing premium board products closer to Eastern Zimbabwe.',
    date: 'Feb 10, 2026',
    author: 'BoardEx Team',
    cat: 'News',
    img: 'https://images.unsplash.com/photo-1738965742812-bc1f957c01e9?w=600&q=80',
  },
  {
    title: 'MDF vs Chipboard: Which to Choose?',
    excerpt: 'Understanding the differences between MDF and chipboard to make informed decisions for your furniture manufacturing projects.',
    date: 'Jan 28, 2026',
    author: 'BoardEx Team',
    cat: 'Guide',
    img: 'https://images.unsplash.com/photo-1604526592536-1baefe4b309b?w=600&q=80',
  },
  {
    title: 'Sustainable Practices in Board Manufacturing',
    excerpt: 'How the board products industry is embracing sustainability, and what BoardEx is doing to reduce environmental impact.',
    date: 'Jan 15, 2026',
    author: 'BoardEx Team',
    cat: 'Industry',
    img: 'https://images.unsplash.com/photo-1717618389173-c95ac3b3be0b?w=600&q=80',
  },
  {
    title: 'Edge Banding Techniques for Professional Results',
    excerpt: 'Master the art of edge banding with our expert tips. From PVC to ABS, learn which materials and methods produce the best finish.',
    date: 'Jan 5, 2026',
    author: 'BoardEx Team',
    cat: 'Tips',
    img: 'https://images.unsplash.com/photo-1678799021566-2e2a748e9dd6?w=600&q=80',
  },
  {
    title: '2025 Interior Design Trends in Zimbabwe',
    excerpt: 'Exploring the hottest interior design trends transforming Zimbabwean homes and offices, and the board products making it possible.',
    date: 'Dec 20, 2025',
    author: 'BoardEx Team',
    cat: 'Trends',
    img: 'https://images.unsplash.com/photo-1613545325268-9265e1609167?w=600&q=80',
  },
];

const featured = posts.find(p => p.featured);
const rest = posts.filter(p => !p.featured);

export default function Blog() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center navy-mesh grain overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange/8 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-32 pb-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">Blog & News</span>
            <h1 className="font-syne font-bold text-4xl sm:text-5xl lg:text-7xl text-white mt-4 max-w-3xl leading-[1.05]">
              Insights & <span className="text-gradient">Updates</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {featured && (
            <AnimatedSection variant="fadeUp">
              <div className="group grid lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden border border-navy/5 hover:shadow-xl transition-shadow cursor-pointer">
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img src={featured.img} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-orange/10 text-orange text-xs font-outfit font-medium px-3 py-1 rounded-full">{featured.cat}</span>
                    <span className="text-navy/40 text-xs font-outfit flex items-center gap-1"><Clock size={12} /> {featured.date}</span>
                  </div>
                  <h2 className="font-syne font-bold text-navy text-2xl lg:text-3xl mb-4 group-hover:text-orange transition-colors">{featured.title}</h2>
                  <p className="text-navy/50 font-outfit leading-relaxed mb-6">{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-orange font-outfit font-medium text-sm group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {rest.map((post, i) => (
              <AnimatedSection key={i} variant="fadeUp" delay={i * 0.08}>
                <article className="group bg-white rounded-3xl overflow-hidden border border-navy/5 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <div className="h-48 overflow-hidden">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-orange/10 text-orange text-[10px] font-outfit font-medium px-2 py-0.5 rounded-full">{post.cat}</span>
                      <span className="text-navy/30 text-xs font-outfit">{post.date}</span>
                    </div>
                    <h3 className="font-syne font-bold text-navy text-base mb-2 group-hover:text-orange transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-navy/50 font-outfit text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
