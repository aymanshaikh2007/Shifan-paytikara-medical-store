import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  User, 
  ShieldCheck, 
  Sparkles,
  PhoneCall,
  Clock,
  ArrowRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

interface NavbarProps {
  onOpenOrders: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrders }) => {
  const { 
    cartCount, 
    setIsCartOpen, 
    wishlist, 
    setIsWishlistOpen,
    searchQuery,
    setSearchQuery,
    setViewingProduct,
    setSelectedCategory
  } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleNavClick = (sectionId: string, category?: string) => {
    setMobileMenuOpen(false);
    if (category) {
      setSelectedCategory(category);
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Slim Medical Trust Header Banner */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Genuine Medical Essentials
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              Express 24–48h Dispatch Across India
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 hidden sm:inline">Support Helpline:</span>
            <a href="tel:18002007447" className="flex items-center gap-1 font-semibold text-white hover:text-sky-300 transition-colors">
              <PhoneCall className="w-3 h-3 text-sky-400" />
              1800-200-7447
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80'
            : 'bg-white border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">
            
            {/* Zone 1: Brand Wordmark */}
            <div className="flex items-center gap-3 shrink-0">
              <button 
                onClick={() => {
                  setSelectedCategory('All');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2.5 text-left group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-teal-500 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 block leading-tight">
                    Shipaf <span className="text-sky-600 font-extrabold">Paytikara</span>
                  </span>
                  <span className="text-[10px] tracking-wider uppercase text-slate-400 font-medium block">
                    Medical & Healthcare Store
                  </span>
                </div>
              </button>
            </div>

            {/* Zone 2: Navigation Links (Clean single-line prose) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
              <button
                onClick={() => handleNavClick('hero')}
                className="hover:text-sky-600 transition-colors whitespace-nowrap py-1"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('shop-products')}
                className="hover:text-sky-600 transition-colors whitespace-nowrap py-1"
              >
                Shop
              </button>
              <button
                onClick={() => handleNavClick('categories')}
                className="hover:text-sky-600 transition-colors whitespace-nowrap py-1"
              >
                Categories
              </button>
              <button
                onClick={() => handleNavClick('why-us')}
                className="hover:text-sky-600 transition-colors whitespace-nowrap py-1"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => handleNavClick('about-us')}
                className="hover:text-sky-600 transition-colors whitespace-nowrap py-1"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="hover:text-sky-600 transition-colors whitespace-nowrap py-1"
              >
                Contact
              </button>
            </nav>

            {/* Zone 3: Actions & Quick Utilities */}
            <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
              
              {/* Search Toggle Button */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search catalog"
                className={`p-2.5 rounded-lg text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-colors relative ${
                  searchOpen ? 'bg-sky-50 text-sky-600' : ''
                }`}
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                aria-label="Wishlist"
                className="p-2.5 rounded-lg text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-colors relative"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Shopping Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                aria-label="Shopping Cart"
                className="flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 transition-colors border border-sky-100 relative"
              >
                <ShoppingBag className="w-5 h-5 text-sky-600" />
                <span className="hidden sm:inline text-xs font-semibold">Cart</span>
                {cartCount > 0 && (
                  <span className="w-5 h-5 bg-sky-600 text-white text-xs font-bold rounded-full flex items-center justify-center tabular-nums">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Orders / Profile Button */}
              <button
                onClick={onOpenOrders}
                aria-label="User Account and Orders"
                className="p-2.5 rounded-lg text-slate-600 hover:text-sky-600 hover:bg-slate-100 transition-colors"
                title="Account & Orders"
              >
                <User className="w-5 h-5" />
              </button>

              {/* Primary CTA: "Shop Now" */}
              <button
                onClick={() => handleNavClick('shop-products')}
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </div>
          </div>
        </div>

        {/* Expandable Search Drawer Overlay */}
        {searchOpen && (
          <div className="border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 py-4 shadow-md transition-all animate-in fade-in slide-in-from-top-2">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products by name, brand, or illness (e.g. 'Thermometer', 'Masks', 'BP Monitor')..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-11 pr-24 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all text-slate-900"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600 px-2 py-1"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Real-time search quick matches */}
              {searchQuery.trim() && (
                <div className="mt-3 bg-white border border-slate-100 rounded-xl p-2 shadow-xs max-h-72 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    <div>
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                        Matching Healthcare Products ({searchResults.length})
                      </div>
                      {searchResults.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => {
                            setViewingProduct(item);
                            setSearchOpen(false);
                          }}
                          className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-md bg-slate-100 border border-slate-200/60"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-slate-900 truncate">{item.name}</h4>
                            <p className="text-xs text-slate-500 truncate">{item.category} · {item.manufacturer}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-bold text-sky-700 tabular-nums">₹{item.price.toLocaleString('en-IN')}</span>
                            {item.requiresPrescription && (
                              <span className="block text-[10px] text-amber-600 font-medium">Rx Req</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-6 text-center text-sm text-slate-500">
                      No matching medical products found for "{searchQuery}".
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-1">
            <button
              onClick={() => handleNavClick('hero')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-600"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('shop-products')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-600"
            >
              Shop All Products
            </button>
            <button
              onClick={() => handleNavClick('categories')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-600"
            >
              Categories
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-600"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('about-us')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-600"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-600"
            >
              Contact & FAQ
            </button>
            
            <div className="pt-3 border-t border-slate-100 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="flex-1 py-2.5 text-center text-xs font-semibold text-sky-800 bg-sky-50 rounded-lg border border-sky-200"
              >
                View Cart ({cartCount})
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('shop-products');
                }}
                className="flex-1 py-2.5 text-center text-xs font-semibold text-white bg-sky-600 rounded-lg"
              >
                Shop Now
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
