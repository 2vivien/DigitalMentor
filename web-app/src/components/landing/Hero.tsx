"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkle, Star, ArrowRight, PlayCircle, Zap } from "lucide-react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 overflow-hidden">
      {mounted && (
        <>
          {/* Decorative Elements from original HTML */}
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

          {/* Second Star from original HTML */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-32 hidden lg:block opacity-30"
          >
            <Star className="w-8 h-8 text-black fill-black" strokeWidth={1.5} />
          </motion.div>
        </>
      )}

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          className="inline-flex items-center gap-2 bg-neo-yellow border-2 border-black px-4 py-1.5 rounded-full mb-8 neo-shadow-sm"
        >
          <Zap className="w-4 h-4 fill-black" />
          <span className="text-sm font-semibold tracking-tight uppercase">New Team Blocks Added!</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="sm:text-6xl md:text-7xl leading-[1.1] text-5xl font-semibold tracking-tight mb-6"
        >
          Not Every Website Has To <br />
          <span className="inline-block italic mt-2 relative">
            Look The Same!
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-2 left-0 h-3 bg-neo-yellow -z-10 opacity-80 -skew-x-6" 
            />
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="sm:text-2xl leading-relaxed text-xl text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Get access to neo brutalist style React UI blocks, templates, and Figma kit. Designed to help you <span className="text-black font-semibold border-b-2 border-neo-yellow">stand out</span>.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto text-xl font-semibold bg-neo-yellow border-2 border-black px-8 py-3 rounded-lg neo-shadow hover:neo-shadow-hover transition-all flex items-center justify-center gap-2">
            Access Now
            <ArrowRight className="w-5 h-5" strokeWidth={2} />
          </button>
          <button className="w-full sm:w-auto text-xl font-medium bg-white border-2 border-black px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <PlayCircle className="w-5 h-5" strokeWidth={1.5} />
            View Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}

