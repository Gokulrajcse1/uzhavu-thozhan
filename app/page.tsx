import { Sun, Zap, Edit3, ChevronRight, ArrowRight, ShieldCheck, Landmark, Droplet } from "lucide-react";
import Header from "@/components/header";

export default function Home() {
  const schemes = [
    { title: "PM-Kisan", desc: "₹6,000 annual income support for farmers.", icon: <Landmark size={24} />, color: "bg-emerald-50", text: "text-emerald-600" },
    { title: "Crop Insurance", desc: "Financial cover against crop loss or damage.", icon: <ShieldCheck size={24} />, color: "bg-blue-50", text: "text-blue-600" },
    { title: "Solar Pump", desc: "60% subsidy for installing solar water pumps.", icon: <Sun size={24} />, color: "bg-orange-50", text: "text-orange-600" },
    { title: "Kisan Credit", desc: "Low-interest loans for cultivation needs.", icon: <Droplet size={24} />, color: "bg-purple-50", text: "text-purple-600" },
  ];

  return (
    <div className="space-y-8">
  
      
      {/* 2. CROP INFO BANNER */}
      <div className="bg-white p-6 rounded-[2rem] shadow-sm flex justify-between items-center border border-stone-50">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-green-50 text-[#067A52] rounded-2xl">
            <Zap size={24} fill="currentColor" />
          </div>
          <div>
            <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">My Crop Info</p>
            <h2 className="text-xl font-bold text-stone-800">paddy • Thanjavur</h2>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-green-50 text-[#067A52] px-5 py-2 rounded-full font-bold hover:bg-green-100 transition-colors">
          <Edit3 size={18} />
          Edit
        </button>
      </div>

      {/* 3. MAIN DASHBOARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Today's Guidance Card */}
        <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border-b-8 border-b-yellow-400 flex flex-col justify-between group cursor-pointer hover:shadow-md transition-all">
          <div className="flex justify-between items-start">
            <div className="p-4 bg-yellow-50 text-yellow-600 rounded-2xl">
              <Sun size={32} />
            </div>
            <span className="bg-stone-100 text-stone-500 text-xs font-black px-3 py-1 rounded-lg uppercase">Today</span>
          </div>
          <div className="mt-8 flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-bold text-stone-800">Today's Guidance</h3>
              <p className="text-stone-400 font-medium mt-1">💧 Irrigation • 🌱 Fertilizer</p>
            </div>
            <div className="p-2 bg-stone-50 rounded-full text-stone-300 group-hover:text-[#067A52] transition-colors">
              <ChevronRight size={28} />
            </div>
          </div>
        </div>

       {/* Govt Schemes Card */}
<div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-stone-100 overflow-hidden flex flex-col">
  <div className="flex justify-between items-center mb-6">
    <h3 className="text-xl font-bold text-stone-800 tracking-tight">Govt Schemes</h3>
    <button className="text-[#067A52] font-black text-sm hover:underline">See All</button>
  </div>
  
  {/* Horizontal Scroll with hidden scrollbar */}
  <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-2 px-2">
    {schemes.map((scheme, i) => (
      <div 
        key={i} 
        className="min-w-[260px] snap-center bg-stone-50/50 p-6 rounded-[2rem] border border-stone-100 group cursor-pointer hover:bg-white hover:shadow-lg transition-all duration-500"
      >
        <div className={`w-12 h-12 ${scheme.color} ${scheme.text} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          {scheme.icon}
        </div>
        <h4 className="text-lg font-bold text-stone-800 tracking-tight">{scheme.title}</h4>
        <p className="text-stone-400 text-xs font-medium mt-2 leading-relaxed line-clamp-2">
          {scheme.desc}
        </p>
        <div className="mt-4 flex items-center gap-1 text-[#067A52] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
          Apply Now <ArrowRight size={14} />
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Weather Summary */}
        <div className="p-6 bg-white rounded-[2rem] shadow-sm flex items-center gap-6 border border-stone-50 hover:shadow-md transition-all">
          <div className="p-4 bg-blue-50 text-blue-500 rounded-3xl">
            <Sun size={32} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-stone-800">Weather Summary</h4>
            <p className="text-stone-500">32°C • Clear Sky</p>
          </div>
        </div>

        {/* Smart Sensors */}
        <div className="p-6 bg-white rounded-[2rem] shadow-sm flex items-center gap-6 border border-stone-50 hover:shadow-md transition-all">
          <div className="p-4 bg-purple-50 text-purple-500 rounded-3xl">
            <Zap size={32} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-stone-800">Smart Sensors</h4>
            <p className="text-stone-500">Motor: <span className="text-red-500 font-bold uppercase">Off</span> • Soil: 62%</p>
          </div>
        </div>

      </div>
    </div>
  );
}