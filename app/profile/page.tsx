"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, MapPin, Sprout, ShieldCheck, 
  Settings, LogOut, ChevronRight, 
  Zap, Droplets, Thermometer, Globe,
  Power, CheckCircle2
} from "lucide-react";

export default function ProfilePage() {
  const [language, setLanguage] = useState("EN");
  const [isMotorOn, setIsMotorOn] = useState(false);

  const content = {
    EN: { title: "Farmer Profile", location: "Thanjavur, TN", land: "Land Size", crop: "Current Crop", logout: "LOGOUT" },
    TA: { title: "விவசாயி சுயவிவரம்", location: "தஞ்சாவூர், தமிழ்நாடு", land: "நிலத்தின் அளவு", crop: "தற்போதைய பயிர்", logout: "வெளியேறு" }
  };

  const t = language === "EN" ? content.EN : content.TA;

  return (
    // Responsive padding: p-4 on mobile, p-10 on desktop
    <div className="relative min-h-screen p-4 md:p-6 lg:p-10 bg-[#F9FAFB] overflow-x-hidden">
      
    

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* LEFT COLUMN: IDENTITY & MOTOR */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // Border radius adjusted for mobile (rounded-[2.5rem]) vs desktop (rounded-[3.5rem])
            className="bg-white rounded-[2.5rem] lg:rounded-[3.5rem] p-6 lg:p-10 shadow-2xl shadow-stone-200 border border-stone-100 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="flex flex-col items-center relative z-10">
              <div className="relative mb-4 lg:mb-6">
                <motion.div 
                  whileHover={{ rotate: 10 }}
                  className="w-28 h-28 lg:w-36 lg:h-36 bg-gradient-to-br from-[#067A52] to-[#2DD4BF] rounded-[2rem] lg:rounded-[3rem] p-1 shadow-2xl"
                >
                  <div className="w-full h-full bg-white rounded-[1.8rem] lg:rounded-[2.8rem] flex items-center justify-center text-[#067A52]">
                    <User size={48} className="lg:hidden" strokeWidth={1} />
                    <User size={60} className="hidden lg:block" strokeWidth={1} />
                  </div>
                </motion.div>
                <div className="absolute -bottom-1 -right-1 bg-[#067A52] text-white p-1.5 rounded-lg shadow-lg border-2 border-white">
                  <CheckCircle2 size={16} />
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-black text-stone-800 tracking-tight">{language === "EN" ? "Gokulraj" : "கோகுல்ராஜ்"}</h2>
              <p className="text-stone-400 font-bold text-xs lg:text-sm mt-1 flex items-center gap-2">
                <MapPin size={14} className="text-[#067A52]" /> {t.location}
              </p>

              <div className="grid grid-cols-2 gap-3 lg:gap-4 w-full mt-8 lg:mt-10">
                <div className="bg-stone-50/80 p-4 lg:p-5 rounded-2xl lg:rounded-3xl border border-stone-100 text-center">
                  <p className="text-[8px] lg:text-[10px] font-black text-stone-400 uppercase tracking-widest">{t.land}</p>
                  <p className="text-lg lg:text-xl font-black text-stone-800">2.4 Ac</p>
                </div>
                <div className="bg-stone-50/80 p-4 lg:p-5 rounded-2xl lg:rounded-3xl border border-stone-100 text-center">
                  <p className="text-[8px] lg:text-[10px] font-black text-stone-400 uppercase tracking-widest">{t.crop}</p>
                  <p className="text-lg lg:text-xl font-black text-stone-800">Paddy</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MOTOR TOGGLE - Full width on mobile */}
          <motion.div 
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsMotorOn(!isMotorOn)}
            className={`p-6 lg:p-8 rounded-[2.5rem] lg:rounded-[3rem] cursor-pointer transition-all duration-500 border-2 flex items-center justify-between shadow-xl ${
              isMotorOn ? "bg-[#067A52] border-green-400 shadow-green-200" : "bg-white border-stone-100 shadow-stone-100"
            }`}
          >
            <div className="flex items-center gap-4 lg:gap-5">
              <div className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl ${isMotorOn ? "bg-white/20 text-white" : "bg-red-50 text-red-500"}`}>
                <Power size={24} className={isMotorOn ? "animate-pulse" : ""} />
              </div>
              <div>
                <p className={`font-black text-lg lg:text-xl ${isMotorOn ? "text-white" : "text-stone-800"}`}>
                  {isMotorOn ? "Motor ON" : "Motor OFF"}
                </p>
                <p className={`text-[10px] font-bold uppercase tracking-widest ${isMotorOn ? "text-white/70" : "text-stone-400"}`}>
                  Pump House #1
                </p>
              </div>
            </div>
            <div className={`w-12 h-7 lg:w-14 lg:h-8 rounded-full relative p-1 transition-colors ${isMotorOn ? "bg-green-400" : "bg-stone-200"}`}>
              <motion.div 
                animate={{ x: isMotorOn ? 20 : 0 }} // Adjusted for mobile width
                className="w-5 h-5 lg:w-6 lg:h-6 bg-white rounded-full shadow-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: METRICS & SETTINGS */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <MetricBox icon={<Droplets className="text-blue-500" />} label="Soil" value="62%" />
            <MetricBox icon={<Thermometer className="text-orange-500" />} label="Temp" value="32°C" />
          </div>

          <div className="bg-white rounded-[2.5rem] lg:rounded-[3.5rem] p-2 lg:p-4 shadow-sm border border-stone-100">
            <SettingsItem icon={<Globe />} title="Language" current={language === "EN" ? "English" : "Tamil"} />
            <SettingsItem icon={<ShieldCheck />} title="Privacy" current="Active" />
            <SettingsItem icon={<Settings />} title="Alerts" current="SMS" />
          </div>

          <button className="w-full p-6 lg:p-8 rounded-[2rem] lg:rounded-[3rem] bg-stone-900 text-white flex items-center justify-between group overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 font-black text-lg lg:text-xl italic tracking-widest">{t.logout}</span>
            <LogOut size={20} className="relative z-10 lg:hidden" />
            <LogOut size={24} className="relative z-10 hidden lg:block group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Sub-components with responsive text
function MetricBox({ icon, label, value }: any) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 lg:p-8 rounded-[2.5rem] border border-stone-100 shadow-sm flex flex-col items-center lg:items-start text-center lg:text-left">
      <div className="bg-stone-50 w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4">{icon}</div>
      <p className="text-[10px] font-black text-stone-300 uppercase tracking-widest">{label}</p>
      <p className="text-2xl lg:text-3xl font-black text-stone-800">{value}</p>
    </motion.div>
  );
}

function SettingsItem({ icon, title, current }: any) {
  return (
    <div className="flex items-center justify-between p-5 lg:p-6 hover:bg-stone-50 rounded-[2rem] lg:rounded-[2.5rem] transition-all group cursor-pointer">
      <div className="flex items-center gap-3 lg:gap-4">
        <div className="text-stone-400 group-hover:text-[#067A52] transition-colors scale-90 lg:scale-100">{icon}</div>
        <span className="font-bold text-sm lg:text-base text-stone-700">{title}</span>
      </div>
      <div className="flex items-center gap-2 lg:gap-3">
        <span className="text-[8px] lg:text-[10px] font-black text-stone-300 uppercase tracking-widest">{current}</span>
        <ChevronRight size={16} className="text-stone-200 group-hover:text-stone-800" />
      </div>
    </div>
  );
}