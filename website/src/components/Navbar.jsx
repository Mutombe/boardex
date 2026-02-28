import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Menu, X, ChevronDown, Phone, Mail, MapPin,
  ArrowRight, Layers, Box, DoorOpen, Wrench, Building2,
  Users, Briefcase, BookOpen, MessageSquare, FileText, Award
} from 'lucide-react';

const navGroups = [
  {
    label: 'Discover',
    items: [
      { name: 'Our Story', path: '/about', icon: Building2, desc: 'Heritage & Mission' },
      { name: 'Leadership', path: '/about#team', icon: Users, desc: 'Meet the Team' },
      { name: 'Milestones', path: '/about#milestones', icon: Award, desc: 'Our Journey' },
    ],
  },
  {
    label: 'Solutions',
    items: [
      { name: 'Melamine Boards', path: '/products/melamine', icon: Layers, desc: 'Premium Finishes' },
      { name: 'MDF Panels', path: '/products/mdf', icon: Box, desc: 'Engineered Wood' },
      { name: 'Chipboard', path: '/products/chipboard', icon: Layers, desc: 'Cost-Effective' },
      { name: 'Doors & Frames', path: '/products/doors', icon: DoorOpen, desc: 'Interior & Exterior' },
      { name: 'Hardware', path: '/products/hardware', icon: Wrench, desc: 'Fittings & More' },
      { name: 'All Products', path: '/products', icon: Box, desc: 'Full Catalogue' },
    ],
  },
  {
    label: 'Showcase',
    items: [
      { name: 'Our Projects', path: '/projects', icon: FileText, desc: 'Featured Work' },
      { name: 'Services', path: '/services', icon: Briefcase, desc: 'What We Offer' },
    ],
  },
  {
    label: 'Connect',
    items: [
      { name: 'Contact Us', path: '/contact', icon: MessageSquare, desc: 'Get in Touch' },
      { name: 'Careers', path: '/careers', icon: Briefcase, desc: 'Join Our Team' },
      { name: 'Blog & News', path: '/blog', icon: BookOpen, desc: 'Latest Updates' },
    ],
  },
];

const searchableContent = [
  { title: 'Melamine Boards', path: '/products/melamine', keywords: 'melamine board white wood panel furniture' },
  { title: 'MDF Panels', path: '/products/mdf', keywords: 'mdf medium density fiberboard wood panel' },
  { title: 'Chipboard', path: '/products/chipboard', keywords: 'chipboard particle board affordable' },
  { title: 'Doors & Frames', path: '/products/doors', keywords: 'doors frames interior exterior' },
  { title: 'Hardware', path: '/products/hardware', keywords: 'hardware fittings hinges handles' },
  { title: 'About Us', path: '/about', keywords: 'about company history mission team' },
  { title: 'Our Projects', path: '/projects', keywords: 'projects portfolio work showcase' },
  { title: 'Services', path: '/services', keywords: 'services cutting edging delivery distribution' },
  { title: 'Contact', path: '/contact', keywords: 'contact phone email address location' },
  { title: 'Careers', path: '/careers', keywords: 'careers jobs vacancies employment work' },
  { title: 'Blog', path: '/blog', keywords: 'blog news updates articles' },
  { title: 'Home', path: '/', keywords: 'home main landing page' },
];

export default function Navbar({ onSearchOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setSearchOpen(false);
  }, [location]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const results = searchableContent.filter(
        item => item.title.toLowerCase().includes(q) || item.keywords.includes(q)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${scrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="bg-navy/95 backdrop-blur-md text-white/70 text-xs py-2">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-6">
              <span className="flex items-center gap-1.5"><Phone size={11} /> +263 719 426 009</span>
              <span className="flex items-center gap-1.5"><Mail size={11} /> info@boardex.co.zw</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={11} className="text-orange" />
              <span>Harare · Bulawayo · Masvingo · Marondera</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'top-0 bg-navy/95 backdrop-blur-xl shadow-2xl shadow-navy/20' 
            : 'top-8 bg-transparent'
        }`}
        ref={dropdownRef}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group relative z-10">
              <div className="w-10 h-10 lg:w-12 lg:h-12  flex items-center justify-center  transition-shadow">
                <img src="/logo.png" alt="BoardEx Logo" className="w-10 h-10 lg:w-10 lg:h-10 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-syne font-bold text-white text-lg lg:text-xl tracking-tight">Board<span className="text-orange">Ex</span></span>
                <span className="text-[9px] text-white/50 tracking-[0.2em] uppercase font-outfit -mt-0.5">Boards · Doors · Hardware</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navGroups.map((group, i) => (
                <div key={i} className="relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === i ? null : i)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-outfit font-medium rounded-lg transition-all ${
                      activeDropdown === i
                        ? 'text-orange bg-white/10'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {group.label}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === i ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-72 rounded-2xl glass-dark shadow-2xl shadow-navy/50 overflow-hidden p-2"
                      >
                        {group.items.map((item, j) => (
                          <Link
                            key={j}
                            to={item.path}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors group/item"
                          >
                            <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center group-hover/item:bg-orange/20 transition-colors">
                              <item.icon size={18} className="text-orange" />
                            </div>
                            <div>
                              <div className="text-white font-outfit text-sm font-medium">{item.name}</div>
                              <div className="text-white/40 text-xs">{item.desc}</div>
                            </div>
                            <ArrowRight size={14} className="text-white/20 ml-auto group-hover/item:text-orange group-hover/item:translate-x-1 transition-all" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
              >
                <Search size={18} />
              </button>
              <Link
                to="/contact"
                className="hidden lg:flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-5 py-2.5 rounded-xl font-outfit font-medium text-sm transition-all shadow-lg shadow-orange/20 hover:shadow-orange/40"
              >
                Get a Quote
                <ArrowRight size={16} />
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-navy/98 backdrop-blur-xl border-t border-white/5 overflow-hidden"
            >
              <div className="px-4 py-6 max-h-[70vh] overflow-y-auto">
                {navGroups.map((group, i) => (
                  <div key={i} className="mb-4">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === i ? null : i)}
                      className="flex items-center justify-between w-full py-2 text-white/60 text-xs uppercase tracking-widest font-outfit"
                    >
                      {group.label}
                      <ChevronDown size={14} className={`transition-transform ${activeDropdown === i ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          {group.items.map((item, j) => (
                            <Link
                              key={j}
                              to={item.path}
                              className="flex items-center gap-3 py-3 pl-4 text-white/80 hover:text-orange transition-colors"
                            >
                              <item.icon size={16} className="text-orange/60" />
                              <span className="font-outfit text-sm">{item.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-orange text-white py-3 rounded-xl font-outfit font-medium text-sm mt-4"
                >
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-xl flex items-start justify-center pt-[15vh]"
            onClick={(e) => e.target === e.currentTarget && setSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              className="w-full max-w-2xl px-4"
            >
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" size={24} />
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search BoardEx..."
                  className="w-full bg-white/10 border border-white/10 rounded-2xl py-5 pl-16 pr-14 text-white text-lg font-outfit placeholder:text-white/30 focus:outline-none focus:border-orange/50 transition-colors"
                  autoFocus
                />
                <button
                  onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                >
                  {searchResults.map((result, i) => (
                    <Link
                      key={i}
                      to={result.path}
                      className="flex items-center gap-4 px-6 py-4 hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
                      onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                    >
                      <ArrowRight size={16} className="text-orange" />
                      <span className="text-white font-outfit">{result.title}</span>
                    </Link>
                  ))}
                </motion.div>
              )}

              {searchQuery && searchResults.length === 0 && (
                <div className="mt-4 text-center text-white/40 font-outfit py-8">
                  No results found for "{searchQuery}"
                </div>
              )}

              <div className="mt-6 text-center text-white/20 text-sm font-outfit">
                Press ESC to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
