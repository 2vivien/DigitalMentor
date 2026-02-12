"use client";

import { Star } from "lucide-react";

const mentors = [
    {
        name: "Ronald Richards",
        role: "IA & Automatisation",
        rating: "5.0",
        students: "1,200",
        seed: "George"
    },
    {
        name: "Theresa Webb",
        role: "Développement Web",
        rating: "4.9",
        students: "850",
        seed: "Avery"
    },
    {
        name: "Leslie Alexander",
        role: "Design UI/UX",
        rating: "4.8",
        students: "920",
        seed: "Zoey"
    },
    {
        name: "Darrell Steward",
        role: "Marketing Digital",
        rating: "5.0",
        students: "1,500",
        seed: "Leo"
    }
];

export function Mentors() {
    return (
        <section className="py-24 bg-[#FFFDF5] border-t-2 border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-black uppercase text-center mb-16 tracking-tighter text-black">
                    Rencontrez nos mentors
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mentors.map((mentor, index) => (
                        <div
                            key={index}
                            className="bg-white border-2 border-black rounded-2xl p-6 text-center hover:translate-y-[-4px] transition-all duration-300 shadow-[8px_8px_0px_0px_#000] text-black"
                        >
                            <div className="relative mb-6 mx-auto w-32 h-32">
                                <div className="absolute inset-0 bg-neo-yellow rounded-full border-2 border-black -rotate-6"></div>
                                <img
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${mentor.seed}`}
                                    alt={mentor.name}
                                    className="relative z-10 w-full h-full rounded-full border-2 border-black bg-white"
                                />
                            </div>

                            <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                            <p className="text-sm font-medium text-gray-500 mb-4">{mentor.role}</p>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-neo-yellow text-black" />
                                    <span className="font-bold text-sm">{mentor.rating}</span>
                                </div>
                                <div className="text-xs text-gray-400 font-medium">({mentor.students} mentorés)</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
