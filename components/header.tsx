"use client";
import { useState } from "react"; // State import pannanum
import { Bell } from "lucide-react";
import NotificationsPage from "@/app/notification/page";

export default function Header() {
  // 1. Language state-a inga thaan define pannanum
  const [language, setLanguage] = useState("EN");

  return (
    <header className="bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] lg:rounded-[3.5rem] p-6 lg:p-8 mb-10 shadow-xl shadow-emerald-900/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
      
      {/* Decorative inner glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/30 rounded-full blur-3xl -z-10" />
      
      <div className="space-y-1">
        <p className="text-[10px] font-black text-stone-400 uppercase tracking-[0.3em]">
          Thursday 5 February • Live
        </p>
        <h1 className="text-2xl lg:text-4xl font-black text-stone-800 tracking-tighter">
          Good Morning, <span className="text-emerald-600">Farmer Gokulraj</span>
        </h1>
      </div>

      <div className="flex items-center justify-between w-full md:w-auto gap-4">
        {/* Language Selection Toggle - Fixed State error */}
        <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-stone-200 shadow-sm flex items-center gap-1">
          <button 
            onClick={() => setLanguage("EN")}
            className={`px-4 lg:px-6 py-2 rounded-full text-[10px] lg:text-xs font-black transition-all duration-300 ${
              language === "EN" ? "bg-[#067A52] text-white shadow-lg shadow-green-200" : "text-stone-400 hover:text-stone-600"
            }`}
          >
            ENGLISH
          </button>
          <button 
            onClick={() => setLanguage("TA")}
            className={`px-4 lg:px-6 py-2 rounded-full text-[10px] lg:text-xs font-black transition-all duration-300 ${
              language === "TA" ? "bg-[#067A52] text-white shadow-lg shadow-green-200" : "text-stone-400 hover:text-stone-600"
            }`}
          >
            தமிழ்
          </button>
        </div>

        {/* Bell Icon */}
        <button
          aria-label="bell"
          onClick={() => {
            window.location.href = "/notification";
          }}
          className="bg-white p-4 rounded-[1.2rem] lg:rounded-[1.5rem] text-emerald-600 shadow-xl shadow-emerald-100 border border-stone-50 relative hover:scale-105 active:scale-90 transition-all"
        >
          <Bell size={24} />
          <span className="absolute top-4 right-4 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        </button>
      </div>
    </header>
  );
}