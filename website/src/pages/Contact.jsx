import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import AnimatedSection from '../components/AnimatedSection';

/* ─── VISION: Split layout - form on left, contact cards + map on right ─── */

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '', subject: 'quote' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center navy-mesh grain overflow-hidden">
        <div className="absolute top-1/3 right-[15%] w-72 h-72 bg-orange/8 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-32 pb-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">Get in Touch</span>
            <h1 className="font-syne font-bold text-4xl sm:text-5xl lg:text-7xl text-white mt-4 max-w-3xl leading-[1.05]">
              Let's Build Something <span className="text-gradient">Together</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection variant="fadeLeft">
                {submitted ? (
                  <div className="bg-white rounded-3xl p-12 text-center border border-navy/5">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h3 className="font-syne font-bold text-navy text-2xl mb-3">Message Sent!</h3>
                    <p className="text-navy/50 font-outfit mb-6">Thank you for contacting BoardEx. Our team will respond within 24 hours.</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', message: '', subject: 'quote' }); }}
                      className="text-orange font-outfit font-medium hover:underline">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-10 border border-navy/5">
                    <h3 className="font-syne font-bold text-navy text-xl mb-6">Send us a message</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {['quote', 'inquiry', 'support', 'partnership'].map(type => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm({ ...form, subject: type })}
                          className={`px-4 py-2 rounded-lg font-outfit text-sm capitalize transition-all ${
                            form.subject === type ? 'bg-navy text-white' : 'bg-cream text-navy/60 hover:bg-navy/5'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-navy/60 text-xs font-outfit mb-1.5">Full Name *</label>
                        <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-cream border border-navy/10 rounded-xl py-3 px-4 text-sm font-outfit focus:outline-none focus:border-orange/50 transition-colors" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-navy/60 text-xs font-outfit mb-1.5">Email *</label>
                        <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-cream border border-navy/10 rounded-xl py-3 px-4 text-sm font-outfit focus:outline-none focus:border-orange/50 transition-colors" placeholder="john@company.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-navy/60 text-xs font-outfit mb-1.5">Phone</label>
                        <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-cream border border-navy/10 rounded-xl py-3 px-4 text-sm font-outfit focus:outline-none focus:border-orange/50 transition-colors" placeholder="+263 ..." />
                      </div>
                      <div>
                        <label className="block text-navy/60 text-xs font-outfit mb-1.5">Company</label>
                        <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full bg-cream border border-navy/10 rounded-xl py-3 px-4 text-sm font-outfit focus:outline-none focus:border-orange/50 transition-colors" placeholder="Company name" />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-navy/60 text-xs font-outfit mb-1.5">Message *</label>
                      <textarea required rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-cream border border-navy/10 rounded-xl py-3 px-4 text-sm font-outfit focus:outline-none focus:border-orange/50 transition-colors resize-none" placeholder="Tell us about your project..." />
                    </div>
                    <button type="submit" className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white py-3.5 rounded-xl font-outfit font-semibold transition-colors w-full group">
                      <Send size={18} /> Send Message
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <AnimatedSection variant="fadeRight">
                <div className="bg-navy rounded-3xl p-8">
                  <h3 className="font-syne font-bold text-white text-lg mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    {[
                      { icon: Phone, label: 'Phone', value: '+263 719 426 009', href: 'tel:+263719426009' },
                      { icon: Phone, label: 'Office', value: '+263 8677 010531', href: 'tel:+2638677010531' },
                      { icon: Mail, label: 'Email', value: 'info@boardex.co.zw', href: 'mailto:info@boardex.co.zw' },
                      { icon: MapPin, label: 'Address', value: '6 Buick Close, Beverley East Msasa, Harare', href: null },
                      { icon: Clock, label: 'Hours', value: 'Mon - Fri: 8am to 5pm', href: null },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                          <item.icon size={18} className="text-orange" />
                        </div>
                        <div>
                          <div className="text-white/40 text-xs font-outfit mb-0.5">{item.label}</div>
                          {item.href ? (
                            <a href={item.href} className="text-white font-outfit text-sm hover:text-orange transition-colors">{item.value}</a>
                          ) : (
                            <span className="text-white font-outfit text-sm">{item.value}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection variant="fadeRight" delay={0.1}>
                <div className="bg-white rounded-3xl overflow-hidden border border-navy/5">
                  <div className="p-6">
                    <h3 className="font-syne font-bold text-navy text-lg mb-2">Branches</h3>
                    <div className="space-y-3">
                      {['Harare (HQ)', 'Bulawayo', 'Masvingo', 'Marondera'].map((branch, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-navy/5 last:border-0">
                          <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-orange" />
                            <span className="text-navy/70 font-outfit text-sm">{branch}</span>
                          </div>
                          <a href="tel:+263719426009" className="text-orange text-xs font-outfit hover:underline">Call</a>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-48">
                    <iframe
                      title="BoardEx Location"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=31.09%2C-17.83%2C31.11%2C-17.81&layer=mapnik&marker=-17.82%2C31.10"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
