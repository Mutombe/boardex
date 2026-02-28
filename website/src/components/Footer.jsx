import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Products': [
      { name: 'Melamine Boards', path: '/products/melamine' },
      { name: 'MDF Panels', path: '/products/mdf' },
      { name: 'Chipboard', path: '/products/chipboard' },
      { name: 'Doors & Frames', path: '/products/doors' },
      { name: 'Hardware', path: '/products/hardware' },
    ],
    'Company': [
      { name: 'About Us', path: '/about' },
      { name: 'Our Projects', path: '/projects' },
      { name: 'Services', path: '/services' },
      { name: 'Careers', path: '/careers' },
      { name: 'Blog & News', path: '/blog' },
    ],
    'Support': [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Get a Quote', path: '/contact' },
      { name: 'FAQs', path: '/about#faq' },
      { name: 'Delivery Info', path: '/services#delivery' },
    ],
  };

  return (
    <footer className="relative bg-navy overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-cream fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-32 pb-16">
        <AnimatedSection variant="fadeUp">
          <div className="relative rounded-3xl overflow-hidden navy-mesh p-10 lg:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange/5 rounded-full blur-[80px]" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="font-syne text-3xl lg:text-4xl font-bold text-white mb-3">
                  Ready to Build Something <span className="text-gradient">Extraordinary</span>?
                </h3>
                <p className="text-white/60 font-outfit text-lg max-w-xl">
                  Partner with Zimbabwe's premier board products supplier. Quality materials, competitive prices, expert service.
                </p>
              </div>
              <Link
                to="/contact"
                className="flex items-center gap-3 bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-2xl font-outfit font-semibold text-lg transition-all shadow-xl shadow-orange/20 hover:shadow-orange/40 whitespace-nowrap group"
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/logo.png" alt="BoardEx Logo" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <span className="font-syne font-bold text-white text-xl">Board<span className="text-orange">Ex</span></span>
                <div className="text-[9px] text-white/40 tracking-[0.2em] uppercase font-outfit">Boards · Doors · Hardware</div>
              </div>
            </Link>
            <p className="text-white/50 font-outfit text-sm leading-relaxed mb-6 max-w-sm">
              Zimbabwe's specialist supplier and distributor of premium board products. From melamine to MDF, we provide the foundation for exceptional furniture and interiors.
            </p>
            <div className="space-y-3">
              <a href="tel:+263719426009" className="flex items-center gap-3 text-white/50 hover:text-orange transition-colors text-sm font-outfit">
                <Phone size={15} className="text-orange/60" /> +263 719 426 009
              </a>
              <a href="mailto:info@boardex.co.zw" className="flex items-center gap-3 text-white/50 hover:text-orange transition-colors text-sm font-outfit">
                <Mail size={15} className="text-orange/60" /> info@boardex.co.zw
              </a>
              <div className="flex items-center gap-3 text-white/50 text-sm font-outfit">
                <MapPin size={15} className="text-orange/60 shrink-0" /> 6 Buick Close, Beverley East Msasa, Harare
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm font-outfit">
                <Clock size={15} className="text-orange/60" /> Mon - Fri: 8am to 5pm
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-syne font-semibold text-white text-sm uppercase tracking-wider mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-white/40 hover:text-orange transition-colors text-sm font-outfit group"
                    >
                      <ChevronRight size={12} className="text-orange/0 group-hover:text-orange/60 transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/30 text-xs font-outfit">
            © {currentYear} BoardEx Zimbabwe. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orange/20 flex items-center justify-center text-white/40 hover:text-orange transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
