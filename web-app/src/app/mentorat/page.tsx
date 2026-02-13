"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import Image from "next/image";
import { Collaboration } from "@/components/landing/Collaboration";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Brain, Palette, Code2, TrendingUp, ArrowRight, Database, X, Zap, ShieldCheck, Star, CheckCircle2 } from "lucide-react";

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
        title: "Maîtrise de l&apos;IA Générative",
        mentor: "Ronald Richards",
        description: "Apprenez à construire des agents IA autonomes et à automatiser vos processus métier.",
        tags: ["No-code", "Python", "GPT-4"],
        rating: "5.0",
        students: "1,200",
        seed: "George",
        color: "bg-pink-100",
        longDescription: "Ce programme complet vous plonge au cœur de l'intelligence artificielle générative. De la compréhension des LLMs à la création d'agents autonomes, vous maîtriserez les outils qui redéfinissent le travail moderne.",
        features: ["Création d'agents IA", "Automatisation No-code", "Prompt Engineering avancé", "Intégration API OpenAI"]
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
        color: "bg-orange-100",
        longDescription: "Maîtrisez le framework React le plus populaire au monde. Apprenez à construire des applications ultra-rapides, SEO-friendly et scalables en utilisant les dernières fonctionnalités de Next.js.",
        features: ["App Router & Server Components", "Authentication avec Clerk", "Database Prisma/PostgreSQL", "Déploiement Vercel"]
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
        color: "bg-green-100",
        longDescription: "Le design ne se limite pas à l'esthétique. Apprenez à concevoir des systèmes de design robustes qui facilitent la collaboration et garantissent une cohérence parfaite sur tous vos produits digitaux.",
        features: ["Audit UI/UX", "Composants Variants Figma", "Documentation Design System", "Accessibilité Web (WCAG)"]
    },
    {
        id: 4,
        categoryId: "business",
        title: "Growth & Acquisition Digitale",
        mentor: "Darrell Steward",
        description: "Les stratégies avancées pour scaler n&apos;importe quel business en ligne.",
        tags: ["SEO", "Ads", "Content"],
        rating: "5.0",
        students: "1,500",
        seed: "Leo",
        color: "bg-purple-100",
        longDescription: "Découvrez les secrets de la croissance exponentielle. De l'optimisation SEO aux campagnes publicitaires ultra-ciblées, apprenez à attirer et convertir des clients de manière prédictible.",
        features: ["Stratégie Content Marketing", "Optimisation SEO Technique", "Facebook & Google Ads", "Analyse de données Growth"]
    }
];

interface Formation {
    id: number;
    categoryId: string;
    title: string;
    mentor: string;
    description: string;
    tags: string[];
    rating: string;
    students: string;
    seed: string;
    color: string;
    longDescription: string;
    features: string[];
}

export default function MentoratPage() {
    const [selectedCat, setSelectedCat] = useState("all");
    const [selectedFormation, setSelectedFormation] = useState<Formation | null>(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const openDetails = (formation: Formation) => {
        setSelectedFormation(formation);
        setIsDetailsOpen(true);
    };

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
                                        <Image
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${formation.seed}`}
                                            alt={formation.mentor}
                                            width={80}
                                            height={80}
                                            unoptimized
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
                                        className="bg-[#2563eb] text-white border-2 border-black rounded-xl px-6 py-2.5 font-black text-sm uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-none transition-all"
                                    >
                                        S&apos;inscrire
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <Collaboration />

            {/* Modal Détails Formation */}
            <AnimatePresence>
                {isDetailsOpen && selectedFormation && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsDetailsOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            className="bg-[#FFFDF5] border-4 border-black w-full max-w-3xl rounded-[40px] shadow-[20px_20px_0px_0px_#000] overflow-hidden relative z-10"
                        >
                            <button
                                onClick={() => setIsDetailsOpen(false)}
                                className="absolute top-6 right-6 p-2 border-2 border-black rounded-full hover:bg-neo-coral transition-colors z-20 bg-white shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                            >
                                <X className="w-6 h-6 text-black" />
                            </button>

                            <div className="flex flex-col md:flex-row h-full">
                                <div className={cn("w-full md:w-2/5 p-8 flex flex-col items-center justify-center border-b-4 md:border-b-0 md:border-r-4 border-black", selectedFormation.color)}>
                                    <div className="w-48 h-48 rounded-3xl border-4 border-black bg-white overflow-hidden mb-6 shadow-[8px_8px_0px_0px_#000]">
                                        <Image
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedFormation.seed}`}
                                            alt={selectedFormation.mentor}
                                            width={192}
                                            height={192}
                                            unoptimized
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase text-center leading-tight mb-2">{selectedFormation.mentor}</h3>
                                    <div className="flex items-center gap-1 bg-white border-2 border-black px-3 py-1 rounded-full mb-4 shadow-[2px_2px_0px_0px_#000]">
                                        <Star className="w-4 h-4 fill-neo-yellow text-black" />
                                        <span className="font-black text-sm">{selectedFormation.rating}</span>
                                    </div>
                                    <p className="text-xs font-bold uppercase text-black/60">Mentor Expert</p>
                                </div>

                                <div className="w-full md:w-3/5 p-8 md:p-12 space-y-8 overflow-y-auto max-h-[70vh] no-scrollbar">
                                    <div>
                                        <h4 className="text-sm font-black uppercase text-gray-400 mb-2">Formation</h4>
                                        <p className="text-3xl font-black uppercase leading-tight text-black">{selectedFormation.title}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-black uppercase text-gray-400 mb-2">Programme</h4>
                                        <p className="text-lg font-bold text-gray-800 leading-relaxed italic">&quot;{selectedFormation.longDescription}&quot;</p>
                                    </div>

                                    <div className="bg-white border-2 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_#000]">
                                        <h4 className="flex items-center gap-2 text-sm font-black uppercase mb-4">
                                            <ShieldCheck className="w-5 h-5 text-[#2563eb]" />
                                            Compétences Clés
                                        </h4>
                                        <ul className="grid grid-cols-1 gap-2">
                                            {selectedFormation.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2 font-bold text-sm text-gray-700">
                                                    <div className="w-1.5 h-1.5 bg-[#2563eb] rounded-full"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setIsDetailsOpen(false)}
                                            className="flex-1 bg-[#2563eb] text-white py-4 rounded-2xl font-black uppercase text-lg shadow-[6px_6px_0px_0px_#000] flex items-center justify-center gap-2 hover:translate-y-[2px] hover:shadow-none transition-all"
                                        >
                                            S&apos;inscrire
                                            <Zap className="w-5 h-5 fill-neo-yellow text-neo-yellow" />
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
