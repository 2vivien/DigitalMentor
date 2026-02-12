"use client";

import { Users, Award, Briefcase, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "5,000+", label: "Jeunes et entreprises mentorés", color: "text-purple-500" },
  { icon: Award, value: "98%", label: "Taux de satisfaction", color: "text-green-500" },
  { icon: Briefcase, value: "2,500+", label: "Projets réalisés", color: "text-blue-500" },
  { icon: Globe, value: "15+", label: "Expertises couvertes", color: "text-yellow-500" },
];

export function Stats() {
  return (
    <section className="py-12 bg-white border-y-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-4 border-2 border-black rounded-xl neo-shadow bg-[#FFFDF5]">
              <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
              <div className="text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-tighter">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
