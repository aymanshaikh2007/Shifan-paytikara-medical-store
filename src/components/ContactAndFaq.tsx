import React, { useState } from 'react';
import { Mail, Phone, MapPin, ChevronDown, Send, CheckCircle2, Clock } from 'lucide-react';

export const ContactAndFaq: React.FC = () => {
  // Contact Form State
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const faqs = [
    {
      q: 'How can I place an order?',
      a: 'Browse our medical catalog, select the healthcare essentials or equipment you need, and click "Add to Cart". For scheduled medicines, click "Upload Prescription" to provide your doctor’s note. When ready, click the Cart icon and proceed through our straightforward checkout steps.',
    },
    {
      q: 'What payment methods are accepted?',
      a: 'We accept all major payment methods including UPI (Google Pay, PhonePe, Paytm), Credit & Debit cards (Visa, MasterCard, RuPay), Net Banking from leading banks, and verified Cash on Delivery (COD) for eligible domestic pin codes.',
    },
    {
      q: 'How can I track my order?',
      a: 'Once your order is verified and dispatched, you will receive an SMS and email notification with your tracking link. You can also view active and completed orders at any time through the Account & Orders menu at the top of the page.',
    },
    {
      q: 'What is the return policy?',
      a: 'Due to strict medical hygiene and safety regulations, opened consumables, masks, and prescription medicines cannot be returned. Medical equipment (such as BP monitors and digital thermometers) has a 7-day replacement guarantee in the rare case of manufacturing defects or transport damage.',
    },
    {
      q: 'How do I contact customer support?',
      a: 'Our healthcare care desk is available Monday through Saturday (9:00 AM – 8:00 PM IST). You can call our toll-free helpline at 1800-200-7447, write to us at support@shipafpaytikara.com, or fill out the contact form below.',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Assistance & Inquiries
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Contact Us & Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Have questions about a medical product or need help with a prescription order? We're here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Information & Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Send Us a Message</h3>
              <p className="text-xs text-slate-500 mb-6">
                Our medical product specialists typically respond within 2 to 4 business hours.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900">Message Received!</h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto">
                    Thank you for reaching out to Shipaf Paytikara. Our patient support team has logged your inquiry and will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:bg-white text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. rahul@example.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:bg-white text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Order Inquiry / Product Warranty Assistance"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="How can our healthcare team assist you today?"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:bg-white text-slate-900"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Business Contact Details Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                <Mail className="w-5 h-5 text-sky-600 mb-2" />
                <div className="text-xs font-bold text-slate-900">Email Helpdesk</div>
                <div className="text-[11px] text-slate-500 mt-0.5 break-all">support@shipafpaytikara.com</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                <Phone className="w-5 h-5 text-teal-600 mb-2" />
                <div className="text-xs font-bold text-slate-900">Phone Support</div>
                <div className="text-[11px] text-slate-500 mt-0.5">+91 1800-200-7447</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                <MapPin className="w-5 h-5 text-rose-500 mb-2" />
                <div className="text-xs font-bold text-slate-900">Headquarters</div>
                <div className="text-[11px] text-slate-500 mt-0.5">New Delhi 110025, India</div>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Frequently Asked Questions</h3>
              <p className="text-xs text-slate-500 mb-6">
                Quick answers regarding ordering, returns, and delivery.
              </p>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full text-left p-4 flex items-center justify-between gap-3 text-xs font-bold text-slate-900 hover:text-sky-600 transition-colors bg-slate-50/50"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                            isOpen ? 'rotate-180 text-sky-600' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-4 pt-2 text-xs text-slate-600 bg-white leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Operating hours: Mon - Sat, 9:00 AM - 8:00 PM IST</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
