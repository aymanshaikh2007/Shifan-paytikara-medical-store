import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Ramesh Sharma',
      role: 'Consulting Physician',
      location: 'New Delhi',
      comment: 'The digital BP monitor and pulse oximeter ordered for home care monitoring showed excellent calibration accuracy when checked against our clinical equipment.',
      rating: 5,
      product: 'Digital Blood Pressure Monitor',
      verified: true,
    },
    {
      id: 2,
      name: 'Priya Kulkarni',
      role: 'Verified Patient',
      location: 'Pune',
      comment: 'Delivery arrived within 36 hours in sturdy tamper-proof packaging. The first-aid kit is remarkably well-organized with hospital-grade sterile dressings.',
      rating: 5,
      product: 'Emergency First Aid Kit',
      verified: true,
    },
    {
      id: 3,
      name: 'Arun Varma',
      role: 'Family Caregiver',
      location: 'Bengaluru',
      comment: 'Uploading my father’s prescription was simple, and the pharmacist confirmation gave our family genuine peace of mind. Excellent and respectful service.',
      rating: 5,
      product: 'Prescription Dispensing Service',
      verified: true,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
              <span>Patient & Caregiver Feedback</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-400 font-normal">[Development Demo Reviews]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              What Our Customers Say
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Real-world feedback on delivery speed, device accuracy, and customer care.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="p-2.5 rounded-lg border border-slate-200 text-slate-600 hover:text-sky-600 hover:border-sky-300 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="p-2.5 rounded-lg border border-slate-200 text-slate-600 hover:text-sky-600 hover:border-sky-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                idx === activeIndex
                  ? 'bg-sky-50/40 border-sky-300 shadow-sm ring-1 ring-sky-300/40'
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                    <p className="text-xs text-slate-500">{item.role} · {item.location}</p>
                  </div>
                  {item.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Verified
                    </span>
                  )}
                </div>
                <div className="mt-2 text-[11px] text-sky-800 font-medium">
                  Purchased: {item.product}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Development Disclosure */}
        <div className="mt-8 text-center text-xs text-slate-400">
          * Note: Feedback items are clearly labelled demo samples pending formal post-purchase consent.
        </div>

      </div>
    </section>
  );
};
