"use client";

import { useState } from "react";
import AdviceCard from "@/components/advicecard";
import { 
  MapPin, Droplets, ListChecks, ArrowRight, 
  Sun, Wind, Sprout, AlertTriangle, 
  Calendar, FileText, Download, CloudRain, Thermometer
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdvicePage() {
  const [activeTab, setActiveTab] = useState("guidance");

  return (
    <div className="space-y-10 pb-20">
      {/* 1. HEADER SECTION */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-5xl font-black text-stone-900 tracking-tighter italic">Advice</h2>
          <p className="text-stone-500 mt-2 font-medium">Personalized strategy for your Thanjavur farm.</p>
        </div>
        
        {/* TAB SWITCHER */}
        <div className="flex p-1.5 bg-stone-100/80 backdrop-blur-md rounded-[2.5rem] w-fit border border-stone-200/50 shadow-inner">
          <button 
            onClick={() => setActiveTab("guidance")}
            className={`flex items-center gap-2 px-8 py-3 rounded-full font-black text-sm transition-all duration-300 ${
              activeTab === "guidance" 
              ? "bg-white text-[#067A52] shadow-md ring-1 ring-black/5" 
              : "text-stone-400 hover:text-stone-600"
            }`}
          >
            <Calendar size={18} />
            Today's Guidance
          </button>
          <button 
            onClick={() => setActiveTab("manual")}
            className={`flex items-center gap-2 px-8 py-3 rounded-full font-black text-sm transition-all duration-300 ${
              activeTab === "manual" 
              ? "bg-white text-[#067A52] shadow-md ring-1 ring-black/5" 
              : "text-stone-400 hover:text-stone-600"
            }`}
          >
            <FileText size={18} />
            Cultivation Manual
          </button>
        </div>
      </header>

      {/* 2. DYNAMIC CONTENT AREA */}
      <AnimatePresence mode="wait">
        {activeTab === "guidance" ? (
          /* --- OPTION 1: TODAY'S GUIDANCE CONTENT --- */
          <motion.div 
            key="guidance"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Weather & Real-time Alerts */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#067A52] rounded-[3.5rem] p-10 text-white shadow-2xl shadow-green-100">
                <Sun size={48} className="mb-6 opacity-90" />
                <h3 className="text-4xl font-black italic tracking-tighter">Sunny Day</h3>
                <p className="mt-4 font-bold opacity-90 leading-relaxed">
                  Perfect conditions for fertilizer application. No rain expected today.
                </p>
                <div className="mt-8 flex gap-4">
                    <div className="bg-white/10 p-4 rounded-2xl flex-1 text-center">
                        <Thermometer size={20} className="mx-auto mb-2"/>
                        <p className="text-xs font-black uppercase">32°C</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-2xl flex-1 text-center">
                        <Wind size={20} className="mx-auto mb-2"/>
                        <p className="text-xs font-black uppercase">12km/h</p>
                    </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-[3rem] p-8 border border-amber-100 flex items-start gap-4">
                <AlertTriangle className="text-amber-600 mt-1" size={24} />
                <div>
                  <h4 className="font-black text-amber-800 text-sm uppercase tracking-widest">Action Required</h4>
                  <p className="text-stone-600 font-bold text-sm mt-1">High evaporation rates today. Increase evening irrigation by 15%.</p>
                </div>
              </div>
            </div>

            {/* Daily Task List (Bento Grid Style) */}
            <div className="lg:col-span-8 bg-white rounded-[4rem] p-10 lg:p-14 border border-stone-100 shadow-xl shadow-stone-200/30">
              <div className="flex items-center gap-3 mb-10">
                <Sprout className="text-[#067A52]" size={32} />
                <h3 className="text-3xl font-black text-stone-800 italic">Daily Routine</h3>
              </div>

              <div className="space-y-5">
                {[
                  { id: "01", task: "Top-dress with Urea (Nitrogen)", time: "6:00 AM - 9:00 AM", priority: "High" },
                  { id: "02", task: "Inspect Field for Stem Borers", time: "Before 11:00 AM", priority: "Medium" },
                  { id: "03", task: "Clear Irrigation Silt", time: "Evening", priority: "Routine" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-7 rounded-[2.5rem] bg-stone-50 border border-stone-100 hover:bg-[#067A52] group transition-all duration-500">
                    <div className="flex items-center gap-6">
                      <span className="text-3xl font-black text-stone-200 group-hover:text-white/30 transition-colors italic">{item.id}</span>
                      <div>
                        <p className="text-xl font-black text-stone-800 group-hover:text-white transition-colors">{item.task}</p>
                        <p className="text-xs font-bold text-stone-400 group-hover:text-white/70 uppercase tracking-widest mt-1">{item.time}</p>
                      </div>
                    </div>
                    <ArrowRight className="text-stone-300 group-hover:text-white transition-all group-hover:translate-x-2" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          /* --- OPTION 2: CULTIVATION MANUAL CONTENT --- */
          <motion.div 
            key="manual"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Quick Guidance Column */}
            <div className="lg:col-span-4 space-y-6">
              <AdviceCard 
                color="green" 
                title="Nursery Prep" 
                description="Use 100kg of seeds per hectare. Treat with Azospirillum (600g)." 
                icon={<MapPin size={24} className="text-[#067A52]" />} 
              />
              <AdviceCard 
                color="yellow" 
                title="Water Depth" 
                description="Maintain 2cm water for first 10 days, then 5cm until flowering." 
                icon={<Droplets size={24} className="text-yellow-600" />} 
              />
              <div className="p-8 bg-stone-900 rounded-[3rem] text-white">
                 <h4 className="text-lg font-black italic mb-2">Pro Tip</h4>
                 <p className="text-sm opacity-70 leading-relaxed font-medium">Apply Zinc Sulphate (25kg/ha) if leaves show rusty brown spots.</p>
              </div>
            </div>

            {/* Timeline Manual Section */}
            <div className="lg:col-span-8 bg-white rounded-[4rem] p-10 lg:p-14 border border-stone-100 shadow-2xl shadow-stone-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <FileText size={200} />
              </div>

              <h3 className="text-3xl font-black text-stone-800 mb-12 italic">Standard Procedure</h3>

              <div className="space-y-12 relative before:absolute before:left-7 before:top-2 before:bottom-2 before:w-[2px] before:bg-stone-100">
                {[
                  { phase: "Phase 1", title: "Nursery Preparation", time: "Day 0 - 20", color: "bg-[#067A52]", desc: "Sow seeds in nursery beds. Apply 2kg of DAP for 20 cents nursery area." },
                  { phase: "Phase 2", title: "Transplanting", time: "Day 21 - 25", color: "bg-blue-500", desc: "Transplant 2-3 seedlings per hill. Spacing should be 15cm x 10cm." },
                  { phase: "Phase 3", title: "Ripening & Harvest", time: "Day 100 - 120", color: "bg-rose-500", desc: "Harvest when 80% grains turn straw-colored. Thresh and dry to 14% moisture." },
                ].map((step, i) => (
                  <div key={i} className="relative pl-20 group">
                    <div className={`absolute left-5 top-1 w-5 h-5 rounded-full border-4 border-white shadow-lg ${step.color} z-10 transition-transform group-hover:scale-125`} />
                    <div className="bg-stone-50/50 p-8 rounded-[2.5rem] border border-stone-50 hover:bg-white hover:shadow-xl hover:border-stone-100 transition-all duration-500">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">{step.phase}</span>
                        <span className={`text-[10px] font-black text-white px-4 py-1.5 rounded-full ${step.color}`}>{step.time}</span>
                      </div>
                      <h4 className="text-2xl font-black text-stone-800 tracking-tight">{step.title}</h4>
                      <p className="text-stone-500 font-medium mt-3 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-14 w-full py-6 rounded-[2.5rem] bg-stone-900 text-white font-black text-xl hover:bg-[#067A52] transition-all flex items-center justify-center gap-4 shadow-2xl shadow-stone-300">
                <Download size={24} />
                DOWNLOAD PDF MANUAL
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}