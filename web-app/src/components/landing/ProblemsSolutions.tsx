"use client";

import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

export function ProblemsSolutions() {
  const problems = [
    {
      title: "Formations en ligne inefficaces",
      description: "Tu as acheté des formations qui promettaient monts et merveilles, mais tu n'as rien appris de concret."
    },
    {
      title: "Temps perdu sur les réseaux",
      description: "Tu passes des heures à scroller sans rien apprendre d'utile pour ton avenir."
    },
    {
      title: "Mentors inaccessibles",
      description: "Personne pour te guider vraiment ou répondre à tes questions spécifiques."
    },
    {
      title: "Promesses vides",
      description: "Des méthodes miracles qui ne marchent pas dans la réalité africaine."
    }
  ];

  const solutions = [
    {
      title: "Formations pratiques et concrètes",
      description: "Pas de théorie inutile, seulement ce qui marche vraiment sur le terrain."
    },
    {
      title: "Mentorat personnalisé",
      description: "Des experts disponibles pour te guider pas à pas vers la réussite."
    },
    {
      title: "Communauté active",
      description: "Rejoins des milliers de jeunes qui construisent leur avenir comme toi."
    },
    {
      title: "Résultats garantis",
      description: "Notre engagement : ta réussite ou ton argent remboursé."
    }
  ];

  return (
    <section className="py-24 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Problèmes */}
          <div className="bg-white border-2 border-black p-8 rounded-2xl shadow-[8px_8px_0px_0px_#ef4444]">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-100 p-3 border-2 border-black rounded-lg">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter text-red-600">
                Les problèmes que tu connais trop bien...
              </h2>
            </div>
            <ul className="space-y-6">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-red-600 font-black text-2xl mt-1">✗</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                    <p className="text-gray-600">{p.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-white border-2 border-black p-8 rounded-2xl shadow-[8px_8px_0px_0px_#22c55e]">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-green-100 p-3 border-2 border-black rounded-lg">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter text-green-600">
                La solution Digital Mentor
              </h2>
            </div>
            <ul className="space-y-6">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-green-600 font-black text-2xl mt-1">✓</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
                    <p className="text-gray-600">{s.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-4 text-center">
              <p className="text-xl font-black uppercase italic italic-neo">Prêt à transformer ta vie ?</p>
              <button className="w-full bg-neo-yellow border-2 border-black py-4 rounded-xl font-black text-xl uppercase neo-shadow hover:neo-shadow-hover transition-all flex items-center justify-center gap-2">
                Je commence ma transformation
                <ArrowRight className="w-6 h-6" />
              </button>
              <p className="text-sm font-bold text-gray-600">
                Rejoins les 5,000+ jeunes qui ont déjà pris leur avenir en main
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
