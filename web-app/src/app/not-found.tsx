"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Ghost, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FFFDF5] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-neo-pink border-4 border-black rounded-full opacity-20 -rotate-12 blur-2xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-neo-teal border-4 border-black rounded-lg opacity-20 rotate-12 blur-2xl" />

      <div className="relative z-10 text-center">
        {/* Le gros Badge 404 */}
        <motion.div 
          initial={{ scale: 0.5, rotate: -20 }}
          animate={{ scale: 1, rotate: -5 }}
          className="bg-neo-yellow border-4 border-black p-6 inline-block mb-8 shadow-[8px_8px_0px_0px_#000]"
        >
          <h1 className="text-8xl md:text-9xl font-black tracking-tighter">404</h1>
        </motion.div>

        <div className="bg-white border-4 border-black p-8 md:p-12 rounded-3xl shadow-[12px_12px_0px_0px_#000] max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-neo-coral p-4 border-4 border-black rounded-full">
              <Ghost className="w-12 h-12 text-black" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 leading-none">
            Oups ! Le mentor a disparu...
          </h2>
          <p className="text-xl font-bold text-gray-700 mb-8">
            Cette page a probablement été supprimée, renommée ou n&apos;a jamais existé. 
            Même l&apos;IA ne la retrouve pas !
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05, translateZ: 0 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neo-yellow border-4 border-black px-8 py-4 rounded-xl font-black uppercase text-lg shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <Home className="w-6 h-6" />
                Retour Accueil
              </motion.button>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-4 border-black px-8 py-4 rounded-xl font-black uppercase text-lg shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <ArrowLeft className="w-6 h-6" />
              Page précédente
            </button>
          </div>
        </div>
      </div>

      {/* Petit texte flottant */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="mt-12 bg-black text-white px-4 py-2 font-bold uppercase rotate-2"
      >
        Erreur de navigation détectée
      </motion.div>
    </main>
  );
}
