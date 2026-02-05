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
    { label: "Pest Control", icon: <Leaf className="text-green-500" /> },
    { label: "Weather Forecast", icon: <CloudRain className="text-blue-500" /> },
    { label: "Market Price", icon: <TrendingUp className="text-orange-500" /> },
  ];

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col max-w-5xl mx-auto overflow-hidden">
      
      {/* 1. ASSISTANT HEADER */}
      <header className="flex items-center justify-between p-6 bg-white/50 backdrop-blur-md rounded-[2.5rem] border border-stone-100 mb-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-tr from-[#067A52] to-[#2DD4BF] rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Bot size={28} />
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <h2 className="text-xl font-black text-stone-800 tracking-tight">Uzhavu AI</h2>
            <p className="text-xs text-green-600 font-bold flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Online • Ready to assist
            </p>
          </div>
        </div>
        <button
        aria-label="ver"
         className="p-3 hover:bg-stone-100 rounded-2xl transition-colors text-stone-400">
          <MoreVertical />
        </button>
      </header>

      {/* 2. CHAT AREA */}
      <div className="flex-1 overflow-y-auto px-4 space-y-6 scrollbar-hide">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[80%] flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center shadow-sm ${
                  msg.role === "user" ? "bg-white text-stone-400" : "bg-[#067A52] text-white"
                }`}>
                  {msg.role === "user" ? <User size={20} /> : <Sparkles size={20} />}
                </div>
                <div className={`p-5 rounded-[2rem] shadow-sm text-lg leading-relaxed ${
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
      <div className="p-6 space-y-6">
        {/* Quick Action Pills */}
        <div className="flex gap-3 justify-center">
          {quickActions.map((action, i) => (
            <motion.button
              whileHover={{ y: -5 }}
              key={i}
              className="px-6 py-3 bg-white border border-stone-100 rounded-full shadow-sm flex items-center gap-2 text-sm font-bold text-stone-600 hover:border-[#067A52] hover:text-[#067A52] transition-all"
            >
              {action.icon}
              {action.label}
            </motion.button>
          ))}
        </div>

        {/* INPUT BOX - THE MASS UI PART */}
        <div className="relative flex items-center gap-4 bg-white p-4 rounded-[3rem] shadow-2xl shadow-green-900/5 border border-stone-100">
          <button 
          aria-label="mic"
          className="p-4 bg-stone-50 text-stone-400 rounded-full hover:bg-stone-100 transition-all">
            <Mic size={24} />
          </button>
           <button 
          aria-label="mic"
          className="p-4 bg-stone-50 text-stone-400 rounded-full hover:bg-stone-100 transition-all">
            <Plus size={24} />
          </button>
          
          <input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything about your farm..."
            className="flex-1 bg-transparent border-none outline-none text-lg font-medium text-stone-800 placeholder:text-stone-300"
          />

          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-[#067A52] text-white rounded-full shadow-lg shadow-green-200"
          >
            <Send size={24} />
          </motion.button>
        </div>
      </div>

    </div>
  );
}