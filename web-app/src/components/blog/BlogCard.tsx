"use client";

import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  color: string;
}

export function BlogCard({ title, excerpt, category, date, author, image, color }: BlogCardProps) {
  return (
    <div 
      className="group border-2 border-black rounded-xl overflow-hidden bg-white hover:translate-y-[-4px] transition-transform duration-300"
      style={{ boxShadow: '6px 6px 0px 0px #000000' }}
    >
      <div className={cn("h-48 border-b-2 border-black relative overflow-hidden", color)}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white border-2 border-black px-3 py-1 rounded-full text-xs font-bold uppercase">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm font-medium text-gray-600 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {author}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold mb-3 line-clamp-2 leading-tight group-hover:underline decoration-2">
          {title}
        </h3>
        
        <p className="text-gray-700 font-medium line-clamp-3 mb-6">
          {excerpt}
        </p>
        
        <Link 
          href="#" 
          className="inline-flex items-center gap-2 font-bold text-lg bg-neo-yellow border-2 border-black px-4 py-2 rounded-lg neo-shadow-sm hover:translate-x-1 transition-transform"
        >
          Lire l'article
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
