"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="w-full border-b-2 border-black bg-[#FFFDF5] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 relative">
            <img
              src="/digitalmentor.png"
              alt="DigitalMentor Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className="text-xl font-bold tracking-tight text-black"
            style={{ textShadow: '2px 2px 0px #FFDE00' }}
          >
            DigitalMentor
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          {[
            { label: "Mentorat", href: "/mentorat" },
            { label: "Trouver un mentor", href: "/trouver-un-mentor" },
            { label: "Entreprise & Consulting IA", href: "/entreprises" },
            { label: "Blog", href: "/blog" }
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:underline decoration-2 underline-offset-4 text-black text-sm lg:text-lg"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/auth" className="hidden sm:block text-lg font-medium border-2 border-black px-4 py-1.5 rounded-lg neo-shadow hover:neo-shadow-hover transition-all bg-white">
            Sign in
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-lg font-medium bg-neo-yellow border-2 border-black px-5 py-1.5 rounded-lg neo-shadow hover:neo-shadow-hover transition-all"
          >
            Access Now
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
