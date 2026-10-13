import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, HeartPulse, Truck, Award, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Hero: React.FC = () => {
  const { setSelectedCategory } = useCart();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const scrollTo = (id: string, category?: string) => {
    if (category) {
      setSelectedCategory(category);
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-slate-50 to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100"
    >
      {/* Subtle organic light-blue backdrop blurs */}
      <div 
        aria-hidden="true" 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-tr from-sky-200/40 via-teal-100/30 to-blue-200/20 blur-3xl rounded-full pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100/30 blur-2xl rounded-full pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Clean editorial label (no pill enclosure) */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-sky-800 uppercase">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span>Certified Healthcare Essentials</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span>Express Indian Delivery</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] text-balance">
              Your Health, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-teal-600 to-sky-700">Our Priority.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover quality healthcare essentials and medical products, delivered with care and convenience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollTo('shop-products')}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Shop Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('categories')}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl shadow-xs transition-all flex items-center justify-center cursor-pointer"
              >
                <span>Explore Categories</span>
              </button>
            </div>

            {/* Quiet Quality Indicators */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                100% Genuine Certified
              </span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Pharmacist Verified
              </span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Hygienic Tamper-Sealed Packaging
              </span>
            </div>

          </div>

          {/* Right Column: 3D Product Visual Composition with Depth & Interactive Tilt */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div 
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative w-full max-w-lg lg:max-w-none group rounded-2xl p-2 bg-gradient-to-b from-white/90 to-sky-50/50 shadow-xl border border-white/60"
            >
              
              {/* Main 3D Composition Image */}
              <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-16/10">
                <img
                  src="/src/assets/images/hero_medical_3d_composition_1791920471370.jpg"
                  alt="3D arrangement of medical essentials including blood pressure monitor, digital thermometer, and healthcare kit"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Subtle light sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/10 pointer-events-none" />
              </div>

              {/* Floating 3D Badge 1: Blood Pressure & Vitals Card */}
              <div 
                style={{
                  transform: `translate3d(${-mousePos.x * 12}px, ${-mousePos.y * 12}px, 20px)`,
                  transition: 'transform 0.2s ease-out'
                }}
                className="absolute -top-4 -left-4 sm:top-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg rounded-xl p-3 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Digital Diagnostics</div>
                  <div className="text-[11px] text-slate-500">Clinically Validated Accuracy</div>
                </div>
              </div>

              {/* Floating 3D Badge 2: Certified Express Delivery */}
              <div 
                style={{
                  transform: `translate3d(${mousePos.x * 14}px, ${mousePos.y * 14}px, 25px)`,
                  transition: 'transform 0.2s ease-out'
                }}
                className="absolute -bottom-5 right-2 sm:bottom-4 sm:-right-4 bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg rounded-xl p-3 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Express Delivery</div>
                  <div className="text-[11px] text-slate-500">Carefully Temperature Managed</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width 4-metric trust bar below the hero split */}
        <div className="mt-14 pt-8 border-t border-slate-200/70 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-800">
          <div className="p-4 rounded-xl bg-white/80 border border-slate-200/60 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-700 tabular-nums">25,000+</div>
            <div className="text-xs font-medium text-slate-600 mt-0.5">Verified Patient Orders</div>
          </div>
          <div className="p-4 rounded-xl bg-white/80 border border-slate-200/60 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-700 tabular-nums">100%</div>
            <div className="text-xs font-medium text-slate-600 mt-0.5">Genuine Healthcare Stock</div>
          </div>
          <div className="p-4 rounded-xl bg-white/80 border border-slate-200/60 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-700 tabular-nums">4.9 / 5.0</div>
            <div className="text-xs font-medium text-slate-600 mt-0.5">Customer Trust Score</div>
          </div>
          <div className="p-4 rounded-xl bg-white/80 border border-slate-200/60 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-700 tabular-nums">24 - 48h</div>
            <div className="text-xs font-medium text-slate-600 mt-0.5">Doorstep Delivery Speed</div>
          </div>
        </div>

      </div>
    </section>
  );
};
