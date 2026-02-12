"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const showcaseItems = [
  { title: "RozeBunker", category: "E-commerce", badge: "Site", color: "bg-neo-yellow", content: "IMAGE" },
  { title: "Kristi Digital", category: "Portfolio", badge: "Portfolio", color: "bg-gray-100", dotPattern: true },
  { title: "G' Maru", category: "Creative Agency", badge: "Agency", color: "bg-blue-600", text: "G' MARU" },
  { title: "Vibe Studios", category: "Entertainment", badge: "Fun", color: "bg-pink-400", text: "VIBE" },
];

export function Showcase() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <section className="py-24 bg-background min-h-[600px]" />;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">All The Cool Companies 😎 Are Using</h2>
        <div className="inline-block transform rotate-2">
          <span className="bg-neo-yellow border-2 border-black px-4 py-1 text-3xl sm:text-4xl font-semibold italic tracking-tight shadow-[4px_4px_0px_0px_#000]">
            Neo Brutalism
          </span>
        </div>
        <p className="text-xl text-gray-600 mt-8 max-w-2xl mx-auto">
          See how top companies are using brutal design to stand out and grab attention.
        </p>
      </div>

      <div className="flex overflow-x-auto pb-12 gap-6 px-4 no-scrollbar max-w-[100vw]">
        {showcaseItems.map((item, i) => (
          <div key={i} className="min-w-[320px] md:min-w-[400px] border-2 border-black rounded-xl overflow-hidden neo-shadow bg-white">
            <div className={cn("h-48 border-b-2 border-black flex items-center justify-center overflow-hidden relative", item.color)}>
              {item.dotPattern && <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />}
              {item.content && <span className="text-5xl font-bold opacity-20">{item.content}</span>}
              {item.text && <span className={cn("text-5xl font-black italic", item.title === "G' Maru" ? "text-neo-yellow" : "text-white")}>{item.text}</span>}
              {item.title === "Kristi Digital" && <h3 className="text-3xl font-black tracking-tighter text-center z-10">I DESIGN FOR<br/>GROWTH.</h3>}
            </div>
            <div className="p-5 flex justify-between items-center">
              <div>
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-base text-gray-500 mt-1">{item.category}</p>
              </div>
              <div className="border-2 border-black rounded px-2 py-1 text-xs font-semibold uppercase bg-white">
                {item.badge}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="inline-flex items-center gap-2 bg-neo-yellow border-2 border-black px-6 py-2.5 rounded font-semibold neo-shadow hover:neo-shadow-hover transition-all">
          Start Building
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
    </section>
  );
}
