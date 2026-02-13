"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Save, User, Briefcase, FileText, Camera, ShieldCheck, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NewMentorPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("/image/koffi.jpg");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Nouveau mentor ajouté avec succès !");
      router.push("/admin/mentors");
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/admin/mentors" className="flex items-center gap-2 font-bold hover:underline">
          <ArrowLeft className="w-5 h-5" />
          Retour à la liste des mentors
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white border-4 border-black p-8 rounded-3xl shadow-[12px_12px_0px_0px_#000]">
          <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-black pb-4 flex items-center gap-3">
            <User className="w-8 h-8" /> Ajouter un Mentor
          </h2>
          
          <div className="space-y-6">
            {/* Photo de profil */}
            <div className="flex flex-col md:flex-row items-center gap-8 pb-6 border-b-2 border-black/10">
              <div className="relative w-32 h-32 border-4 border-black rounded-full overflow-hidden shadow-[4px_4px_0px_0px_#000]">
                <Image src={preview} alt="Preview" fill className="object-cover" />
                <label className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera className="text-white w-8 h-8" />
                  <input type="file" className="hidden" />
                </label>
              </div>
              <div className="flex-1 space-y-2">
                <p className="font-black uppercase text-sm">Photo de profil</p>
                <p className="text-xs text-gray-500 font-bold">Format recommandé : Carré, min 400x400px.</p>
                <input 
                  type="text" 
                  placeholder="Ou URL de l'image..."
                  className="w-full border-2 border-black rounded-xl px-4 py-2 font-bold text-sm focus:ring-4 focus:ring-neo-yellow outline-none"
                  onChange={(e) => setPreview(e.target.value || "/image/koffi.jpg")}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nom complet */}
              <div className="space-y-2">
                <label className="text-sm font-black uppercase flex items-center gap-2">
                  <User className="w-4 h-4" /> Nom complet
                </label>
                <input 
                  required
                  type="text" 
                  placeholder="Jean Dupont"
                  className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-yellow outline-none"
                />
              </div>

              {/* Rôle / Titre */}
              <div className="space-y-2">
                <label className="text-sm font-black uppercase flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> Rôle / Spécialité
                </label>
                <input 
                  required
                  type="text" 
                  placeholder="Senior IA Engineer"
                  className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-teal outline-none"
                />
              </div>
            </div>

            {/* Compétences */}
            <div className="space-y-2">
              <label className="text-sm font-black uppercase flex items-center gap-2">
                <Tag className="w-4 h-4" /> Compétences clés (virgules)
              </label>
              <input 
                required
                type="text" 
                placeholder="React, Python, Machine Learning..."
                className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-pink outline-none"
              />
            </div>

            {/* Biographie */}
            <div className="space-y-2">
              <label className="text-sm font-black uppercase flex items-center gap-2">
                <FileText className="w-4 h-4" /> Biographie
              </label>
              <textarea 
                required
                rows={4}
                placeholder="Décrivez l'expérience et le parcours du mentor..."
                className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-yellow outline-none"
              />
            </div>

            {/* Options */}
            <div className="flex flex-wrap gap-6 pt-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input type="checkbox" className="peer hidden" />
                  <div className="w-6 h-6 border-2 border-black rounded-md peer-checked:bg-neo-teal transition-all" />
                  <CheckCircle className="absolute inset-0 w-6 h-6 text-black opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <span className="font-black uppercase text-sm">Mettre en avant (Featured)</span>
              </label>
              
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="relative">
                  <input type="checkbox" defaultChecked className="peer hidden" />
                  <div className="w-6 h-6 border-2 border-black rounded-md peer-checked:bg-neo-mint transition-all" />
                  <ShieldCheck className="absolute inset-0 w-6 h-6 text-black opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <span className="font-black uppercase text-sm">Profil vérifié</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Link href="/admin/mentors">
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
            className="bg-neo-yellow border-2 border-black px-8 py-3 rounded-xl font-black uppercase flex items-center gap-2 shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            {loading ? "Chargement..." : <><Save className="w-5 h-5" /> Enregistrer le Mentor</>}
          </motion.button>
        </div>
      </form>
    </div>
  );
}
