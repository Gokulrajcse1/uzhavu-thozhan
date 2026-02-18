"use client";

import React from 'react';
import { Sun, Zap, Edit3, ChevronRight } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  // Navigation handlers
  const goToAdvice = () => router.push('/advice');
  const goToSchemes = () => router.push('/schemes');
  const goToSensors = () => router.push('/sensors');
  const gotoWeather =() => router.push('weather');
  return (
    <div className="min-h-screen bg-[#F4F7F5] p-4 md:p-8 space-y-8 pb-20">

      {/* CROP INFO BANNER */}
      <div className="bg-white p-6 rounded-[2rem] shadow-sm flex justify-between items-center border border-stone-50">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-green-50 text-[#067A52] rounded-2xl">
            <Zap size={24} fill="currentColor" />
          </div>
          <div>
            <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">My Crop Info</p>
            <h2 className="text-xl font-bold text-stone-800">paddy • Thanjavur</h2>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-green-50 text-[#067A52] px-5 py-2 rounded-full font-bold hover:bg-green-100 transition-colors">
          <Edit3 size={18} /> Edit
        </button>
      </div>

      {/* MAIN DASHBOARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Today's Guidance Card */}
        {/* Added onClick here too so the whole card is clickable */}
        <div 
          onClick={goToAdvice}
          className="p-8 bg-white rounded-[2.5rem] shadow-sm border-b-8 border-b-yellow-400 flex flex-col justify-between group cursor-pointer hover:shadow-md transition-all"
        >
          <div className="flex justify-between items-start">
            <div className="p-4 bg-yellow-50 text-yellow-600 rounded-2xl"><Sun size={32} /></div>
            <span className="bg-stone-100 text-stone-500 text-xs font-black px-3 py-1 rounded-lg uppercase">Today</span>
          </div>
          <div className="mt-8 flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-bold text-stone-800">Today's Guidance</h3>
              <p className="text-stone-400 font-medium mt-1">💧 Irrigation • 🌱 Fertilizer</p>
            </div>
            <div 
              className="p-2 bg-stone-50 rounded-full text-stone-300 group-hover:text-[#067A52] transition-colors"
            >
              <ChevronRight size={28} />
            </div>
          </div>
        </div>

        {/* Govt Schemes */}
        <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-stone-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-stone-800">Govt Schemes</h3>
            <button 
              onClick={goToSchemes}
              className="text-[#067A52] font-bold text-sm hover:underline"
            >
              See All
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {[
              { title: "PM-Kisan", tag: "Subsidy", img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&q=80" },
              { title: "Insurance", tag: "Security", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80" }
            ].map((s, i) => (
              <div key={i} className="min-w-[180px] bg-stone-50 rounded-[1.5rem] overflow-hidden group cursor-pointer border border-stone-100">
                <div className="h-24 overflow-hidden">
                  <img src={s.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-3">
                  <span className="text-[10px] font-bold text-[#067A52] uppercase bg-green-100 px-2 py-0.5 rounded-md">{s.tag}</span>
                  <p className="text-sm font-bold text-stone-700 mt-1">{s.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather & Sensors */}
        <div className="p-6 bg-white rounded-[2rem] shadow-sm flex items-center gap-6 border border-stone-50 hover:bg-stone-50/50 transition-colors cursor-pointer">
          <div className="p-4 bg-blue-50 text-blue-500 rounded-3xl"><Sun size={32} /></div>
          <div><h4 
          onClick={gotoWeather}
          className="text-lg font-bold text-stone-800">Weather Summary</h4><p className="text-stone-500 font-medium">32°C • Clear Sky</p></div>
        </div>

        <div className="p-6 bg-white rounded-[2rem] shadow-sm flex items-center gap-6 border border-stone-50 hover:bg-stone-50/50 transition-colors cursor-pointer">
          <div className="p-4 bg-purple-50 text-purple-500 rounded-3xl"><Zap size={32} /></div>
          <div><h4
            onClick={goToSensors}
           className="text-lg font-bold text-stone-800">Smart Sensors</h4><p className="text-stone-500 font-medium">Motor: <span className="text-red-500 font-bold uppercase">Off</span> • Soil: 62%</p></div>
        </div>

      </div>
    </div>
  );
}