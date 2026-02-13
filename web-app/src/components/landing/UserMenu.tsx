"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useUser, useClerk } from "@clerk/nextjs";
import {
    LogOut,
    User as UserIcon,
    Settings,
    Target,
    ChevronRight,
    ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

export function UserMenu() {
    const { user: clerkUser } = useUser();
    const { signOut } = useClerk();
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Mock user for design preview (as requested to see it without login)
    const mockUser = {
        fullName: "Jon Snow",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
        primaryEmailAddress: { emailAddress: "jon@wall.com" },
        firstName: "Jon",
        username: "jon_snow"
    };

    const user = clerkUser || mockUser;

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!mounted || !user) return null;

    return (
        <div className="relative" ref={menuRef}>
            {/* 1st Design: Neo-Brutalist Profile Pill - MATCH HEADER/HERO BG */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.02, x: 2, y: 2 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "flex items-center gap-3 bg-[#FFFDF5] border-[3px] border-black p-1.5 pr-4 rounded-full transition-all",
                    "shadow-[4px_4px_0px_0px_#FFDE00] hover:shadow-none"
                )}
            >
                {/* Avatar Area */}
                <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-white flex-shrink-0">
                    <img
                        src={user.imageUrl || ""}
                        alt={user.fullName || "User"}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text Info (Jon Snow style) */}
                <div className="flex flex-col items-start leading-tight">
                    <span className="text-black font-black text-sm tracking-tight truncate max-w-[100px]">
                        {user.fullName || user.username || "Utilisateur"}
                    </span>
                    <span className="text-black/60 text-[10px] uppercase font-black tracking-widest leading-none">
                        Membre Digital
                    </span>
                </div>

                {/* Target Icon on Right (Original) */}
                <div className="ml-2 w-7 h-7 rounded-full bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_#000]">
                    <Target className="w-4 h-4 text-black stroke-[3px]" />
                </div>
            </motion.button>

            {/* Popup / Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="absolute right-0 mt-4 w-72 bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#FFDE00] overflow-hidden z-[100]"
                    >
                        {/* Header / Profile Summary */}
                        <div className="bg-neo-yellow/10 p-4 border-b-4 border-black">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-white">
                                    <img src={user.imageUrl || ""} alt="Profile" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-black text-black leading-none">{user.fullName}</span>
                                    <span className="text-xs font-bold text-gray-500 truncate w-40">{user.primaryEmailAddress?.emailAddress}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 bg-neo-green/20 border-2 border-black px-2 py-0.5 rounded-lg w-fit">
                                <ShieldCheck className="w-3 h-3 text-neo-green font-bold" />
                                <span className="text-[10px] font-black uppercase text-neo-green-dark">Compte Vérifié</span>
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div className="p-2 space-y-1">
                            {[
                                { icon: UserIcon, label: "Mon Profil", href: "/profile", color: "bg-neo-blue/20" },
                                { icon: Target, label: "Mes Mentors", href: "/mentors", color: "bg-neo-pink/20" },
                                { icon: Settings, label: "Paramètres", href: "/settings", color: "bg-neo-teal/20" },
                            ].map((item) => (
                                <button
                                    key={item.label}
                                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 border-2 border-transparent hover:border-black transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={cn("p-2 rounded-lg border-2 border-black", item.color)}>
                                            <item.icon className="w-4 h-4 text-black" />
                                        </div>
                                        <span className="font-bold text-black">{item.label}</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            ))}
                        </div>

                        {/* Footer / Logout */}
                        <div className="p-2 border-t-4 border-black bg-gray-50">
                            <button
                                onClick={() => signOut()}
                                className="w-full flex items-center gap-3 p-3 rounded-xl bg-neo-coral/10 hover:bg-neo-coral text-neo-coral hover:text-white border-2 border-neo-coral hover:border-black font-black transition-all group"
                            >
                                <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                <span className="uppercase tracking-tight">Déconnexion</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
