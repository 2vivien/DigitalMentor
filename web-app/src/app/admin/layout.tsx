"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  FileText, 
  Menu,
  X,
  LogOut,
  GraduationCap
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: GraduationCap, label: "Mentorats", href: "/admin/mentorships" },
  { icon: UserCheck, label: "Gestion Mentors", href: "/admin/mentors" },
  { icon: Users, label: "Utilisateurs", href: "/admin/users" },
  { icon: FileText, label: "Blog (CMS)", href: "/admin/blog" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#FFFDF5] flex flex-col md:flex-row">
      {/* Sidebar Mobile Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 right-4 z-50 bg-neo-yellow border-2 border-black p-2 rounded-lg shadow-[2px_2px_0px_0px_#000]"
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <aside className={cn(
        "fixed md:sticky top-0 h-screen w-64 bg-white border-r-4 border-black transition-transform z-40",
        !isSidebarOpen && "-translate-x-full md:translate-x-0"
      )}>
        <div className="p-6 border-b-4 border-black flex items-center gap-2">
          <div className="w-10 h-10 bg-neo-yellow border-2 border-black rounded-lg flex items-center justify-center font-black shadow-[2px_2px_0px_0px_#000]">
            DM
          </div>
          <span className="font-black uppercase tracking-tight">Admin Panel</span>
        </div>

        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-180px)]">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 border-2 border-transparent font-bold transition-all rounded-xl",
                pathname === item.href 
                  ? "bg-neo-yellow border-black shadow-[4px_4px_0px_0px_#000]" 
                  : "hover:bg-gray-50 hover:border-black/10"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t-4 border-black">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 font-bold text-red-600 hover:bg-red-50 rounded-xl transition-all">
            <LogOut className="w-5 h-5" />
            Quitter l'admin
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tight">
              {menuItems.find(i => i.href === pathname)?.label || "Administration"}
            </h1>
            <p className="text-gray-600 font-bold italic">Bienvenue dans la tour de contrôle, Chef !</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-neo-mint border-2 border-black px-4 py-2 rounded-lg font-bold shadow-[3px_3px_0px_0px_#000]">
              Mode: Super Admin
            </div>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
