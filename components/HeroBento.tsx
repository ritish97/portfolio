"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Linkedin,
  Github,
  Copy,
  FileText,
  Sparkles,
  GraduationCap,
  Briefcase,
} from "lucide-react";

interface HeroBentoProps {
  isDark: boolean;
  onCopyEmail: () => void;
  openResume: () => void;
}

export default function HeroBento({
  isDark,
  onCopyEmail,
  openResume,
}: HeroBentoProps) {
  return (
    <section id="hero" className="w-full">
      <div
        className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-xl border ${
          isDark
            ? "bg-obsidian-card border-obsidian-border text-zinc-100 shadow-black/40"
            : "bg-white border-zinc-200/90 text-zinc-900 shadow-zinc-200/40"
        }`}
      >
        {/* Ambient Subtle Accent Glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10">
          {/* Left: Professional Headshot */}
          <div className="relative flex-shrink-0 group">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl overflow-hidden ring-2 ring-accent/30 shadow-2xl transition-all duration-300 group-hover:ring-accent group-hover:scale-[1.02]">
              <img
                src="/avatar.jpg"
                alt="Ritish Kumar Yadav"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Online Indicator Dot */}
            <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>Active</span>
            </div>
          </div>

          {/* Right: Info & Elevator Pitch */}
          <div className="flex-1 text-center lg:text-left space-y-4">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Full-Time & Internship Roles</span>
            </div>

            {/* Name & Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Ritish Kumar Yadav
              </h1>
              <p className="text-lg sm:text-xl font-medium text-accent mt-1 tracking-tight flex items-center justify-center lg:justify-start gap-2">
                <span>Data Analyst & Agentic AI Engineer</span>
                <Sparkles className="w-4 h-4 text-accent/80" />
              </p>
            </div>

            {/* Elevator Pitch / Bio */}
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
              Skilled in SQL, Python, Power BI, and modern LLM frameworks. I engineer end-to-end analytical pipelines, RAG-based AI applications, and dynamic executive BI dashboards that transform complex datasets into high-conviction business decisions.
            </p>

            {/* Location & Academic Meta Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs">
              <div
                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border ${
                  isDark
                    ? "bg-zinc-900/60 border-zinc-800 text-zinc-300"
                    : "bg-zinc-100 border-zinc-200 text-zinc-700"
                }`}
              >
                <GraduationCap className="w-4 h-4 text-accent flex-shrink-0" />
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-semibold text-xs text-zinc-200 dark:text-zinc-200">
                    BTech Cyber Security and Digital Forensics
                  </span>
                  <span className="text-[11px] text-zinc-400">
                    Vellore Institute of Technology
                  </span>
                </div>
              </div>

              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${
                  isDark
                    ? "bg-zinc-900/60 border-zinc-800 text-zinc-300"
                    : "bg-zinc-100 border-zinc-200 text-zinc-700"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 text-accent" />
                <span>Ex-Business Analyst @ Finlatics</span>
              </div>

              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${
                  isDark
                    ? "bg-zinc-900/60 border-zinc-800 text-zinc-300"
                    : "bg-zinc-100 border-zinc-200 text-zinc-700"
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>Kanpur, Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              {/* Copy Email Button */}
              <button
                onClick={onCopyEmail}
                className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-accent text-white font-semibold text-xs sm:text-sm hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-md shadow-accent/25"
              >
                <Mail className="w-4 h-4" />
                <span>Copy Email</span>
                <Copy className="w-3.5 h-3.5 opacity-80" />
              </button>

              {/* View Resume Button */}
              <button
                onClick={openResume}
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 border ${
                  isDark
                    ? "bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border-zinc-700"
                    : "bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border-zinc-300"
                }`}
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>View Resume</span>
              </button>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/ritish-yadav24"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl transition-all hover:scale-105 border ${
                  isDark
                    ? "bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border-zinc-800 hover:text-white"
                    : "bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border-zinc-200"
                }`}
              >
                <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V9.87H5.06v8.63h2.8z" />
                </svg>
                <span className="text-xs font-semibold">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ritish97"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl transition-all hover:scale-105 border ${
                  isDark
                    ? "bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border-zinc-800 hover:text-white"
                    : "bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border-zinc-200"
                }`}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span className="text-xs font-semibold">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
