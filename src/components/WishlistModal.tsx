import React from 'react';
import { X, Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const WishlistModal: React.FC = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    toggleWishlist,
    addToCart,
    setViewingProduct
  } = useCart();

  if (!isWishlistOpen) return null;

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <h2 className="text-base font-bold text-slate-900">Your Wishlist</h2>
              <span className="text-xs text-slate-500 font-semibold tabular-nums">
                ({wishlistedProducts.length} items)
              </span>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {wishlistedProducts.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Your wishlist is empty</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                  Click the heart icon on any medical equipment, diagnostic tool, or essentials to save them for later.
                </p>
              </div>
            ) : (
              wishlistedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-3.5 pb-4 border-b border-slate-100 items-center justify-between"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-xl bg-slate-100 border border-slate-200/80 shrink-0 cursor-pointer"
                    onClick={() => {
                      setViewingProduct(product);
                      setIsWishlistOpen(false);
                    }}
                  />
                  <div className="flex-1 min-w-0 px-2">
                    <h4 
                      onClick={() => {
                        setViewingProduct(product);
                        setIsWishlistOpen(false);
                      }}
                      className="text-xs font-bold text-slate-900 line-clamp-1 cursor-pointer hover:text-sky-600"
                    >
                      {product.name}
                    </h4>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {product.category}
                    </div>
                    <div className="text-xs font-bold text-slate-900 mt-1 tabular-nums">
                      ₹{product.price.toLocaleString('en-IN')}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 shrink-0">
                    <button
                      onClick={() => {
                        addToCart(product);
                      }}
                      className="px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white text-[11px] font-semibold rounded-lg flex items-center gap-1 shadow-2xs"
                    >
                      <ShoppingCart className="w-3 h-3" />
                      Add
                    </button>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="text-[11px] text-slate-400 hover:text-rose-500 text-center py-0.5"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-slate-200 bg-slate-50/50">
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="w-full py-3 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors"
            >
              Continue Browsing
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
