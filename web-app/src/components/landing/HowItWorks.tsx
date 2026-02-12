"use client";

import { ChevronRight } from "lucide-react";

const profiles = [
  { 
    id: 1, 
    title: "Le Débutant Absolu", 
    description: "Tu ne connais rien au digital ? Transforme ton temps d'écran en opportunités réelles et cherche un nouveau départ.",
    cta: "Je veux changer ma vie"
  },
  { 
    id: 2, 
    title: "L'Étudiant Ambitieux", 
    description: "Tu veux l'autonomie financière ? Complète ton parcours avec des compétences concrètes pour te démarquer.",
    cta: "Je veux booster mon avenir"
  },
  { 
    id: 3, 
    title: "Le Passionné", 
    description: "Tu maîtrises déjà une compétence mais tu veux aller plus loin ? Apprends à te perfectionner et à monétiser ta passion pour générer des revenus stables.",
    cta: "Je passe au niveau supérieur"
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white border-y-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 uppercase">Pour qui est fait Digital Mentor ?</h2>
          <p className="text-xl text-gray-600 font-medium">Nous accompagnons trois profils types vers la réussite digitale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {profiles.map((profile, i) => (
            <div key={profile.id} className="relative bg-white border-2 border-black p-8 rounded-xl neo-shadow z-10 group hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default flex flex-col">
              <div className="w-12 h-12 bg-neo-yellow border-2 border-black flex items-center justify-center text-xl font-black mb-6 shadow-[3px_3px_0px_0px_#000]">
                {profile.id}
              </div>
              <h3 className="text-2xl font-black tracking-tight mb-3 uppercase">{profile.title}</h3>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8 flex-grow">{profile.description}</p>
              
              <button className="w-full text-lg font-semibold bg-white border-2 border-black px-4 py-2.5 rounded-lg neo-shadow hover:neo-shadow-hover transition-all text-black uppercase">
                {profile.cta}
              </button>
              
              {i < profiles.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20 bg-white border-2 border-black rounded-full p-1">
                  <ChevronRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
