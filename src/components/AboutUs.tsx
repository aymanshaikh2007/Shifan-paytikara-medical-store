import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Building2, Stethoscope, ShieldCheck } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about-us" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Subtle Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 aspect-16/10 bg-slate-200">
              <img
                src="/src/assets/images/about_healthcare_team_1791920473087.jpg"
                alt="Professional healthcare team and pharmacists reviewing prescriptions and quality medical inventory"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Trust Pill Box */}
            <div className="absolute -bottom-6 right-6 bg-white border border-slate-200 rounded-xl p-4 shadow-md max-w-xs hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">Pharmacist Supervision</span>
                <span className="text-slate-500 block">Strict adherence to national drug dispensing laws.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Content */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
              About Shipaf Paytikara
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
              Making Healthcare Essentials Easier to Access.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Our goal is to make shopping for healthcare products simple, convenient, and accessible through an easy-to-use online experience.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong className="font-semibold text-slate-900">Direct From Authorized Distributors:</strong> We partner strictly with authorized manufacturers and pharmaceutical stockists.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong className="font-semibold text-slate-900">Prescription Verification Integrity:</strong> Prescription medications are verified by licensed pharmacists before fulfillment.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong className="font-semibold text-slate-900">Patient-First Support:</strong> Transparent pricing in Indian Rupees with responsive customer guidance.
                </span>
              </div>
            </div>

            {/* Learn More Toggle */}
            <div className="pt-2">
              <button
                onClick={() => setShowMore(!showMore)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer"
              >
                <span>{showMore ? 'Show Less' : 'Learn More About Us'}</span>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform ${showMore ? 'rotate-90' : ''}`} />
              </button>
            </div>

            {/* Expandable details */}
            {showMore && (
              <div className="p-4 bg-white border border-slate-200 rounded-xl text-xs text-slate-600 space-y-2 mt-4 animate-in fade-in slide-in-from-top-1">
                <p>
                  <strong>Our Platform Standard:</strong> Shipaf Paytikara was founded to bridge the gap between quality healthcare products and modern consumer convenience. We ensure that home blood pressure monitors, emergency kits, mobility supports, and vitamins meet rigorous medical standards before being delivered to your doorstep.
                </p>
                <p>
                  <strong>Patient Safety Pledge:</strong> We strictly condemn spurious drug sales. No scheduled medication is ever dispatched without a valid practitioner prescription and batch verification.
                </p>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
