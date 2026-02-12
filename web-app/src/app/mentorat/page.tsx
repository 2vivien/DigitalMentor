"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Brain, Palette, Code2, TrendingUp, ArrowRight, Database } from "lucide-react";

const categories = [
    { id: "all", name: "Toutes les Formations", icon: Database, count: 97 },
    { id: "ia", name: "IA & Automatisation", icon: Brain, count: 12 },
    { id: "design", name: "Design & Création", icon: Palette, count: 22 },
    { id: "code", name: "Programmation", icon: Code2, count: 45 },
    { id: "business", name: "Business & Marketing", icon: TrendingUp, count: 18 },
];

const formations = [
    {
        id: 1,
        categoryId: "ia",
        title: "Maîtrise de l'IA Générative",
        mentor: "Ronald Richards",
        description: "Apprenez à construire des agents IA autonomes et à automatiser vos processus métier.",
        tags: ["No-code", "Python", "GPT-4"],
        rating: "5.0",
        students: "1,200",
        seed: "George",
        color: "bg-pink-100"
    },
    {
        id: 2,
        categoryId: "code",
        title: "Fullstack Next.js Masterclass",
        mentor: "Theresa Webb",
        description: "Devenez un expert du web moderne en bâtissant des applications scalables de A à Z.",
        tags: ["React", "Next.js", "Node.js"],
        rating: "4.9",
        students: "850",
        seed: "Avery",
        color: "bg-orange-100"
    },
    {
        id: 3,
        categoryId: "design",
        title: "Design System & UI Expert",
        mentor: "Leslie Alexander",
        description: "Créez des interfaces professionnelles et des systèmes de design cohérents sur Figma.",
        tags: ["Figma", "UX/UI", "Design System"],
        rating: "4.8",
        students: "920",
        seed: "Zoey",
        color: "bg-green-100"
    },
    {
        id: 4,
        categoryId: "business",
        title: "Growth & Acquisition Digitale",
        mentor: "Darrell Steward",
        description: "Les stratégies avancées pour scaler n'importe quel business en ligne.",
        tags: ["SEO", "Ads", "Content"],
        rating: "5.0",
        students: "1,500",
        seed: "Leo",
        color: "bg-purple-100"
    }
];

export default function MentoratPage() {
    const [selectedCat, setSelectedCat] = useState("all");

    const filteredFormations = selectedCat === "all"
        ? formations
        : formations.filter(f => f.categoryId === selectedCat);

    return (
        <main className="min-h-screen selection:bg-neo-yellow selection:text-black bg-[#f0f0f0]">
            <Navbar />

            {/* Blue Hero Section */}
            <div className="bg-[#2563eb] pt-20 pb-40 px-4 border-b-2 border-black relative overflow-hidden">
                {/* Decorative Elements - Simplified Database Stacks */}
                <div className="absolute top-[25%] left-0 -translate-y-1/2 translate-x-12 hidden xl:block pointer-events-none z-0">
                    <div className="flex flex-col -space-y-4">
                        <div className="w-24 h-12 bg-black border-2 border-white rounded-[100%] shadow-[0_4px_0_0_#fff]"></div>
                        <div className="w-24 h-12 bg-black border-2 border-white rounded-[100%] shadow-[0_4px_0_0_#fff]"></div>
                        <div className="w-24 h-12 bg-black border-2 border-white rounded-[100%] shadow-[8px_8px_0_0_#FFDE00]"></div>
                    </div>
                </div>

                <div className="absolute top-[25%] right-0 -translate-y-1/2 -translate-x-12 hidden xl:block pointer-events-none z-0">
                    <div className="flex flex-col -space-y-4 rotate-12">
                        <div className="w-20 h-10 bg-black border-2 border-white rounded-[100%] shadow-[0_4px_0_0_#fff]"></div>
                        <div className="w-20 h-10 bg-black border-2 border-white rounded-[100%] shadow-[0_4px_0_0_#fff]"></div>
                        <div className="w-20 h-10 bg-black border-2 border-white rounded-[100%] shadow-[8px_8px_0_0_#D48FFF]"></div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-8 relative z-20">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="flex justify-center"
                    >
                        <div className="bg-[#FFDE00] px-4 py-1.5 border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-black text-xs font-black uppercase italic tracking-wider flex items-center gap-2 -rotate-2 hover:rotate-0 transition-transform cursor-default">
                            <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                            Formations Mentorat 100% Vérifiées
                        </div>
                    </motion.div>

                    <h1
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight uppercase"
                        style={{ textShadow: '4px 4px 0px #000, 8px 8px 0px rgba(255,255,255,0.2)' }}
                    >
                        Un Répertoire Curaté <br /> des Meilleures Formations
                    </h1>

                    <p className="text-blue-100 text-xl md:text-2xl font-bold max-w-3xl mx-auto opacity-90 leading-relaxed">
                        La source de confiance pour trouver les programmes qui <br className="hidden sm:block" />
                        <span className="relative inline-block mt-2">
                            <span className="relative z-10 text-black px-3 py-1">propulseront votre carrière digitale.</span>
                            <span className="absolute inset-0 bg-neo-yellow border-2 border-black -rotate-1 z-0 shadow-[4px_4px_0px_0px_#000]"></span>
                        </span>
                    </p>

                    {/* Search Bar container */}
                    <div className="relative max-w-2xl mx-auto mt-12">
                        <div className="bg-white border-4 border-black rounded-full overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex items-center relative z-20">
                            <div className="pl-6 pointer-events-none">
                                <Search className="h-6 w-6 text-black" strokeWidth={3} />
                            </div>
                            <input
                                type="text"
                                className="block w-full py-6 pl-4 pr-12 text-xl font-black placeholder:text-gray-400 focus:outline-none text-black bg-transparent"
                                placeholder="Rechercher une formation..."
                            />
                            <div className="pr-2 flex items-center">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-[#2563eb] border-2 border-black rounded-full p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-none transition-all"
                                >
                                    <ArrowRight className="h-5 w-5 text-white" strokeWidth={3} />
                                </motion.button>
                            </div>
                        </div>

                        {/* Category Pills (Filters) - Spaced out and animated */}
                        <div className="flex flex-wrap justify-center gap-3 mt-8 relative z-30 pt-4 px-4">
                            {categories.map((cat) => (
                                <motion.button
                                    key={cat.id}
                                    whileHover={{ scale: 1.05, translateY: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedCat(cat.id)}
                                    className={cn(
                                        "border-2 border-black rounded-full px-5 py-2.5 flex items-center gap-2 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black font-bold text-xs uppercase tracking-tight",
                                        selectedCat === cat.id ? "bg-neo-yellow translate-y-[2px] shadow-none" : "bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                    )}
                                >
                                    <cat.icon className="w-4 h-4" />
                                    <span>{cat.name} ({cat.count})</span>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-24 relative z-20">
                {/* Formations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
                    <AnimatePresence mode="popLayout">
                        {filteredFormations.map((formation) => (
                            <motion.div
                                layout
                                key={formation.id}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white border-2 border-black rounded-3xl p-8 flex flex-col h-full hover:translate-y-[-4px] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                            >
                                <div className="flex gap-6 mb-6">
                                    <div className={`w-20 h-20 shrink-0 ${formation.color} border-2 border-black rounded-2xl flex items-center justify-center overflow-hidden`}>
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${formation.seed}`}
                                            alt={formation.mentor}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black mb-1 leading-tight">{formation.title}</h3>
                                        <p className="text-gray-600 font-bold text-sm uppercase leading-tight">
                                            Mentor: {formation.mentor}
                                        </p>
                                        <div className="flex gap-2 mt-2">
                                            {formation.tags.map((tag, j) => (
                                                <span key={j} className="text-[10px] bg-gray-100 border border-black px-2 py-0.5 rounded-full font-bold">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 font-medium text-sm mb-8 line-clamp-2">
                                    {formation.description}
                                </p>

                                <div className="mt-auto flex items-center justify-between pt-6 border-t-2 border-dashed border-gray-200">
                                    <motion.button 
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-2 font-black text-sm uppercase hover:underline"
                                    >
                                        Détails <ExternalLink className="w-4 h-4" />
                                    </motion.button>
                                    <motion.button 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-[#2563eb] text-white border-2 border-black rounded-xl px-6 py-2.5 font-black text-sm uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                                    >
                                        S'inscrire
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <Footer />
        </main>
    );
}
