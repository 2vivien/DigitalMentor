"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  { 
    name: "Jean-Baptiste", 
    role: "Débutant Absolu", 
    quote: "Je ne connaissais rien au digital. Grâce au mentorat, j&apos;ai transformé mon temps d&apos;écran en vraies compétences techniques. Un changement de vie radical !", 
    seed: "Felix" 
  },
  { 
    name: "Sarah L.", 
    role: "Développeuse Full-Stack", 
    quote: "Le niveau d&apos;expertise technique ici est impressionnant. J&apos;ai enfin pu maîtriser l&apos;intégration poussée de l&apos;IA dans mes applications scalables. On apprend à réfléchir comme des ingénieurs, pas juste à copier du code.", 
    seed: "Aneka" 
  },
  { 
    name: "TechCorp Solutions", 
    role: "Entreprise", 
    quote: "Le consulting en IA de DigitalMentor a permis d&apos;automatiser 40% de nos processus internes. Un gain de productivité immédiat et mesurable pour nos équipes.", 
    seed: "Taseen" 
  },
  { 
    name: "Marc-Antoine", 
    role: "Professionnel Marketing", 
    quote: "Enfin une plateforme qui privilégie la pratique. Les stratégies de growth et d&apos;automatisation sont directement applicables à mon business.", 
    seed: "Manoj" 
  },
  { 
    name: "Léa D.", 
    role: "UI Designer", 
    quote: "L&apos;approche créative et les outils d&apos;IA suggérés m&apos;ont permis de diviser mon temps de production par deux tout en restant hyper qualitative. Indispensable pour tout créatif moderne.", 
    seed: "Zhen" 
  },
  { 
    name: "Thomas G.", 
    role: "Développeur Software", 
    quote: "Au-delà des cours, c&apos;est le mentorat personnalisé qui fait la différence.", 
    seed: "Aneka2" 
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Aimé par les <span className="bg-neo-yellow px-4 italic border-2 border-black inline-block -rotate-1 shadow-[4px_4px_0px_0px_#000]">Devs</span>, 
            <span className="bg-neo-yellow px-4 italic border-2 border-black inline-block rotate-1 shadow-[4px_4px_0px_0px_#000] mx-2">Designers</span> 
            & <span className="bg-neo-yellow px-4 italic border-2 border-black inline-block -rotate-1 shadow-[4px_4px_0px_0px_#000]">Professionnels</span>
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <div key={i} className="break-inside-avoid bg-white p-6 rounded-lg border-2 border-black flex flex-col justify-between cursor-default hover:bg-gray-50 transition-colors">
              <div>
                <Quote className="w-8 h-8 fill-neo-yellow text-black mb-4" />
                <p className="text-lg text-gray-800 font-medium mb-6 leading-relaxed">&quot;{t.quote}&quot;</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.seed}`} alt={t.name} width={40} height={40} unoptimized className="w-10 h-10 bg-gray-300 rounded-full border-2 border-black" />
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
