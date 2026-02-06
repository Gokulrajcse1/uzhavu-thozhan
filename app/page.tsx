"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to Register after 3 seconds
    const timer = setTimeout(() => {
      router.push('/register');
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="fixed inset-0 z-[10000] bg-[#007D58] flex flex-col items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
          <Leaf className="text-[#007D58] w-12 h-12" strokeWidth={2.5} />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Uzhavan Thozhan</h1>
        <p className="text-green-50/80 text-sm font-medium max-w-[200px] text-center leading-relaxed">
          Simple guidance for everyday farming decisions
        </p>
      </motion.div>

      <div className="absolute bottom-12">
        <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    </div>
  );
}