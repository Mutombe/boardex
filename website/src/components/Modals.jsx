import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Shield, ChevronDown } from 'lucide-react';

export function CookieModal() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('boardex-cookies');
    if (!accepted) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('boardex-cookies', 'accepted');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[90] glass-dark rounded-2xl p-6 shadow-2xl shadow-navy/50"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
              <Cookie size={20} className="text-orange" />
            </div>
            <div className="flex-1">
              <h4 className="font-syne font-bold text-white text-sm mb-1">We Value Your Privacy</h4>
              <p className="text-white/50 text-xs font-outfit leading-relaxed">
                We use cookies to enhance your browsing experience and analyze site traffic.
              </p>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="mt-3 text-white/40 text-xs font-outfit space-y-2"
                >
                  <p><strong className="text-white/60">Essential cookies:</strong> Required for basic site functionality.</p>
                  <p><strong className="text-white/60">Analytics cookies:</strong> Help us understand how visitors interact with our website.</p>
                  <p><strong className="text-white/60">Marketing cookies:</strong> Used to deliver relevant advertisements.</p>
                </motion.div>
              )}
              <button onClick={() => setExpanded(!expanded)} className="text-orange text-xs font-outfit mt-2 flex items-center gap-1 hover:underline">
                {expanded ? 'Less' : 'More'} details <ChevronDown size={12} className={expanded ? 'rotate-180' : ''} />
              </button>
              <div className="flex items-center gap-2 mt-4">
                <button onClick={accept} className="bg-orange hover:bg-orange-dark text-white text-xs font-outfit font-medium px-4 py-2 rounded-lg transition-colors">
                  Accept All
                </button>
                <button onClick={accept} className="bg-white/10 hover:bg-white/20 text-white text-xs font-outfit font-medium px-4 py-2 rounded-lg transition-colors">
                  Essential Only
                </button>
              </div>
            </div>
            <button onClick={() => setShow(false)} className="text-white/30 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function PolicyModal({ isOpen, onClose, type = 'privacy' }) {
  const content = {
    privacy: {
      title: 'Privacy Policy',
      icon: Shield,
      sections: [
        { heading: 'Information We Collect', text: 'We collect information you provide directly, such as when you fill out a contact form, request a quote, or apply for a position. This may include your name, email address, phone number, company name, and project details.' },
        { heading: 'How We Use Your Information', text: 'Your information is used to respond to inquiries, process orders, provide customer service, send updates about our products and services, and improve our website experience.' },
        { heading: 'Information Sharing', text: 'We do not sell or share your personal information with third parties except as necessary to provide our services, comply with legal obligations, or protect our rights.' },
        { heading: 'Data Security', text: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.' },
        { heading: 'Your Rights', text: 'You have the right to access, correct, or delete your personal information. Contact us at info@boardex.co.zw for any privacy-related requests.' },
      ],
    },
    terms: {
      title: 'Terms of Service',
      icon: Shield,
      sections: [
        { heading: 'Acceptance of Terms', text: 'By accessing and using the BoardEx Zimbabwe website, you accept and agree to be bound by these terms and conditions.' },
        { heading: 'Products & Pricing', text: 'All product prices are subject to change without notice. While we make every effort to ensure accuracy, prices and availability may vary. All orders are subject to confirmation.' },
        { heading: 'Intellectual Property', text: 'All content on this website, including text, images, logos, and design elements, is the property of BoardEx Zimbabwe and is protected by intellectual property laws.' },
        { heading: 'Limitation of Liability', text: 'BoardEx Zimbabwe shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products.' },
        { heading: 'Governing Law', text: 'These terms shall be governed by and construed in accordance with the laws of Zimbabwe.' },
      ],
    },
  };

  const data = content[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-navy/80 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="bg-cream rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
          >
            <div className="bg-navy p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center">
                  <data.icon size={20} className="text-orange" />
                </div>
                <h3 className="font-syne font-bold text-white text-lg">{data.title}</h3>
              </div>
              <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 lg:p-8 overflow-y-auto max-h-[60vh]">
              <p className="text-sm text-navy/60 font-outfit mb-6">Last updated: February 2026</p>
              {data.sections.map((section, i) => (
                <div key={i} className="mb-6">
                  <h4 className="font-syne font-semibold text-navy text-base mb-2">{section.heading}</h4>
                  <p className="text-navy/60 text-sm font-outfit leading-relaxed">{section.text}</p>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-navy/10 flex justify-end">
              <button onClick={onClose} className="bg-navy hover:bg-navy-light text-white px-6 py-2.5 rounded-xl font-outfit text-sm font-medium transition-colors">
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
