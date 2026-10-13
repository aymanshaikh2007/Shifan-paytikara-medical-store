/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OffersBanner } from './components/OffersBanner';
import { AboutUs } from './components/AboutUs';
import { Testimonials } from './components/Testimonials';
import { ContactAndFaq } from './components/ContactAndFaq';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { PrescriptionModal } from './components/PrescriptionModal';
import { WishlistModal } from './components/WishlistModal';
import { OrdersModal } from './components/OrdersModal';
import { PolicyModal, PolicyType } from './components/PolicyModal';
import { CheckCircle2 } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { toastMessage } = useCart();
  const [activePolicy, setActivePolicy] = useState<PolicyType | null>(null);
  const [isOrdersModalOpen, setIsOrdersModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-semibold border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <Navbar onOpenOrders={() => setIsOrdersModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <WhyChooseUs />
        <OffersBanner />
        <AboutUs />
        <Testimonials />
        <ContactAndFaq />
      </main>

      {/* Footer */}
      <Footer 
        onOpenPolicy={(policy) => setActivePolicy(policy)} 
        onOpenOrders={() => setIsOrdersModalOpen(true)}
      />

      {/* Interactive Drawers & Modals */}
      <CartDrawer />
      <CheckoutModal />
      <ProductDetailModal />
      <PrescriptionModal />
      <WishlistModal />
      <OrdersModal 
        isOpen={isOrdersModalOpen} 
        onClose={() => setIsOrdersModalOpen(false)} 
      />
      <PolicyModal 
        policy={activePolicy} 
        onClose={() => setActivePolicy(null)} 
      />

    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainLayout />
    </CartProvider>
  );
}
