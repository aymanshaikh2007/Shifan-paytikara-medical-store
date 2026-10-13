import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

export type PolicyType = 'privacy' | 'terms' | 'shipping' | 'returns';

interface PolicyModalProps {
  policy: PolicyType | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policy, onClose }) => {
  if (!policy) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'Patient confidentiality & data protection standards',
      content: (
        <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
          <p>
            At <strong>Shipaf Paytikara</strong>, we treat health and prescription data with the utmost confidentiality in accordance with Indian information technology and digital healthcare governance frameworks.
          </p>
          <h4 className="font-bold text-slate-900 text-sm">1. Collection of Health & Prescription Data</h4>
          <p>
            Prescription uploads and medical diagnostic order records are stored in encrypted environments accessible solely to licensed pharmacists verifying scheduled medical orders. We do not sell or monetize personal patient health records.
          </p>
          <h4 className="font-bold text-slate-900 text-sm">2. Payment Security</h4>
          <p>
            Financial payment transactions are handled through certified, PCI-DSS compliant third-party payment gateways (Razorpay, UPI). Raw credit or debit card credentials are never retained on our frontend servers.
          </p>
          <h4 className="font-bold text-slate-900 text-sm">3. Communications & Order Updates</h4>
          <p>
            We send transactional notifications strictly for order confirmations, prescription validation requests, and dispatch tracking.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Terms & Conditions',
      subtitle: 'Healthcare platform usage terms and dispensing policies',
      content: (
        <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
          <p>
            By accessing or purchasing from <strong>Shipaf Paytikara</strong>, you agree to comply with our healthcare retail regulations and dispensing policies.
          </p>
          <h4 className="font-bold text-slate-900 text-sm">1. Pharmacy Dispensing Rules</h4>
          <p>
            Medicines categorized under Schedule H and Schedule X of the Drugs and Cosmetics Act require an authentic prescription signed by a registered medical practitioner. We reserve the statutory right to cancel or hold dispensing if an invalid prescription is presented.
          </p>
          <h4 className="font-bold text-slate-900 text-sm">2. Product Authenticity</h4>
          <p>
            All diagnostic devices and medical equipment sold on Shipaf Paytikara are genuine and sourced from licensed manufacturers with valid brand warranties.
          </p>
          <h4 className="font-bold text-slate-900 text-sm">3. Medical Advice Disclaimer</h4>
          <p>
            The information displayed on this website is intended for educational purposes and should never replace qualified clinical judgment from your treating physician.
          </p>
        </div>
      ),
    },
    shipping: {
      title: 'Shipping Policy',
      subtitle: 'Doorstep dispatch and temperature-controlled handling',
      content: (
        <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
          <p>
            We prioritize hygienic and swift dispatch for all essential medical equipment, trauma supplies, and pharmaceuticals.
          </p>
          <h4 className="font-bold text-slate-900 text-sm">1. Dispatch Timeline</h4>
          <p>
            Standard orders placed before 3:00 PM IST are processed same-day. Orders requiring prescription verification are routed through our registered pharmacist desk within 2 hours of upload.
          </p>
          <h4 className="font-bold text-slate-900 text-sm">2. Delivery Timeframes</h4>
          <p>
            Metro Cities: 24 to 48 hours.<br />
            Rest of India: 2 to 4 business days via verified express medical couriers.
          </p>
          <h4 className="font-bold text-slate-900 text-sm">3. Shipping Charges</h4>
          <p>
            Free delivery applies to all cart orders above ₹499. A nominal fee of ₹49 applies to orders below ₹499.
          </p>
        </div>
      ),
    },
    returns: {
      title: 'Return & Refund Policy',
      subtitle: 'Hygiene and replacement guidelines',
      content: (
        <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
          <p>
            To uphold rigorous patient safety and sanitary controls, our return framework operates with specific healthcare exemptions.
          </p>
          <h4 className="font-bold text-slate-900 text-sm">1. Non-Returnable Healthcare Items</h4>
          <p>
            In accordance with public health regulations, opened surgical face masks, diagnostic testing strips, personal sanitizers, and dispensed prescription medicines cannot be returned once delivered.
          </p>
          <h4 className="font-bold text-slate-900 text-sm">2. 7-Day Device Replacement Guarantee</h4>
          <p>
            Medical equipment (such as Digital BP Monitors, Thermometers, Oximeters, and Scales) found defective upon unboxing or damaged in transit are entitled to a zero-hassle replacement within 7 calendar days of receipt.
          </p>
          <h4 className="font-bold text-slate-900 text-sm">3. Refund Processing</h4>
          <p>
            Approved refunds are credited to the original payment source within 3 to 5 banking days.
          </p>
        </div>
      ),
    },
  };

  const current = contentMap[policy];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-600" />
            <div>
              <h3 className="text-base font-bold text-slate-900">{current.title}</h3>
              <p className="text-[11px] text-slate-500">{current.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {current.content}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>

      </div>
    </div>
  );
};
