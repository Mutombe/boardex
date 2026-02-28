import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Zap, Truck, Target, Shield, Clock, Ruler, Palette, Wrench, Settings } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

/* ─── VISION: Services page with alternating left-right sections, each with unique layout ─── */

const services = [
  {
    icon: Layers,
    title: 'Precision Board Cutting',
    desc: 'State-of-the-art CNC and panel saw cutting services delivering exact specifications every time. Our precision equipment ensures clean, accurate cuts for boards of all thicknesses and dimensions.',
    features: ['CNC Routing', 'Panel Saw Cutting', 'Custom Dimensions', 'Batch Processing'],
    img: 'https://images.unsplash.com/photo-1693948568306-770092fb09b2?w=600&q=80',
  },
  {
    icon: Zap,
    title: 'Professional Edge Banding',
    desc: 'Seamless, factory-quality edge finishing that transforms raw boards into polished, ready-to-install components. Multiple color and finish options available.',
    features: ['PVC Edging', 'ABS Edging', 'Color Matching', 'Curved Edges'],
    img: 'https://images.unsplash.com/photo-1629085281900-455f2f1fc5ab?w=600&q=80',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    desc: 'Reliable, fast delivery across Zimbabwe with dedicated fleet. Whether you\'re in Harare, Bulawayo, Masvingo, or Marondera, we\'ll get your materials to you on time.',
    features: ['Same Day (Harare)', 'Next Day Regional', 'Bulk Delivery', 'Tracking Available'],
    img: 'https://images.unsplash.com/photo-1601912552080-0fb89fd08042?w=600&q=80',
  },
  {
    icon: Palette,
    title: 'Design Consultation',
    desc: 'Expert guidance on material selection, finish options, and project planning. Our experienced team helps you choose the perfect products for your specific requirements.',
    features: ['Material Selection', 'Finish Matching', 'Project Planning', 'Cost Optimization'],
    img: 'https://images.unsplash.com/photo-1653164488636-7407bec89281?w=600&q=80',
  },
  {
    icon: Target,
    title: 'Custom Orders',
    desc: 'Bespoke board solutions tailored to your unique project needs. We can source specialized products and create custom specifications to match your exact requirements.',
    features: ['Special Sizes', 'Custom Finishes', 'Bulk Pricing', 'Project Packages'],
    img: 'https://images.unsplash.com/photo-1626081063434-79a2169791b1?w=600&q=80',
  },
];

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1644358687953-b406b9ca9dda?w=1200&q=80" alt="BoardEx services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="absolute inset-0 grain" />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-32 pb-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">What We Offer</span>
            <h1 className="font-syne font-bold text-4xl sm:text-5xl lg:text-7xl text-white mt-4 max-w-3xl leading-[1.05]">
              Services Built for <span className="text-gradient">Excellence</span>
            </h1>
            <p className="text-white/50 font-outfit text-lg mt-6 max-w-xl">
              Beyond supplying premium materials, we offer comprehensive services that add value to every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream">
        {services.map((service, i) => (
          <div key={i} id={i === 2 ? 'delivery' : undefined} className={`py-20 ${i % 2 === 1 ? 'bg-white' : 'bg-cream'}`}>
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <AnimatedSection variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}>
                  <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="w-14 h-14 rounded-2xl bg-orange/10 flex items-center justify-center mb-6">
                      <service.icon size={28} className="text-orange" />
                    </div>
                    <h2 className="font-syne font-bold text-navy text-2xl lg:text-4xl mb-4">{service.title}</h2>
                    <p className="text-navy/60 font-outfit text-base lg:text-lg leading-relaxed mb-8">{service.desc}</p>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((feat, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange rounded-full" />
                          <span className="text-navy/70 font-outfit text-sm">{feat}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-xl font-outfit font-medium transition-colors group">
                      Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </AnimatedSection>

                <AnimatedSection variant={i % 2 === 0 ? 'fadeRight' : 'fadeLeft'} delay={0.15}>
                  <div className={`rounded-3xl overflow-hidden shadow-xl ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img src={service.img} alt={service.title} className="w-full h-72 lg:h-96 object-cover" loading="lazy" />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="py-24 navy-mesh grain relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">How It Works</span>
            <h2 className="font-syne font-bold text-3xl lg:text-5xl text-white mt-3">Our Process</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consult', desc: 'Discuss your project requirements with our experts' },
              { step: '02', title: 'Select', desc: 'Choose from our extensive range of premium products' },
              { step: '03', title: 'Process', desc: 'We cut, edge, and prepare your materials to spec' },
              { step: '04', title: 'Deliver', desc: 'Fast, reliable delivery to your location' },
            ].map((item, i) => (
              <AnimatedSection key={i} variant="fadeUp" delay={i * 0.1}>
                <div className="relative p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
                  <div className="text-6xl font-syne font-bold text-orange/10 mb-2">{item.step}</div>
                  <h3 className="font-syne font-bold text-white text-lg mb-2 -mt-4">{item.title}</h3>
                  <p className="text-white/50 font-outfit text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
