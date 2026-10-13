import React, { useState } from 'react';
import { Heart, Plus, Minus, Check, AlertCircle, Eye, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { 
    cart, 
    addToCart, 
    updateQuantity, 
    toggleWishlist, 
    isInWishlist, 
    setViewingProduct 
  } = useCart();

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);

  const cartItem = cart.find((item) => item.product.id === product.id);
  const wishlisted = isInWishlist(product.id);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: 'transform 0.15s ease-out, box-shadow 0.2s ease',
      }}
      className="group relative bg-white rounded-2xl border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Top Image & Badge Area */}
      <div>
        <div className="relative aspect-4/3 bg-slate-100 overflow-hidden cursor-pointer" onClick={() => setViewingProduct(product)}>
          {!imageError ? (
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-tr from-sky-50 to-slate-100 text-sky-800">
              <span className="text-xs font-semibold">{product.category}</span>
              <span className="text-sm font-bold text-center mt-1">{product.name}</span>
            </div>
          )}

          {/* Discount Badge */}
          {product.discountPercentage > 0 && (
            <div className="absolute top-3 left-3 bg-teal-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-md shadow-xs">
              {product.discountPercentage}% OFF
            </div>
          )}

          {/* Prescription Warning Label */}
          {product.requiresPrescription && (
            <div className="absolute bottom-3 left-3 bg-amber-500/95 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
              <AlertCircle className="w-3 h-3" />
              Prescription Required
            </div>
          )}

          {/* Quick View Button on Hover */}
          <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setViewingProduct(product);
              }}
              className="px-3.5 py-1.5 bg-white/95 backdrop-blur-xs text-slate-800 text-xs font-semibold rounded-lg shadow-md hover:bg-white hover:text-sky-600 flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all"
            >
              <Eye className="w-3.5 h-3.5" />
              Quick View
            </button>
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors ${
              wishlisted
                ? 'bg-rose-50 text-rose-600 shadow-xs'
                : 'bg-white/80 text-slate-400 hover:text-rose-500 hover:bg-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${wishlisted ? 'fill-rose-500' : ''}`} />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-5">
          {/* Category & Rating: Unboxed clean metadata with · separator */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <span className="font-medium text-sky-700">{product.category}</span>
            <div className="flex items-center gap-1 text-slate-700 font-semibold">
              <span className="text-amber-500">★</span>
              <span className="tabular-nums">{product.rating}</span>
              <span className="text-slate-400 font-normal">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => setViewingProduct(product)}
            className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors cursor-pointer line-clamp-1"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {product.subtitle || product.description}
          </p>

          {/* Pricing Row */}
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-slate-900 tabular-nums">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-slate-400 line-through tabular-nums">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-4 sm:p-5 pt-0">
        {cartItem ? (
          <div className="flex items-center justify-between bg-sky-50 border border-sky-200 rounded-xl p-1">
            <button
              onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
              className="p-1.5 rounded-lg text-sky-700 hover:bg-sky-100 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-sky-900 tabular-nums px-2">
              {cartItem.quantity} in Cart
            </span>
            <button
              onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
              className="p-1.5 rounded-lg text-sky-700 hover:bg-sky-100 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="w-full py-2.5 px-4 bg-slate-900 hover:bg-sky-600 text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.98]"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        )}
      </div>
    </div>
  );
};
