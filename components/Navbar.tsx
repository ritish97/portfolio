"use client";

import React from "react";
import { Moon, Sun, FileText, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  openResume: () => void;
}

export default function Navbar({ isDark, setIsDark, openResume }: NavbarProps) {
  return (
    <header className="sticky top-4 z-40 mx-auto max-w-6xl px-4 sm:px-6">
      <nav
        className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 shadow-lg ${
          isDark
            ? "bg-obsidian-card/80 border border-obsidian-border/80 backdrop-blur-xl text-zinc-200 shadow-black/40"
            : "bg-white/85 border border-zinc-200/90 backdrop-blur-xl text-zinc-800 shadow-zinc-200/50"
        }`}
      >
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white font-bold text-sm tracking-wider shadow-md group-hover:scale-105 transition-transform">
            RY
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight leading-none group-hover:text-accent transition-colors">
              Ritish Kumar Yadav
            </span>
            <span className="text-[11px] text-zinc-400 dark:text-zinc-500 font-mono">
              Data & Agentic AI
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a
            href="#projects"
            className="hover:text-accent transition-colors text-zinc-600 dark:text-zinc-400 hover:dark:text-white"
          >
            Projects
          </a>
          <a
            href="#metrics"
            className="hover:text-accent transition-colors text-zinc-600 dark:text-zinc-400 hover:dark:text-white"
          >
            Impact
          </a>
          <a
            href="#skills"
            className="hover:text-accent transition-colors text-zinc-600 dark:text-zinc-400 hover:dark:text-white"
          >
            Skills
          </a>
          <a
            href="#certifications"
            className="hover:text-accent transition-colors text-zinc-600 dark:text-zinc-400 hover:dark:text-white"
          >
            Certificates
          </a>
          <a
            href="#experience"
            className="hover:text-accent transition-colors text-zinc-600 dark:text-zinc-400 hover:dark:text-white"
          >
            Experience
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* GitHub & LinkedIn Social Icons */}
          <div className="flex items-center gap-1">
            <a
              href="https://github.com/ritish97"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className={`p-2 rounded-full transition-all hover:scale-110 active:scale-95 ${
                isDark
                  ? "bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white"
                  : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
              }`}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/ritish-yadav24"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className={`p-2 rounded-full transition-all hover:scale-110 active:scale-95 ${
                isDark
                  ? "bg-zinc-800/80 hover:bg-zinc-700 text-[#0A66C2]"
                  : "bg-zinc-100 hover:bg-zinc-200 text-[#0A66C2]"
              }`}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V9.87H5.06v8.63h2.8z" />
              </svg>
            </a>
          </div>

          {/* Resume Quick-Viewer Button */}
          <button
            onClick={openResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 transition-all hover:scale-105 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
            className={`p-2 rounded-full transition-all hover:scale-110 active:scale-90 ${
              isDark
                ? "bg-zinc-800/80 hover:bg-zinc-700 text-yellow-400"
                : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
