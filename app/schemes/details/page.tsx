"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { 
  ArrowLeft, CheckCircle2, FileText, 
  Users, Landmark, Calendar, Share2 
} from "lucide-react";

export default function SchemeDetails() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F8FAF9] pb-24 md:pb-12">
      {/* Header Area */}
      <div className="max-w-4xl mx-auto p-6 flex justify-between items-center">
        <button 
        aria-label='back'
          onClick={() => router.back()}
          className="p-3 bg-white rounded-2xl border border-stone-100 shadow-sm active:scale-90 transition-all"
        >
          <ArrowLeft size={20} className="text-stone-600" />
        </button>
        <button
        aria-label='share'
         className="p-3 bg-white rounded-2xl border border-stone-100 shadow-sm">
          <Share2 size={20} className="text-stone-600" />
        </button>
      </div>

      <main className="max-w-4xl mx-auto px-6 space-y-6">
        {/* Main Banner Card */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <span className="bg-green-100 text-[#067A52] text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-wider">
              Tamil Nadu • Electricity
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-stone-800 mt-4 leading-tight">
              Free Power Supply Scheme
            </h1>
            <p className="text-stone-500 mt-2 font-medium">
              Agricultural electricity connection with 100% subsidy for small and marginal farmers.
            </p>
          </div>
          <Landmark size={120} className="absolute -bottom-6 -right-6 text-stone-50 opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side: Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Benefits Section */}
            <section className="bg-white p-6 rounded-[2rem] border border-stone-100">
              <h3 className="text-lg font-black text-stone-800 mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-[#067A52]" /> Key Benefits
              </h3>
              <ul className="space-y-3">
                {["Zero monthly electricity bills", "Priority for new connections", "Technical support for motor setup"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-stone-600 font-medium text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#067A52] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Eligibility */}
            <section className="bg-white p-6 rounded-[2rem] border border-stone-100">
              <h3 className="text-lg font-black text-stone-800 mb-4 flex items-center gap-2">
                <Users className="text-blue-500" /> Who can Apply?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 text-xs font-bold text-stone-600">
                  Farmer with more than 1 acre of land
                </div>
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 text-xs font-bold text-stone-600">
                  Native of Tamil Nadu
                </div>
              </div>
            </section>
          </div>

          {/* Right Side: Quick Info & Apply */}
          <div className="space-y-6">
            <div className="bg-[#067A52] p-6 rounded-[2rem] text-white shadow-xl shadow-green-900/10">
              <h4 className="font-bold mb-4">Required Documents</h4>
              <div className="space-y-3 opacity-90">
                <div className="flex items-center gap-2 text-xs"><FileText size={16} /> Aadhaar Card</div>
                <div className="flex items-center gap-2 text-xs"><FileText size={16} /> Chitta / Adangal</div>
                <div className="flex items-center gap-2 text-xs"><FileText size={16} /> Land Map</div>
              </div>
              <button 
                onClick={() => router.push('/schemes/apply')}
                className="w-full bg-white text-[#067A52] mt-6 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-stone-50 transition-colors"
              >
                Apply Now
              </button>
            </div>

            <div className="bg-white p-6 rounded-[2rem] border border-stone-100">
              <div className="flex items-center gap-3 text-stone-400 mb-2">
                <Calendar size={18} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Deadline</span>
              </div>
              <p className="text-stone-800 font-black">March 30, 2026</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}