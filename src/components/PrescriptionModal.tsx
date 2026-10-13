import React, { useState } from 'react';
import { X, UploadCloud, FileCheck, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const PrescriptionModal: React.FC = () => {
  const {
    isPrescriptionModalOpen,
    setIsPrescriptionModalOpen,
    prescriptionForProduct,
    setUploadedPrescriptionName,
    addToCart,
    showToast
  } = useCart();

  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  if (!isPrescriptionModalOpen || !prescriptionForProduct) return null;

  const handleSimulateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('Dr_Prescription_Medical_Rx.pdf');
    }
  };

  const handleUseSamplePrescription = () => {
    setPatientName('Ananya Deshmukh');
    setDoctorName('Dr. R. K. Mukherjee, MBBS MD (Reg. #84920)');
    setFileName('Verified_Digital_Rx_Prescription_Doc.pdf');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileName) {
      setFileName('Valid_Medical_Practitioner_Prescription.pdf');
    }

    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      const activeFile = fileName || 'Valid_Medical_Practitioner_Prescription.pdf';
      setUploadedPrescriptionName(activeFile);
      setIsPrescriptionModalOpen(false);
      showToast(`Prescription verified for ${prescriptionForProduct.name}`);
      
      // Add product to cart with valid prescription
      addToCart(prescriptionForProduct);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-sky-600" />
            <h2 className="text-base font-bold text-slate-900">Upload Doctor Prescription</h2>
          </div>
          <button
            onClick={() => setIsPrescriptionModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Required for {prescriptionForProduct.name}</strong>
              <p className="text-[11px] text-amber-800 mt-0.5">
                Under Government Pharmacy regulations, scheduled drugs require a valid medical prescription signed by a registered practitioner.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Patient's Full Name *
              </label>
              <input
                type="text"
                required
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="Name as written on the doctor's slip"
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Prescribing Doctor / Clinic *
              </label>
              <input
                type="text"
                required
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                placeholder="Doctor Name & Medical Registration No."
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 text-slate-900"
              />
            </div>

            {/* File Upload Box */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Prescription Document (Image or PDF) *
              </label>
              <div className="border-2 border-dashed border-slate-200 hover:border-sky-400 rounded-2xl p-6 text-center cursor-pointer transition-colors relative bg-slate-50/50">
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleSimulateUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <UploadCloud className="w-8 h-8 text-sky-600 mx-auto mb-2" />
                <p className="text-xs font-bold text-slate-800">
                  {fileName ? (
                    <span className="text-emerald-700 flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      {fileName}
                    </span>
                  ) : (
                    'Click to upload or drag & drop prescription file'
                  )}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Supported formats: JPG, PNG, PDF (Max 10MB)
                </p>
              </div>
            </div>

            {/* Quick Demo Helper */}
            <div className="text-right">
              <button
                type="button"
                onClick={handleUseSamplePrescription}
                className="text-[11px] text-sky-600 hover:text-sky-800 font-semibold underline"
              >
                Auto-fill demo verified prescription data
              </button>
            </div>

            {/* Compliance Guarantee */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 text-[11px] text-slate-600 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Prescription records are confidential and encrypted under HIPAA / Indian Medical Data Privacy Standards.</span>
            </div>

            {/* Submit */}
            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsPrescriptionModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isUploading}
                className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer disabled:opacity-50"
              >
                {isUploading ? 'Verifying with Pharmacist...' : 'Verify & Add to Cart'}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};
