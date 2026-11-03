"use client";

import React from "react";
import { Award, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

interface CertificationsBentoProps {
  isDark: boolean;
  openAllCerts: () => void;
}

export default function CertificationsBento({
  isDark,
  openAllCerts,
}: CertificationsBentoProps) {
  const topCerts = [
    {
      title: "Google IT Support Professional Certificate",
      issuer: "Google / Coursera",
      badge: "Industry Standard",
      color: "border-blue-500/30 text-blue-500",
    },
    {
      title: "Blockchain and its Applications",
      issuer: "Indian Institute of Technology (IIT), Kharagpur",
      badge: "Premier Academic",
      color: "border-purple-500/30 text-purple-500",
    },
    {
      title: "SQL (Basic) Certified",
      issuer: "HackerRank",
      badge: "Database Mastery",
      color: "border-emerald-500/30 text-emerald-500",
    },
    {
      title: "Cyber Security Analyst",
      issuer: "Domain Specialization",
      badge: "VIT Specialization",
      color: "border-amber-500/30 text-amber-500",
    },
  ];

  return (
    <section id="certifications" className="w-full space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            Flagship Certifications & Credentials
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Validated proficiency across IT infrastructure, data queries, security, and algorithms
          </p>
        </div>

        {/* View All Button */}
        <button
          onClick={openAllCerts}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 transition-all hover:scale-105 active:scale-95 self-start sm:self-auto"
        >
          <span>View All 9 Certifications</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {topCerts.map((cert, idx) => (
          <div
            key={idx}
            className={`group relative flex flex-col justify-between rounded-3xl p-5 border transition-all duration-300 hover:-translate-y-1 shadow-lg ${
              isDark
                ? "bg-obsidian-card border-obsidian-border text-zinc-100 hover:border-accent/40"
                : "bg-white border-zinc-200/90 text-zinc-900 hover:border-accent/40 shadow-zinc-200/40"
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-zinc-800/40 dark:bg-zinc-800 text-zinc-400">
                  {cert.badge}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-sm leading-snug group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Issued by <span className="font-medium text-zinc-700 dark:text-zinc-300">{cert.issuer}</span>
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-1.5 text-xs text-emerald-500 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Credential</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
