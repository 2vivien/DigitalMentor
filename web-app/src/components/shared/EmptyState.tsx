"use client";

import { motion } from "framer-motion";
import { SearchX, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description: string;
  onAction?: () => void;
  actionLabel?: string;
  className?: string;
}

export function EmptyState({ 
  title, 
  description, 
  onAction, 
  actionLabel = "Réinitialiser",
  className 
}: EmptyStateProps) {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center p-8 text-center bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_#000]",
      className
    )}>
      <motion.div 
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-neo-pink p-5 border-4 border-black rounded-2xl mb-6 shadow-[4px_4px_0px_0px_#000]"
      >
        <SearchX className="w-12 h-12 text-black" />
      </motion.div>

      <h3 className="text-2xl font-black uppercase mb-2 tracking-tight">{title}</h3>
      <p className="text-gray-600 font-bold max-w-sm mb-8">
        {description}
      </p>

      {onAction && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onAction}
          className="flex items-center gap-2 bg-neo-teal border-2 border-black px-6 py-3 rounded-xl font-black uppercase text-sm shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          <RefreshCcw className="w-4 h-4" />
          {actionLabel}
        </motion.button>
      )}
    </div>
  );
}
