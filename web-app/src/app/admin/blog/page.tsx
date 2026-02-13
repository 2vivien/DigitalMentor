"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Search, Edit2, Trash2, Eye, Filter } from "lucide-react";

// Mock data pour commencer
const initialPosts = [
  {
    id: 1,
    title: "Comment l'IA transforme le mentorat en 2026",
    category: "IA & Futur",
    date: "12 Fév 2026",
    author: "Fatou Diop",
    status: "Publié",
  },
  {
    id: 2,
    title: "5 outils No-Code indispensables pour lancer votre SaaS",
    category: "No-Code",
    date: "10 Fév 2026",
    author: "Koffi Mensah",
    status: "Brouillon",
  },
  {
    id: 3,
    title: "L'art du personal branding pour les tech-entrepreneurs",
    category: "Marketing",
    date: "08 Fév 2026",
    author: "Amina Sow",
    status: "Publié",
  },
];

export default function AdminBlogPage() {
  const [posts, setPosts] = useState(initialPosts);

  const deletePost = (id: number) => {
    if (confirm("Voulez-vous vraiment supprimer cet article ?")) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Barre d'actions */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Rechercher un article..." 
            className="w-full border-2 border-black rounded-xl pl-10 pr-4 py-2 font-bold focus:outline-none shadow-[2px_2px_0px_0px_#000]"
          />
        </div>
        
        <Link href="/admin/blog/new">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neo-yellow border-2 border-black px-6 py-2 rounded-xl font-black uppercase flex items-center gap-2 shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <Plus className="w-5 h-5" />
            Nouvel Article
          </motion.button>
        </Link>
      </div>

      {/* Table des articles */}
      <div className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[10px_10px_0px_0px_#000]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b-4 border-black">
                <th className="p-4 font-black uppercase text-sm">Article</th>
                <th className="p-4 font-black uppercase text-sm">Catégorie</th>
                <th className="p-4 font-black uppercase text-sm">Auteur</th>
                <th className="p-4 font-black uppercase text-sm">Statut</th>
                <th className="p-4 font-black uppercase text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b-2 border-black/10 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <p className="font-bold line-clamp-1">{post.title}</p>
                    <p className="text-xs text-gray-500 font-bold uppercase">{post.date}</p>
                  </td>
                  <td className="p-4 text-sm font-bold">{post.category}</td>
                  <td className="p-4 text-sm font-bold">{post.author}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 border-2 border-black rounded-full text-xs font-black uppercase ${
                      post.status === "Publié" ? "bg-neo-mint" : "bg-gray-200"
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 border-2 border-black rounded-lg hover:bg-neo-mint transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 border-2 border-black rounded-lg hover:bg-neo-yellow transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => deletePost(post.id)}
                        className="p-2 border-2 border-black rounded-lg hover:bg-neo-coral transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {posts.length === 0 && (
        <div className="text-center py-20 bg-white border-4 border-black rounded-3xl">
          <p className="text-2xl font-black uppercase italic">Aucun article trouvé !</p>
        </div>
      )}
    </div>
  );
}
