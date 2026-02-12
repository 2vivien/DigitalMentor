"use client";

import { Cpu, Users, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Cpu,
    title: "Formation IA & Tech",
    description: "Apprenez à maîtriser l&apos;IA, le No-Code, le SaaS et le Marketing Digital avec une approche 100% pratique.",
    color: "bg-[#FFFDF5]",
    iconBg: "bg-neo-pink",
  },
  {
    icon: Users,
    title: "Mentorat Talent",
    description: "Un accompagnement personnalisé pour transformer vos compétences en revenus et percer sur le marché.",
    color: "bg-white",
    iconBg: "bg-neo-teal",
  },
  {
    icon: Building2,
    title: "Consulting Entreprise",
    description: "Nous aidons les entreprises à intégrer l&apos;IA pour automatiser leurs processus et booster leur productivité.",
    color: "bg-white",
    iconBg: "bg-neo-coral",
  },
];

export function Features() {
  return (
    <section className="py-20 border-t-2 border-black bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black uppercase text-center mb-16 tracking-tighter">
          Nos Piliers de Transformation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "border-2 border-black rounded-xl p-8 hover:translate-y-[-4px] transition-transform duration-300 cursor-default",
                feature.color
              )}
              style={{ boxShadow: '5px 5px 0px 0px #FFDE00' }}
            >
              <div className={cn(
                "w-14 h-14 border-2 border-black rounded-lg flex items-center justify-center mb-6",
                feature.iconBg
              )}>
                <feature.icon className="w-7 h-7 text-black" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3 uppercase">{feature.title}</h3>
              <p className="text-lg text-gray-700 font-medium leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
