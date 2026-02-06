"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sun, Leaf, Sprout, Users, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OnboardingFlow() {
  const [view, setView] = useState<'language' | 'slides'>('language');
  const [step, setStep] = useState(0);
  const [selectedLang, setSelectedLang] = useState<'ta' | 'en'>('ta');
  const router = useRouter();

  const slides = [
    {
      title: "Daily Guidance",
      description: "Get simple daily farming guidance for your crops.",
      icon: <Sun className="w-12 h-12 text-orange-500" strokeWidth={2.5} />,
      iconBg: "bg-orange-50"
    },
    {
      title: "Expert Advice",
      description: "Know exactly what to do today - irrigation, fertilizer, and schemes.",
      icon: <Sprout className="w-12 h-12 text-[#007D58]" strokeWidth={2.5} />,
      iconBg: "bg-[#E6F7F1]"
    },
    {
      title: "Farmer Community",
      description: "Connect with other farmers, share experiences, and grow together.",
      icon: <Users className="w-12 h-12 text-blue-500" strokeWidth={2.5} />,
      iconBg: "bg-blue-50"
    }
  ];

  const handleNext = () => {
    if (view === 'language') {
      setView('slides');
    } else if (step < slides.length - 1) {
      setStep(step + 1);
    } else {
      // SAVE STATE: Mark onboarding as complete so splash/onboarding is skipped next time
      localStorage.setItem('onboardingComplete', 'true');
      router.push('/dashboard'); 
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col font-sans">
      <AnimatePresence mode="wait">
        {view === 'language' ? (
          <motion.div 
            key="lang" exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col items-center justify-center p-6 bg-[#F4F7F5]"
          >
            <div className="w-16 h-16 bg-[#D1F2E1] rounded-full flex items-center justify-center mb-4 shadow-sm">
              <Leaf className="text-[#005D43] w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-[#004D3A] mb-8">Uzhavan Thozhan</h1>
            
            <div className="w-full max-w-sm space-y-4">
              {['ta', 'en'].map((lang) => (
                <button 
                  key={lang} onClick={() => setSelectedLang(lang as 'ta' | 'en')}
                  className={`w-full flex items-center justify-between p-5 rounded-xl border-2 transition-all bg-white ${selectedLang === lang ? 'border-[#10B981]' : 'border-transparent shadow-sm'}`}
                >
                  <div className="text-left font-bold text-[#004D3A]">
                    {lang === 'ta' ? 'தமிழ்' : 'English'}
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedLang === lang ? 'border-[#10B981]' : 'border-gray-300'}`}>
                    {selectedLang === lang && <div className="w-3 h-3 bg-[#10B981] rounded-full" />}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="slides" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="flex-1 flex flex-col"
          >
            <div className="p-6 flex justify-end">
              <button onClick={() => {
                localStorage.setItem('onboardingComplete', 'true');
                router.push('/dashboard');
              }} className="text-gray-400 font-medium">Skip</button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
              <div className={`w-32 h-32 ${slides[step].iconBg} rounded-full flex items-center justify-center mb-8 shadow-sm`}>
                {slides[step].icon}
              </div>
              <h1 className="text-2xl font-bold text-slate-800 mb-3">{slides[step].title}</h1>
              <p className="text-gray-500 max-w-[280px] leading-relaxed">{slides[step].description}</p>
              <div className="flex space-x-2 mt-10">
                {slides.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${step === i ? 'w-8 bg-[#007D58]' : 'w-2 bg-gray-200'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="p-6 pb-12 bg-transparent">
        <button onClick={handleNext} className="w-full bg-[#007D58] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg">
          {view === 'language' ? 'Continue' : step === slides.length - 1 ? "Get Started" : "Next"} 
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}