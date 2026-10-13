import React from 'react';
import { ShieldCheck, ShoppingCart, Lock, Truck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Quality Products',
      description: 'Healthcare essentials selected with care and verified by clinical standards.',
      badge: 'Certified',
    },
    {
      icon: ShoppingCart,
      title: 'Convenient Shopping',
      description: 'Easily find the products you need with streamlined search and categorized browsing.',
      badge: 'Simple UX',
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description: 'Safe and reliable payment processing with encrypted gateways and Cash on Delivery option.',
      badge: '256-Bit SSL',
    },
    {
      icon: Truck,
      title: 'Reliable Delivery',
      description: 'Convenient delivery with clear order tracking and careful hygienic packaging.',
      badge: 'Fast Dispatch',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Our Standard of Care
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 text-balance">
            Healthcare You Can Trust
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Dedicated to safety, genuine sourcing, and patient convenience at every touchpoint.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Shipaf Standard</span>
                  <span className="text-teal-700 font-semibold">{item.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
