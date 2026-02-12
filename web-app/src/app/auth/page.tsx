"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Mail, Lock, User, ArrowRight, Github, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#FFFDF5] selection:bg-neo-yellow selection:text-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Bouton Retour */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center gap-2 bg-white border-2 border-black px-4 py-2 rounded-lg font-bold neo-shadow hover:neo-shadow-hover transition-all z-50"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Retour</span>
      </motion.button>

      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-neo-pink border-2 border-black rounded-full opacity-20 -rotate-12 blur-xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-neo-teal border-2 border-black rounded-lg opacity-20 rotate-12 blur-xl" />

      {/* Logo / Retour Accueil */}
      <Link href="/" className="mb-8 flex items-center gap-2 group">
        <div className="w-12 h-12 relative group-hover:rotate-12 transition-transform">
          <Image src="/digitalmentor.png" alt="Logo" width={48} height={48} className="w-full h-full object-contain" />
        </div>
        <span className="text-2xl font-black uppercase tracking-tighter" style={{ textShadow: '2px 2px 0px #FFDE00' }}>
          DigitalMentor
        </span>
      </Link>

      <div className="w-full max-w-md relative">
        {/* Toggle Switch */}
        <div className="flex border-2 border-black rounded-xl overflow-hidden mb-6 bg-white shadow-[4px_4px_0px_0px_#000]">
          <motion.button 
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsLogin(true)}
            className={cn(
              "flex-1 py-3 font-bold uppercase transition-all",
              isLogin ? "bg-neo-yellow text-black" : "bg-white text-gray-500 hover:bg-gray-50"
            )}
          >
            Connexion
          </motion.button>
          <motion.button 
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsLogin(false)}
            className={cn(
              "flex-1 py-3 font-bold uppercase transition-all",
              !isLogin ? "bg-neo-yellow text-black" : "bg-white text-gray-500 hover:bg-gray-50"
            )}
          >
            Inscription
          </motion.button>
        </div>

        {/* Auth Card */}
        <div className="bg-white border-4 border-black p-8 rounded-3xl shadow-[12px_12px_0px_0px_#000] relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login" : "signup"}
              initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-3xl font-black uppercase mb-6 tracking-tight">
                {isLogin ? "Ravi de vous revoir !" : "Rejoignez l&apos;aventure !"}
              </h2>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {!isLogin && (
                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase">Nom complet</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full border-2 border-black rounded-xl pl-12 pr-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-neo-yellow bg-gray-50"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-black uppercase">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="email" 
                      placeholder="hello@exemple.com"
                      className="w-full border-2 border-black rounded-xl pl-12 pr-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-neo-yellow bg-gray-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-black uppercase">Mot de passe</label>
                    {isLogin && (
                      <button className="text-xs font-bold underline hover:text-neo-coral">Oublié ?</button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full border-2 border-black rounded-xl pl-12 pr-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-neo-yellow bg-gray-50"
                    />
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-black text-white py-4 rounded-xl font-black text-xl uppercase mt-8 shadow-[4px_4px_0px_0px_#FFDE00] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
                >
                  {isLogin ? "Se connecter" : "Créer mon compte"}
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </form>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px bg-black flex-1 opacity-20" />
                <span className="text-xs font-black uppercase text-gray-400">Ou continuer avec</span>
                <div className="h-px bg-black flex-1 opacity-20" />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 border-2 border-black p-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-[3px_3px_0px_0px_#000]"
                >
                  <Image src="https://www.google.com/favicon.ico" width={20} height={20} unoptimized alt="Google" />
                  Google
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 border-2 border-black p-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-[3px_3px_0px_0px_#000]"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Decorative Sparkles */}
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-neo-teal border-2 border-black rounded-lg flex items-center justify-center rotate-12 z-20 shadow-[3px_3px_0px_0px_#000]">
          <Zap className="w-6 h-6 fill-black" />
        </div>
      </div>

      <p className="mt-8 text-sm font-bold text-gray-600 text-center max-w-xs">
        En vous connectant, vous acceptez nos <button className="underline">Conditions d&apos;utilisation</button> et notre <button className="underline">Politique de confidentialité</button>.
      </p>
    </main>
  );
}
