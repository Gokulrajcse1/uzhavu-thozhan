"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, Tag, Bell, ExternalLink, X, 
  AlertCircle, Bug, Info, CheckCircle2, 
  Clock, MapPin, ChevronRight
} from "lucide-react";

export default function NotificationsPage() {
  const router = useRouter();
  const [selectedNote, setSelectedNote] = useState<any>(null);

  const notifications = [
    {
      id: 1,
      type: 'scheme',
      title: 'Eligible: PM-Kisan Scheme',
      desc: '₹2,000 subsidy available for your Thanjavur paddy field.',
      precaution: 'Documents needed: Aadhaar Card, Land Patta, and Bank Passbook. Verification takes 3-5 working days.',
      fullDetails: 'Your land records are verified under the 16th installment cycle. Ensure your e-KYC is updated to receive the credit directly to your bank account.',
      actionLabel: 'Apply Now',
      priority: 'High',
      time: '10m ago',
      icon: <Tag size={22} />,
      color: 'bg-orange-100 text-orange-600',
      borderColor: 'border-orange-200'
    },
    {
      id: 2,
      type: 'alert',
      title: 'Heavy Rain Warning',
      desc: 'Significant rainfall (40mm+) expected within 24 hours.',
      precaution: 'Clear field bunds, stop all fertilizer application, and ensure motor pumps are moved to higher ground.',
      fullDetails: 'Low pressure in Bay of Bengal might cause waterlogging. Focus on Field A (Low lying area) drainage immediately.',
      actionLabel: 'Emergency Contact',
      priority: 'Critical',
      time: '2h ago',
      icon: <AlertCircle size={22} />,
      color: 'bg-red-100 text-red-600',
      borderColor: 'border-red-200'
    },
    {
      id: 3,
      type: 'pest',
      title: 'Pest Alert: Stem Borer',
      desc: 'Localized activity detected in neighboring farm plots.',
      precaution: 'Install 5 Pheromone traps per acre. If damage >10%, use Cartap Hydrochloride 50% SP.',
      fullDetails: 'Stem Borer (Thanduppuzhu) infestation is at early stages. Checking the "dead heart" symptoms now can save your entire Samba crop.',
      actionLabel: 'Buy Bio-Control',
      priority: 'Medium',
      time: '5h ago',
      icon: <Bug size={22} />,
      color: 'bg-purple-100 text-purple-600',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF9] font-sans text-stone-900">
      {/* HEADER SECTION - Modern Glassmorphism */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-stone-200/60 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button 
              onClick={() => router.back()} 
              className="p-2.5 bg-white border border-stone-200 rounded-2xl hover:shadow-md transition-all active:scale-95"
              aria-label="Back to dashboard"
            >
              <ArrowLeft size={20} className="text-stone-600" />
            </button>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-[#067A52]">Farm Updates</h1>
              <div className="flex items-center gap-2 text-stone-400 text-[11px] font-bold uppercase tracking-widest mt-0.5">
                <MapPin size={10} /> Thanjavur Zone • Live
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-green-50 text-[#067A52] p-3 rounded-2xl border border-green-100 shadow-inner">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                {notifications.length}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-6 space-y-5">
        {/* Quick Filter Info */}
        <div className="flex items-center justify-between px-2 mb-2">
          <p className="text-stone-500 text-sm font-medium">Recent Activity</p>
          <button className="text-[#067A52] text-xs font-bold hover:underline">Mark all read</button>
        </div>

        {/* NOTIFICATION LIST */}
        {notifications.map((n) => (
          <button 
            key={n.id}
            onClick={() => setSelectedNote(n)}
            className={`w-full text-left bg-white p-6 rounded-[2.5rem] border ${n.borderColor} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden`}
            aria-label={`Notification: ${n.title}`}
          >
            {/* Background Accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 -mr-10 -mt-10 rounded-full opacity-[0.03] ${n.color}`} />

            <div className="flex gap-5 relative z-10">
              <div className={`p-4 rounded-[1.5rem] h-fit shadow-inner ${n.color}`}>
                {n.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <span className={`text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider ${n.color} bg-opacity-40`}>
                    {n.type}
                  </span>
                  <div className="flex items-center gap-1 text-stone-400 text-[10px] font-bold">
                    <Clock size={12} /> {n.time}
                  </div>
                </div>
                
                <h3 className="font-extrabold text-stone-800 text-xl leading-snug group-hover:text-[#067A52] transition-colors">
                  {selectedNote ? n.title : n.title}
                </h3>
                <p className="text-stone-500 text-sm mt-1.5 font-medium leading-relaxed">
                  {n.desc}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-[#067A52] bg-green-50/80 backdrop-blur-sm border border-green-100 px-4 py-1.5 rounded-full">
                    <CheckCircle2 size={13} /> Click for Action Plan
                  </div>
                  <ChevronRight size={18} className="text-stone-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </button>
        ))}
      </main>

      {/* --- POP-UP ACTION MODAL --- */}
      {selectedNote && (
        <div 
          className="fixed inset-0 bg-stone-900/60 backdrop-blur-md z-50 flex items-end sm:items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white w-full max-w-lg rounded-[3.5rem] p-10 shadow-2xl animate-in fade-in zoom-in-95 duration-300 relative overflow-hidden">
             {/* Decorative Element */}
             <div className={`absolute top-0 left-0 w-full h-2 ${selectedNote.color.split(' ')[0]}`} />

            <div className="flex justify-between items-center mb-8">
              <div className={`p-5 rounded-[2rem] ${selectedNote.color}`}>
                {selectedNote.icon}
              </div>
              <button 
                onClick={() => setSelectedNote(null)} 
                className="p-3 bg-stone-100 rounded-full text-stone-400 hover:text-stone-800 transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            <h2 className="text-3xl font-black text-stone-900 leading-tight mb-4">
              {selectedNote.title}
            </h2>
            <p className="text-stone-600 font-semibold leading-relaxed mb-6">
              {selectedNote.fullDetails}
            </p>

            {/* EFFICIENT CONTENT: WHAT TO DO BOX */}
            <div className="bg-[#F8FAF9] p-6 rounded-[2.5rem] border border-[#067A52]/10 mb-8 shadow-inner">
              <div className="flex items-center gap-3 mb-3 text-[#067A52]">
                <div className="bg-[#067A52] text-white p-1 rounded-lg">
                  <Info size={16} />
                </div>
                <h4 className="font-black text-xs uppercase tracking-[0.2em]">Immediate Action Plan</h4>
              </div>
              <p className="text-stone-800 text-[15px] font-bold leading-relaxed italic">
                "{selectedNote.precaution}"
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <button 
                className="w-full bg-[#067A52] text-white py-5 rounded-[1.8rem] font-extrabold text-lg flex items-center justify-center gap-3 shadow-xl shadow-green-900/30 hover:bg-[#056342] active:scale-[0.97] transition-all"
                aria-label={selectedNote.actionLabel}
              >
                {selectedNote.actionLabel} <ExternalLink size={20} />
              </button>
              <button 
                onClick={() => setSelectedNote(null)}
                className="w-full py-4 text-stone-400 font-bold text-sm hover:text-stone-600 transition-colors"
              >
                Dismiss for now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}