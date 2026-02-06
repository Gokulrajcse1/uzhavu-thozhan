"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Leaf, Lock, Phone, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // 1. Save the flag to skip onboarding/splash in the future
    localStorage.setItem('onboardingComplete', 'true');
    
    // 2. Navigate directly to the dashboard
    router.push('/dashboard'); 
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-[#F4F7F5] flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-sm border border-stone-50"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-[#D1F2E1] rounded-full flex items-center justify-center mb-4">
            <Leaf className="text-[#005D43] w-8 h-8" strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-bold text-[#004D3A]">Welcome Back</h1>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <Phone className="absolute left-4 top-4 text-stone-300" size={20} />
            <input type="tel" placeholder="Phone Number" className="w-full bg-stone-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-[#10B981]" />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-4 text-stone-300" size={20} />
            <input type="password" placeholder="Password" className="w-full bg-stone-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-[#10B981]" />
          </div>

          <button 
            onClick={handleLogin}
            className="w-full bg-[#007D58] text-white py-4 rounded-2xl font-bold mt-2 flex items-center justify-center gap-2 hover:bg-[#006346] transition-all shadow-lg"
          >
            Login <ChevronRight size={20} />
          </button>
        </form>
      </motion.div>
    </div>
  );
}