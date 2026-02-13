"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Search, Edit2, Trash2, User, GraduationCap, Tag } from "lucide-react";

// Mock data basés sur tes exemples
const initialMentorships = [
  {
    id: 1,
    title: "Maîtrise de l'IA Générative",
    mentor: "Ronald Richards",
    skills: ["No-code", "Python", "GPT-4"],
    category: "IA",
    price: "Gratuit",
  },
  {
    id: 2,
    title: "Fullstack Next.js Masterclass",
    mentor: "Theresa Webb",
    skills: ["React", "Next.js", "Node.js"],
    category: "Développement",
    price: "Premium",
  },
  {
    id: 3,
    title: "Design System & UI Expert",
    mentor: "Leslie Alexander",
    skills: ["Figma", "UX/UI", "Design System"],
    category: "Design",
    price: "Gratuit",
  },
  {
    id: 4,
    title: "Growth & Acquisition Digitale",
    mentor: "Darrell Steward",
    skills: ["SEO", "Ads", "Content"],
    category: "Marketing",
    price: "Premium",
  },
];

export default function AdminMentorshipsPage() {
  const [mentorships, setMentorships] = useState(initialMentorships);

  const deleteMentorship = (id: number) => {
    if (confirm("Voulez-vous vraiment supprimer ce mentorat ?")) {
      setMentorships(mentorships.filter(m => m.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Rechercher un mentorat..." 
            className="w-full border-2 border-black rounded-xl pl-10 pr-4 py-2 font-bold focus:outline-none shadow-[2px_2px_0px_0px_#000]"
          />
        </div>
        
        <Link href="/admin/mentorships/new">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neo-teal border-2 border-black px-6 py-2 rounded-xl font-black uppercase flex items-center gap-2 shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <Plus className="w-5 h-5" />
            Ajouter un Mentorat
          </motion.button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mentorships.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border-4 border-black p-6 rounded-3xl shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="bg-neo-yellow border-2 border-black px-3 py-1 rounded-full text-xs font-black uppercase">
                  {item.category}
                </span>
                <span className={`text-xs font-black uppercase ${item.price === "Premium" ? "text-neo-coral" : "text-neo-teal"}`}>
                  {item.price}
                </span>
              </div>
              
              <h3 className="text-xl font-black mb-2 uppercase leading-tight">{item.title}</h3>
              <p className="flex items-center gap-2 text-sm font-bold text-gray-600 mb-4">
                <User className="w-4 h-4" /> Mentor: {item.mentor}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {item.skills.map((skill) => (
                  <span key={skill} className="bg-gray-100 border-2 border-black px-2 py-1 rounded-lg text-[10px] font-black uppercase">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t-2 border-black/10">
              <button className="flex-1 flex items-center justify-center gap-2 border-2 border-black py-2 rounded-xl font-black text-xs uppercase hover:bg-neo-yellow transition-all shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5">
                <Edit2 className="w-3 h-3" /> Éditer
              </button>
              <button 
                onClick={() => deleteMentorship(item.id)}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-black py-2 rounded-xl font-black text-xs uppercase hover:bg-neo-coral transition-all shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
              >
                <Trash2 className="w-3 h-3" /> Supprimer
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
