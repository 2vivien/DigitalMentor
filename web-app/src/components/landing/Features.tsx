"use client";

import { LayoutTemplate, Monitor, Figma } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: LayoutTemplate,
    title: "UI Blocks",
    description: "Get 100+ unique UI blocks that you can just copy & paste into your project.",
    color: "bg-neo-pink",
  },
  {
    icon: Monitor,
    title: "Templates",
    description: "Bold, unique & responsive website templates, built with React & Next.js.",
    color: "bg-neo-mint",
    iconBg: "bg-neo-teal",
  },
  {
    icon: Figma,
    title: "Figma Kit",
    description: "Love to customize? Get access to Figma versions of our components.",
    color: "bg-background",
    iconBg: "bg-neo-coral",
  },
];

export function Features() {
  return (
    <section className="py-20 border-t-2 border-black bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "border-2 border-black rounded-xl p-8 neo-shadow hover:translate-y-[-4px] transition-transform duration-300",
                feature.color
              )}
            >
              <div className={cn(
                "w-14 h-14 border-2 border-black rounded-lg flex items-center justify-center mb-6",
                feature.iconBg || "bg-neo-pink"
              )}>
                <feature.icon className="w-7 h-7 text-black" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-3">{feature.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
