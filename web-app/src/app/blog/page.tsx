"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const posts = [
  {
    title: "Comment l'IA transforme le mentorat en 2026",
    excerpt: "Découvrez comment les nouveaux outils d'intelligence artificielle permettent un accompagnement plus personnalisé et efficace que jamais.",
    category: "IA & Futur",
    date: "12 Fév 2026",
    author: "Fatou Diop",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    color: "bg-neo-pink"
  },
  {
    title: "5 outils No-Code indispensables pour lancer votre SaaS",
    excerpt: "Pas besoin de savoir coder pour créer une application rentable. Voici notre sélection des meilleurs outils pour démarrer aujourd'hui.",
    category: "No-Code",
    date: "10 Fév 2026",
    author: "Koffi Mensah",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    color: "bg-neo-teal"
  },
  {
    title: "L'art du personal branding pour les tech-entrepreneurs",
    excerpt: "Pourquoi votre image de marque est aussi importante que votre produit, et comment la construire brique par brique.",
    category: "Marketing",
    date: "08 Fév 2026",
    author: "Amina Sow",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
    color: "bg-neo-coral"
  },
  {
    title: "Automatiser son workflow avec Python et ChatGPT",
    excerpt: "Gagnez 10 heures par semaine en automatisant vos tâches répétitives grâce à ce guide pratique pas à pas.",
    category: "Productivité",
    date: "05 Fév 2026",
    author: "Fatou Diop",
    image: "https://images.unsplash.com/photo-1518433278981-2a2df7df45b1?q=80&w=800&auto=format&fit=crop",
    color: "bg-neo-yellow"
  },
  {
    title: "L'économie des créateurs en Afrique : Opportunités 2026",
    excerpt: "Le continent africain est en plein essor digital. Analyse des secteurs les plus porteurs pour les créateurs de contenu.",
    category: "Economie",
    date: "02 Fév 2026",
    author: "Koffi Mensah",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop",
    color: "bg-neo-pink"
  },
  {
    title: "Sécurité des données à l'ère de l'IA générative",
    excerpt: "Comment protéger vos informations et celles de vos clients tout en utilisant les outils d'IA les plus performants.",
    category: "Sécurité",
    date: "30 Jan 2026",
    author: "Amina Sow",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    color: "bg-neo-teal"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen selection:bg-neo-yellow selection:text-black">
      <Navbar />
      
      {/* Hero Blog */}
      <section className="pt-20 pb-16 border-b-2 border-black bg-neo-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block border-2 border-black bg-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-6 neo-shadow-sm"
          >
            Le Journal Digital
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            NOS DERNIÈRES <br /> <span className="italic">PÉPITES</span> TECH.
          </h1>
          
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Rechercher un article..." 
              className="w-full border-2 border-black rounded-xl px-6 py-4 text-xl font-medium focus:outline-none neo-shadow bg-white"
            />
            <button className="absolute right-3 top-3 bg-black text-white p-2 rounded-lg">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Grid Articles */}
      <section className="py-20 bg-[#FFFDF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button className="text-2xl font-bold bg-white border-2 border-black px-10 py-4 rounded-xl neo-shadow hover:neo-shadow-hover transition-all uppercase">
              Charger plus d'articles
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
