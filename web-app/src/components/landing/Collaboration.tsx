"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Users } from "lucide-react";

export function Collaboration() {
  return (
    <section className="py-24 bg-white border-t-2 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top content: Illustration & Main Text */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
              Collaborons <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-neo-yellow" style={{ WebkitTextStroke: '2px black' }}>Ensemble.</span>
              </span>
            </h2>
            <p className="text-xl md:text-2xl font-bold text-gray-800 mb-10 leading-relaxed max-w-2xl">
              Expert indépendant ou entreprise innovante ? <br />
              Rejoignez le mouvement Digital Mentor pour bâtir le futur de la tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white text-xl font-black px-8 py-4 rounded-xl shadow-[6px_6px_0px_0px_#FFDE00] hover:shadow-none transition-all uppercase"
              >
                Devenir Partenaire
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-neo-yellow text-black text-xl font-black px-8 py-4 rounded-xl border-2 border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-none transition-all uppercase"
              >
                Postuler comme Expert
              </motion.button>
            </div>
          </div>

          <div className="flex-[1.5] relative order-first lg:order-last mb-16 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <Image
                src="/images/collaboration.png"
                alt="Collaboration teams"
                width={600}
                height={400}
                className="w-full h-auto drop-shadow-[30px_30px_0px_rgba(0,0,0,0.1)] scale-125"
              />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-neo-yellow opacity-10 blur-3xl rounded-full -z-0" />
          </div>
        </div>

        {/* Bottom Row: Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#FFE4D6] border-4 border-black p-10 md:p-12 rounded-[40px] shadow-[12px_12px_0px_0px_#000] relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white border-2 border-black rounded-2xl flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_#000]">
                <Building2 className="w-8 h-8" />
              </div>
              <h4 className="text-3xl md:text-4xl font-black uppercase mb-6 leading-tight">Pôle Entreprise & <br /> Consulting</h4>
              <p className="text-lg md:text-xl font-bold opacity-80 mb-10 leading-relaxed">
                Les entreprises deviennent nos partenaires privilégiés. Profitez de formations sur-mesure,
                d&apos;audits et d&apos;un accompagnement IA pour transformer vos talents.
              </p>
              <button className="text-lg font-black uppercase underline decoration-4 underline-offset-8 hover:text-neo-pink transition-colors">
                Devenir Partenaire
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-neo-yellow border-4 border-black p-10 md:p-12 rounded-[40px] shadow-[12px_12px_0px_0px_#000] relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white border-2 border-black rounded-2xl flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_#000]">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-3xl md:text-4xl font-black uppercase mb-6 leading-tight">Rejoindre en <br /> tant qu&apos;Expert</h4>
              <p className="text-lg md:text-xl font-bold opacity-80 mb-10 leading-relaxed">
                Partagez votre expertise avec des talents motivés, développez votre réseau
                et participez à des projets d&apos;accompagnement exclusifs.
              </p>
              <button className="text-lg font-black uppercase underline decoration-4 underline-offset-8 hover:text-white transition-colors">
                Postuler maintenant
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black/5 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
