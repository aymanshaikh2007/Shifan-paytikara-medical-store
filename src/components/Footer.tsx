import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ArrowUp,
  Instagram,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';
import { PolicyType } from './PolicyModal';
import { useCart } from '../context/CartContext';

interface FooterProps {
  onOpenPolicy: (policy: PolicyType) => void;
  onOpenOrders: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy, onOpenOrders }) => {
  const { setSelectedCategory } = useCart();

  const scrollTo = (id: string, category?: string) => {
    if (category) {
      setSelectedCategory(category);
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Shipaf <span className="text-sky-400">Paytikara</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dedicated to delivering certified healthcare essentials, diagnostic monitors, trauma dressings, and prescription medicines with uncompromising clinical integrity and care.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Helpline: <strong>1800-200-7447</strong> (Toll Free)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>support@shipafpaytikara.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>New Delhi 110025, India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="#footer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-sky-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#footer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-sky-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#footer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-sky-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#footer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-sky-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('shop-products')} className="hover:text-white transition-colors">
                  Shop All Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('categories')} className="hover:text-white transition-colors">
                  Product Categories
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('why-us')} className="hover:text-white transition-colors">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about-us')} className="hover:text-white transition-colors">
                  About Shipaf
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">
                  Contact & Support
                </button>
              </li>
              <li>
                <button onClick={onOpenOrders} className="hover:text-white transition-colors">
                  Track Your Orders
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Shop Categories */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Shop Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo('shop-products', 'Medicines')} className="hover:text-white transition-colors">
                  Medicines (Rx)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('shop-products', 'Medical Equipment')} className="hover:text-white transition-colors">
                  Medical Equipment
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('shop-products', 'First Aid')} className="hover:text-white transition-colors">
                  First Aid Kits
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('shop-products', 'Healthcare Essentials')} className="hover:text-white transition-colors">
                  Healthcare Essentials
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('shop-products', 'Personal Care')} className="hover:text-white transition-colors">
                  Personal Care
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('shop-products', 'Vitamins and Supplements')} className="hover:text-white transition-colors">
                  Vitamins & Supplements
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Customer Policies */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Customer Support & Policy
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => onOpenPolicy('privacy')} className="hover:text-white transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('terms')} className="hover:text-white transition-colors text-left">
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('shipping')} className="hover:text-white transition-colors text-left">
                  Shipping Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('returns')} className="hover:text-white transition-colors text-left">
                  Return and Refund Policy
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors text-left">
                  FAQ & Inquiries
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p className="text-center md:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} <strong>Shipaf Paytikara</strong>. All rights reserved. 
            <span className="block text-slate-500 mt-0.5">
              Statutory Disclaimer: Information provided is for educational reference and does not substitute professional medical advice. Always consult a physician.
            </span>
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 shrink-0 border border-slate-800"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-xs font-medium">Back to Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
