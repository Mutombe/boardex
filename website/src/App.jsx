import React from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { CookieModal } from './components/Modals';

// Retry dynamic import once on failure (handles stale chunk hashes after deploys)
function lazyRetry(importFn) {
  return lazy(() =>
    importFn().catch(() => {
      const reloaded = sessionStorage.getItem('chunk_reload');
      if (!reloaded) {
        sessionStorage.setItem('chunk_reload', '1');
        window.location.reload();
        return new Promise(() => {});
      }
      sessionStorage.removeItem('chunk_reload');
      return importFn();
    })
  );
}

const Home = lazyRetry(() => import('./pages/Home'));
const About = lazyRetry(() => import('./pages/About'));
const Products = lazyRetry(() => import('./pages/Products'));
const ProductDetail = lazyRetry(() => import('./pages/ProductDetail'));
const Projects = lazyRetry(() => import('./pages/Projects'));
const Services = lazyRetry(() => import('./pages/Services'));
const Contact = lazyRetry(() => import('./pages/Contact'));
const Careers = lazyRetry(() => import('./pages/Careers'));
const Blog = lazyRetry(() => import('./pages/Blog'));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center mx-auto mb-4 animate-pulse">
          <span className="text-white font-syne font-bold text-xl">B</span>
        </div>
        <div className="w-32 h-1 bg-navy/10 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-orange rounded-full animate-[shimmer_1.5s_ease_infinite]" style={{ width: '40%' }} />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-right" richColors />
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<ProductDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Suspense>
      <Footer />
      <CookieModal />
    </Router>
  );
}

export default App;
