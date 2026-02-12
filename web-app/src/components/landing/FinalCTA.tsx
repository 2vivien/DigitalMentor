"use client";

import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto bg-white border-2 border-black rounded-xl p-10 sm:p-16 neo-shadow text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          Unlock Access to All <br />
          <span className="inline-block relative z-10">
            Components & Templates
            <div className="absolute bottom-2 left-0 w-full h-4 bg-neo-yellow -z-10 opacity-60" />
          </span>
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Get access to all the framer components and build you next framer project. New components added regularly, get started today!
        </p>
        <button className="text-xl font-bold bg-black text-white border-2 border-black px-10 py-4 rounded-lg shadow-[5px_5px_0px_0px_#FFDE00] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#FFDE00] transition-all flex items-center justify-center gap-2 mx-auto">
          Get Unlimited Access
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
