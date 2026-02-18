"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import { 
  ArrowLeft, 
  Sun, 
  CloudRain, 
  Wind, 
  Droplets, 
  Thermometer, 
  Navigation, 
  Calendar,
  CloudLightning
} from "lucide-react";

export default function WeatherPage() {
  const router = useRouter();
  const { t } = useLanguage();

  // Mock forecast data for 5 days
  const forecast = [
    { day: "Fri", temp: "32°C", condition: <Sun className="text-orange-400" /> },
    { day: "Sat", temp: "30°C", condition: <CloudRain className="text-blue-400" /> },
    { day: "Sun", temp: "29°C", condition: <CloudLightning className="text-purple-400" /> },
    { day: "Mon", temp: "31°C", condition: <Sun className="text-orange-400" /> },
    { day: "Tue", temp: "33°C", condition: <Sun className="text-orange-400" /> },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF9] pb-10">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-6 pt-8 flex items-center gap-4">
        <button 
          onClick={() => router.back()} 
          className="p-3 bg-white border border-stone-200 rounded-2xl shadow-sm active:scale-95"
          aria-label="Back"
        >
          <ArrowLeft size={20} className="text-stone-600" />
        </button>
        <h1 className="text-xl font-bold text-stone-800">Weather Forecast</h1>
      </div>

      <main className="max-w-4xl mx-auto p-6 space-y-6">
        
        {/* MAIN WEATHER CARD */}
        <div className="bg-[#067A52] p-8 rounded-[3rem] text-white shadow-2xl shadow-green-900/20 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
            <div>
              <p className="text-green-100 font-bold uppercase tracking-widest text-xs">Thanjavur, Tamil Nadu</p>
              <h2 className="text-6xl font-black mt-2">32°C</h2>
              <p className="text-xl font-medium mt-1">Clear Sky • {t.today_guidance || "Sunny Day"}</p>
            </div>
            <div className="bg-white/10 p-6 rounded-[2.5rem] backdrop-blur-md border border-white/20">
              <Sun size={80} className="text-yellow-300 animate-pulse" />
            </div>
          </div>
          
          {/* Subtle Decorative Icon */}
          <div className="absolute -bottom-10 -left-10 opacity-10">
            <CloudRain size={200} />
          </div>
        </div>

        {/* WEATHER DETAILS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <WeatherDetail icon={<Droplets />} label="Humidity" value="62%" color="bg-blue-50 text-blue-600" />
          <WeatherDetail icon={<Wind />} label="Wind Speed" value="12 km/h" color="bg-green-50 text-green-600" />
          <WeatherDetail icon={<Thermometer />} label="UV Index" value="High (8)" color="bg-orange-50 text-orange-600" />
          <WeatherDetail icon={<Navigation />} label="Pressure" value="1012 hPa" color="bg-purple-50 text-purple-600" />
        </div>

        {/* 5-DAY FORECAST */}
        <div className="bg-white p-8 rounded-[3rem] border border-stone-100 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Calendar size={20} className="text-[#067A52]" />
            <h3 className="text-lg font-bold text-stone-800">5-Day Forecast</h3>
          </div>
          <div className="flex justify-between items-center overflow-x-auto gap-4 pb-2">
            {forecast.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[70px] p-4 bg-stone-50 rounded-2xl border border-stone-100">
                <span className="text-xs font-bold text-stone-400 uppercase">{item.day}</span>
                <div className="my-3">{item.condition}</div>
                <span className="text-sm font-black text-stone-800">{item.temp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AGRI ADVICE ALERT */}
        <div className="bg-orange-50 p-6 rounded-[2.5rem] border border-orange-100 flex gap-4 items-start">
          <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
            <Sun size={24} />
          </div>
          <div>
            <h4 className="font-bold text-orange-800">Farmers Tip</h4>
            <p className="text-orange-700/80 text-sm mt-1 leading-relaxed">
              High temperature expected today. We recommend irrigating your Paddy crops late in the evening to reduce water evaporation.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}

// Reusable Detail Component
function WeatherDetail({ icon, label, value, color }: any) {
  return (
    <div className="bg-white p-5 rounded-[2.5rem] border border-stone-100 shadow-sm flex flex-col items-center text-center">
      <div className={`p-3 rounded-xl mb-3 ${color}`}>
        {React.cloneElement(icon, { size: 20 })}
      </div>
      <p className="text-stone-400 text-[10px] font-bold uppercase tracking-wider">{label}</p>
      <p className="text-stone-800 font-black mt-1">{value}</p>
    </div>
  );
}