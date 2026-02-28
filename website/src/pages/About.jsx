import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, Heart, Users, Award, Shield, Zap, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

/* ─── VISION COMMENTS ───
   Hero: Diagonal split with large typography on dark side, image of facility on light side
   Timeline: Vertical line with alternating left/right milestone cards
   Team: Grid with hover-reveal bio cards
   Values: Icon cards with large numbers/icons
*/

const timeline = [
  { year: '2008', title: 'Foundation', desc: 'BoardEx Zimbabwe established in Harare, beginning as a small board product distributor with a vision for excellence.' },
  { year: '2012', title: 'Expansion', desc: 'Opened our second branch in Bulawayo, extending our reach across Zimbabwe.' },
  { year: '2016', title: 'Innovation', desc: 'Introduced precision CNC cutting and professional edge banding services.' },
  { year: '2019', title: 'Growth', desc: 'Expanded to Masvingo and Marondera, reaching 400+ active clients nationwide.' },
  { year: '2023', title: 'Leadership', desc: 'Became Zimbabwe\'s leading board product supplier with 780+ employees and 69 industry awards.' },
  { year: '2025', title: 'Future', desc: 'Investing in sustainable practices and expanding our product range to meet evolving market demands.' },
];

const values = [
  { icon: Target, title: 'Precision', desc: 'Every cut, every edge, every delivery executed with meticulous attention to detail.' },
  { icon: Heart, title: 'Relationships', desc: 'We nurture deep partnerships with our clients, understanding their unique needs.' },
  { icon: Shield, title: 'Quality', desc: 'Uncompromising standards across every product in our catalogue.' },
  { icon: Zap, title: 'Innovation', desc: 'Continuously adopting new technologies and processes to serve you better.' },
];

const team = [
  // Vision: Professional headshots of executives
  { name: 'David Mutasa', role: 'Managing Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'Grace Chikwanha', role: 'Operations Director', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80' },
  { name: 'James Ncube', role: 'Sales Director', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
  { name: 'Rumbi Dube', role: 'Finance Director', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80' },
];

export default function About() {
  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[70vh] flex items-center navy-mesh grain overflow-hidden">
        <div className="absolute top-20 right-[20%] w-80 h-80 bg-orange/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-[10%] w-48 h-48 bg-blue-500/6 rounded-full blur-[80px]" />
        <div className="absolute top-1/3 right-[10%] w-24 h-24 border border-orange/15 rounded-2xl rotate-12 animate-float-slow" />

        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-32 pb-20 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">Our Story</span>
            <h1 className="font-syne font-bold text-4xl sm:text-5xl lg:text-7xl text-white mt-4 leading-[1.05] max-w-3xl">
              Building Zimbabwe's <span className="text-gradient">Future</span>, One Board at a Time
            </h1>
            <p className="text-white/50 font-outfit text-lg mt-6 max-w-xl leading-relaxed">
              For over 15 years, we've been the trusted foundation behind Zimbabwe's finest furniture, interiors, and construction projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ MISSION/VISION ═══ */}
      <section className="py-24 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection variant="fadeLeft">
              <div className="bg-navy rounded-3xl p-10 lg:p-14 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-48 h-48 bg-orange/10 rounded-full blur-[80px]" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-orange/20 flex items-center justify-center mb-6">
                    <Eye size={28} className="text-orange" />
                  </div>
                  <h3 className="font-syne font-bold text-white text-2xl lg:text-3xl mb-4">Our Vision</h3>
                  <p className="text-white/60 font-outfit text-base lg:text-lg leading-relaxed">
                    To be Africa's most trusted and innovative supplier of board products, setting the standard for quality, service, and sustainability in the industry.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeRight" delay={0.15}>
              <div className="bg-white rounded-3xl p-10 lg:p-14 relative overflow-hidden border border-navy/5 h-full">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange/5 rounded-full blur-[80px]" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-orange/10 flex items-center justify-center mb-6">
                    <Target size={28} className="text-orange" />
                  </div>
                  <h3 className="font-syne font-bold text-navy text-2xl lg:text-3xl mb-4">Our Mission</h3>
                  <p className="text-navy/60 font-outfit text-base lg:text-lg leading-relaxed">
                    To provide superior wood paneling products with 24-hour quality service, highly competitive prices, and expert support that empowers our clients to create exceptional spaces.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#0a1628 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">Core Values</span>
            <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy mt-3">What Drives Us</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((val, i) => (
              <AnimatedSection key={i} variant="fadeUp" delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-cream hover:bg-navy group transition-all duration-500 border border-transparent hover:border-white/10 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-orange/10 group-hover:bg-orange/20 flex items-center justify-center mx-auto mb-5 transition-colors">
                    <val.icon size={28} className="text-orange" />
                  </div>
                  <h3 className="font-syne font-bold text-navy group-hover:text-white text-lg mb-3 transition-colors">{val.title}</h3>
                  <p className="text-navy/50 group-hover:text-white/50 font-outfit text-sm leading-relaxed transition-colors">{val.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section id="milestones" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">Our Journey</span>
            <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy mt-3">Milestones</h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-navy/10 lg:-translate-x-0.5" />

            {timeline.map((item, i) => (
              <AnimatedSection key={i} variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} hidden lg:block`}>
                    {i % 2 === 0 && (
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-navy/5">
                        <div className="text-orange font-syne font-bold text-sm mb-1">{item.year}</div>
                        <h3 className="font-syne font-bold text-navy text-lg mb-2">{item.title}</h3>
                        <p className="text-navy/50 font-outfit text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-orange rounded-full -translate-x-1.5 lg:-translate-x-1.5 mt-2 z-10 ring-4 ring-cream" />

                  <div className={`flex-1 pl-12 lg:pl-0 ${i % 2 !== 0 ? 'lg:text-left' : ''}`}>
                    {/* Mobile: always show. Desktop: only show on correct side */}
                    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-navy/5 ${i % 2 === 0 ? 'lg:hidden' : ''}`}>
                      <div className="text-orange font-syne font-bold text-sm mb-1">{item.year}</div>
                      <h3 className="font-syne font-bold text-navy text-lg mb-2">{item.title}</h3>
                      <p className="text-navy/50 font-outfit text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    {i % 2 !== 0 && (
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-navy/5 hidden lg:block">
                        <div className="text-orange font-syne font-bold text-sm mb-1">{item.year}</div>
                        <h3 className="font-syne font-bold text-navy text-lg mb-2">{item.title}</h3>
                        <p className="text-navy/50 font-outfit text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section id="team" className="py-24 navy-mesh grain relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">Leadership</span>
            <h2 className="font-syne font-bold text-3xl lg:text-5xl text-white mt-3">Meet the Team</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={i} variant="fadeUp" delay={i * 0.1}>
                <div className="group relative rounded-3xl overflow-hidden">
                  <div className="aspect-[3/4]">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-syne font-bold text-white text-lg">{member.name}</h3>
                    <p className="text-orange font-outfit text-sm">{member.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-12">
            <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">FAQ</span>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy mt-3">Common Questions</h2>
          </AnimatedSection>

          {[
            { q: 'What areas do you deliver to?', a: 'We deliver nationwide across Zimbabwe, with branches in Harare, Bulawayo, Masvingo, and Marondera.' },
            { q: 'Do you offer custom cutting services?', a: 'Yes! We provide precision CNC cutting and panel saw cutting to your exact specifications, along with professional edge banding.' },
            { q: 'What are your minimum order quantities?', a: 'We cater to both large-scale manufacturers and individual projects. Contact us for specific requirements.' },
            { q: 'How can I get a price quote?', a: 'Call us at +263 719 426 009, email info@boardex.co.zw, or use the contact form on our website.' },
          ].map((faq, i) => (
            <AnimatedSection key={i} variant="fadeUp" delay={i * 0.1}>
              <details className="group bg-white rounded-2xl mb-3 border border-navy/5 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-syne font-semibold text-navy hover:text-orange transition-colors list-none">
                  {faq.q}
                  <CheckCircle size={18} className="text-navy/20 group-open:text-orange transition-colors shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-navy/60 font-outfit text-sm leading-relaxed -mt-2">
                  {faq.a}
                </div>
              </details>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
}
