import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Layers, Box, DoorOpen, Wrench,
  Award, Users, Smile, CheckCircle, Star, ChevronRight, MapPin,
  Truck, Shield, Clock, Phone, Zap, Target
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem, MagneticButton } from '../components/AnimatedSection';

/* ─── VISION COMMENTS ─── 
   Hero: Full-bleed navy gradient with floating board material imagery, 
         geometric accent shapes, and a bold split-text hero headline.
         Image should be: modern furniture showroom or clean wood panel warehouse
   
   Products: Bento grid layout with hover-reveal product cards
         Images should be: close-up textures of melamine, MDF, chipboard surfaces
   
   Stats: Horizontal scroll counter section with large numbers
   
   About Preview: Split layout with overlapping images and diagonal divider
         Image should be: BoardEx team/warehouse, modern industrial facility
   
   Projects: Masonry-style gallery with parallax hover effects
         Images should be: finished furniture, kitchen installations, office interiors
   
   Services: Vertical accordion or horizontal scroll cards
   
   Testimonials: Single large quote with client avatar rotation
   
   CTA: Full-width gradient section with floating elements
*/

const stats = [
  { number: '69+', label: 'Awards Won', icon: Award },
  { number: '780+', label: 'Team Members', icon: Users },
  { number: '456+', label: 'Happy Clients', icon: Smile },
  { number: '599+', label: 'Projects Done', icon: CheckCircle },
];

const products = [
  {
    name: 'Melamine Boards',
    desc: 'Premium high-pressure melamine boards with superior water resistance and stunning finishes for modern interiors.',
    icon: Layers,
    path: '/products/melamine',
    img: 'https://images.unsplash.com/photo-1599855167133-f81c719a4f6f?w=600&q=80',
    accent: 'from-orange to-amber-400',
  },
  {
    name: 'MDF Panels',
    desc: 'Engineered medium-density fiberboard compressed under high pressure for unmatched durability and smooth finish.',
    icon: Box,
    path: '/products/mdf',
    img: 'https://images.unsplash.com/photo-1542268618-5264849a7380?w=600&q=80',
    accent: 'from-blue-500 to-navy',
  },
  {
    name: 'Chipboard',
    desc: 'Cost-effective particle boards ideal for furniture manufacturing, cabinetry, and interior construction projects.',
    icon: Layers,
    path: '/products/chipboard',
    img: 'https://images.unsplash.com/photo-1690768162443-392bd54f108a?w=600&q=80',
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Doors & Frames',
    desc: 'Complete range of interior and exterior doors with precision-crafted frames for residential and commercial spaces.',
    icon: DoorOpen,
    path: '/products/doors',
    img: 'https://images.unsplash.com/photo-1768725845212-fe829e1a30bf?w=600&q=80',
    accent: 'from-violet-500 to-purple-700',
  },
  {
    name: 'Hardware',
    desc: 'Professional-grade fittings, hinges, handles, and accessories to complete every project with precision.',
    icon: Wrench,
    path: '/products/hardware',
    img: 'https://images.unsplash.com/photo-1679990130718-78143499971d?w=600&q=80',
    accent: 'from-rose-500 to-red-600',
  },
];

const services = [
  { icon: Layers, title: 'Board Cutting', desc: 'Precision CNC and panel saw cutting to your exact specifications' },
  { icon: Zap, title: 'Edge Banding', desc: 'Professional edge finishing for a seamless, polished look' },
  { icon: Truck, title: 'Nationwide Delivery', desc: 'Fast, reliable delivery to Harare, Bulawayo, Masvingo & more' },
  { icon: Target, title: 'Custom Orders', desc: 'Bespoke board solutions tailored to your unique project needs' },
  { icon: Shield, title: 'Quality Guarantee', desc: 'Every product backed by our commitment to excellence' },
  { icon: Clock, title: '24hr Service', desc: 'Round-the-clock support for urgent project requirements' },
];

const projects = [
  { img: 'https://images.unsplash.com/photo-1668026694348-b73c5eb5e299?w=600&q=80', title: 'Modern Kitchen Design', cat: 'Residential' },
  { img: 'https://images.unsplash.com/photo-1758630737900-a28682c5aa69?w=600&q=80', title: 'Corporate Office Fit-out', cat: 'Commercial' },
  { img: 'https://images.unsplash.com/photo-1751806524667-6272a4a334c5?w=600&q=80', title: 'Bespoke Wardrobes', cat: 'Residential' },
  { img: 'https://images.unsplash.com/photo-1764795849755-ab58c8fef307?w=600&q=80', title: 'Retail Display Systems', cat: 'Commercial' },
  { img: 'https://images.unsplash.com/photo-1713192707527-13b598f4adca?w=600&q=80', title: 'Hotel Room Furniture', cat: 'Hospitality' },
  { img: 'https://images.unsplash.com/photo-1763485957127-5645e9348426?w=600&q=80', title: 'Bathroom Vanities', cat: 'Residential' },
];

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const num = parseInt(target);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = num / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, num]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── HERO CAROUSEL IMAGES ───
   Image 1: Modern kitchen with sleek melamine cabinetry, warm lighting - showcases end product
   Image 2: Warehouse/showroom with stacked board products, industrial elegance
   Image 3: Contemporary living space with wood-paneled walls, lifestyle aspiration
*/
const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1560185127-1902ccdc5094?w=1600&q=80',
    alt: 'Modern kitchen interior built with premium BoardEx melamine boards',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1600&q=80',
    alt: 'Contemporary home renovation featuring BoardEx wood panel products',
  },
  {
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80',
    alt: 'Luxury interior space with BoardEx MDF and melamine finishes',
  },
];

function HeroSection({ heroRef, heroY, heroOpacity, heroScale }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalRef.current);
  }, [nextSlide]);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, scale: 1.1, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, scale: 1, x: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir) => ({ opacity: 0, scale: 1.05, x: dir > 0 ? -80 : 80, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }),
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── Background Carousel Layer ── */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentSlide].src}
              alt={heroImages[currentSlide].alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Diagonal Split Overlay ──
          Heavy navy on top-left for text readability,
          transparent on bottom-right to reveal carousel images.
          The diagonal goes from ~top-right to ~bottom-left. */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(10, 22, 40, 0.97) 0%,
              rgba(10, 22, 40, 0.95) 25%,
              rgba(10, 22, 40, 0.85) 40%,
              rgba(10, 22, 40, 0.6) 55%,
              rgba(10, 22, 40, 0.3) 70%,
              rgba(10, 22, 40, 0.15) 85%,
              rgba(10, 22, 40, 0.08) 100%
            )
          `,
        }}
      />

      {/* Additional bottom-edge gradient for scroll indicator readability */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[2]"
        style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.6), transparent)' }}
      />

      {/* Mobile overlay — stronger for readability on small screens */}
      <div
        className="absolute inset-0 z-[2] lg:hidden"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(10, 22, 40, 0.92) 0%,
              rgba(10, 22, 40, 0.80) 50%,
              rgba(10, 22, 40, 0.45) 100%
            )
          `,
        }}
      />

      {/* ── Animated Orbs (on top of overlay, under content) ── */}
      <div className="absolute top-20 right-[10%] w-96 h-96 bg-orange/10 rounded-full blur-[120px] animate-float z-[3]" />
      <div className="absolute bottom-20 left-[5%] w-72 h-72 bg-blue-500/8 rounded-full blur-[100px] animate-float-delayed z-[3]" />

      {/* ── Geometric Decorations ── */}
      <div className="absolute top-1/4 right-[15%] w-20 h-20 border border-orange/20 rounded-2xl rotate-45 animate-float-slow z-[3]" />
      <div className="absolute bottom-1/3 left-[10%] w-14 h-14 border border-white/10 rounded-full animate-float z-[3]" />
      <div className="absolute top-[60%] right-[30%] w-3 h-3 bg-orange rounded-full animate-pulse z-[3]" />
      <div className="absolute top-[20%] left-[25%] w-2 h-2 bg-white/30 rounded-full animate-pulse z-[3]" />

      {/* ── Grid Pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.03] z-[3]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Grain overlay */}
      <div className="absolute inset-0 grain z-[3] pointer-events-none" />

      {/* ── Content ── */}
      <motion.div style={{ y: heroY, opacity: heroOpacity, scale: heroScale }} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Text content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm"
              >
                <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
                <span className="text-orange text-xs font-medium tracking-wide uppercase">Zimbabwe's #1 Board Supplier</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className=" text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] mb-6"
              >
                Crafting the{' '}
                <span className="relative inline-block">
                  <span className="text-gradient">Foundation</span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-orange to-orange-light rounded-full origin-left"
                  />
                </span>{' '}
                of Exceptional Spaces
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-white/70 font-outfit text-lg lg:text-xl max-w-lg mb-10 leading-relaxed"
              >
                Premium board products, expert cutting & edging services, and nationwide delivery. Your partner in building Zimbabwe's finest interiors.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/products"
                  className="group flex items-center gap-3 bg-orange hover:bg-orange-dark text-white px-7 py-4 rounded-2xl font-outfit font-semibold transition-all shadow-xl shadow-orange/25 hover:shadow-orange/40"
                >
                  Explore Products
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group flex items-center gap-3 bg-white/10 hover:bg-white/15 text-white px-7 py-4 rounded-2xl font-outfit font-semibold transition-all border border-white/10 backdrop-blur-sm"
                >
                  Request Quote
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 flex items-center gap-8 flex-wrap"
              >
                {[
                  { val: '15+', label: 'Years Experience' },
                  { val: '4', label: 'Locations' },
                  { val: '24/7', label: 'Support' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-2xl font-syne font-bold text-orange">{item.val}</span>
                    <span className="text-white/40 text-xs font-outfit">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Floating cards over the revealed carousel imagery */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:flex items-center justify-center min-h-[500px]"
            >
              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-[15%] left-[5%] glass-dark rounded-2xl p-4 shadow-xl z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange/20 flex items-center justify-center">
                    <Star className="text-orange" size={18} />
                  </div>
                  <div>
                    <div className="text-white font-syne font-bold text-lg">4.9/5</div>
                    <div className="text-white/40 text-xs font-outfit">Client Rating</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating ISO badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-[20%] right-[5%] glass-dark rounded-2xl p-4 shadow-xl z-10"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={18} />
                  <span className="text-white text-xs font-outfit font-medium">ISO Certified Quality</span>
                </div>
              </motion.div>

              {/* Floating product highlight */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute top-[50%] right-[10%] glass-dark rounded-2xl p-4 shadow-xl z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Layers className="text-white" size={18} />
                  </div>
                  <div>
                    <div className="text-white font-syne font-bold text-sm">500+ Products</div>
                    <div className="text-white/40 text-xs font-outfit">In Stock</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative rings */}
              <div className="absolute top-[8%] right-[15%] w-32 h-32 border-2 border-orange/15 rounded-full" />
              <div className="absolute bottom-[10%] left-[20%] w-16 h-16 border border-white/10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── Carousel Indicators ── */}
      <div className="absolute bottom-20 right-8 lg:right-12 z-10 flex flex-col gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="group relative flex items-center"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div
              className={`w-1.5 transition-all duration-500 rounded-full ${
                i === currentSlide
                  ? 'h-10 bg-orange shadow-lg shadow-orange/30'
                  : 'h-4 bg-white/30 group-hover:bg-white/50'
              }`}
            />
          </button>
        ))}
      </div>

      {/* ── Slide Counter ── */}
      <div className="absolute bottom-8 right-8 lg:right-12 z-10">
        <span className="text-white/50 text-xs font-outfit tabular-nums">
          <span className="text-orange font-semibold text-sm">{String(currentSlide + 1).padStart(2, '0')}</span>
          {' / '}
          {String(heroImages.length).padStart(2, '0')}
        </span>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 bg-orange rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <main>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <HeroSection heroRef={heroRef} heroY={heroY} heroOpacity={heroOpacity} heroScale={heroScale} />

      {/* ═══════════════════════ MARQUEE ═══════════════════════ */}
      <section className="py-6 bg-navy border-y border-white/5 overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              {['Melamine Boards', 'MDF Panels', 'Chipboard', 'Doors & Frames', 'Hardware', 'Custom Cutting', 'Edge Banding', 'Nationwide Delivery'].map((item, j) => (
                <span key={j} className="flex items-center gap-3 text-white/30 font-outfit text-sm">
                  <span className="w-1.5 h-1.5 bg-orange/50 rounded-full" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ PRODUCTS ═══════════════════════ */}
      <section className="py-24 lg:py-32 bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-gradient-to-bl from-orange/5 to-transparent rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <AnimatedSection variant="fadeLeft">
              <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">Our Solutions</span>
              <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy mt-3 leading-tight">
                Premium Board<br />Products & Materials
              </h2>
            </AnimatedSection>
            <AnimatedSection variant="fadeRight" delay={0.2}>
              <p className="text-navy/50 font-outfit max-w-md text-base lg:text-lg">
                From raw materials to finished installations, we supply everything you need to bring your vision to life.
              </p>
            </AnimatedSection>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, i) => (
              <AnimatedSection key={i} variant="fadeUp" delay={i * 0.1}>
                <Link
                  to={product.path}
                  className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                    i === 0 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                >
                  <div className={`relative ${i === 0 ? 'h-80 md:h-full min-h-[400px]' : 'h-64 lg:h-72'} bg-navy rounded-3xl overflow-hidden`}>
                    <img
                      src={product.img}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                    <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.accent} flex items-center justify-center mb-4 shadow-lg`}>
                        <product.icon size={22} className="text-white" />
                      </div>
                      <h3 className="font-syne font-bold text-white text-xl lg:text-2xl mb-2">{product.name}</h3>
                      <p className="text-white/50 font-outfit text-sm leading-relaxed mb-4 max-w-sm">{product.desc}</p>
                      <div className="flex items-center gap-2 text-orange font-outfit text-sm font-medium group-hover:gap-3 transition-all">
                        View Collection <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ STATS ═══════════════════════ */}
      <section className="py-20 navy-mesh relative overflow-hidden grain">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange/8 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} variant="scale" delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange/20 transition-colors">
                    <stat.icon size={28} className="text-orange" />
                  </div>
                  <div className="font-syne font-bold text-4xl lg:text-5xl text-white mb-2">
                    <CountUp target={stat.number.replace('+', '')} suffix="+" />
                  </div>
                  <div className="text-white/40 font-outfit text-sm">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ ABOUT PREVIEW ═══════════════════════ */}
      <section className="py-24 lg:py-32 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image composition */}
            <AnimatedSection variant="fadeLeft">
              <div className="relative">
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                  <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1706027554829-50c444350e43?w=600&q=80"
                      alt="BoardEx warehouse operations"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-[65%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border-4 border-cream">
                    <img
                      src="https://images.unsplash.com/photo-1687180498602-5a1046defaa4?w=600&q=80"
                      alt="Modern interior with BoardEx materials"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {/* Experience badge */}
                  <div className="absolute top-[55%] left-[30%] bg-orange rounded-2xl p-5 shadow-xl glow-orange z-10">
                    <div className="text-white font-syne font-bold text-3xl">15+</div>
                    <div className="text-white/80 font-outfit text-xs">Years of<br/>Excellence</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Text */}
            <div>
              <AnimatedSection variant="fadeRight">
                <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">Who We Are</span>
                <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy mt-3 mb-6 leading-tight">
                  Experts in Boards,<br/>Doors & <span className="text-gradient">Hardware</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection variant="fadeRight" delay={0.2}>
                <p className="text-navy/60 font-outfit text-base lg:text-lg leading-relaxed mb-6">
                  BoardEx Zimbabwe is a specialist supplier and distributor of board products. From melamine board to medium-density fiberboard (MDF), our products are ideal as raw material for your furniture, renovations, cladding, and more.
                </p>
                <p className="text-navy/60 font-outfit text-base lg:text-lg leading-relaxed mb-8">
                  We pride ourselves on the close relationships we develop with our clients. It's through nurturing relationships that we learn how to truly understand their needs and how best to serve them.
                </p>
              </AnimatedSection>

              <AnimatedSection variant="fadeUp" delay={0.4}>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    'Premium Quality Materials',
                    'Competitive Pricing',
                    'Expert Consultation',
                    'Nationwide Delivery',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-orange shrink-0" />
                      <span className="text-navy/70 font-outfit text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-xl font-outfit font-medium transition-colors group"
                >
                  Learn More About Us
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SERVICES ═══════════════════════ */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, #0a1628 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">What We Offer</span>
            <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy mt-3">
              Services That <span className="text-gradient">Deliver</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <AnimatedSection key={i} variant="fadeUp" delay={i * 0.08}>
                <div className="group relative p-8 rounded-3xl bg-cream hover:bg-navy transition-all duration-500 cursor-pointer border border-transparent hover:border-white/10">
                  <div className="w-14 h-14 rounded-2xl bg-orange/10 group-hover:bg-orange/20 flex items-center justify-center mb-5 transition-colors">
                    <service.icon size={24} className="text-orange" />
                  </div>
                  <h3 className="font-syne font-bold text-navy group-hover:text-white text-lg mb-3 transition-colors">{service.title}</h3>
                  <p className="text-navy/50 group-hover:text-white/50 font-outfit text-sm leading-relaxed transition-colors">{service.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-orange font-outfit text-sm font-medium opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PROJECTS PREVIEW ═══════════════════════ */}
      <section className="py-24 lg:py-32 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <AnimatedSection variant="fadeLeft">
              <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">Our Portfolio</span>
              <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy mt-3">
                Featured <span className="text-gradient">Projects</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection variant="fadeRight" delay={0.2}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-navy font-outfit font-medium hover:text-orange transition-colors group"
              >
                View All Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>

          {/* Masonry-ish grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <AnimatedSection key={i} variant="fadeUp" delay={i * 0.08}>
                <Link
                  to="/projects"
                  className={`group relative overflow-hidden rounded-3xl ${
                    i === 0 || i === 3 ? 'row-span-2 h-80 lg:h-full min-h-[320px]' : 'h-64'
                  }`}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-orange text-xs font-outfit font-medium uppercase tracking-wider">{project.cat}</span>
                      <h3 className="font-syne font-bold text-white text-lg mt-1">{project.title}</h3>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TESTIMONIAL ═══════════════════════ */}
      <section className="py-24 lg:py-32 navy-mesh relative overflow-hidden grain">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[150px]" />
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center relative z-10">
          <AnimatedSection variant="scale">
            <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-8">
              <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="font-syne text-2xl lg:text-4xl text-white font-medium leading-relaxed mb-8">
              BoardEx has been our go-to supplier for over five years. Their quality is unmatched, and their service team goes above and beyond every single time.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                <span className="font-syne font-bold text-orange">TM</span>
              </div>
              <div className="text-left">
                <div className="text-white font-outfit font-medium">Tendai Moyo</div>
                <div className="text-white/40 font-outfit text-sm">MD, Moyo Furniture Manufacturing</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════ LOCATIONS ═══════════════════════ */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <span className="text-orange text-xs font-outfit font-medium tracking-[0.2em] uppercase">Our Presence</span>
            <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy mt-3">
              Serving <span className="text-gradient">Zimbabwe</span> Nationwide
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { city: 'Harare', address: '6 Buick Close, Beverley East Msasa', main: true },
              { city: 'Bulawayo', address: 'Industrial Area, Bulawayo', main: false },
              { city: 'Masvingo', address: 'Masvingo Branch', main: false },
              { city: 'Marondera', address: 'Marondera Branch', main: false },
            ].map((loc, i) => (
              <AnimatedSection key={i} variant="fadeUp" delay={i * 0.1}>
                <div className={`relative p-6 rounded-3xl border transition-all hover:-translate-y-1 ${
                  loc.main ? 'bg-navy text-white border-navy' : 'bg-cream text-navy border-navy/5 hover:border-orange/20'
                }`}>
                  {loc.main && <div className="absolute top-3 right-3 px-2 py-0.5 bg-orange text-white text-[10px] font-outfit font-medium rounded-full uppercase">HQ</div>}
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                    loc.main ? 'bg-orange/20' : 'bg-orange/10'
                  }`}>
                    <MapPin size={20} className="text-orange" />
                  </div>
                  <h3 className="font-syne font-bold text-lg mb-1">{loc.city}</h3>
                  <p className={`font-outfit text-sm ${loc.main ? 'text-white/50' : 'text-navy/50'}`}>{loc.address}</p>
                  <a href="tel:+263719426009" className="inline-flex items-center gap-1 mt-4 text-orange text-sm font-outfit font-medium hover:underline">
                    <Phone size={14} /> Call Branch
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}