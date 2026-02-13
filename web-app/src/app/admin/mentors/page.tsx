"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Search, Edit2, Trash2, CheckCircle, XCircle, Star, ShieldCheck } from "lucide-react";
import Image from "next/image";

// Mock data pour les mentors
const initialMentors = [
  {
    id: 1,
    name: "Ronald Richards",
    role: "Expert IA & Automation",
    image: "/image/koffi.jpg", // Utilisation des images locales existantes
    status: "Approuvé",
    isFeatured: true,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Theresa Webb",
    role: "Développeuse Fullstack",
    image: "/image/amina.jpg",
    status: "Approuvé",
    isFeatured: false,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Leslie Alexander",
    role: "Product Designer UI/UX",
    image: "/image/fatou.jpeg",
    status: "En attente",
    isFeatured: false,
    rating: 0,
  },
];

export default function AdminMentorsPage() {
  const [mentors, setMentors] = useState(initialMentors);

  const deleteMentor = (id: number) => {
    if (confirm("Voulez-vous vraiment supprimer ce mentor ?")) {
      setMentors(mentors.filter(m => m.id !== id));
    }
  };

  const toggleStatus = (id: number) => {
    setMentors(mentors.map(m => 
      m.id === id ? { ...m, status: m.status === "Approuvé" ? "En attente" : "Approuvé" } : m
    ));
  };

  return (
    <div className="space-y-6">
      {/* Barre d'actions */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Rechercher un mentor..." 
            className="w-full border-2 border-black rounded-xl pl-10 pr-4 py-2 font-bold focus:outline-none shadow-[2px_2px_0px_0px_#000]"
          />
        </div>
        
        <Link href="/admin/mentors/new">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neo-yellow border-2 border-black px-6 py-2 rounded-xl font-black uppercase flex items-center gap-2 shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <Plus className="w-5 h-5" />
            Ajouter un Mentor
          </motion.button>
        </Link>
      </div>

      {/* Liste des Mentors */}
      <div className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[10px_10px_0px_0px_#000]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b-4 border-black">
                <th className="p-4 font-black uppercase text-sm">Profil</th>
                <th className="p-4 font-black uppercase text-sm">Rôle</th>
                <th className="p-4 font-black uppercase text-sm">Statut</th>
                <th className="p-4 font-black uppercase text-sm">Note</th>
                <th className="p-4 font-black uppercase text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mentors.map((mentor) => (
                <tr key={mentor.id} className="border-b-2 border-black/10 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 border-2 border-black rounded-full overflow-hidden relative shadow-[2px_2px_0px_0px_#000]">
                        <Image src={mentor.image} alt={mentor.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-black flex items-center gap-1">
                          {mentor.name}
                          {mentor.isFeatured && <ShieldCheck className="w-4 h-4 text-neo-teal" />}
                        </p>
                        <p className="text-xs text-gray-500 font-bold uppercase">ID: #{mentor.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-bold">{mentor.role}</td>
                  <td className="p-4">
                    <button 
                      onClick={() => toggleStatus(mentor.id)}
                      className={`px-3 py-1 border-2 border-black rounded-full text-xs font-black uppercase transition-all ${
                        mentor.status === "Approuvé" ? "bg-neo-mint" : "bg-neo-coral/20"
                      }`}
                    >
                      {mentor.status}
                    </button>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1 font-black">
                      <Star className="w-4 h-4 fill-neo-yellow" />
                      {mentor.rating || "N/A"}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 border-2 border-black rounded-lg hover:bg-neo-yellow transition-colors shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => deleteMentor(mentor.id)}
                        className="p-2 border-2 border-black rounded-lg hover:bg-neo-coral transition-colors shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
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
    </div>
  );
}
