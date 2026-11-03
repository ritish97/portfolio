"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl bg-zinc-900/95 dark:bg-zinc-800/95 border border-zinc-700/80 px-4 py-3 text-white shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-5 duration-300">
      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
      <span className="text-xs sm:text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-zinc-400 hover:text-white text-xs font-mono"
      >
        ✕
      </button>
    </div>
  );
}
