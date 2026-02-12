"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import Image from "next/image";
import { Collaboration } from "@/components/landing/Collaboration";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserPlus, 
  Brain, 
  Palette, 
  Code2, 
  TrendingUp, 
  Zap, 
  X, 
  Send,
  Search,
  CheckCircle2,
  Sparkles,
  Star,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const expertises = [
  { id: "ia", label: "IA & Automatisation", icon: Brain, color: "bg-neo-yellow" },
  { id: "design", label: "Design & UX/UI", icon: Palette, color: "bg-neo-pink" },
  { id: "dev", label: "Développement Web", icon: Code2, color: "bg-neo-teal" },
  { id: "business", label: "Business & Marketing", icon: TrendingUp, color: "bg-neo-coral" },
];

const mentors = [
  {
    id: 1,
    name: "Ronald Richards",
    role: "IA & Automatisation",
    expertiseId: "ia",
    rating: "5.0",
    students: "1,200",
    seed: "George",
    description: "Expert en intégration d'IA générative et automatisation de processus métier complexes.",
    color: "bg-neo-yellow",
    details: "Expert certifié avec 10 ans d&apos;expérience dans l'automatisation industrielle et logicielle."
  },
  {
    id: 2,
    name: "Theresa Webb",
    role: "Développement Web",
    expertiseId: "dev",
    rating: "4.9",
    students: "850",
    seed: "Avery",
    description: "Développeuse Senior spécialisée dans les architectures React et Next.js scalables.",
    color: "bg-neo-teal",
    details: "Passionnée par le code propre et les performances web. A formé plus de 500 développeurs."
  },
  {
    id: 3,
    name: "Leslie Alexander",
    role: "Design UI/UX",
    expertiseId: "design",
    rating: "4.8",
    students: "920",
    seed: "Zoey",
    description: "Créatrice d&apos;expériences mémorables et de systèmes de design pour produits digitaux.",
    color: "bg-neo-pink",
    details: "Ancienne Lead Design dans une licorne tech. Spécialiste Figma et Design Ops."
  },
  {
    id: 4,
    name: "Darrell Steward",
    role: "Marketing Digital",
    expertiseId: "business",
    rating: "5.0",
    students: "1,500",
    seed: "Leo",
    description: "Stratège en growth marketing et acquisition de trafic à fort impact pour startups.",
    color: "bg-neo-coral",
    details: "Maître de l'acquisition payante et du SEO. ROI-driven mentor pour entrepreneurs."
  }
];

interface Mentor {
  id: number;
  name: string;
  role: string;
  expertiseId: string;
  rating: string;
  students: string;
  seed: string;
  description: string;
  color: string;
  details: string;
}

export default function TrouverMentorPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [formStep, setFormStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) setFormStep(1);
  };

  const openDetails = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setIsDetailsOpen(true);
  };

  const filteredMentors = useMemo(() => {
    return mentors.filter(mentor => {
      const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           mentor.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === "all" || mentor.expertiseId === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  return (
    <main className="min-h-screen selection:bg-neo-yellow selection:text-black bg-[#FFFDF5]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 border-b-2 border-black bg-neo-yellow/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: -2 }}
              className="inline-flex items-center gap-2 bg-neo-yellow border-2 border-black px-6 py-2 rounded-xl mb-8 shadow-[4px_4px_0px_0px_#000000]"
            >
              <UserPlus className="w-5 h-5 text-black fill-black" />
              <span className="text-sm font-black uppercase tracking-widest text-black">Répertoire Officiel</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-8 uppercase leading-[0.9] tracking-tighter">
              Trouve le mentor <br /> 
              <span className="bg-white border-2 border-black px-4 py-1 inline-block -rotate-1 shadow-[8px_8px_0px_0px_#000000]">
                qui te ressemble.
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl font-bold text-gray-800 max-w-3xl mx-auto mb-12">
              Ne laisse plus tes questions sans réponses. Accède à une expertise directe pour propulser tes projets.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleModal}
              className="bg-black text-white text-2xl font-black px-12 py-6 rounded-2xl shadow-[10px_10px_0px_0px_#FFDE00] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase flex items-center gap-4 mx-auto mb-12"
            >
              Demander un Mentorat
              <Zap className="w-8 h-8 fill-neo-yellow text-neo-yellow" />
            </motion.button>
          </div>
        </div>

        {/* Decorative background icons */}
        <div className="absolute top-20 left-10 opacity-10 rotate-12 hidden lg:block">
          <Brain className="w-40 h-40" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10 -rotate-12 hidden lg:block">
          <TrendingUp className="w-40 h-40" />
        </div>
      </section>

      {/* Meet our Mentors Section */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                Rencontrez nos mentors
              </h2>
              <p className="text-xl font-bold text-gray-500 italic uppercase mb-8">
                Les meilleurs experts à portée de clic.
              </p>
              
              {/* Unified Search Bar moved here */}
              <div className="relative max-w-xl mx-auto lg:mx-0">
                <div className="bg-white border-4 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center relative z-20">
                  <div className="pl-6 pointer-events-none">
                    <Search className="h-6 w-6 text-black" strokeWidth={3} />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full py-5 pl-4 pr-12 text-xl font-black placeholder:text-gray-400 focus:outline-none text-black bg-transparent"
                    placeholder="Rechercher par nom ou expertise..."
                  />
                </div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleModal}
              className="bg-neo-yellow text-black border-4 border-black px-10 py-6 rounded-2xl font-black text-2xl uppercase shadow-[10px_10px_0px_0px_#000] hover:shadow-none transition-all flex items-center gap-3"
            >
              <Zap className="w-8 h-8 fill-black" />
              Demander un mentorat
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredMentors.map((mentor) => (
                <motion.div
                  layout
                  key={mentor.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white border-4 border-black rounded-[32px] p-6 flex flex-col h-full hover:translate-y-[-8px] transition-all duration-300 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="relative mb-6 mx-auto w-full aspect-square">
                    <div className={cn("absolute inset-0 rounded-2xl border-2 border-black -rotate-3 transition-transform group-hover:rotate-0", mentor.color)}></div>
                    <Image
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${mentor.seed}`}
                      alt={mentor.name}
                      width={200}
                      height={200}
                      className="relative z-10 w-full h-full rounded-2xl border-2 border-black bg-white object-cover"
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-2xl font-black mb-1 leading-tight">{mentor.name}</h3>
                    <p className="text-gray-600 font-bold text-sm uppercase leading-tight mb-4">
                      {mentor.role}
                    </p>
                    <p className="text-gray-600 font-medium text-sm mb-6 line-clamp-2 italic">
                      &quot;{mentor.description}&quot;
                    </p>
                  </div>

                  <div className="mt-auto space-y-4">
                    <div className="flex items-center justify-between pt-4 border-t-2 border-dashed border-gray-200">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-neo-yellow text-black" />
                        <span className="font-bold text-sm">{mentor.rating}</span>
                      </div>
                      <div className="text-xs text-gray-400 font-bold uppercase">({mentor.students} mentorés)</div>
                    </div>
                    
                    <div className="flex gap-2">
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        onClick={() => openDetails(mentor)}
                        className="flex-1 border-2 border-black rounded-xl py-2 text-xs font-black uppercase hover:bg-gray-50 transition-colors"
                      >
                        Détails
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={toggleModal}
                        className="flex-1 bg-black text-white rounded-xl py-2 text-xs font-black uppercase shadow-[2px_2px_0px_0px_#FFDE00]"
                      >
                        Réserver
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination Neo-Brutaliste */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 border-2 border-black rounded-xl bg-white flex items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:shadow-none transition-all"
            >
              <ArrowRight className="w-6 h-6 rotate-180" strokeWidth={3} />
            </motion.button>
            <div className="flex gap-2">
              {[1, 2, 3].map((page) => (
                <motion.button
                  key={page}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    "w-12 h-12 border-2 border-black rounded-xl font-black shadow-[4px_4px_0px_0px_#000] hover:shadow-none transition-all",
                    page === 1 ? "bg-neo-yellow" : "bg-white"
                  )}
                >
                  {page}
                </motion.button>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 border-2 border-black rounded-xl bg-white flex items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:shadow-none transition-all"
            >
              <ArrowRight className="w-6 h-6" strokeWidth={3} />
            </motion.button>
          </div>
          
          {filteredMentors.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-black rounded-3xl bg-gray-50">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-2xl font-black uppercase">Aucun mentor trouvé</h3>
              <p className="font-bold text-gray-500 mt-2">Essaie une autre recherche ou réinitialise les filtres.</p>
              <button 
                onClick={() => { setSearchTerm(""); setActiveFilter("all"); }}
                className="mt-6 font-black underline uppercase hover:text-neo-yellow transition-colors"
              >
                Réinitialiser tout
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Grid Expertise (Filters) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black uppercase mb-16 text-center">Choisis ton domaine d&apos;excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertises.map((exp) => (
            <motion.div
              key={exp.id}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "border-4 border-black p-8 rounded-3xl shadow-[8px_8px_0px_0px_#000] group cursor-pointer transition-colors",
                activeFilter === exp.id ? exp.color : "bg-white"
              )}
              onClick={() => setActiveFilter(activeFilter === exp.id ? "all" : exp.id)}
            >
              <div className={cn(
                "w-16 h-16 border-2 border-black rounded-2xl flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_#000] transition-colors",
                activeFilter === exp.id ? "bg-white" : exp.color
              )}>
                <exp.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 leading-tight">{exp.label}</h3>
              <p className="font-medium text-gray-600 mb-6 italic">
                {activeFilter === exp.id ? "Filtre actif ! Cliquez pour tout voir." : "Clique pour filtrer les experts."}
              </p>
              <div className="flex items-center gap-2 font-black text-sm uppercase">
                {activeFilter === exp.id ? "Désactiver le filtre" : "Filtrer"} <Zap className={cn("w-4 h-4 fill-current", activeFilter === exp.id && "animate-pulse")} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal / Popup Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-white border-4 border-black w-full max-w-2xl rounded-[40px] shadow-[15px_15px_0px_0px_#000] overflow-y-auto max-h-[90vh] relative z-10 no-scrollbar"
            >
              <button 
                onClick={toggleModal}
                className="absolute top-6 right-6 p-2 border-2 border-black rounded-full hover:bg-neo-coral transition-colors z-20 bg-white shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 md:p-10">
                {formStep === 1 ? (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black uppercase mb-1">Demande de mentorat</h2>
                      <p className="text-base md:text-lg font-bold text-gray-500 italic">Précise tes besoins pour un matching parfait.</p>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setFormStep(2); }}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-black uppercase">Nom complet</label>
                          <input 
                            required
                            type="text" 
                            placeholder="John Doe"
                            className="w-full border-2 border-black rounded-xl p-3.5 font-bold focus:outline-none focus:ring-2 focus:ring-neo-yellow bg-gray-50 shadow-[3px_3px_0px_0px_#000]"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-black uppercase">Email</label>
                          <input 
                            required
                            type="email" 
                            placeholder="hello@exemple.com"
                            className="w-full border-2 border-black rounded-xl p-3.5 font-bold focus:outline-none focus:ring-2 focus:ring-neo-yellow bg-gray-50 shadow-[3px_3px_0px_0px_#000]"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase">Domaine souhaité</label>
                        <select className="w-full border-2 border-black rounded-xl p-3.5 font-bold focus:outline-none focus:ring-2 focus:ring-neo-yellow bg-gray-50 shadow-[3px_3px_0px_0px_#000] appearance-none cursor-pointer">
                          <option>IA & Automatisation</option>
                          <option>Design & UX/UI</option>
                          <option>Développement Web</option>
                          <option>Business & Marketing</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase">Décris ton objectif</label>
                        <textarea 
                          required
                          rows={3}
                          placeholder="Ex: Je souhaite automatiser mon acquisition client avec l&apos;IA..."
                          className="w-full border-2 border-black rounded-xl p-3.5 font-bold focus:outline-none focus:ring-2 focus:ring-neo-yellow bg-gray-50 shadow-[3px_3px_0px_0px_#000]"
                        ></textarea>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-neo-yellow text-black py-4 rounded-2xl border-2 border-black font-black text-lg uppercase shadow-[5px_5px_0px_0px_#000] hover:shadow-none transition-all flex items-center justify-center gap-2 mt-4"
                      >
                        Envoyer ma demande
                        <Send className="w-5 h-5" />
                      </motion.button>
                    </form>
                  </div>
                ) : (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="py-10 text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-neo-teal border-4 border-black rounded-full flex items-center justify-center mx-auto shadow-[6px_6px_0px_0px_#000]">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black uppercase mb-3">Demande Envoyée !</h2>
                      <p className="text-lg font-bold text-gray-600">
                        Top ! Un conseiller va revenir vers toi <br />
                        sous 24h à 48h. Prépare tes questions !
                      </p>
                    </div>
                    <button 
                      onClick={toggleModal}
                      className="bg-black text-white px-8 py-4 rounded-xl font-black uppercase shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                    >
                      Fermer la fenêtre
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal Details Mentor */}
      <AnimatePresence>
        {isDetailsOpen && selectedMentor && (
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
                className="absolute top-6 right-6 p-2 border-2 border-black rounded-full hover:bg-neo-coral transition-colors z-20 bg-white"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row h-full">
                                <div className={cn("w-full md:w-2/5 p-8 flex flex-col items-center justify-center border-b-4 md:border-b-0 md:border-r-4 border-black", selectedMentor.color)}>
                                  <div className="w-48 h-48 rounded-3xl border-4 border-black bg-white overflow-hidden mb-6 shadow-[8px_8px_0px_0px_#000]">
                                    <Image 
                                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedMentor.seed}`} 
                                      alt={selectedMentor.name}
                                      width={192}
                                      height={192}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>                  <h3 className="text-3xl font-black uppercase text-center leading-tight mb-2">{selectedMentor.name}</h3>
                  <div className="flex items-center gap-1 bg-white border-2 border-black px-3 py-1 rounded-full mb-4">
                    <Star className="w-4 h-4 fill-neo-yellow text-black" />
                    <span className="font-black text-sm">{selectedMentor.rating}</span>
                  </div>
                </div>

                <div className="w-full md:w-3/5 p-8 md:p-12 space-y-8 overflow-y-auto max-h-[70vh]">
                  <div>
                    <h4 className="text-sm font-black uppercase text-gray-400 mb-2">Expertise</h4>
                    <p className="text-2xl font-black uppercase leading-tight">{selectedMentor.role}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-black uppercase text-gray-400 mb-2">À propos</h4>
                    <p className="text-xl font-bold text-gray-800 leading-relaxed italic">&quot;{selectedMentor.description}&quot;</p>
                  </div>

                  <div className="bg-white border-2 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_#000]">
                    <h4 className="flex items-center gap-2 text-sm font-black uppercase mb-4">
                      <ShieldCheck className="w-5 h-5 text-neo-teal" />
                      Parcours & Expérience
                    </h4>
                    <p className="font-bold text-gray-700">{selectedMentor.details}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => { setIsDetailsOpen(false); setIsModalOpen(true); }}
                      className="flex-1 bg-black text-white py-4 rounded-2xl font-black uppercase text-lg shadow-[6px_6px_0px_0px_#FFDE00] flex items-center justify-center gap-2"
                    >
                      Prendre un RDV
                      <Zap className="w-5 h-5 fill-neo-yellow text-neo-yellow" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Collaboration />

      <Footer />
    </main>
  );
}
