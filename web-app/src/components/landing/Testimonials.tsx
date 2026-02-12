"use client";

import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  { name: "Ziv Reich", role: "Software Developer", quote: "Stumbled across your UI kit and grabbed it right away. Genuinely impressed! It's new, active, and getting constant improvements.", seed: "Felix" },
  { name: "Cameron Blackwood", role: "Content Creator", quote: "Added a ton of these components to my personal site. Really nice to see a different approach to a UI Lib style wise. Nice work!", seed: "Aneka" },
  { name: "Taseen Tanvir", role: "Founder & Designer", quote: "one of my fav ui libraries for the web. great work on this Arif. Hope it goes above and beyond", seed: "Taseen" },
  { name: "Manoj Ahirwar", role: "Founder @ UseArticle", quote: "Finally rebuilt my personal website - big shoutout to DigitalMentor for introducing me to this fun library!", seed: "Manoj" },
  { name: "Zhengyang Hou", role: "Indie Hacker", quote: "Two of my favorite retro-style UI component libraries: 1. digitalmentor.dev by @ariflogs, 2. neobrutalism.dev by @samuelbreznjak", seed: "Zhen" },
  { name: "Cameron Blackwood", role: "Content Creator", quote: "Added a ton of these components to my personal site. Really nice to see a different approach to a UI Lib style wise. Nice work!", seed: "Aneka2" },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Loved By <span className="bg-neo-yellow px-4 italic border-2 border-black inline-block -rotate-1 shadow-[4px_4px_0px_0px_#000]">Devs</span>, 
            <span className="bg-neo-yellow px-4 italic border-2 border-black inline-block rotate-1 shadow-[4px_4px_0px_0px_#000] mx-2">Designers</span> 
            & <span className="bg-neo-yellow px-4 italic border-2 border-black inline-block -rotate-1 shadow-[4px_4px_0px_0px_#000]">Creators</span>
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <div key={i} className="break-inside-avoid bg-white p-6 rounded-lg border-2 border-black flex flex-col justify-between cursor-default hover:bg-gray-50 transition-colors">
              <div>
                <Quote className="w-8 h-8 fill-neo-yellow text-black mb-4" />
                <p className="text-lg text-gray-800 font-medium mb-6 leading-relaxed">{t.quote}</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
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
