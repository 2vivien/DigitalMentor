"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const expertises = [
  { 
    title: "IA & Automatisation", 
    category: "Technique", 
    badge: "Hot", 
    color: "bg-neo-yellow", 
    description: "Maîtrisez les LLMs et l'automatisation système pour décupler votre productivité." 
  },
  { 
    title: "Full-Stack Software", 
    category: "Ingénierie", 
    badge: "Pro", 
    color: "bg-gray-100", 
    special: true,
    description: "Conception d'applications robustes et scalables avec les technologies modernes."
  },
  { 
    title: "Marketing & Growth", 
    category: "Business", 
    badge: "Impact", 
    color: "bg-blue-600", 
    text: "GROWTH",
    description: "Stratégies d'acquisition et conversion pour dominer votre marché."
  },
  { 
    title: "SaaS & No-Code", 
    category: "Produit", 
    badge: "Fast", 
    color: "bg-pink-400", 
    text: "SAAS",
    description: "Lancez vos propres produits digitaux en un temps record."
  },
];

export function Showcase() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <section className="py-24 bg-[#FFFDF5] min-h-[600px]" />;

  return (
    <section className="py-24 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 uppercase">
          Nos Expertises & Mentorats
        </h2>
        <div className="inline-block transform -rotate-1">
          <span 
            className="bg-neo-yellow border-2 border-black px-6 py-2 text-3xl sm:text-4xl font-black italic shadow-[6px_6px_0px_0px_#000] uppercase"
            style={{ textShadow: '2px 2px 0px #fff' }}
          >
            50+ Modules Techniques
          </span>
        </div>
        <p className="text-xl text-gray-600 mt-10 max-w-2xl mx-auto font-medium">
          Un catalogue complet pour booster votre avenir professionnel et maîtriser les outils de demain.
        </p>
      </div>

      <div className="flex overflow-x-auto pb-12 gap-6 px-4 no-scrollbar max-w-[100vw]">
        {expertises.map((item, i) => (
          <div key={i} className="min-w-[320px] md:min-w-[450px] border-2 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white flex flex-col">
            <div className={cn("h-64 border-b-2 border-black flex items-center justify-center overflow-hidden relative", item.color)}>
              {item.special ? (
                <div className="p-8 text-left w-full h-full flex flex-col justify-center bg-[#FDF4FF]">
                    <h3 className="text-4xl font-black leading-none uppercase mb-2">Build for<br/>Scale.</h3>
                    <div className="w-12 h-1 bg-black mb-4" />
                </div>
              ) : (
                <span className={cn("text-5xl font-black italic uppercase", item.title === "IA & Automatisation" ? "text-black" : "text-white")}>
                  {item.text || "MODULE"}
                </span>
              )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter">{item.title}</h4>
                  <p className="text-base text-gray-500 font-medium">{item.category}</p>
                </div>
                <div className="border-2 border-black rounded px-3 py-1 text-xs font-black uppercase bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {item.badge}
                </div>
              </div>
              <p className="text-gray-600 font-medium line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="inline-flex items-center gap-2 bg-neo-yellow border-2 border-black px-8 py-3 rounded-lg font-bold text-xl neo-shadow hover:neo-shadow-hover transition-all">
          Découvrir tous les modules
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
    </section>
  );
}
