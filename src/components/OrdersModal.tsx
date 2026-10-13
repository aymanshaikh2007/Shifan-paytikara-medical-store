import React from 'react';
import { X, PackageCheck, Clock, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface OrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrdersModal: React.FC<OrdersModalProps> = ({ isOpen, onClose }) => {
  const { orders } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50 shrink-0">
          <div className="flex items-center gap-2">
            <PackageCheck className="w-5 h-5 text-sky-600" />
            <h2 className="text-base font-bold text-slate-900">Your Medical Orders & History</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          {orders.length === 0 ? (
            <div className="py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                <PackageCheck className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">No Orders Yet</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                Once you place an order for healthcare supplies, you can track delivery and view receipts here.
              </p>
            </div>
          ) : (
            orders.map((order) => (
              <div
                key={order.orderId}
                className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200/80 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-xs font-bold text-slate-900">{order.orderId}</span>
                    <span className="text-[11px] text-slate-500 block">{order.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      {order.status}
                    </span>
                    <span className="text-sm font-bold text-sky-700 tabular-nums">
                      ₹{order.total.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-1.5">
                  {order.items.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-xs text-slate-700">
                      <span className="truncate max-w-xs sm:max-w-md">
                        {item.product.name} <span className="text-slate-400 font-normal">(&times;{item.quantity})</span>
                      </span>
                      <span className="font-semibold tabular-nums shrink-0">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer notes */}
                <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    Delivery to: {order.customer.city} ({order.customer.pincode})
                  </span>
                  <span className="text-teal-700 font-medium">
                    Estimated: {order.estimatedDelivery}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
