"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LanguagePage() {
  const [selected, setSelected] = useState<'ta' | 'en'>('ta');
  const router = useRouter();

  const handleContinue = () => {
    // Save preference (optional)
    localStorage.setItem('preferred-language', selected);
    // Link to the next page
    router.push('/onboarding');
  };

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F4F7F5] p-6">
      <div className="flex flex-col items-center mb-10">
        <div className="w-16 h-16 bg-[#D1F2E1] rounded-full flex items-center justify-center mb-4 shadow-sm">
          <Leaf className="text-[#005D43] w-8 h-8" strokeWidth={2.5} />
        </div>
        <h1 className="text-2xl font-bold text-[#004D3A] tracking-tight">Uzhavan Thozhan</h1>
        <p className="text-gray-500 text-sm mt-1">Select your language</p>
      </div>

      <div className="w-full max-w-sm space-y-4">
        {['ta', 'en'].map((id) => (
          <button
            key={id}
            onClick={() => setSelected(id as 'ta' | 'en')}
            className={`w-full flex items-center justify-between p-5 rounded-xl border-2 transition-all 
              ${selected === id ? 'border-[#10B981] bg-white' : 'border-gray-200 bg-white/50'}`}
          >
            <div className="text-left">
              <div className={`text-xl font-bold ${selected === id ? 'text-[#004D3A]' : 'text-gray-400'}`}>
                {id === 'ta' ? 'தமிழ்' : 'English'}
              </div>
              <div className="text-xs text-gray-400">{id === 'ta' ? 'Tamil' : 'Secondary'}</div>
            </div>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center 
              ${selected === id ? 'border-[#10B981]' : 'border-gray-300'}`}>
              {selected === id && <div className="w-3 h-3 bg-[#10B981] rounded-full" />}
            </div>
          </button>
        ))}
      </div>

      <motion.button 
        whileTap={{ scale: 0.98 }}
        onClick={handleContinue}
        className="mt-12 w-full max-w-sm bg-[#005D43] text-white py-4 rounded-xl font-semibold shadow-lg"
      >
        Continue
      </motion.button>
    </div>
  );
}