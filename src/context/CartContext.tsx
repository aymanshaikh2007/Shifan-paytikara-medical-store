import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Order, CustomerDetails } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  discount: number;
  appliedCoupon: string | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  shipping: number;
  total: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Search & Navigation Filters
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;

  // Selected Product for Details Modal
  viewingProduct: Product | null;
  setViewingProduct: (product: Product | null) => void;

  // UI Modals
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isPrescriptionModalOpen: boolean;
  setIsPrescriptionModalOpen: (open: boolean) => void;
  prescriptionForProduct: Product | null;
  openPrescriptionUpload: (product: Product) => void;
  uploadedPrescriptionName: string | null;
  setUploadedPrescriptionName: (name: string | null) => void;

  // Orders
  orders: Order[];
  createOrder: (customer: CustomerDetails) => Order;
  lastOrder: Order | null;
  setLastOrder: (order: Order | null) => void;

  // Toast Notification
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_MIN = 499;
const STANDARD_SHIPPING_FEE = 49;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('shipaf_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist persisted to localStorage
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('shipaf_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Orders history persisted to localStorage
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('shipaf_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);

  // Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPrescriptionModalOpen, setIsPrescriptionModalOpen] = useState(false);
  const [prescriptionForProduct, setPrescriptionForProduct] = useState<Product | null>(null);
  const [uploadedPrescriptionName, setUploadedPrescriptionName] = useState<string | null>(null);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('shipaf_cart', JSON.stringify(cart));
    } catch {
      // storage unavailable
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('shipaf_wishlist', JSON.stringify(wishlist));
    } catch {
      // storage unavailable
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('shipaf_orders', JSON.stringify(orders));
    } catch {
      // storage unavailable
    }
  }, [orders]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2800);
  };

  const openPrescriptionUpload = (product: Product) => {
    setPrescriptionForProduct(product);
    setIsPrescriptionModalOpen(true);
  };

  const addToCart = (product: Product, quantity = 1) => {
    if (product.requiresPrescription && !uploadedPrescriptionName) {
      openPrescriptionUpload(product);
      return;
    }

    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, prescriptionUploaded: !!uploadedPrescriptionName }];
    });

    showToast(`Added ${product.name} to cart`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast('Removed from wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Added to wishlist');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  let discount = 0;
  if (appliedCoupon === 'HEALTH10') {
    discount = Math.round(subtotal * 0.1);
  } else if (appliedCoupon === 'CARE50') {
    discount = Math.min(50, subtotal);
  }

  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_MIN ? 0 : STANDARD_SHIPPING_FEE;
  const total = Math.max(0, subtotal - discount + shipping);
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_MIN - subtotal);

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'HEALTH10') {
      setAppliedCoupon('HEALTH10');
      return { success: true, message: '10% discount applied successfully!' };
    } else if (cleanCode === 'CARE50') {
      setAppliedCoupon('CARE50');
      return { success: true, message: '₹50 discount applied successfully!' };
    }
    return { success: false, message: 'Invalid coupon code. Try HEALTH10 or CARE50.' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed');
  };

  const createOrder = (customer: CustomerDetails): Order => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newOrder: Order = {
      orderId: `SP-${new Date().getFullYear()}-${randomNum}`,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      items: [...cart],
      subtotal,
      shipping,
      discount,
      total,
      customer,
      status: 'Confirmed',
      estimatedDelivery: '2 - 3 Business Days',
    };

    setOrders((prev) => [newOrder, ...prev]);
    setLastOrder(newOrder);
    clearCart();
    return newOrder;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        discount,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        shipping,
        total,
        freeShippingThreshold: FREE_SHIPPING_MIN,
        amountNeededForFreeShipping,
        wishlist,
        toggleWishlist,
        isInWishlist,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        viewingProduct,
        setViewingProduct,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isPrescriptionModalOpen,
        setIsPrescriptionModalOpen,
        prescriptionForProduct,
        openPrescriptionUpload,
        uploadedPrescriptionName,
        setUploadedPrescriptionName,
        orders,
        createOrder,
        lastOrder,
        setLastOrder,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
