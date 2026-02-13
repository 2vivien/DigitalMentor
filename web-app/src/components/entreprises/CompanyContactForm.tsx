"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Building2, User, Mail, MessageSquare, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CompanyContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulation d'envoi
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-neo-mint border-4 border-black p-12 rounded-3xl shadow-[12px_12px_0px_0px_#000000] text-center max-w-2xl mx-auto my-20">
        <div className="w-20 h-20 bg-white border-4 border-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_#000000]">
          <Send className="w-10 h-10 text-neo-teal" />
        </div>
        <h2 className="text-4xl font-black uppercase mb-4">Message Envoyé !</h2>
        <p className="text-xl font-bold mb-8 italic">
          Merci pour votre confiance. Un consultant du Pôle Entreprise reviendra vers vous sous 24h ouvrées.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSubmitted(false)}
          className="bg-black text-white px-8 py-3 rounded-xl font-black uppercase shadow-[4px_4px_0px_0px_#FFDE00]"
        >
          Envoyer un autre message
        </motion.button>
      </div>
    );
  }

  return (
    <section id="contact-form" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neo-yellow opacity-10 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-neo-pink opacity-10 rounded-lg -rotate-12 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Info Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black uppercase leading-none mb-8">
                Prêt à <span className="bg-neo-yellow px-2">scaler</span> <br /> votre business ?
              </h2>
              <p className="text-xl font-bold text-gray-700 mb-12 max-w-lg">
                Remplissez ce formulaire et notre équipe de consultants IA analysera vos besoins pour vous proposer une solution sur-mesure.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neo-pink border-2 border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_#000000]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-black uppercase">contact@digitalmentor.ai</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neo-teal border-2 border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_#000000]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-black uppercase">+33 1 23 45 67 89</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="flex-1 w-full">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white border-4 border-black p-8 md:p-12 rounded-3xl shadow-[15px_15px_0px_0px_#000000] space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase flex items-center gap-2">
                    <User className="w-4 h-4" /> Nom complet
                  </label>
                  <input 
                    required
                    type="text" 
                    placeholder="Jean Dupont"
                    className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-yellow outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Entreprise
                  </label>
                  <input 
                    required
                    type="text" 
                    placeholder="Tech Corp SAS"
                    className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-teal outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black uppercase flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email Professionnel
                </label>
                <input 
                  required
                  type="email" 
                  placeholder="jean@techcorp.com"
                  className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-pink outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black uppercase flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Votre besoin
                </label>
                <select className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-yellow outline-none appearance-none bg-white">
                  <option>Consulting Stratégique IA</option>
                  <option>Automatisation de Processus</option>
                  <option>Formation d'équipe</option>
                  <option>Audit technique</option>
                  <option>Autre besoin</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black uppercase">Message / Détails du projet</label>
                <textarea 
                  rows={4}
                  placeholder="Décrivez brièvement vos enjeux..."
                  className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-teal outline-none transition-all"
                />
              </div>

              <motion.button
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black text-white py-5 rounded-2xl font-black text-xl uppercase shadow-[6px_6px_0px_0px_#FFDE00] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-3 disabled:opacity-70 mt-4"
              >
                {loading ? "Envoi en cours..." : (
                  <>
                    Lancer la collaboration
                    <ArrowRight className="w-6 h-6" />
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
