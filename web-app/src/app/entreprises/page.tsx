"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ConsultingServices } from "@/components/entreprises/ConsultingServices";
import { Collaboration } from "@/components/landing/Collaboration";
import { motion } from "framer-motion";
import { Zap, Target, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function EntreprisesPage() {
  return (
    <main className="min-h-screen selection:bg-neo-yellow selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-neo-mint border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                className="inline-flex items-center gap-2 bg-neo-yellow border-2 border-black px-4 py-1.5 rounded-xl mb-8 shadow-[4px_4px_0px_0px_#000000]"
              >
                <Zap className="w-4 h-4 text-black fill-black" />
                <span className="text-sm font-black uppercase tracking-wider">Pôle Entreprise & Consulting IA</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 uppercase">
                Le partenaire de votre <br />
                <span className="bg-white border-2 border-black px-4 py-1 inline-block -rotate-1 shadow-[6px_6px_0px_0px_#000000]">
                  Intelligence
                </span> <br /> Digitale.
              </h1>

              <p className="text-xl md:text-2xl text-gray-800 font-medium max-w-2xl mb-10 leading-relaxed">
                Nous accompagnons les organisations dans leur mutation technologique.
                De la formation des talents du futur à l'intégration de systèmes autonomes,
                nous construisons ensemble votre avantage compétitif.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xl font-bold bg-neo-yellow border-2 border-black px-8 py-4 rounded-xl neo-shadow hover:neo-shadow-hover transition-all uppercase"
                >
                  Parler à un consultant
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xl font-bold bg-white border-2 border-black px-8 py-4 rounded-xl neo-shadow hover:neo-shadow-hover transition-all uppercase"
                >
                  Nos études de cas
                </motion.button>
              </div>
            </div>

            <div className="flex-1 relative">
              <motion.div
                initial={{ rotate: 10, opacity: 0 }}
                animate={{ rotate: 5, opacity: 1 }}
                className="bg-white border-4 border-black p-8 rounded-3xl shadow-[12px_12px_0px_0px_#000000] relative z-10"
              >
                <div className="space-y-6">
                  {[
                    { label: "Productivité Boostée", value: "+45%", color: "bg-neo-pink" },
                    { label: "Processus Automatisés", value: "100%", color: "bg-neo-yellow" },
                    { label: "ROI Moyen", value: "3.5x", color: "bg-neo-teal" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between gap-8 border-b-2 border-black pb-4 last:border-0 last:pb-0">
                      <span className="text-xl font-bold uppercase">{stat.label}</span>
                      <span className={cn("text-2xl font-black px-3 py-1 border-2 border-black rounded-lg", stat.color)}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-neo-coral border-2 border-black rounded-full -z-0" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-neo-yellow border-2 border-black rounded-lg rotate-12 -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ConsultingServices />

      {/* Vision / Mission */}
      <section className="py-24 bg-neo-teal border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase leading-tight">
                Une organisation qui <span className="italic">forme les talents du futur</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_#000000]">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase mb-2">Alignement Stratégique</h4>
                    <p className="text-lg font-medium opacity-90">Nous ne déployons pas de technologie pour le plaisir, mais pour répondre à vos objectifs business concrets.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_#000000]">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase mb-2">Culture de l'Innovation</h4>
                    <p className="text-lg font-medium opacity-90">Nous accompagnons vos équipes dans le changement pour instaurer une culture d'innovation continue.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_#000000]">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase mb-2">Résultats Mesurables</h4>
                    <p className="text-lg font-medium opacity-90">Chaque intégration est suivie par des indicateurs de performance clairs (KPI) pour mesurer votre succès.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-10 rounded-3xl shadow-[10px_10px_0px_0px_#000000]">
              <blockquote className="text-3xl font-bold italic leading-tight mb-8">
                "L'intelligence digitale n'est plus une option, c'est le moteur de la croissance moderne. Nous sommes là pour être votre copilote."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-neo-yellow border-2 border-black rounded-full overflow-hidden">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Eurin"
                    alt="Eurin D'ALMEIDA"
                    className="w-full h-full object-cover bg-white"
                  />
                </div>
                <div>
                  <p className="font-bold text-xl uppercase">Eurin D'ALMEIDA</p>
                  <p className="font-medium text-gray-600">Consultant IT & Entrepreneur Numérique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Collaboration />

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="border-4 border-black p-12 rounded-3xl bg-neo-pink shadow-[15px_15px_0px_0px_#000000]">
            <h2 className="text-5xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
              Bâtissons votre futur <br /> dès maintenant
            </h2>
            <p className="text-2xl font-bold mb-10 opacity-90">
              Automatisation, Intelligence, Croissance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white text-2xl font-bold px-12 py-5 rounded-2xl hover:scale-105 transition-transform shadow-[6px_6px_0px_0px_#FFDE00]"
            >
              Contacter le Pôle Entreprise
            </motion.button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
