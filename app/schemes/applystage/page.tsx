"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { ArrowLeft, Upload, ShieldCheck, CheckCircle2, FileText } from "lucide-react";

export default function EnhancedApplyStage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F8FAF9] flex">
      <main className="flex-1 p-4 md:p-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {/* Top Navigation */}
          <div className="flex items-center justify-between mb-8">
            <button 
            aria-label='back'
              onClick={() => router.back()}
              className="p-3 bg-white rounded-2xl shadow-sm border border-stone-100 hover:bg-stone-50 transition-all active:scale-90"
            >
              <ArrowLeft size={20} className="text-stone-600" />
            </button>
            <div className="flex gap-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className={`h-1.5 w-8 rounded-full ${s === 1 ? 'bg-[#067A52]' : 'bg-stone-200'}`} />
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white/70 backdrop-blur-xl border border-white rounded-[3rem] shadow-xl shadow-green-900/5 overflow-hidden">
            <div className="bg-[#067A52] p-10 text-white relative">
              <div className="relative z-10">
                <span className="text-green-200 text-[10px] font-black uppercase tracking-[0.2em]">Application Form</span>
                <h2 className="text-3xl font-black mt-1">Personal Details</h2>
              </div>
              <CheckCircle2 size={120} className="absolute -bottom-6 -right-6 text-white/10" />
            </div>

            <div className="p-10 space-y-8">
              {/* Name Input */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Full Name (As per Aadhaar)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Farmer Gokulraj"
                  className="w-full p-5 bg-stone-50/50 border border-stone-100 rounded-2xl font-bold text-stone-800 focus:ring-4 focus:ring-green-500/10 focus:border-[#067A52] outline-none transition-all placeholder:text-stone-300"
                />
              </div>

              {/* Land Input */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Land Holding (Acres)</label>
                <div className="relative">
                  <input 
                    type="number" 
                    placeholder="2.5"
                    className="w-full p-5 bg-stone-50/50 border border-stone-100 rounded-2xl font-bold text-stone-800 focus:ring-4 focus:ring-green-500/10 focus:border-[#067A52] outline-none transition-all"
                  />
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 font-black text-stone-300 text-xs uppercase">Acres</span>
                </div>
              </div>

              {/* Enhanced Upload */}
              <div className="space-y-4">
                <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Required Documents</label>
                <div className="group relative border-2 border-dashed border-stone-200 bg-stone-50/30 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center hover:border-[#067A52] hover:bg-green-50/30 transition-all cursor-pointer">
                  <div className="p-4 bg-white shadow-sm text-[#067A52] rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <Upload size={28} />
                  </div>
                  <h4 className="font-bold text-stone-800">Upload Chitta / Adangal</h4>
                  <p className="text-stone-400 text-xs mt-1">Drag and drop or tap to browse</p>
                </div>
              </div>

              {/* Security Footer */}
              <div className="flex items-center gap-3 p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100/50">
                <ShieldCheck size={20} className="text-[#067A52]" />
                <p className="text-[10px] font-bold text-emerald-800 leading-relaxed uppercase tracking-tight">
                  Your data is protected by Government Grade Encryption
                </p>
              </div>

              <button 
                className="w-full bg-[#067A52] text-white py-6 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-green-900/20 hover:bg-[#056342] active:scale-[0.98] transition-all"
              >
                Verify & Continue
              </button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}