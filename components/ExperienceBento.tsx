"use client";

import React from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, Building2 } from "lucide-react";

interface ExperienceBentoProps {
  isDark: boolean;
}

export default function ExperienceBento({ isDark }: ExperienceBentoProps) {
  return (
    <section id="experience" className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
          Experience & Education
        </h2>
        <span className="text-xs font-mono text-zinc-400">Career Trajectory</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Work Experience */}
        <div
          className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 shadow-xl ${
            isDark
              ? "bg-obsidian-card border-obsidian-border text-zinc-100 shadow-black/40"
              : "bg-white border-zinc-200/90 text-zinc-900 shadow-zinc-200/40"
          }`}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Work Experience</h3>
              <p className="text-xs text-zinc-400">Industry & Analytics Practice</p>
            </div>
          </div>

          <div className="space-y-4">
            <div
              className={`p-5 rounded-2xl border transition-all ${
                isDark
                  ? "bg-zinc-900/60 border-zinc-800"
                  : "bg-zinc-50 border-zinc-200"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div>
                  <h4 className="font-bold text-base text-accent">
                    Business Analyst (Part-time)
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Finlatics (Remote)</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Aug 2025 – Oct 2025</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pt-2">
                Analyzed manufacturing and consumer datasets across cross-functional projects. Applied predictive maintenance algorithms and consumer behavioral analysis techniques to drive actionable decision support.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3">
                {["Predictive Maintenance", "Behavioral Analysis", "Data Modeling", "Business Intelligence"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium ${
                        isDark ? "bg-zinc-800 text-zinc-300" : "bg-zinc-200 text-zinc-700"
                      }`}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Education Details */}
        <div
          className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 shadow-xl ${
            isDark
              ? "bg-obsidian-card border-obsidian-border text-zinc-100 shadow-black/40"
              : "bg-white border-zinc-200/90 text-zinc-900 shadow-zinc-200/40"
          }`}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Education Background</h3>
              <p className="text-xs text-zinc-400">Formal Engineering & Foundations</p>
            </div>
          </div>

          <div className="space-y-3">
            {/* Degree */}
            <div
              className={`p-4 rounded-2xl border ${
                isDark
                  ? "bg-zinc-900/60 border-zinc-800"
                  : "bg-zinc-50 border-zinc-200"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                    Vellore Institute of Technology (VIT)
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    B.Tech in Cyber Security and Digital Forensics
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-accent/15 text-accent border border-accent/20">
                  8.26 CGPA
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-mono mt-2">
                Sep 2023 – July 2027 • Full-time
              </p>
            </div>

            {/* Schooling */}
            <div
              className={`p-4 rounded-2xl border ${
                isDark
                  ? "bg-zinc-900/40 border-zinc-800/80"
                  : "bg-zinc-50/80 border-zinc-200/80"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="font-semibold text-xs text-zinc-900 dark:text-zinc-200">
                    Kendriya Vidyalaya No. 1 J.R.C (CBSE)
                  </h5>
                  <p className="text-[11px] text-zinc-500">
                    Class 12th: <span className="font-semibold text-zinc-700 dark:text-zinc-300">79.2%</span> | Class 10th: <span className="font-semibold text-zinc-700 dark:text-zinc-300">96.4%</span>
                  </p>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">2021 – 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
