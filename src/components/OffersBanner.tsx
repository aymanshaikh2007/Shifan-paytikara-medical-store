import React from 'react';
import { ArrowRight, Sparkles, HeartHandshake } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const OffersBanner: React.FC = () => {
  const { setSelectedCategory } = useCart();

  const handleExploreOffers = () => {
    setSelectedCategory('Healthcare Essentials');
    const elem = document.getElementById('shop-products');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-18 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-600 via-sky-700 to-teal-700 p-8 sm:p-12 lg:p-16 text-white shadow-xl">
          
          {/* Subtle geometric circles in background */}
          <div 
            aria-hidden="true" 
            className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" 
          />
          <div 
            aria-hidden="true" 
            className="absolute left-1/3 -bottom-24 w-72 h-72 rounded-full bg-teal-400/15 blur-xl pointer-events-none" 
          />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-200 mb-3">
              <HeartHandshake className="w-4 h-4" />
              <span>Special Healthcare Curation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              Take Better Care of Yourself.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-sky-100 font-normal leading-relaxed">
              Explore our healthcare essentials and find the products that fit your needs, from daily wellness vitamins to essential medical diagnostic monitors.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={handleExploreOffers}
                className="px-7 py-3.5 bg-white text-sky-900 hover:bg-sky-50 text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Explore Offers</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-teal-100/90 font-medium">
                Use code <span className="underline font-bold text-white">HEALTH10</span> for 10% off your first order!
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
