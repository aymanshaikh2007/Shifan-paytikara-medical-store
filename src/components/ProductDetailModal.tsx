import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  ShoppingCart, 
  Plus, 
  Minus, 
  ShieldCheck, 
  AlertCircle, 
  Check, 
  FileCheck,
  Building,
  RotateCcw
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductDetailModal: React.FC = () => {
  const { 
    viewingProduct, 
    setViewingProduct, 
    addToCart, 
    isInWishlist, 
    toggleWishlist,
    openPrescriptionUpload 
  } = useCart();

  const [quantity, setQuantity] = useState(1);

  if (!viewingProduct) return null;

  const wishlisted = isInWishlist(viewingProduct.id);

  const handleAddToCart = () => {
    addToCart(viewingProduct, quantity);
    setViewingProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50 shrink-0">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-800">
            <span>{viewingProduct.category}</span>
            <span className="text-slate-300">·</span>
            <span>Ref: {viewingProduct.id}</span>
          </div>
          <button
            onClick={() => setViewingProduct(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Image Column (5 Cols) */}
            <div className="md:col-span-5 space-y-3">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-square border border-slate-200">
                <img
                  src={viewingProduct.image}
                  alt={viewingProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                {viewingProduct.discountPercentage > 0 && (
                  <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-bold px-2 py-0.5 rounded-md shadow-xs">
                    {viewingProduct.discountPercentage}% OFF
                  </span>
                )}
              </div>

              {/* Manufacturer */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 text-xs text-slate-600 flex items-center gap-2">
                <Building className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="truncate">
                  Mfg: <strong className="font-semibold text-slate-800">{viewingProduct.manufacturer}</strong>
                </span>
              </div>
            </div>

            {/* Right Purchase & Info Column (7 Cols) */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-medium text-emerald-700 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    In Stock & Verified Genuine
                  </span>
                  <div className="flex items-center gap-1 text-slate-700 font-semibold">
                    <span className="text-amber-500">★</span>
                    <span className="tabular-nums">{viewingProduct.rating}</span>
                    <span className="text-slate-400 font-normal">({viewingProduct.reviewCount} reviews)</span>
                  </div>
                </div>

                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {viewingProduct.name}
                </h1>
                
                {viewingProduct.subtitle && (
                  <p className="text-xs text-slate-500 mt-1">
                    {viewingProduct.subtitle}
                  </p>
                )}
              </div>

              {/* Price Banner */}
              <div className="p-4 bg-sky-50/60 rounded-xl border border-sky-100 flex items-baseline gap-3">
                <span className="text-2xl font-extrabold text-slate-900 tabular-nums">
                  ₹{viewingProduct.price.toLocaleString('en-IN')}
                </span>
                {viewingProduct.originalPrice > viewingProduct.price && (
                  <span className="text-sm text-slate-400 line-through tabular-nums">
                    ₹{viewingProduct.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs text-teal-700 font-semibold ml-auto">
                  Inclusive of all taxes
                </span>
              </div>

              {/* Prescription Warning if applicable */}
              {viewingProduct.requiresPrescription && (
                <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Prescription Required (Schedule H Drug):</strong>
                    <p className="text-[11px] text-amber-800 mt-0.5">
                      You must provide a valid doctor prescription. Our licensed pharmacist will review before dispensing.
                    </p>
                    <button
                      onClick={() => openPrescriptionUpload(viewingProduct)}
                      className="mt-2 text-xs font-semibold text-amber-900 underline hover:text-amber-950"
                    >
                      Click here to upload prescription &rarr;
                    </button>
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed">
                {viewingProduct.description}
              </p>

              {/* Key Highlights */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Key Healthcare Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {viewingProduct.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity Stepper & Add to Cart Module */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-slate-600 hover:text-sky-600 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-3 text-xs font-bold text-slate-900 tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-slate-600 hover:text-sky-600 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 min-w-[160px] py-3 px-5 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart (₹{(viewingProduct.price * quantity).toLocaleString('en-IN')})</span>
                </button>

                <button
                  onClick={() => toggleWishlist(viewingProduct.id)}
                  aria-label="Wishlist"
                  className={`p-3 rounded-xl border transition-colors ${
                    wishlisted
                      ? 'bg-rose-50 border-rose-200 text-rose-600'
                      : 'border-slate-200 text-slate-500 hover:text-rose-500 hover:bg-slate-50'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${wishlisted ? 'fill-rose-500' : ''}`} />
                </button>
              </div>

            </div>

          </div>

          {/* Technical Specifications Table */}
          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-sm font-bold text-slate-900 mb-3">Product Specifications & Parameters</h3>
            <div className="bg-slate-50 rounded-xl border border-slate-200/80 divide-y divide-slate-200/80 text-xs">
              {Object.entries(viewingProduct.specs).map(([label, val]) => (
                <div key={label} className="grid grid-cols-3 sm:grid-cols-4 p-3">
                  <span className="font-semibold text-slate-700">{label}</span>
                  <span className="col-span-2 sm:col-span-3 text-slate-600">{val}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
