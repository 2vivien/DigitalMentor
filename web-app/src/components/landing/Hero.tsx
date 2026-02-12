"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkle, Star, ArrowRight, PlayCircle, Zap } from "lucide-react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 overflow-hidden min-h-[400px]">
        {/* Placeholder pour éviter le saut visuel */}
      </section>
    );
  }

  return (
    <section 
      className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 overflow-hidden"
      style={{ 
        backgroundColor: '#fff8e1',
        backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      <>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-20 left-10 hidden lg:block"
        >
          <Sparkle className="w-12 h-12 text-black fill-neo-yellow" strokeWidth={1.5} />
        </motion.div>

        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-20 hidden lg:block"
        >
          <Star className="w-10 h-10 text-black fill-black" strokeWidth={1.5} />
        </motion.div>

        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-32 hidden lg:block opacity-30"
        >
          <Star className="w-8 h-8 text-black fill-black" strokeWidth={1.5} />
        </motion.div>
      </>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          className="inline-flex items-center gap-2 bg-neo-yellow border-2 border-black px-4 py-1.5 rounded-full mb-8 neo-shadow-sm"
        >
          <Zap className="w-4 h-4 fill-black" />
          <span className="text-sm font-semibold tracking-tight uppercase">Nouveaux modules IA disponibles !</span>
        </motion.div>
        
        <h1 className="sm:text-6xl md:text-7xl leading-[1.1] text-5xl font-semibold tracking-tight mb-6">
          Tu as ta place dans le <br /> futur digital. <br />
          <span 
            className="inline-block italic mt-4 text-black"
            style={{ textShadow: '4px 4px 0px #FFDE00' }}
          >
            Digital Mentor t&apos;y conduit !
          </span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="sm:text-2xl leading-relaxed text-xl text-gray-600 max-w-3xl mx-auto mb-10 font-medium"
        >
          Plateforme de mentorat en technologies modernes et cabinet de conseil en intégration de l&apos;IA pour les entreprises. <br className="hidden md:block" />
          Nous transformons vos idées en compétences et vos compétences en <span className="text-black font-semibold border-b-4 border-neo-yellow pb-1">opportunités réelles</span>.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto text-xl font-semibold bg-neo-yellow border-2 border-black px-8 py-3 rounded-lg neo-shadow hover:neo-shadow-hover transition-all flex items-center justify-center gap-2"
          >
            Access Now
            <ArrowRight className="w-5 h-5" strokeWidth={2} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto text-xl font-semibold bg-white border-2 border-black px-8 py-3 rounded-lg neo-shadow hover:neo-shadow-hover transition-all flex items-center justify-center gap-2"
          >
            <PlayCircle className="w-5 h-5" strokeWidth={1.5} />
            View Demo
          </motion.button>
        </div>
      </div>
    </section>
  );
}
