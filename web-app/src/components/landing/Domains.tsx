"use client";

import { Brain, Palette, Code2, TrendingUp } from "lucide-react";

const categories = [
    {
        title: "IA & Automatisation",
        icon: Brain,
        color: "bg-[#D9C4FF]" // Light Purple
    },
    {
        title: "Design & Création",
        icon: Palette,
        color: "bg-[#B1D8FF]" // Light Blue
    },
    {
        title: "Programmation",
        icon: Code2,
        color: "bg-[#FFB1B1]" // Light Red/Coral
    },
    {
        title: "Business & Marketing",
        icon: TrendingUp,
        color: "bg-[#FFF4B1]" // Light Yellow
    }
];

export function Domains() {
    return (
        <section className="py-24 bg-white border-t-2 border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-black uppercase text-center mb-16 tracking-tighter">
                    Top Categories
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className={`w-full aspect-[2/1] ${cat.color} border-2 border-black rounded-xl flex items-center justify-center p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] mb-[-24px] z-0`}>
                                <span className="text-xl font-black uppercase tracking-tight text-center">
                                    {cat.title}
                                </span>
                            </div>
                            <div className="bg-neo-yellow w-14 h-14 border-2 border-black rounded-full flex items-center justify-center z-10 shadow-[2px_2px_0px_0px_#000]">
                                <cat.icon className="w-6 h-6 text-black" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
