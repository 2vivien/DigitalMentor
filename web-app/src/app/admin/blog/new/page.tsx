"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Save, X, Image as ImageIcon, Type, Tag, User } from "lucide-react";
import Link from "next/link";

export default function NewPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulation d'envoi
    setTimeout(() => {
      alert("Article créé avec succès !");
      router.push("/admin/blog");
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <Link href="/admin/blog" className="flex items-center gap-2 font-bold hover:underline">
          <ArrowLeft className="w-5 h-5" />
          Retour à la liste
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white border-4 border-black p-8 rounded-3xl shadow-[12px_12px_0px_0px_#000]">
          <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-black pb-4">Nouvel Article</h2>
          
          <div className="space-y-6">
            {/* Titre */}
            <div className="space-y-2">
              <label className="text-sm font-black uppercase flex items-center gap-2">
                <Type className="w-4 h-4" /> Titre de l'article
              </label>
              <input 
                required
                type="text" 
                placeholder="Ex: L'avenir de l'IA..."
                className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-yellow outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Catégorie */}
              <div className="space-y-2">
                <label className="text-sm font-black uppercase flex items-center gap-2">
                  <Tag className="w-4 h-4" /> Catégorie
                </label>
                <select className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-teal outline-none appearance-none bg-white">
                  <option>IA & Futur</option>
                  <option>No-Code</option>
                  <option>Marketing</option>
                  <option>Productivité</option>
                  <option>Economie</option>
                </select>
              </div>

              {/* Auteur */}
              <div className="space-y-2">
                <label className="text-sm font-black uppercase flex items-center gap-2">
                  <User className="w-4 h-4" /> Auteur
                </label>
                <input 
                  required
                  type="text" 
                  placeholder="Nom de l'auteur"
                  className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-pink outline-none"
                />
              </div>
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <label className="text-sm font-black uppercase flex items-center gap-2">
                <ImageIcon className="w-4 h-4" /> URL de l'image de couverture
              </label>
              <input 
                type="text" 
                placeholder="https://images.unsplash.com/..."
                className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-yellow outline-none"
              />
            </div>

            {/* Extrait */}
            <div className="space-y-2">
              <label className="text-sm font-black uppercase">Extrait (Court résumé)</label>
              <textarea 
                rows={3}
                placeholder="Un court résumé pour attirer les lecteurs..."
                className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-teal outline-none"
              />
            </div>

            {/* Contenu */}
            <div className="space-y-2">
              <label className="text-sm font-black uppercase">Contenu de l'article (Markdown supporté)</label>
              <textarea 
                rows={10}
                placeholder="Rédigez votre article ici..."
                className="w-full border-2 border-black rounded-xl px-4 py-3 font-bold focus:ring-4 focus:ring-neo-yellow outline-none min-h-[300px]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Link href="/admin/blog">
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
            className="bg-neo-teal border-2 border-black px-8 py-3 rounded-xl font-black uppercase flex items-center gap-2 shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            {loading ? "Envoi..." : <><Save className="w-5 h-5" /> Publier l'article</>}
          </motion.button>
        </div>
      </form>
    </div>
  );
}
