"use client";

import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto bg-white border-2 border-black rounded-xl p-10 sm:p-16 neo-shadow text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          Passez au Niveau Supérieur avec <br />
          <span 
            className="inline-block italic mt-4 text-black"
            style={{ textShadow: '3px 3px 0px #FFDE00' }}
          >
            DigitalMentor
          </span>
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
          Que vous soyez un talent en quête de mentorat ou une entreprise prête pour l'IA, nous avons les solutions pour vous faire réussir.
        </p>
        <button className="text-xl font-bold bg-black text-white border-2 border-black px-10 py-4 rounded-lg shadow-[5px_5px_0px_0px_#FFDE00] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#FFDE00] transition-all flex items-center justify-center gap-2 mx-auto">
          Démarrer ma transformation
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-6 h-6"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
    </section>
  );
}
