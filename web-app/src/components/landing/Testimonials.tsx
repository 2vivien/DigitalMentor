"use client";

import { Quote } from "lucide-react";

const testimonials = [
  { name: "Ziv Reich", role: "Software Developer", quote: "Stumbled across your UI kit and grabbed it right away. Genuinely impressed! It's new, active, and getting constant improvements.", seed: "Felix" },
  { name: "Cameron Blackwood", role: "Content Creator", quote: "Added a ton of these components to my personal site. Really nice to see a different approach to a UI Lib style wise. Nice work!", seed: "Aneka" },
  { name: "Manoj Ahirwar", role: "Founder @ UseArticle", quote: "Finally rebuilt my personal website - big shoutout to RetroUI for introducing me to this fun library!", seed: "Manoj" },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Loved By <span className="bg-neo-yellow px-2 italic border-2 border-black inline-block transform -rotate-1 shadow-[4px_4px_0px_0px_#000]">Devs</span>, <span className="bg-neo-yellow px-2 italic border-2 border-black inline-block transform rotate-1 shadow-[4px_4px_0px_0px_#000]">Designers</span> & Creators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border-2 border-black p-6 rounded-lg neo-shadow flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 fill-neo-yellow text-black mb-4" />
                <p className="text-lg text-gray-800 font-medium mb-6 leading-relaxed">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-3 border-t-2 border-gray-100 pt-4">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.seed}`} alt={t.name} className="w-10 h-10 bg-gray-300 rounded-full border-2 border-black" />
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500 font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
