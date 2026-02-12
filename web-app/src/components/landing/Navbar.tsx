"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="w-full border-b-2 border-black bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-neo-yellow">
            <Zap className="w-4 h-4" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-semibold tracking-tight">RetroUI</span>
          <span className="bg-black text-white text-xs px-1.5 py-0.5 rounded ml-1 font-medium">Pro</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          {["Blocks", "Templates", "Figma", "Pricing"].map((item) => (
            <Link key={item} href="#" className="hover:underline decoration-2 underline-offset-4">
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-lg font-medium border-2 border-black px-4 py-1.5 rounded-lg neo-shadow hover:neo-shadow-hover transition-all bg-white">
            Sign in
          </button>
          <button className="text-lg font-medium bg-neo-yellow border-2 border-black px-5 py-1.5 rounded-lg neo-shadow hover:neo-shadow-hover transition-all">
            Access Now
          </button>
        </div>
      </div>
    </nav>
  );
}
