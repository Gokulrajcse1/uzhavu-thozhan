import React from 'react';
import { ArrowLeft, Save, MapPin, Sprout, Calendar, } from 'lucide-react';
import Link from 'next/link';

export default function EditCropPage() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] p-4 md:p-8 font-sans text-[#2D3A35]">
      {/* Header */}
      <div className="max-w-2xl mx-auto flex items-center justify-between mb-8">
        <Link href="/dashboard" className="p-2 hover:bg-white rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-[#007D4E]" />
        </Link>
        <h1 className="text-xl font-bold">Edit Crop Details</h1>
        <div className="w-10" />
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-50">
          
          <div className="space-y-6">
            
            {/* Location Selection */}
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="flex items-center gap-2 text-sm font-semibold text-[#2D3A35]">
                <MapPin className="w-4 h-4 text-[#007D4E]" /> Farm Location / பண்ணை அமைவிடம்
              </label>
              <select 
                id="location"
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#007D4E] outline-none appearance-none"
              >
                <option value="thanjavur">Thanjavur</option>
                <option value="madurai">Madurai</option>
                <option value="trichy">Trichy</option>
              </select>
            </div>

            {/* Crop Variety */}
            <div className="flex flex-col gap-2">
              <label htmlFor="crop-type" className="flex items-center gap-2 text-sm font-semibold text-[#2D3A35]">
                <Sprout className="w-4 h-4 text-[#007D4E]" /> Crop Variety / பயிர் வகை
              </label>
              <input 
                id="crop-type"
                type="text" 
                defaultValue="Paddy (Ponni)"
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#007D4E] outline-none"
                placeholder="Enter crop name"
              />
            </div>

            {/* Sowing Date */}
            <div className="flex flex-col gap-2">
              <label htmlFor="sowing-date" className="flex items-center gap-2 text-sm font-semibold text-[#2D3A35]">
                <Calendar className="w-4 h-4 text-[#007D4E]" /> Sowing Date / விதைப்பு தேதி
              </label>
              <input 
                id="sowing-date"
                type="date" 
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#007D4E] outline-none"
              />
            </div>

            {/* Farm Size & Soil Type Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="land-size" className="text-sm font-semibold text-[#2D3A35]">
                  Land Size (Acres) / நிலத்தின் அளவு
                </label>
                <input 
                  id="land-size"
                  type="number" 
                  step="0.1"
                  placeholder="e.g. 2.5"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#007D4E] outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="soil-type" className="text-sm font-semibold text-[#2D3A35]">
                  Soil Type / மண்ணின் வகை
                </label>
                <select 
                  id="soil-type"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#007D4E] outline-none appearance-none"
                >
                  <option value="clay">Clay Loam</option>
                  <option value="alluvial">Alluvial</option>
                  <option value="red">Red Soil</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 pt-4">
          <button className="flex-1 py-4 bg-[#007D4E] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-[#006640] transition-all">
            <Save className="w-5 h-5" />
            Save Changes
          </button>
          <Link href="/dashboard" className="flex-1 py-4 text-center border-2 border-gray-200 rounded-2xl font-bold text-gray-500 hover:bg-gray-50 transition-colors">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}