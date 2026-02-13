"use client";

import { motion } from "framer-motion";
import { Users, UserCheck, FileText, Star, TrendingUp, AlertCircle, X } from "lucide-react";

const stats = [
  { label: "Mentors en attente", value: "12", icon: UserCheck, color: "bg-neo-pink" },
  { label: "Total Utilisateurs", value: "1,240", icon: Users, color: "bg-neo-yellow" },
  { label: "Articles Blog", value: "24", icon: FileText, color: "bg-neo-teal" },
  { label: "Note Moyenne", value: "4.8", icon: Star, color: "bg-neo-mint" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Grille de stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border-4 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_#000]"
          >
            <div className={`${stat.color} w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_#000]`}>
              <stat.icon className="w-6 h-6 text-black" />
            </div>
            <div className="text-4xl font-black mb-1">{stat.value}</div>
            <div className="text-sm font-bold uppercase text-gray-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Dernières activités (Placeholder) */}
        <div className="bg-white border-4 border-black p-8 rounded-3xl shadow-[10px_10px_0px_0px_#000]">
          <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6" />
            Activités Récentes
          </h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 p-4 border-2 border-black rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-full border-2 border-black bg-neo-yellow" />
                <div className="flex-1">
                  <p className="font-bold">Nouvelle inscription mentor : <span className="underline">Moussa Traoré</span></p>
                  <p className="text-xs text-gray-500">Il y a 2 heures • IA & Big Data</p>
                </div>
                <button className="text-xs font-black uppercase bg-black text-white px-3 py-1 rounded-lg">Voir</button>
              </div>
            ))}
          </div>
        </div>

        {/* Alertes / Tâches (Placeholder) */}
        <div className="bg-neo-coral/10 border-4 border-black p-8 rounded-3xl shadow-[10px_10px_0px_0px_#FF7D5D]">
          <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            Alertes Prioritaires
          </h2>
          <div className="space-y-4">
            <div className="bg-white border-2 border-black p-4 rounded-xl flex items-center justify-between">
              <div>
                <p className="font-black text-neo-coral uppercase">Profil Signalé</p>
                <p className="text-sm font-bold text-gray-600 italic">"Contenu inapproprié dans la bio de @user123"</p>
              </div>
              <button className="bg-black text-white p-2 rounded-lg"><X className="w-4 h-4" /></button>
            </div>
            <div className="bg-white border-2 border-black p-4 rounded-xl flex items-center justify-between">
              <div>
                <p className="font-black text-neo-teal uppercase">Certificat à vérifier</p>
                <p className="text-sm font-bold text-gray-600 italic">Koffi a soumis son diplôme de Master IA.</p>
              </div>
              <button className="bg-black text-white p-2 rounded-lg">Ok</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
