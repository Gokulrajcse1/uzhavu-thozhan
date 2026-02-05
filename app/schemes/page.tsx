"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  Globe, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  ExternalLink,
  Award
} from "lucide-react";

export default function SchemesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Mock data for featured carousel
  const featuredSchemes = [
    { id: 1, title: "PM-KISAN", desc: "Annual income support of ₹6,000", image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=400", tag: "Central" },
    { id: 2, title: "Kalaignar Scheme", desc: "Integrated Agricultural Development", image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400", tag: "Tamil Nadu" },
    { id: 3, title: "Crop Insurance", desc: "PM Fasal Bima Yojana (PMFBY)", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400", tag: "Central" },
  ];

  const allSchemes = [
    { id: 4, title: "Free Power Supply", level: "Tamil Nadu", category: "Electricity", eligible: true },
    { id: 5, title: "Kisan Credit Card", level: "India", category: "Finance", eligible: true },
    { id: 6, title: "Solar Pump Subsidy", level: "Tamil Nadu", category: "Energy", eligible: false },
    { id: 7, title: "Pesticide Subsidy", level: "India", category: "Supplies", eligible: true },
  ];

  return (
    <div className="space-y-12 pb-20">
      {/* 1. HEADER & SEARCH */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-stone-900 tracking-tight">Govt Schemes</h2>
          <p className="text-stone-500 font-medium mt-1">Discover subsidies and support matched for your farm.</p>
        </div>
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-[#067A52] transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search schemes..." 
            className="pl-12 pr-6 py-4 bg-white border border-stone-100 rounded-3xl w-full md:w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-100 transition-all"
          />
        </div>
      </header>

      {/* 2. FEATURED SCROLLABLE CAROUSEL */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2">
          <Award className="text-yellow-500" /> Featured Programs
        </h3>
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x">
          {featuredSchemes.map((scheme) => (
            <motion.div 
              key={scheme.id}
              whileHover={{ y: -5 }}
              className="min-w-[320px] md:min-w-[400px] h-56 relative rounded-[2.5rem] overflow-hidden snap-start shadow-lg group cursor-pointer"
            >
              <img src={scheme.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={scheme.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{scheme.tag}</span>
                <h4 className="text-2xl font-bold mt-2">{scheme.title}</h4>
                <p className="text-white/80 text-sm">{scheme.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. ELIGIBILITY MATCHER (Personalized for Profile) */}
      <section className="bg-green-50/50 border border-green-100 p-8 rounded-[3rem]">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white rounded-2xl shadow-sm text-[#067A52] font-black">✨</div>
          <h3 className="text-2xl font-bold text-green-900">Eligible for You</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allSchemes.filter(s => s.eligible).map(scheme => (
            <div key={scheme.id} className="bg-white p-6 rounded-3xl border border-green-100 flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-[#067A52]" />
                <div>
                  <p className="text-sm font-bold text-stone-800">{scheme.title}</p>
                  <p className="text-xs text-stone-400">{scheme.level} • {scheme.category}</p>
                </div>
              </div>
              <button className="text-[#067A52] font-bold text-sm flex items-center gap-1">Apply <ChevronRight size={14} /></button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FILTERABLE LIST (State & Country Wise) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-stone-100 pb-4">
          <div className="flex gap-4">
            <FilterButton label="All Schemes" active={activeFilter === "all"} onClick={() => setActiveFilter("all")} />
            <FilterButton label="Tamil Nadu" active={activeFilter === "tn"} onClick={() => setActiveFilter("tn")} icon={<MapPin size={14} />} />
            <FilterButton label="India (Central)" active={activeFilter === "india"} onClick={() => setActiveFilter("india")} icon={<Globe size={14} />} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allSchemes.map((scheme) => (
            <motion.div 
              layout
              key={scheme.id}
              className="bg-white p-8 rounded-[2.5rem] border border-stone-50 shadow-sm hover:border-[#067A52]/20 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase ${scheme.level === 'Tamil Nadu' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'}`}>
                  {scheme.level}
                </span>
                <ExternalLink size={18} className="text-stone-300 group-hover:text-stone-800 transition-colors cursor-pointer" />
              </div>
              <h4 className="text-xl font-bold text-stone-800 mb-2">{scheme.title}</h4>
              <p className="text-stone-400 text-sm font-medium mb-6 leading-relaxed">Available for farmers with more than 1 acre of land in {scheme.level}.</p>
              <button className="w-full py-4 rounded-2xl bg-stone-50 text-stone-800 font-bold hover:bg-[#067A52] hover:text-white transition-all">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function FilterButton({ label, active, onClick, icon }: any) {
  return (
    <button 
      onClick={onClick}
      className={`px-6 py-3 rounded-full flex items-center gap-2 font-bold text-sm transition-all ${
        active 
        ? "bg-[#067A52] text-white shadow-lg shadow-green-100" 
        : "bg-white text-stone-400 border border-stone-100 hover:border-stone-300"
      }`}
    >
      {icon} {label}
    </button>
  );
}