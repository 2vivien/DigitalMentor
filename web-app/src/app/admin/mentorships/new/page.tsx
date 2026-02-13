"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Save, GraduationCap, User, Tag, List, DollarSign } from "lucide-react";
import Link from "next/link";

export default function NewMentorshipPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Programme de mentorat ajouté !");
      router.push("/admin/mentorships");
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/admin/mentorships" className="flex items-center gap-2 font-bold hover:underline">
          <ArrowLeft className="w-5 h-5" />
          Retour aux mentorats
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white border-4 border-black p-8 rounded-3xl shadow-[12px_12px_0px_0px_#000]">
          <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-black pb-4 flex items-center gap-3">
            <GraduationCap className="w-8 h-8" /> Nouveau Mentorat
          </h2>
          
          <div className="space-y-6">
            {/* Titre du programme */}
            <div className="space-y-2">
              <label className="text-sm font-black uppercase flex items-center gap-2">
                <List className="w-4 h-4" /> Titre du programme
              </label>
              <input 
                required
                type="text" 
                placeholder="Ex: Maîtrise de l'IA Générative"
                className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-yellow outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mentor */}
              <div className="space-y-2">
                <label className="text-sm font-black uppercase flex items-center gap-2">
                  <User className="w-4 h-4" /> Nom du Mentor
                </label>
                <input 
                  required
                  type="text" 
                  placeholder="Ronald Richards"
                  className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-teal outline-none"
                />
              </div>

              {/* Catégorie */}
              <div className="space-y-2">
                <label className="text-sm font-black uppercase flex items-center gap-2">
                  <Tag className="w-4 h-4" /> Catégorie
                </label>
                <select className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-pink outline-none appearance-none bg-white">
                  <option>IA</option>
                  <option>Développement</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>Business</option>
                </select>
              </div>
            </div>

            {/* Compétences / Tags */}
            <div className="space-y-2">
              <label className="text-sm font-black uppercase flex items-center gap-2">
                <Tag className="w-4 h-4" /> Compétences (Séparées par des virgules)
              </label>
              <input 
                required
                type="text" 
                placeholder="Ex: Python, GPT-4, No-code"
                className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-yellow outline-none"
              />
            </div>

            {/* Prix / Type */}
            <div className="space-y-2">
              <label className="text-sm font-black uppercase flex items-center gap-2">
                <DollarSign className="w-4 h-4" /> Type d'accès
              </label>
              <div className="flex gap-4">
                <label className="flex-1 cursor-pointer">
                  <input type="radio" name="price" value="Gratuit" className="hidden peer" defaultChecked />
                  <div className="border-2 border-black rounded-xl p-3 text-center font-bold peer-checked:bg-neo-mint peer-checked:shadow-[3px_3px_0px_0px_#000] transition-all">
                    Gratuit
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input type="radio" name="price" value="Premium" className="hidden peer" />
                  <div className="border-2 border-black rounded-xl p-3 text-center font-bold peer-checked:bg-neo-coral peer-checked:shadow-[3px_3px_0px_0px_#000] transition-all">
                    Premium
                  </div>
                </label>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-black uppercase">Description du programme</label>
              <textarea 
                required
                rows={5}
                placeholder="Décrivez ce que les élèves vont apprendre..."
                className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-yellow outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Link href="/admin/mentorships">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-black px-8 py-3 rounded-xl font-black uppercase shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              Annuler
            </motion.button>
          </Link>
          <motion.button
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white border-2 border-black px-8 py-3 rounded-xl font-black uppercase flex items-center gap-2 shadow-[4px_4px_0px_0px_#FFDE00] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            {loading ? "Création..." : <><Save className="w-5 h-5" /> Créer le mentorat</>}
          </motion.button>
        </div>
      </form>
    </div>
  );
}
