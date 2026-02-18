"use client";
import { Bell } from "lucide-react";
import { useLanguage } from "../context/LanguageContext"; // Language context import pannunga

export default function Header() {
  // context-la irundhu current language (lang), maathura function (setLang), 
  // matrum dictionary (t) -ah edukkurom
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] lg:rounded-[3.5rem] p-6 lg:p-8 mb-10 shadow-xl shadow-emerald-900/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
      
      {/* Decorative inner glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/30 rounded-full blur-3xl -z-10" />
      
      <div className="space-y-1">
        <p className="text-[10px] font-black text-stone-400 uppercase tracking-[0.3em]">
          Thursday 5 February • Live
        </p>
        <h1 className="text-2xl lg:text-4xl font-black text-stone-800 tracking-tighter">
          {/* Hardcoded text-ah maathi t.greeting use pannunga */}
          {t.greeting}, <span className="text-emerald-600">{t.farmer} Gokulraj</span>
        </h1>
      </div>

      <div className="flex items-center justify-between w-full md:w-auto gap-4">
        {/* Language Selection Toggle */}
        <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-stone-200 shadow-sm flex items-center gap-1">
          <button 
            onClick={() => setLang("en")} // State "en" nu set aagum
            className={`px-4 lg:px-6 py-2 rounded-full text-[10px] lg:text-xs font-black transition-all duration-300 ${
              lang === "en" ? "bg-[#067A52] text-white shadow-lg shadow-green-200" : "text-stone-400 hover:text-stone-600"
            }`}
            aria-label="Switch to English"
          >
            ENGLISH
          </button>
          <button 
            onClick={() => setLang("ta")} // State "ta" nu set aagum
            className={`px-4 lg:px-6 py-2 rounded-full text-[10px] lg:text-xs font-black transition-all duration-300 ${
              lang === "ta" ? "bg-[#067A52] text-white shadow-lg shadow-green-200" : "text-stone-400 hover:text-stone-600"
            }`}
            aria-label="தமிழ் மொழிக்கு மாற்றவும்"
          >
            தமிழ்
          </button>
        </div>

        {/* Bell Icon */}
        <button
          aria-label="View notifications"
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