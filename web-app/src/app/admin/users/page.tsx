"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  UserPlus, 
  MoreVertical, 
  Ban, 
  CheckCircle, 
  UserCog, 
  Mail, 
  Trash2,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data pour les utilisateurs
const initialUsers = [
  {
    id: 1,
    name: "Alice Martin",
    email: "alice@exemple.com",
    role: "Utilisateur",
    status: "Actif",
    joinDate: "12 Jan 2026",
  },
  {
    id: 2,
    name: "Marc Durand",
    email: "marc@exemple.com",
    role: "Admin",
    status: "Actif",
    joinDate: "05 Jan 2026",
  },
  {
    id: 3,
    name: "Sophie Lefebvre",
    email: "sophie@exemple.com",
    role: "Utilisateur",
    status: "Banni",
    joinDate: "28 Déc 2025",
  },
  {
    id: 4,
    name: "Jean-Paul Bel",
    email: "jp@exemple.com",
    role: "Modérateur",
    status: "Actif",
    joinDate: "15 Déc 2025",
  },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleStatus = (id: number) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        return { ...user, status: user.status === "Actif" ? "Banni" : "Actif" };
      }
      return user;
    }));
  };

  const changeRole = (id: number, newRole: string) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        return { ...user, role: newRole };
      }
      return user;
    }));
  };

  const deleteUser = (id: number) => {
    if (confirm("Voulez-vous vraiment supprimer cet utilisateur ? Cette action est irréversible.")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Barre d'actions */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Rechercher un utilisateur..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border-2 border-black rounded-xl pl-10 pr-4 py-2 font-bold focus:outline-none shadow-[2px_2px_0px_0px_#000]"
          />
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-neo-teal border-2 border-black px-6 py-2 rounded-xl font-black uppercase flex items-center gap-2 shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          <UserPlus className="w-5 h-5" />
          Nouvel Utilisateur
        </motion.button>
      </div>

      {/* Table des Utilisateurs */}
      <div className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[10px_10px_0px_0px_#000]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b-4 border-black">
                <th className="p-4 font-black uppercase text-sm">Utilisateur</th>
                <th className="p-4 font-black uppercase text-sm">Rôle</th>
                <th className="p-4 font-black uppercase text-sm">Statut</th>
                <th className="p-4 font-black uppercase text-sm">Date d'inscription</th>
                <th className="p-4 font-black uppercase text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b-2 border-black/10 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="font-black">{user.name}</span>
                      <span className="text-xs text-gray-500 font-bold flex items-center gap-1">
                        <Mail className="w-3 h-3" /> {user.email}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <select 
                      value={user.role}
                      onChange={(e) => changeRole(user.id, e.target.value)}
                      className="bg-transparent font-bold text-sm border-2 border-black/20 rounded-lg px-2 py-1 focus:border-black outline-none transition-all"
                    >
                      <option value="Utilisateur">Utilisateur</option>
                      <option value="Modérateur">Modérateur</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </td>
                  <td className="p-4">
                    <button 
                      onClick={() => toggleStatus(user.id)}
                      className={cn(
                        "px-3 py-1 border-2 border-black rounded-full text-[10px] font-black uppercase transition-all",
                        user.status === "Actif" ? "bg-neo-mint" : "bg-neo-coral/20 text-neo-coral"
                      )}
                    >
                      {user.status}
                    </button>
                  </td>
                  <td className="p-4 text-sm font-bold text-gray-600">{user.joinDate}</td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => toggleStatus(user.id)}
                        title={user.status === "Actif" ? "Bannir" : "Réactiver"}
                        className={cn(
                          "p-2 border-2 border-black rounded-lg transition-colors shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5",
                          user.status === "Actif" ? "hover:bg-neo-coral" : "hover:bg-neo-mint"
                        )}
                      >
                        {user.status === "Actif" ? <Ban className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                      </button>
                      <button 
                        onClick={() => deleteUser(user.id)}
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

      {filteredUsers.length === 0 && (
        <div className="text-center py-20 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_#000]">
          <p className="text-2xl font-black uppercase italic">Aucun utilisateur trouvé !</p>
        </div>
      )}
    </div>
  );
}
