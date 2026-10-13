import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, ArrowLeft, CreditCard, QrCode, Banknote, Printer, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import { CustomerDetails, Order } from '../types';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    subtotal,
    discount,
    shipping,
    total,
    createOrder,
    uploadedPrescriptionName
  } = useCart();

  const [step, setStep] = useState<'info' | 'payment' | 'confirmed'>('info');
  const [createdOrder, setCreatedOrder] = useState<Order | null>(null);

  // Form State
  const [formData, setFormData] = useState<CustomerDetails>({
    fullName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110025',
    paymentMethod: 'upi',
    prescriptionFile: uploadedPrescriptionName,
  });

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.addressLine1 || !formData.pincode) {
      return;
    }
    setStep('payment');
  };

  const handleCompleteOrder = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      const order = createOrder(formData);
      setCreatedOrder(order);
      setStep('confirmed');

      // Trigger Confetti!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0284c7', '#0d9488', '#38bdf8', '#10b981'],
        });
      } catch {
        // confetti fallback
      }
    }, 1200);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep('info');
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              {step === 'confirmed' ? 'Order Confirmed!' : 'Secure Healthcare Checkout'}
            </h2>
            <p className="text-xs text-slate-500">
              {step === 'info' && 'Step 1 of 2: Shipping & Patient Information'}
              {step === 'payment' && 'Step 2 of 2: Payment Gateway Selection'}
              {step === 'confirmed' && 'Your medical supplies are being prepared for dispatch'}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          
          {/* STEP 1: Shipping Information */}
          {step === 'info' && (
            <form onSubmit={handleNextToPayment} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Recipient / Patient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ananya Deshmukh"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:bg-white text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:bg-white text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address (for invoice & delivery notifications) *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. ananya@example.com"
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:bg-white text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Delivery Address *
                </label>
                <input
                  type="text"
                  required
                  value={formData.addressLine1}
                  onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                  placeholder="House/Flat No., Apartment, Street Name"
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:bg-white text-slate-900"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    placeholder="6-digit PIN"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900"
                  />
                </div>
              </div>

              {/* Order Brief Summary */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 mt-4 text-xs space-y-1">
                <div className="flex justify-between text-slate-600">
                  <span>Cart Items ({cart.reduce((a, b) => a + b.quantity, 0)})</span>
                  <span className="font-semibold text-slate-900">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between font-bold text-slate-900 pt-1.5 border-t border-slate-200">
                  <span>Total Amount Payable</span>
                  <span className="text-sm text-sky-700">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-xl flex items-center gap-2 cursor-pointer transition-all shadow-xs"
                >
                  <span>Continue to Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Payment Gateway Selection */}
          {step === 'payment' && (
            <div className="space-y-5">
              
              {/* Payment Methods Options */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-slate-700">
                  Select Payment Option:
                </label>

                {/* Option 1: Instant UPI */}
                <div
                  onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    formData.paymentMethod === 'upi'
                      ? 'border-sky-500 bg-sky-50/60 ring-1 ring-sky-500'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center">
                      <QrCode className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Instant UPI Payment</div>
                      <div className="text-[11px] text-slate-500">Google Pay, PhonePe, Paytm, BHIM</div>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={() => {}}
                    className="text-sky-600"
                  />
                </div>

                {/* Option 2: Razorpay / Cards / Net Banking */}
                <div
                  onClick={() => setFormData({ ...formData, paymentMethod: 'razorpay' })}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    formData.paymentMethod === 'razorpay'
                      ? 'border-sky-500 bg-sky-50/60 ring-1 ring-sky-500'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Razorpay Secure Gateway</div>
                      <div className="text-[11px] text-slate-500">Credit / Debit Cards, Net Banking & Wallets</div>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    checked={formData.paymentMethod === 'razorpay'}
                    onChange={() => {}}
                    className="text-sky-600"
                  />
                </div>

                {/* Option 3: Cash on Delivery (COD) */}
                <div
                  onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    formData.paymentMethod === 'cod'
                      ? 'border-sky-500 bg-sky-50/60 ring-1 ring-sky-500'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                      <Banknote className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Cash on Delivery (COD)</div>
                      <div className="text-[11px] text-slate-500">Pay cash upon verified doorstep delivery</div>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={() => {}}
                    className="text-sky-600"
                  />
                </div>
              </div>

              {/* Demo Mode Notice */}
              <div className="p-3.5 bg-sky-50 rounded-xl border border-sky-200 text-[11px] text-sky-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">Demo Sandbox Transaction:</strong> In this showcase environment, completing this step simulates a secure live gateway transaction without charging real bank accounts. In production, Razorpay API keys are verified via server endpoint.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep('info')}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Shipping</span>
                </button>

                <button
                  type="button"
                  onClick={handleCompleteOrder}
                  disabled={isProcessingPayment}
                  className="px-7 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer transition-all shadow-md disabled:opacity-50"
                >
                  {isProcessingPayment ? (
                    <span>Securing Payment & Dispatch...</span>
                  ) : (
                    <>
                      <span>Pay ₹{total.toLocaleString('en-IN')} & Place Order</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </div>
          )}

          {/* STEP 3: Order Confirmed & Printable Invoice */}
          {step === 'confirmed' && createdOrder && (
            <div className="space-y-6 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-emerald-950">
                    Thank You, {createdOrder.customer.fullName}!
                  </h3>
                  <p className="text-xs text-emerald-800 mt-0.5">
                    Your order <strong className="font-mono text-emerald-950 font-bold">{createdOrder.orderId}</strong> has been logged and confirmed by our pharmacy desk.
                  </p>
                </div>
              </div>

              {/* Order Invoice Summary */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 text-xs space-y-3">
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="font-bold text-slate-900">Order ID: {createdOrder.orderId}</span>
                  <span className="text-slate-500 font-medium">{createdOrder.date}</span>
                </div>

                <div>
                  <span className="font-semibold text-slate-700 block mb-1">Ordered Items:</span>
                  <div className="space-y-1.5">
                    {createdOrder.items.map((item) => (
                      <div key={item.product.id} className="flex justify-between text-slate-600">
                        <span>
                          {item.product.name} &times; {item.quantity}
                        </span>
                        <span className="font-semibold text-slate-800 tabular-nums">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-2 space-y-1">
                  <div className="flex justify-between text-slate-600">
                    <span>Payment Mode:</span>
                    <span className="font-semibold uppercase text-slate-800">{createdOrder.customer.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Delivery Address:</span>
                    <span className="text-right text-slate-800 max-w-xs truncate">
                      {createdOrder.customer.addressLine1}, {createdOrder.customer.city} ({createdOrder.customer.pincode})
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Estimated Arrival:</span>
                    <span className="font-semibold text-teal-700">{createdOrder.estimatedDelivery}</span>
                  </div>
                  <div className="flex justify-between font-bold text-sm text-slate-900 pt-2 border-t border-slate-200">
                    <span>Total Paid:</span>
                    <span className="text-sky-700">₹{createdOrder.total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  onClick={handlePrintReceipt}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4 text-slate-500" />
                  <span>Print Receipt</span>
                </button>

                <button
                  onClick={handleClose}
                  className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Return to Store
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
