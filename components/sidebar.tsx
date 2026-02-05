"use client";

import { useState } from "react";
import { Home, Leaf, FileText, User, Sparkles, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: "Home", icon: <Home size={22} />, path: "/" },
    { name: "Advice", icon: <Leaf size={22} />, path: "/advice" },
    { name: "Schemes", icon: <FileText size={22} />, path: "/schemes" },
    { name: "Profile", icon: <User size={22} />, path: "/profile" },
  ];

  const isAssistantActive = pathname === "/assistant";
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* 1. MOBILE TOP BAR (Mela irukura Logo & Menu Icon) */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-stone-100 z-[100] p-4 flex justify-between items-center px-6">
        {/* App Logo & Name */}
        <div className="flex items-center gap-2.5">
          <div className="bg-[#067A52] p-1.5 rounded-lg shadow-lg shadow-green-100">
            <Leaf size={20} fill="white" className="text-white" />
          </div>
          <span className="text-xl font-black text-[#067A52] tracking-tighter italic">Gokul</span>
        </div>
        
        <button 
          onClick={toggleMenu}
          className="p-2 bg-stone-50 rounded-xl text-stone-600 active:scale-90 transition-all"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 2. MOBILE DRAWER MENU (70% Width) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[110] lg:hidden"
            />

            {/* Drawer */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-screen w-[75%] bg-white z-[120] lg:hidden p-8 flex flex-col rounded-r-[3rem] shadow-2xl"
            >
              {/* Drawer Header (Menu kulla irukura Logo) */}
              <div className="flex items-center gap-3 mb-12">
                <div className="bg-[#067A52] p-2 rounded-xl">
                  <Leaf size={22} fill="white" className="text-white" />
                </div>
                <span className="text-2xl font-black text-[#067A52] tracking-tighter italic">Gokul</span>
              </div>

              {/* Menu Items */}
              <nav className="space-y-3">
                {menu.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link 
                      key={item.name} 
                      href={item.path} 
                      onClick={toggleMenu}
                      className={`flex items-center gap-4 p-4 rounded-2xl font-black transition-all ${
                        isActive ? "bg-[#067A52] text-white shadow-lg" : "text-stone-400 active:bg-stone-50"
                      }`}
                    >
                      {item.icon}
                      <span className="text-lg">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Bottom Assistant Button */}
              <div className="mt-auto">
                <Link href="/assistant" onClick={toggleMenu}>
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className={`w-full p-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl font-black ${
                      isAssistantActive ? "bg-[#067A52] text-white" : "bg-[#2DD4BF] text-white"
                    }`}
                  >
                    <Sparkles size={20} fill="white" />
                    <span>Ask Assistant</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 3. DESKTOP SIDEBAR (Unchanged with Name & Icon) */}
      <aside className="hidden lg:flex w-72 flex-col bg-white border-r border-stone-100 h-screen sticky top-0 p-8">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-4 mb-12 px-2">
          <div className="bg-[#067A52] p-2.5 rounded-[1rem] text-white shadow-xl shadow-green-100">
            <Leaf size={26} fill="white" />
          </div>
          <h1 className="text-3xl font-black text-[#067A52] tracking-tighter italic">Gokul</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-4">
          {menu.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.name} href={item.path} className="relative flex items-center px-4 py-4 rounded-2xl group overflow-hidden">
                {isActive && (
                  <motion.div
                    layoutId="activeNavBox"
                    className="absolute inset-0 bg-[#067A52] rounded-2xl shadow-md"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <motion.div
                  animate={{ x: isActive ? 12 : 0 }}
                  className={`relative z-10 flex items-center gap-4 ${isActive ? "text-white" : "text-stone-400"}`}
                >
                  {item.icon}
                  <span className="font-bold text-lg">{item.name}</span>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Assistant Button */}
        <Link href="/assistant" className="mt-auto block">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full p-5 rounded-[2.2rem] flex items-center justify-center gap-3 shadow-lg font-black transition-all ${
              isAssistantActive ? "bg-[#067A52] text-white" : "bg-[#2DD4BF] text-white"
            }`}
          >
            <Sparkles size={22} fill="white" />
            <span>Ask Assistant</span>
          </motion.button>
        </Link>
      </aside>
    </>
  );
}