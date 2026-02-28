import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, Phone, Layers, Box, DoorOpen, Wrench } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

/* ─── VISION: Full product showcase with specs, gallery, and related products ─── */

const productData = {
  melamine: {
    title: 'Melamine Boards',
    subtitle: 'Premium Finishes for Modern Interiors',
    desc: 'Our high-pressure melamine boards offer superior water resistance, stunning finishes, and exceptional durability. The resin is mist sprayed onto panel particles through a nozzle, creating boards ideal for external structures with enhanced water resistance properties. High-pressure melamine chip boards are denser, more steady, and robust.',
    icon: Layers,
    features: ['Water Resistant', 'High Density', 'Multiple Finishes', 'Cut to Size', 'Edge Banding Available', 'Uniform Surface'],
    specs: [
      { label: 'Thickness', value: '16mm / 18mm / 25mm' },
      { label: 'Standard Size', value: '2750mm x 1830mm' },
      { label: 'Density', value: '600-750 kg/m³' },
      { label: 'Available Colors', value: '20+ finishes' },
    ],
    img: 'https://images.unsplash.com/photo-1771862956369-c840b0a1fc9d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1693592398532-cb18d3b01d07?w=400&q=80',
      'https://images.unsplash.com/photo-1628312745885-f9b52b5c36e8?w=400&q=80',
      'https://images.unsplash.com/photo-1758548157243-f4ef3e614684?w=400&q=80',
    ],
  },
  mdf: {
    title: 'MDF Panels',
    subtitle: 'Engineered for Precision & Durability',
    desc: 'Medium Density Fiberboard panels are held together by resin, with wood fibers compressed under high-pressure circumstances. MDF offers a more durable option with an incredibly smooth surface perfect for painting and laminating.',
    icon: Box,
    features: ['Smooth Surface', 'Paint Ready', 'Consistent Density', 'Easy Machining', 'Moisture Resistant Option', 'Eco-Friendly'],
    specs: [
      { label: 'Thickness', value: '6mm to 32mm' },
      { label: 'Standard Size', value: '2750mm x 1830mm' },
      { label: 'Density', value: '700-800 kg/m³' },
      { label: 'Types', value: 'Standard / MR / Ultra-Light' },
    ],
    img: 'https://images.unsplash.com/photo-1561435375-c3e1b6fdd7d7?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1644358687651-464c503972fe?w=400&q=80',
      'https://images.unsplash.com/photo-1627590720218-c5ed819dae7e?w=400&q=80',
      'https://images.unsplash.com/photo-1677285193666-33e0c7fee4f1?w=400&q=80',
    ],
  },
  chipboard: {
    title: 'Chipboard',
    subtitle: 'Cost-Effective Solutions',
    desc: 'Our chipboard products offer excellent value for furniture manufacturing, cabinetry, and interior construction. Available in standard and moisture-resistant variants.',
    icon: Layers,
    features: ['Affordable', 'Lightweight', 'Moisture Resistant Option', 'Easy to Work', 'Versatile', 'Good Screw Holding'],
    specs: [
      { label: 'Thickness', value: '16mm / 18mm / 25mm' },
      { label: 'Standard Size', value: '2750mm x 1830mm' },
      { label: 'Density', value: '550-650 kg/m³' },
      { label: 'Types', value: 'Standard / MR' },
    ],
    img: 'https://images.unsplash.com/photo-1561435351-c668934d89de?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1649059270820-aa674ea81f70?w=400&q=80',
      'https://images.unsplash.com/photo-1624547612881-3dd00b4fddf5?w=400&q=80',
      'https://images.unsplash.com/photo-1652989946083-50f4717944fb?w=400&q=80',
    ],
  },
  doors: {
    title: 'Doors & Frames',
    subtitle: 'Complete Door Solutions',
    desc: 'A comprehensive range of interior and exterior doors with precision-crafted frames. From hollow-core to solid-core, we have the perfect door for every application.',
    icon: DoorOpen,
    features: ['Hollow Core', 'Solid Core', 'Fire Rated', 'Custom Sizes', 'Pre-hung Options', 'Frame Included'],
    specs: [
      { label: 'Widths', value: '610mm / 713mm / 813mm' },
      { label: 'Height', value: '2032mm standard' },
      { label: 'Thickness', value: '35mm / 40mm / 44mm' },
      { label: 'Types', value: 'Flush / Panel / Glass' },
    ],
    img: 'https://images.unsplash.com/photo-1760624492453-502f4edbf986?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1759691555010-7f3f8674d2f2?w=400&q=80',
      'https://images.unsplash.com/photo-1770625467655-65fa3a256ccb?w=400&q=80',
      'https://images.unsplash.com/photo-1763827657709-b1bbc3c4945b?w=400&q=80',
    ],
  },
  hardware: {
    title: 'Hardware & Fittings',
    subtitle: 'Professional-Grade Accessories',
    desc: 'Complete your projects with our extensive range of professional hardware including hinges, handles, drawer slides, shelf supports, and specialized fittings.',
    icon: Wrench,
    features: ['Soft-Close Hinges', 'Drawer Slides', 'Door Handles', 'Shelf Supports', 'Edge Banding', 'Screws & Fixings'],
    specs: [
      { label: 'Brands', value: 'Multiple premium brands' },
      { label: 'Hinges', value: 'Soft-close & standard' },
      { label: 'Slides', value: 'Full & partial extension' },
      { label: 'Finishes', value: 'Chrome / Satin / Brass' },
    ],
    img: 'https://images.unsplash.com/photo-1677945070289-f8942cd71dd9?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1722152250374-a5584aca7de6?w=400&q=80',
      'https://images.unsplash.com/photo-1572780789900-43ef70568a0f?w=400&q=80',
      'https://images.unsplash.com/photo-1722605895374-1faef3395cd3?w=400&q=80',
    ],
  },
};

export default function ProductDetail() {
  const { category } = useParams();
  const product = productData[category] || productData.melamine;

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end navy-mesh grain overflow-hidden">
        <div className="absolute inset-0">
          <img src={product.img} alt={product.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-16 pt-32 relative z-10 w-full">
          <Link to="/products" className="inline-flex items-center gap-2 text-white/50 hover:text-orange font-outfit text-sm mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Products
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-orange/20 flex items-center justify-center">
                <product.icon size={28} className="text-orange" />
              </div>
              <div>
                <h1 className="font-syne font-bold text-3xl lg:text-5xl text-white">{product.title}</h1>
                <p className="text-orange font-outfit text-sm mt-1">{product.subtitle}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <AnimatedSection variant="fadeUp">
                <p className="text-navy/70 font-outfit text-lg leading-relaxed mb-10">{product.desc}</p>
              </AnimatedSection>

              {/* Gallery */}
              <AnimatedSection variant="fadeUp" delay={0.1}>
                <h3 className="font-syne font-bold text-navy text-xl mb-6">Product Gallery</h3>
                <div className="grid grid-cols-3 gap-4 mb-12">
                  {product.gallery.map((img, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden aspect-square">
                      <img src={img} alt={`${product.title} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Features */}
              <AnimatedSection variant="fadeUp" delay={0.2}>
                <h3 className="font-syne font-bold text-navy text-xl mb-6">Key Features</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white p-4 rounded-xl border border-navy/5">
                      <CheckCircle size={16} className="text-orange shrink-0" />
                      <span className="text-navy/70 font-outfit text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div>
              <AnimatedSection variant="fadeRight">
                <div className="bg-navy rounded-3xl p-8 sticky top-28">
                  <h3 className="font-syne font-bold text-white text-lg mb-6">Specifications</h3>
                  <div className="space-y-4 mb-8">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center pb-3 border-b border-white/10">
                        <span className="text-white/50 font-outfit text-sm">{spec.label}</span>
                        <span className="text-white font-outfit text-sm font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white py-3.5 rounded-xl font-outfit font-semibold transition-colors w-full group">
                    Request Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="tel:+263719426009" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3.5 rounded-xl font-outfit font-medium transition-colors w-full mt-3">
                    <Phone size={16} /> Call Us Now
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
