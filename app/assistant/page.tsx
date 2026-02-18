"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mic, 
  Send, 
  Sparkles, 
  Leaf, 
  CloudRain, 
  TrendingUp, 
  Bot,
  User,
  MoreVertical,
  Plus
} from "lucide-react";

export default function AssistantPage() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Vanakkam! I am your Uzhavu Assistant. How can I help your farm today?" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickActions = [
    { label: "Pest", icon: <Leaf className="text-green-500" size={18} /> },
    { label: "Weather", icon: <CloudRain className="text-blue-500" size={18} /> },
    { label: "Market", icon: <TrendingUp className="text-orange-500" size={18} /> },
  ];

  return (
    // Mobile-friendly height adjustment
    <div className="h-[calc(100vh-100px)] md:h-[calc(100vh-80px)] flex flex-col max-w-5xl mx-auto overflow-hidden">
      
      {/* 1. ASSISTANT HEADER - More compact on mobile */}
      <header className="flex items-center justify-between p-4 md:p-6 bg-white/50 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] border border-stone-100 mb-4 md:mb-6 shadow-sm mx-2 md:mx-0">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-tr from-[#067A52] to-[#2DD4BF] rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Bot size={24} className="md:w-[28px]" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 md:w-4 md:h-4 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-black text-stone-800 tracking-tight leading-none">Uzhavu AI</h2>
            <p className="text-[10px] md:text-xs text-green-600 font-bold flex items-center gap-1 mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-green-500"></span>
              </span>
              Online • Ready
            </p>
          </div>
        </div>
        <button
          aria-label="Options"
          className="p-2 md:p-3 hover:bg-stone-100 rounded-xl md:rounded-2xl transition-colors text-stone-400">
          <MoreVertical size={20} />
        </button>
      </header>

      {/* 2. CHAT AREA */}
      <div className="flex-1 overflow-y-auto px-4 md:px-2 space-y-4 md:space-y-6 scrollbar-hide">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[90%] md:max-w-[80%] flex gap-2 md:gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex-shrink-0 flex items-center justify-center shadow-sm ${
                  msg.role === "user" ? "bg-white text-stone-400" : "bg-[#067A52] text-white"
                }`}>
                  {msg.role === "user" ? <User size={16} /> : <Sparkles size={16} />}
                </div>
                <div className={`p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] shadow-sm text-sm md:text-lg leading-relaxed ${
                  msg.role === "user" 
                  ? "bg-[#067A52] text-white rounded-tr-none" 
                  : "bg-white text-stone-700 rounded-tl-none border border-stone-100"
                }`}>
                  {msg.text}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 3. QUICK ACTIONS & INPUT */}
      <div className="p-4 md:p-6 space-y-4 md:space-y-6">
        {/* Quick Action Pills - Scrollable on very small screens */}
        <div className="flex gap-2 md:gap-3 justify-start md:justify-center overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {quickActions.map((action, i) => (
            <motion.button
              whileHover={{ y: -5 }}
              key={i}
              className="px-4 md:px-6 py-2 md:py-3 bg-white border border-stone-100 rounded-full shadow-sm flex items-center gap-2 text-xs md:text-sm font-bold text-stone-600 whitespace-nowrap hover:border-[#067A52] hover:text-[#067A52] transition-all"
            >
              {action.icon}
              {action.label}
            </motion.button>
          ))}
        </div>

        {/* INPUT BOX - Adjusted for mobile thumbs */}
        <div className="relative flex items-center gap-2 md:gap-4 bg-white p-2 md:p-4 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl shadow-green-900/10 border border-stone-100">
          <div className="flex gap-1 md:gap-2">
            <button 
              aria-label="voice input"
              className="p-3 md:p-4 bg-stone-50 text-stone-400 rounded-full hover:bg-stone-100 transition-all">
              <Mic size={20} className="md:w-[24px]" />
            </button>
            <button 
              aria-label="attach file"
              className="p-3 md:p-4 bg-stone-50 text-stone-400 rounded-full hover:bg-stone-100 transition-all">
              <Plus size={20} className="md:w-[24px]" />
            </button>
          </div>
          
          <input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 bg-transparent border-none outline-none text-sm md:text-lg font-medium text-stone-800 placeholder:text-stone-300"
          />

          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="p-3 md:p-4 bg-[#067A52] text-white rounded-full shadow-lg shadow-green-200 flex-shrink-0"
          >
            <Send size={20} className="md:w-[24px]" />
          </motion.button>
        </div>
      </div>

    </div>
  );
}