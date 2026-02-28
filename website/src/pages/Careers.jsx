import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Briefcase, ChevronDown, Users, Heart, Zap, Award } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

/* ─── VISION: Careers page with culture showcase, open positions, and application CTA ─── */

const perks = [
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive medical aid and wellness programs' },
  { icon: Users, title: 'Team Culture', desc: 'Collaborative environment with regular team events' },
  { icon: Zap, title: 'Growth', desc: 'Professional development and training opportunities' },
  { icon: Award, title: 'Recognition', desc: 'Performance bonuses and employee recognition awards' },
];

const positions = [
  {
    title: 'Sales Executive',
    dept: 'Sales',
    location: 'Harare',
    type: 'Full-time',
    desc: 'Drive revenue growth by developing and maintaining relationships with key clients across Zimbabwe. You\'ll be the face of BoardEx, presenting our product range and providing expert consultation.',
    requirements: ['3+ years B2B sales experience', 'Knowledge of building materials industry', 'Valid driver\'s license', 'Excellent communication skills'],
  },
  {
    title: 'CNC Machine Operator',
    dept: 'Production',
    location: 'Harare',
    type: 'Full-time',
    desc: 'Operate and maintain CNC cutting equipment to deliver precision board cutting services. Ensure quality standards are met on every cut.',
    requirements: ['Experience with CNC panel saws', 'Technical certificate preferred', 'Attention to detail', 'Physical fitness'],
  },
  {
    title: 'Warehouse Supervisor',
    dept: 'Operations',
    location: 'Bulawayo',
    type: 'Full-time',
    desc: 'Manage daily warehouse operations including inventory management, team supervision, and ensuring timely order fulfillment.',
    requirements: ['5+ years warehouse experience', 'Team management skills', 'Inventory management knowledge', 'Computer literate'],
  },
  {
    title: 'Marketing Coordinator',
    dept: 'Marketing',
    location: 'Harare',
    type: 'Full-time',
    desc: 'Coordinate marketing campaigns, manage social media, and support brand development initiatives to strengthen BoardEx\'s market presence.',
    requirements: ['Degree in Marketing or related field', 'Digital marketing experience', 'Creative thinking', 'Content creation skills'],
  },
  {
    title: 'Delivery Driver',
    dept: 'Logistics',
    location: 'Multiple',
    type: 'Full-time',
    desc: 'Deliver board products to customers across Zimbabwe safely and on schedule. Maintain vehicle and ensure professional customer interactions.',
    requirements: ['Valid Class 2 driver\'s license', 'Clean driving record', 'Knowledge of Zimbabwe roads', 'Customer service skills'],
  },
];

export default function Careers() {
  const [openPosition, setOpenPosition] = useState(null);

  return (
    <main>
      {/* Hero - unique diagonal layout */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 navy-mesh" />
        <div className="absolute inset-0 grain" />
        {/* Diagonal accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange/5 clip-diagonal hidden lg:block" />
        <div className="absolute top-[20%] right-[5%] w-32 h-32 border-2 border-orange/10 rounded-full animate-float-slow" />
        <div className="absolute bottom-[30%] right-[20%] w-4 h-4 bg-orange/40 rounded-full animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-32 pb-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">Join Our Team</span>
            <h1 className="font-syne font-bold text-4xl sm:text-5xl lg:text-7xl text-white mt-4 max-w-3xl leading-[1.05]">
              Build Your <span className="text-gradient">Career</span> With BoardEx
            </h1>
            <p className="text-white/50 font-outfit text-lg mt-6 max-w-xl">
              Join 780+ professionals shaping Zimbabwe's interior industry. We're always looking for talented, driven individuals.
            </p>
            <div className="mt-8">
              <a href="#positions" className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-7 py-4 rounded-2xl font-outfit font-semibold transition-all shadow-xl shadow-orange/25 group">
                View Open Positions <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture / Perks */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">Why BoardEx</span>
            <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy mt-3">Life at BoardEx</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((perk, i) => (
              <AnimatedSection key={i} variant="fadeUp" delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 text-center border border-navy/5 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center mx-auto mb-5">
                    <perk.icon size={28} className="text-orange" />
                  </div>
                  <h3 className="font-syne font-bold text-navy text-lg mb-2">{perk.title}</h3>
                  <p className="text-navy/50 font-outfit text-sm">{perk.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Culture images - Vision: team photos, warehouse, celebrations */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80',
              'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80',
              'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80',
              'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80',
            ].map((img, i) => (
              <AnimatedSection key={i} variant="scale" delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={img} alt="Life at BoardEx" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-12">
            <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">Opportunities</span>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy mt-3">Open Positions</h2>
          </AnimatedSection>

          <div className="space-y-4">
            {positions.map((pos, i) => (
              <AnimatedSection key={i} variant="fadeUp" delay={i * 0.05}>
                <div className="bg-cream rounded-2xl border border-navy/5 overflow-hidden">
                  <button
                    onClick={() => setOpenPosition(openPosition === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div>
                      <h3 className="font-syne font-bold text-navy text-lg">{pos.title}</h3>
                      <div className="flex items-center gap-4 mt-2 flex-wrap">
                        <span className="flex items-center gap-1 text-navy/40 text-xs font-outfit"><Briefcase size={12} /> {pos.dept}</span>
                        <span className="flex items-center gap-1 text-navy/40 text-xs font-outfit"><MapPin size={12} /> {pos.location}</span>
                        <span className="flex items-center gap-1 text-navy/40 text-xs font-outfit"><Clock size={12} /> {pos.type}</span>
                      </div>
                    </div>
                    <ChevronDown size={20} className={`text-navy/30 transition-transform ${openPosition === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openPosition === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-navy/5 pt-4">
                          <p className="text-navy/60 font-outfit text-sm mb-4">{pos.desc}</p>
                          <h4 className="font-syne font-semibold text-navy text-sm mb-2">Requirements:</h4>
                          <div className="space-y-1.5 mb-6">
                            {pos.requirements.map((req, j) => (
                              <div key={j} className="flex items-center gap-2 text-navy/60 font-outfit text-sm">
                                <div className="w-1.5 h-1.5 bg-orange rounded-full" /> {req}
                              </div>
                            ))}
                          </div>
                          <a href="mailto:careers@boardex.co.zw?subject=Application: ${pos.title}"
                            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-5 py-2.5 rounded-xl font-outfit font-medium text-sm transition-colors">
                            Apply Now <ArrowRight size={14} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection variant="fadeUp" delay={0.3}>
            <div className="text-center mt-12 p-8 bg-cream rounded-3xl border border-navy/5">
              <h3 className="font-syne font-bold text-navy text-lg mb-2">Don't see the right role?</h3>
              <p className="text-navy/50 font-outfit text-sm mb-4">Send us your CV and we'll keep you in mind for future opportunities.</p>
              <a href="mailto:careers@boardex.co.zw" className="text-orange font-outfit font-medium text-sm hover:underline">
                careers@boardex.co.zw
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
