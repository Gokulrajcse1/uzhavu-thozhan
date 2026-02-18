"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Droplets, 
  Thermometer, 
  Wind, 
  Activity, 
  Zap, 
  RefreshCcw, 
  Settings2,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function SensorsPage() {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [motorStatus, setMotorStatus] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1200);
  };

  const sensorData = [
    {
      id: 1,
      name: "Soil Moisture",
      value: "64%",
      status: "Optimal",
      desc: "Field A - Zone 1",
      icon: <Droplets size={24} />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      trend: "+2% from morning"
    },
    {
      id: 2,
      name: "Soil Temperature",
      value: "27°C",
      status: "Normal",
      desc: "Root zone depth (15cm)",
      icon: <Thermometer size={24} />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      trend: "Stable"
    },
    {
      id: 3,
      name: "NPK Sensor",
      value: "Good",
      status: "Fertile",
      desc: "Nitrogen: 42mg/kg",
      icon: <Activity size={24} />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      trend: "Sufficient"
    },
    {
      id: 4,
      name: "Air Humidity",
      value: "52%",
      status: "Warning",
      desc: "Ambient environment",
      icon: <Wind size={24} />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      trend: "-5% (Dry air)"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF9] pb-12">
      {/* Top Navigation */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.back()} 
            className="p-3 bg-white border border-stone-200 rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-95"
            aria-label="Back to dashboard"
          >
            <ArrowLeft size={20} className="text-stone-600" />
          </button>
          <div>
            <h1 className="text-2xl font-black text-stone-800 tracking-tight">Smart Sensors</h1>
            <p className="text-[10px] font-bold text-[#067A52] uppercase tracking-widest">Live Monitoring • Field A</p>
          </div>
        </div>
        <button 
          onClick={handleRefresh}
          className={`p-3 bg-white border border-stone-200 rounded-2xl transition-all ${isRefreshing ? 'animate-spin' : ''}`}
          aria-label="Refresh sensor data"
        >
          <RefreshCcw size={20} className="text-[#067A52]" />
        </button>
      </div>

      <main className="max-w-5xl mx-auto p-6 space-y-6">
        
        {/* MOTOR CONTROL HERO CARD */}
        <div className="relative overflow-hidden bg-white p-8 rounded-[3rem] border border-stone-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="relative z-10 text-center md:text-left">
            <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
              <span className={`w-2 h-2 rounded-full ${motorStatus ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Irrigation Control</p>
            </div>
            <h2 className="text-3xl font-black text-stone-800">Primary Motor Pump</h2>
            <p className="text-stone-500 font-medium mt-1">Status: {motorStatus ? "Active & Pumping" : "Idle / Manual Mode"}</p>
          </div>

          <div className="flex items-center gap-4 relative z-10">
             <button 
              onClick={() => setMotorStatus(!motorStatus)}
              className={`flex items-center gap-3 px-8 py-4 rounded-3xl font-black text-lg transition-all shadow-xl active:scale-95 ${
                motorStatus 
                ? 'bg-red-50 text-red-600 border border-red-100 shadow-red-900/10' 
                : 'bg-[#067A52] text-white shadow-green-900/20'
              }`}
              aria-label={motorStatus ? "Stop Motor" : "Start Motor"}
             >
               <Zap size={20} fill={motorStatus ? "currentColor" : "none"} />
               {motorStatus ? "STOP MOTOR" : "START MOTOR"}
             </button>
             <button className="p-4 bg-stone-100 rounded-3xl text-stone-500" aria-label="Motor settings">
               <Settings2 size={24} />
             </button>
          </div>
          
          {/* Decorative Leaf Background */}
          <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
            <Droplets size={200} className="text-[#067A52] translate-x-10 -translate-y-10" />
          </div>
        </div>

        {/* SENSOR GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sensorData.map((sensor) => (
            <div 
              key={sensor.id} 
              className="bg-white p-6 rounded-[2.5rem] border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-4 rounded-2xl ${sensor.bgColor} ${sensor.color} transition-transform group-hover:scale-110 shadow-inner`}>
                  {sensor.icon}
                </div>
                <span className={`text-[10px] font-black px-2 py-1 rounded-md uppercase ${
                  sensor.status === 'Warning' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-600'
                }`}>
                  {sensor.status}
                </span>
              </div>
              
              <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">{sensor.name}</p>
              <h3 className="text-3xl font-black text-stone-800 mt-1">{sensor.value}</h3>
              <p className="text-stone-500 text-xs mt-2 font-medium">{sensor.desc}</p>
              
              <div className="mt-4 pt-4 border-t border-stone-50 flex items-center gap-1">
                {sensor.status === 'Warning' ? <AlertCircle size={12} className="text-red-500" /> : <CheckCircle2 size={12} className="text-green-500" />}
                <span className="text-[10px] font-bold text-stone-400">{sensor.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ANALYTICS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-8 rounded-[3rem] border border-stone-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-black text-stone-800">Moisture History</h3>
              <select 
              className="bg-stone-50 border-none rounded-xl text-xs font-bold text-stone-500 focus:ring-0"
              aria-label="Select time range for moisture history"
            >
            <option>Last 24 Hours</option>
            <option>Weekly View</option>
            </select>
            </div>
            {/* Chart Placeholder */}
            <div className="h-48 bg-[#F8FAF9] rounded-[2rem] border-2 border-dashed border-stone-200 flex flex-col items-center justify-center gap-2">
              <Activity className="text-stone-300" size={32} />
              <p className="text-stone-400 font-bold text-xs uppercase tracking-tighter">Visualizing soil data...</p>
            </div>
          </div>

          <div className="bg-[#067A52] p-8 rounded-[3rem] text-white shadow-xl shadow-green-900/20 relative overflow-hidden">
             <h3 className="text-xl font-bold mb-2">Smart Suggestion</h3>
             <p className="text-green-100 text-sm leading-relaxed mb-6 relative z-10">
               Based on current humidity and soil moisture, we recommend starting the motor in 2 hours for optimal root hydration.
             </p>
             <button className="w-full bg-white text-[#067A52] py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg active:scale-95 transition-transform relative z-10">
               Schedule Now
             </button>
             <div className="absolute -bottom-10 -right-10 opacity-10">
               <Zap size={180} />
             </div>
          </div>
        </div>

      </main>
    </div>
  );
}