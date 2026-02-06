"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Leaf, User, Lock, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RegisterPage() {
  const router = useRouter();

  return (
    /**
     * 'fixed inset-0' covers the entire screen.
     * 'z-[9999]' ensures it sits above the Sidebar and Header.
     * 'bg-[#F4F7F5]' hides the layout behind a solid background.
     */
    <div className="fixed inset-0 z-[9999] bg-[#F4F7F5] flex flex-col items-center justify-center p-6 overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-sm border border-stone-50"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-[#D1F2E1] rounded-full flex items-center justify-center mb-4">
            <Leaf className="text-[#005D43] w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-[#004D3A]">Create Account</h1>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <User className="absolute left-4 top-4 text-stone-300" size={20} />
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-stone-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-[#10B981]" 
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-4 top-4 text-stone-300" size={20} />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="w-full bg-stone-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-[#10B981]" 
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-4 text-stone-300" size={20} />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-stone-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-[#10B981]" 
            />
          </div>

          <button 
            onClick={() => router.push('/login')}
            className="w-full bg-[#007D58] text-white py-4 rounded-2xl font-bold mt-4 flex items-center justify-center gap-2 hover:bg-[#006346] transition-all shadow-lg shadow-green-100"
          >
            Register <ArrowRight size={20} />
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-stone-400">
          Already have an account?{" "}
          <button 
            onClick={() => router.push('/login')} 
            className="font-bold text-[#007D58] hover:underline"
          >
            Login
          </button>
        </p>
      </motion.div>
    </div>
  );
}