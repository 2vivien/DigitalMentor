"use client";

import { MessageSquare, Users, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function DiscordCommunity() {
  return (
    <section className="py-24 bg-white border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#5865F2] border-4 border-black rounded-3xl p-8 md:p-16 overflow-hidden shadow-[12px_12px_0px_0px_#000]">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <MessageSquare className="w-64 h-64 -rotate-12 text-white" />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left text-white">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full mb-6 border-2 border-white/20"
              >
                <Users className="w-4 h-4 text-neo-yellow" />
                <span className="text-sm font-bold uppercase tracking-wider">La Tribu Digital Mentor</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase leading-tight tracking-tighter">
                Ne construis pas ton futur <span className="text-neo-yellow underline decoration-4 underline-offset-8">seul</span>.
              </h2>
              
              <p className="text-xl md:text-2xl font-medium mb-10 opacity-90 leading-relaxed">
                Rejoins 5,000+ passionnés, entrepreneurs et mentors. 
                Partage tes blocages, trouve des partenaires et accède à des ressources exclusives 
                que nous ne partageons nulle part ailleurs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-4 rounded-xl flex items-center gap-4">
                  <div className="bg-neo-yellow p-2 border-2 border-black rounded-lg">
                    <Zap className="w-6 h-6 text-black fill-black" />
                  </div>
                  <span className="font-bold text-lg">Entraide 24h/7j</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-4 rounded-xl flex items-center gap-4">
                  <div className="bg-neo-pink p-2 border-2 border-black rounded-lg">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <span className="font-bold text-lg">Networking d'Élite</span>
                </div>
              </div>
              
              <button className="w-full sm:w-auto bg-white text-black text-2xl font-black px-10 py-5 rounded-2xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[6px_6px_0px_0px_#000] flex items-center justify-center gap-3 uppercase">
                Rejoindre le Discord
                <ArrowRight className="w-7 h-7" />
              </button>
            </div>
            
            <div className="flex-1 hidden lg:block">
              <div className="relative">
                <div className="bg-white border-4 border-black p-6 rounded-3xl shadow-[10px_10px_0px_0px_#000] rotate-2">
                  <div className="flex items-center gap-3 border-b-2 border-black pb-4 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400 border border-black" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black" />
                    <div className="w-3 h-3 rounded-full bg-green-400 border border-black" />
                    <span className="ml-2 font-bold text-sm text-gray-400 uppercase"># entraide-ia</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 bg-neo-teal border-2 border-black rounded-full flex-shrink-0" />
                      <div className="bg-gray-100 p-3 rounded-xl border-2 border-black text-sm font-medium">
                        "Est-ce que quelqu'un a testé l'API de GPT-4o pour automatiser..."
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-neo-yellow p-3 rounded-xl border-2 border-black text-sm font-bold italic">
                        "Oui ! Je t'envoie mon workflow tout de suite 🔥"
                      </div>
                      <div className="w-10 h-10 bg-neo-pink border-2 border-black rounded-full flex-shrink-0" />
                    </div>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 bg-neo-coral border-2 border-black rounded-full flex-shrink-0" />
                      <div className="bg-gray-100 p-3 rounded-xl border-2 border-black text-sm font-medium">
                        "Merci ! C'est ce genre d'entraide qui fait la différence ici."
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floatings items */}
                <div className="absolute -top-10 -right-6 bg-neo-yellow border-2 border-black px-4 py-2 rounded-xl font-bold shadow-[4px_4px_0px_0px_#000] -rotate-6">
                  5,243 Membres 🚀
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
