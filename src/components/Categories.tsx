import React from 'react';
import { 
  Pill, 
  Activity, 
  ShieldAlert, 
  HeartPulse, 
  Sparkles, 
  Leaf, 
  ArrowRight,
  FileCheck
} from 'lucide-react';
import { CATEGORIES_DATA } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCategory } from '../types';

export const Categories: React.FC = () => {
  const { setSelectedCategory } = useCart();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill':
        return <Pill className="w-6 h-6 text-sky-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-teal-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-rose-500" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-sky-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-emerald-600" />;
      default:
        return <HeartPulse className="w-6 h-6 text-sky-600" />;
    }
  };

  const handleSelect = (categoryName: ProductCategory) => {
    setSelectedCategory(categoryName);
    const shopElem = document.getElementById('shop-products');
    if (shopElem) {
      shopElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Carefully Curated Health Catalog
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 text-balance">
            Shop by Category
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Find clinically tested home monitoring tools, first-aid gear, and daily wellness supplies.
          </p>
        </div>

        {/* Categories Grid (6 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.name}
              onClick={() => handleSelect(cat.name)}
              className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-sky-300 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-sky-50 flex items-center justify-center transition-colors border border-slate-100">
                    {getIcon(cat.iconName)}
                  </div>

                  {cat.name === 'Medicines' && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                      <FileCheck className="w-3 h-3 text-sky-600" />
                      Rx Required for Scheduled Drugs
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-500 tabular-nums">
                  {cat.itemCount}+ Products Available
                </span>
                <span className="flex items-center gap-1 text-sky-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Browse Items
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Regulatory Prescription Disclaimer Notice */}
        <div className="mt-8 bg-sky-50/60 border border-sky-100 rounded-xl p-4 text-xs text-sky-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-2">
            <span className="font-bold text-sky-800">Important Medical Compliance Notice:</span>
            <span>All prescription medications require verification by a registered pharmacist before order dispatch.</span>
          </div>
          <span className="text-[11px] text-sky-700 font-semibold underline underline-offset-2 shrink-0">
            Pharmacy Dispensing Guidelines &rsaquo;
          </span>
        </div>

      </div>
    </section>
  );
};
