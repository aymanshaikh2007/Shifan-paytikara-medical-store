import React, { useState, useMemo } from 'react';
import { ArrowUpDown, Filter, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useCart } from '../context/CartContext';
import { ProductCategory } from '../types';

export const FeaturedProducts: React.FC = () => {
  const { selectedCategory, setSelectedCategory, searchQuery } = useCart();
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [showAllLimit, setShowAllLimit] = useState(8);

  const categoriesList = [
    'All',
    'Medical Equipment',
    'First Aid',
    'Healthcare Essentials',
    'Medicines',
    'Vitamins and Supplements',
    'Personal Care',
  ];

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by selected category
    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        // default order
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const visibleProducts = filteredProducts.slice(0, showAllLimit);

  return (
    <section id="shop-products" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
              Verified Healthcare Inventory
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Featured Healthcare Products
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Certified medical diagnostics, emergency first aid, and patient care essentials.
            </p>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5" />
              Sort by:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-sky-500 cursor-pointer"
            >
              <option value="featured">Featured Essentials</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Filter Segmented Controls (Allowing functional filtering per Design Constitution) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAllLimit(8);
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Active Filter Summary if searching */}
        {searchQuery.trim() && (
          <div className="mb-6 flex items-center justify-between bg-sky-50 border border-sky-100 rounded-xl px-4 py-2.5 text-xs">
            <span className="text-sky-900">
              Showing search results for <strong className="font-bold">"{searchQuery}"</strong> ({filteredProducts.length} items)
            </span>
            <button
              onClick={() => {
                // reset search
                const input = document.querySelector('input') as HTMLInputElement | null;
                if (input) input.value = '';
              }}
              className="text-sky-700 hover:underline font-semibold"
            >
              Show all products
            </button>
          </div>
        )}

        {/* Responsive Grid: 4 products per row on large screens */}
        {visibleProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-slate-50 rounded-2xl border border-slate-200/80">
            <p className="text-base font-semibold text-slate-800">No medical products found</p>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We couldn't find any healthcare products matching your selected criteria. Try resetting filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 bg-sky-600 text-white text-xs font-semibold rounded-lg hover:bg-sky-700 transition-colors"
            >
              Reset Category Filter
            </button>
          </div>
        )}

        {/* "View All Products" Button if limited */}
        {filteredProducts.length > showAllLimit && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllLimit(PRODUCTS.length)}
              className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xs transition-all cursor-pointer"
            >
              View All Products ({filteredProducts.length})
            </button>
          </div>
        )}

        {showAllLimit > 8 && filteredProducts.length > 8 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllLimit(8)}
              className="px-6 py-2.5 text-xs text-slate-600 hover:text-slate-900 font-semibold"
            >
              Show Less
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
