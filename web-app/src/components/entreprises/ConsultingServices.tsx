"use client";

import { Brain, Layers, GraduationCap, Zap, BarChart3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Brain,
    title: "Cabinet de Consulting en IA",
    description: "Élaboration de stratégies sur mesure pour intégrer l&apos;intelligence artificielle au cœur de votre modèle d&apos;affaires.",
    color: "bg-neo-yellow",
    shadow: "shadow-[6px_6px_0px_0px_#000000]"
  },
  {
    icon: Layers,
    title: "Intégrateur de Solutions d'IA",
    description: "Déploiement technique et intégration d'outils d'IA générative et prédictive dans vos systèmes existants.",
    color: "bg-neo-pink",
    shadow: "shadow-[6px_6px_0px_0px_#000000]"
  },
  {
    icon: GraduationCap,
    title: "Formateur pour Équipes Internes",
    description: "Programmes de montée en compétences pour que vos collaborateurs deviennent autonomes avec les outils de demain.",
    color: "bg-neo-teal",
    shadow: "shadow-[6px_6px_0px_0px_#000000]"
  },
  {
    icon: Zap,
    title: "Créateur de Systèmes d'Automatisation",
    description: "Conception de workflows automatisés intelligents pour éliminer les tâches répétitives et libérer votre potentiel.",
    color: "bg-neo-coral",
    shadow: "shadow-[6px_6px_0px_0px_#000000]"
  },
  {
    icon: BarChart3,
    title: "Consultant en Business Intelligence",
    description: "Analyse avancée de vos données pour une prise de décision éclairée et une vision prédictive de votre marché.",
    color: "bg-neo-mint",
    shadow: "shadow-[6px_6px_0px_0px_#000000]"
  }
];

export function ConsultingServices() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase">
            Notre Expertise <br /> <span className="text-gray-500">au service de votre croissance</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Nous transformons les entreprises traditionnelles en organisations agiles, automatisées et propulsées par l&apos;intelligence digitale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "border-2 border-black rounded-2xl p-8 flex flex-col h-full hover:translate-y-[-4px] transition-all",
                service.shadow,
                index === 3 || index === 4 ? "md:col-span-1 lg:col-span-1" : ""
              )}
            >
              <div className={cn("w-16 h-16 border-2 border-black rounded-xl flex items-center justify-center mb-6", service.color)}>
                <service.icon className="w-8 h-8 text-black" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-4 leading-tight uppercase">{service.title}</h3>
              <p className="text-lg text-gray-700 font-medium mb-8 flex-grow">
                {service.description}
              </p>
              <motion.button 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 font-bold group"
              >
                En savoir plus 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          ))}
          
          {/* Last block for CTA or special mention */}
          <div className="border-2 border-black rounded-2xl p-8 bg-black text-white flex flex-col justify-center items-center text-center shadow-[6px_6px_0px_0px_#FFDE00]">
            <h3 className="text-3xl font-bold mb-4 italic">Prêt à passer au niveau supérieur ?</h3>
            <p className="mb-8 font-medium opacity-80 text-lg">
              Discutons de vos besoins spécifiques lors d&apos;un audit gratuit.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-neo-yellow text-black border-2 border-black px-6 py-3 rounded-lg font-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[4px_4px_0px_0px_#ffffff]"
            >
              Réserver un Audit
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
